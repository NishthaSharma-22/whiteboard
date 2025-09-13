"use client";

import { Toggle } from "@/components/ui/toggle";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Moon } from "lucide-react";
import Organisations from "./organisations";
import Search from "./search";
import DialogCloseButton from "./dialog";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center gap-x-3 h-[45px] p-[8px]">
      <div className="flex justify-center items-center gap-x-4">
        <Search />
      </div>
      <div className="flex justify-center items-center gap-x-4">
        <DialogCloseButton />
        {/* <Organisations /> */}
        <OrganizationSwitcher
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                padding: "2.5px",
                border: "1px solid rgba(211, 211, 211, 0.8)",
                borderRadius: "7px",
                boxShadow: "0 0 1px rgba(211, 211, 211, 0.8)",
              },
            },
          }}
        />
        <Toggle className="cursor-pointer">
          <Moon />
        </Toggle>
        <UserButton />
      </div>
    </div>
  );
}
