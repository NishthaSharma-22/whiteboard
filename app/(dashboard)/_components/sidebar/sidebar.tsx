"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useSearchParams } from "next/navigation";
export default function Sidebar() {
  const searchParams = useSearchParams();
  const favorites = searchParams.get("favorites");
  return (
    <>
      <div className="hidden lg:flex flex-col bg-emerald-50 px-[12px] space-y-6 w-[200px] h-lvh">
        {/* <Link href="/" /> */}
        {/* <Image src="/next.svg" alt="image" height={120} width={120} /> */}
        <div className="flex gap-3 mt-15">
          <Button className="w-full bg-gray-600">
            <Link href={{ pathname: "/", query: { favorites: true } }}>
              <div className="flex justify-center items-center gap-x-4">
                <Star /> Favorites
              </div>
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
