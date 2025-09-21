import {
  MousePointer2,
  Pencil,
  RectangleHorizontal,
  Redo2,
  StickyNote,
  Type,
  Undo2,
} from "lucide-react";
import { ToolbarButtons } from "./toolbar-buttons";

type CanvasState = any;
interface ToolbarProps {
  canvasState: CanvasState;
  setCanvasState: {nreState: CanvasState}=>void;
  undo: ()=> void;
  redo: ()=> void;
  canUndo: boolean;
  canRedo: boolean;
}
export const Toolbar = ({canvasState, setCanvasState, undo, redo, canRedo, canUndo}: ToolbarProps) => {
  return (
    <div className="fixed -translate-y-1/2 top-1/2 left-2 flex flex-col gap-y-4">
      <div className="bg-white rounded-md p-1.5 gap-y-1 flex flex-col items-center shadow-md">
        <ToolbarButtons
          label="Select"
          icon={MousePointer2}
          onClick={() => {}}
          isActive={false}
        />
        <ToolbarButtons
          label="Pencil"
          icon={Pencil}
          onClick={() => {}}
          isActive={false}
        />
        <ToolbarButtons
          label="Text"
          icon={Type}
          onClick={() => {}}
          isActive={false}
        />
        <ToolbarButtons
          label="Sticky Note"
          icon={StickyNote}
          onClick={() => {}}
          isActive={false}
        />
        <ToolbarButtons
          label="Rectangle"
          icon={RectangleHorizontal}
          onClick={() => {}}
          isActive={false}
        />
      </div>
      <div className="bg-white rounded-md p-1.5 flex flex-col items-center shadow-md gap-y-2">
        <ToolbarButtons
          label="Undo"
          icon={Undo2}
          onClick={() => {}}
          isActive={true}
        />
        <ToolbarButtons
          label="Redo"
          icon={Redo2}
          onClick={() => {}}
          isActive={true}
        />
      </div>
    </div>
  );
};
