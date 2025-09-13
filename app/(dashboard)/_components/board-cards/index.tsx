"use client";
import Image from "next/image";
import Link from "next/link";
import Overlay from "./board-overlay";
import { formatDistanceToNow } from "date-fns"
import { useAuth } from "@clerk/nextjs";
import Footer from "./footer";

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
  const {userId} = useAuth()
  const authorLabel = userId === authorId ? "You": authorName
  const createdAtLabel = formatDistanceToNow(createdAt, {addSuffix: true})
  return (
    <Link href={`/board/${id}`}>
      <div className="group border rounded-lg overflow-hidden">
        <div className="relative aspect-[16/11] bg-amber-500 flex items-center justify-center">
          <Image src={imageUrl} alt={title} fill className="object-fit" />
          <Overlay/>
        </div>
        <Footer
        isFavorite={isFavorite}
        title={title}
        authorLabel={authorLabel}
        createdAtLabel={createdAtLabel}
        onClick={()=>{}}
        disabled={false}/>
      </div>
    </Link>
  );
}
