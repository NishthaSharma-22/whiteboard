"use client";
import Image from "next/image";
import Link from "next/link";
import Overlay from "./board-overlay";
import { formatDistanceToNow } from "date-fns";
import { useAuth } from "@clerk/nextjs";
import Footer from "./footer";
import { Actions } from "@/components/actions";
import { MoreHorizontal } from "lucide-react";

interface BoardCardProps {
  id: string;
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
  return (
    <Link href={`/board/${id}`}>
      <div className="group border rounded-lg overflow-hidden">
        <div className="relative aspect-[16/11] bg-emerald-200 flex items-center justify-center">
          <Image src={imageUrl} alt={title} fill className="object-fit" />
          <Overlay authorLabel={authorLabel} createdAtLabel={createdAtLabel} />
          <Actions id={id} title={title} side="right">
            <button className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity p-2">
              <MoreHorizontal className="text-white opacity-75 hover:opacity-100 transition-opacity"/>
            </button>
          </Actions>
        </div>
        <Footer
          isFavorite={isFavorite}
          title={title}
          onClick={() => {}}
          disabled={false}
        />
      </div>
    </Link>
  );
}
