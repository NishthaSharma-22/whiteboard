"use client";
import BlankBoard from "./_components/empty-board/blank";
import { useOrganization } from "@clerk/nextjs";
import EmptyBoards from "./_components/blank-board/empty-board";

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
}

export default function Dashboard({searchParams}: DashboardPageProps) {
  const { organization } = useOrganization();
  return (
    <>
      {!organization ? (
        <div className="flex-1 h-[100%] w-full">
          <BlankBoard />
        </div>
      ) : (
        <EmptyBoards
        orgId = {organization.id}
        query={searchParams}/>
      )}
    </>
  );
}
