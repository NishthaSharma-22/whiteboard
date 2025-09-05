"use client";

import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex items-center gap-x-3 h-[45px] p-[4px]">
      <Search />
      <div className="hidden lg:flex lg:flex-1 bg-gray-100 p-[2px] h-[30px] border-b-slate-500"></div>
      <UserButton />
    </div>
  );
}
