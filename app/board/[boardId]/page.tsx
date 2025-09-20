import { Room } from "@/components/Room";
import { Canvas } from "./_components/canvas";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

export default function BoardIdPage({ params }: BoardIdPageProps) {
  return (
    <>
      <Room roomId={params.boardId}>
        <Canvas boardId={params.boardId} />
      </Room>
    </>
  );
}
