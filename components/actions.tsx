"use client";

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link2, Pencil } from "lucide-react";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { ConfirmDelete } from "@/app/(dashboard)/_components/confirm-delete";
import { Button } from "./ui/button";
import { useRenameModal } from "@/store/use-rename-modal";

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
  const { onOpen } = useRenameModal();
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
        className="flex flex-col justify-center items-start w-50"
        onClick={(e) => e.stopPropagation()}
      >
        <DropdownMenuItem
          onClick={onCopyLink}
          className="p-2 cursor-pointer mb-1 w-full"
        >
          <Link2 className="mr-2 cursor-pointer" />
          Copy Board Link
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => onOpen(id, title)}
          className="p-2 cursor-pointer mb-1 w-full"
        >
          <Pencil className="mr-2 cursor-pointer" />
          Rename Board
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
