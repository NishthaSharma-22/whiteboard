"use client";
import { useState, useCallback } from "react";
import { CanvasState, CanvasMode, Camera, LayerType, Point } from "@/types/canvas";
import { Info } from "./info";
import { Members } from "./members";
import { Toolbar } from "./toolbar";
import {
  useHistory,
  useCanRedo,
  useCanUndo,
  useMutation,
  useStorage
} from "@liveblocks/react";
import { CursorPresence } from "./cursor-presence";
import { pointerEventToCanvasPoint } from "@/lib/utils";

const MAX_LAYERS = 100; 

interface CanvasProps {
  boardId: string;
}

export const Canvas = ({ boardId }: CanvasProps) => {
  const layerIds = useStorage((root)=>root.layerIds);
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });
  const [camera, setCamera] = useState<Camera>({ x: 0, y: 0 });
  const history = useHistory();
  const canUndo = useCanUndo();
  const canRedo = useCanRedo();
  const insertLayer = useMutation((
    {storage, setMyPresence},
    layerType: LayerType.Ellipse | LayerType.Rectangle | LayerType.Text | LayerType.Note,
    position: Point,
  )=>{
    const liveLayers = storage.get("layers");
    if (liveLayers.size>= MAX_LAYERS){
      return;
    }
    const liveLayerIds = storage.get("layerIds")
    const layerIds = 0;
  },[])
  const onWheel = useCallback((e: React.WheelEvent) => {
    setCamera((camera) => ({
      x: camera.x - e.deltaX,
      y: camera.y - e.deltaY,
    }));
  }, []);
  const movePointer = useMutation(
    ({ setMyPresence }, e: React.PointerEvent) => {
      e.preventDefault();
      const current = pointerEventToCanvasPoint(e, camera);
      setMyPresence({ cursor: current });
    },
    []
  );
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info boardId={boardId} />
      <Members />
      <Toolbar
        canvasState={canvasState}
        setCanvasState={setCanvasState}
        canRedo={canRedo}
        canUndo={canUndo}
        undo={history.undo}
        redo={history.redo}
      />
      <svg
        className="h-[100vh] w-[100vw]"
        onWheel={onWheel}
        onPointerMove={movePointer}
      >
        <g
        style={{
          transform: `translate(${camera.x}px, ${camera.y}px)`
        }}>
          <CursorPresence />
        </g>
      </svg>
    </main>
  );
};
