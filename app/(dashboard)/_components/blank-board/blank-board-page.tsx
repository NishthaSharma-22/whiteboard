"use client";
import Image from "next/image";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function BlankBoardPage() {
  const create = useMutation(api.board.create);
  const { organization } = useOrganization();
  const onClick = () => {
    if (!organization) return;
    create({ orgId: organization.id, title: "unititle" });
  };
  return (
    <div className="flex flex-col justify-center items-center h-full gap-y-3">
      <Image
        src="/globe.svg"
        alt="favs not found image"
        width={200}
        height={200}
      />
      <h3>No boards yet.</h3>
      <p>Create your first board to get started!</p>
      <Button onClick={onClick} className="bg-emerald-400 hover:bg-emerald-600 cursor-pointer p-[20px] font-semibold">Create Board</Button>
    </div>
  );
}
