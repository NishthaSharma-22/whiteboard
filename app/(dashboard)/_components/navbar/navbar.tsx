"use client";

import { Toggle } from "@/components/ui/toggle";
import { UserButton } from "@clerk/nextjs";
import { Moon } from "lucide-react";
import Organisations from "./organisations";
import Search from "./search";
import DialogCloseButton from "./dialog";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center gap-x-3 h-[45px] p-[4px]">
      <div className="flex justify-center items-center gap-x-4">
        <DialogCloseButton />
        <Organisations />

        <Search />
      </div>
      <div className="flex justify-center items-center gap-x-4">
        <Toggle className="cursor-pointer">
          <Moon />
        </Toggle>
        <UserButton />
      </div>
    </div>
  );
}
