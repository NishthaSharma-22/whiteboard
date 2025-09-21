"use client";

import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ToolbarButtonsProps {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
}

export const ToolbarButtons = ({
    label, icon:Icon, onClick, isActive, isDisabled
}: ToolbarButtonsProps)=>{
    return(
        <Button
        disabled={isDisabled}
        onClick={onClick}
        size="icon">
            <Icon/>
        </Button>
    )
}