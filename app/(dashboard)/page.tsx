"use client";
import BlankBoard from "./_components/blank-board/blank";
import { useOrganization } from "@clerk/nextjs";
export default function Dashboard() {
  const { organization } = useOrganization();
  return (
    <>
      {!organization ? (
        <div className="flex-1 h-[100%] w-full">
          <BlankBoard />
        </div>
      ) : (
        <p>hi!</p>
      )}
    </>
  );
}
