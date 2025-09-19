"use client";
import Image from "next/image";
import Link from "next/link";
import Overlay from "./board-overlay";
import { MoreHorizontal } from "lucide-react";
import Footer from "./footer";

import { formatDistanceToNow } from "date-fns";
import { useAuth } from "@clerk/nextjs";
import { Actions } from "@/components/actions";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import type { Id } from "@/convex/_generated/dataModel";

interface BoardCardProps {
  id: Id<"boards">;
  title: string;
  authorName: string;
  authorId: string;
  imageUrl: string;
  orgId: string;
  isFavorite: boolean;
  createdAt: number;
}
export default function BoardCard({
  id,
  title,
  authorId,
  authorName,
  createdAt,
  isFavorite,
  imageUrl,
  orgId,
}: BoardCardProps) {
  const { userId } = useAuth();
  const authorLabel = userId === authorId ? "You" : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt, { addSuffix: true });
  const favorite = useMutation(api.board.favorite);
  const unfavorite = useMutation(api.board.notFavorite);
  const changeFav = () => {
    if (isFavorite) {
      unfavorite({ id, orgId });
    } else {
      favorite({ id, orgId });
    }
  };
  return (
    <Link href={`/board/${id}`}>
      <div className="group border rounded-lg overflow-hidden">
        <div className="relative aspect-[16/11] bg-emerald-200 flex items-center justify-center">
          <Image src={imageUrl} alt={title} fill className="object-fit" />
          <Overlay authorLabel={authorLabel} createdAtLabel={createdAtLabel} />
          <Actions id={id} title={title} side="right">
            <button className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity p-2">
              <MoreHorizontal className="text-white opacity-75 hover:opacity-100 transition-opacity" />
            </button>
          </Actions>
        </div>
        <Footer
          isFavorite={isFavorite}
          title={title}
          onClick={changeFav}
          disabled={false}
        />
      </div>
    </Link>
  );
}
