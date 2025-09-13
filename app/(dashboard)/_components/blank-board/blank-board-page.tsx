"use client";
import Image from "next/image";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";

export default function BlankBoardPage() {
  const create = useMutation(api.board.create);
  const { organization } = useOrganization();
  const onClick = () => {
    if (!organization) return;
    create({ orgId: organization.id, title: "unititle" });
  };
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <Image
        src="/globe.svg"
        alt="favs not found image"
        width={200}
        height={200}
      />
      <h3 className="m-[20]">No favorite boards yet.</h3>
      <p>Create your first board to get started!</p>
      <button onClick={onClick}>Create</button>
    </div>
  );
}
