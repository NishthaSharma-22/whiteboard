"use client";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

import BlankBoardPage from "./blank-board-page";
import BlankFavs from "./blank-favs";
import BlankSearch from "./blank-search";
import BoardCard from "../board-cards";
import AddNewBoardButton from "../board-cards/new-board";

interface EmptyBoardProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export default function EmptyBoards({ orgId, query }: EmptyBoardProps) {
  const data = useQuery(api.boards.get, { orgId });

  if (data === undefined) return <div>Loading...</div>;
  if (!data.length) {
    if (query.search) return <BlankSearch />;
    if (query.favorites) return <BlankFavs />;
    return <BlankBoardPage />;
  }
  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight text-gray-800 dark:text-gray-200">
        {query.favorites ? "Favorite Boards" : "Boards"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-8 pb-10">
        <AddNewBoardButton orgId={orgId} />
        {data.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageUrl}
            authorId={board.authorId}
            authorName={board.authorName}
            createdAt={board._creationTime}
            orgId={board.orgId}
            isFavorite={board.isFavorite}
          />
        ))}
      </div>
    </div>
  );
}
