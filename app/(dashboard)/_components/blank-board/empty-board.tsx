"use client";

import BlankBoardPage from "./blank-board-page";
import BlankFavs from "./blank-favs";
import BlankSearch from "./blank-search";

interface EmptyBoardProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export default function EmptyBoards({ orgId, query }: EmptyBoardProps) {
  const boards: any[] = [];
  if (!boards.length) {
    if (query.search) return (<BlankSearch/>);
    if (query.favorites) return <BlankFavs/>;
    return <BlankBoardPage/>;
  }
}
