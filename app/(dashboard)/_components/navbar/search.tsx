"use client";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export default function Search() {
  return (
    <div className="relative">
      <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2" />
      <Input type="text" placeholder="search" className="w-[400px] pl-10" />
    </div>
  );
}
