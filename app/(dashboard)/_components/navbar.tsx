"use client";

import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";
import { UserButton } from "@clerk/nextjs";
import { Moon, Search } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center gap-x-3 h-[45px] p-[4px]">
      <div className="flex justify-center items-center gap-x-4">
        
        <Search/>
        <Input type="text" placeholder="search" className="w-[400px]" />
      </div>
      <div className="flex justify-center items-center gap-x-4">
    
        <Toggle>
          <Moon />
        </Toggle>
        <UserButton />
      </div>
    </div>
  );
}
