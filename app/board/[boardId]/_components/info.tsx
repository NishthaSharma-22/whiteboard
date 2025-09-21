"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { Id } from "@/convex/_generated/dataModel";
import Link from "next/link";
import { useRenameModal } from "@/store/use-rename-modal";
import { Actions } from "@/components/actions";
import { Menu, BarChart } from "lucide-react";

interface InfoProps {
  boardId: string;
}

export const Info = ({ boardId }: InfoProps) => {
  const { onOpen } = useRenameModal();
  const data = useQuery(api.board.get, {
    id: boardId as Id<"boards">,
  });
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center justify-center shadow-md gap-x-2">
      <Link href="/">
        <Button className="px-2 bg-neutral-100">
          <Image src="/globe.svg" alt="logo" width={30} height={50} />
        </Button>
      </Link>
      <div className="flex justify-center items-center gap-x-1">
        <Actions
          id={data?._id ?? ""}
          title={data?.title ?? "Untitled"}
          side="bottom"
          sideOffset={10}
        >
          <Button className="bg-neutral-100 text-black hover:bg-neutral-200 cursor-pointer">
            <Menu />
          </Button>
        </Actions>
        <Button
          onClick={() => onOpen(data?._id ?? "", data?.title ?? "Untitled")}
          className="bg-neutral-100 text-black hover:bg-neutral-200 px-[40] cursor-pointer"
        >
          {data?.title || "Untitled"}
        </Button>
      </div>
    </div>
  );
};
