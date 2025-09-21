"use client";
import { useState } from "react";
import { CanvasState, CanvasMode } from "@/types/canvas";
import { Info } from "./info";
import { Members } from "./members";
import { Toolbar } from "./toolbar";
import { useHistory, useCanRedo, useCanUndo } from "@liveblocks/react";

interface CanvasProps {
    boardId: string;
}

export const Canvas = ({boardId}:CanvasProps) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None
  })
  const history = useHistory()
  const canUndo = useCanUndo()
  const canRedo = useCanRedo()
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info boardId={boardId}/>
      <Members />
      <Toolbar 
      canvasState={canvasState}
      setCanvasState={setCanvasState}
      canRedo={canRedo}
      canUndo={canUndo}
      undo={history.undo}
      redo ={history.redo}/>
    </main>
  );
};
