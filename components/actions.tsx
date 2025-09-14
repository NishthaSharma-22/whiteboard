"use client";

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link2 } from "lucide-react";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { ConfirmDelete } from "@/app/(dashboard)/_components/confirm-delete";
import { Button } from "./ui/button";

interface ActionProps {
  children: React.ReactNode;
  side?: DropdownMenuContentProps["side"];
  sideOffset?: DropdownMenuContentProps["sideOffset"];
  id: string;
  title: string;
}

export const Actions = ({
  children,
  side,
  sideOffset,
  id,
  title,
}: ActionProps) => {
  const deleteBoard = useMutation(api.board.remove);

  const removeBoard = async () => {
    try {
      await deleteBoard({ id });
    } catch (err) {
      console.error("Failed to delete the oard:", err);
    }
  };
  const onCopyLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/board/${id}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        side={side}
        sideOffset={sideOffset}
        className="w-60 flex flex-col justify-center items-start"
        onClick={(e) => e.stopPropagation()}
      >
        <DropdownMenuItem onClick={onCopyLink} className="p-3 cursor-pointer">
          <Link2 className="mr-2 cursor-pointer" />
          Copy Board Link
        </DropdownMenuItem>
        <ConfirmDelete
          header="Delete board?"
          description="This will delete the board"
          disabled={false}
          onConfirm={removeBoard}
        >
          <Button
            //   onClick={removeBoard}
            variant="ghost"
            className="text-sm w-full p-3 cursor-pointer font-medium bg-red-700 text-white"
          >
            Delete Board
          </Button>
        </ConfirmDelete>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
