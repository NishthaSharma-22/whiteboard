"use client";

import { Info } from "./info";
import { Members } from "./members";
import { Toolbar } from "./toolbar";

interface CanvasProps {
    boardId: string;
}

export const Canvas = ({boardId}:CanvasProps) => {
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info boardId={boardId}/>
      <Members />
      <Toolbar />
    </main>
  );
};
