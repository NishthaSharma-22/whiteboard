"use client";
import { api } from "@/convex/_generated/api";
import { cn } from "@/lib/utils";
import { useMutation } from "convex/react";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface AddNewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

export default function AddNewBoardButton({
  orgId,
  disabled,
}: AddNewBoardButtonProps) {
  const router = useRouter();
  const create = useMutation(api.board.create);
  const [cooldown, setCooldown] = useState(false);
  const onClick = async () => {
    if (cooldown) return;
    setCooldown(true);
    try {
      const id: string = await create({ orgId, title: "Untitled" });
      router.push(`/board/${id}`);
    } catch (err) {
      console.error("Failed to create board:", err);
    } finally {
      setTimeout(() => setCooldown(false), 1000);
    }
  };
  return (
    <button
      disabled={disabled || cooldown}
      onClick={onClick}
      className={cn(
        "col-span-1 aspect-[16/11] bg-emerald-300 rounded-lg hover:bg-green-800 flex flex-col justify-center items-center py-6",
        disabled && "opacity-75"
      )}
    >
      <div />
      <Plus className="h-12 w-12 text-white stroke-1" />
      <p className="text-white text-sm font-light">
        {cooldown ? "Please wait..." : "Add New Board"}
      </p>
    </button>
  );
}
