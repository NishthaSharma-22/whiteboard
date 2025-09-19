import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterProps {
  title: string;
  isFavorite: boolean;
  onClick: () => void;
  disabled: boolean;
}

export default function Footer({
  title,
  isFavorite,
  onClick,
  disabled,
}: FooterProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    e.preventDefault();
    onClick();
  };
  return (
    <div className="relative bg-white p-2">
      <p className="text-[13px] truncate max-w-[calc(100%-20px)]">{title}</p>
      <button
        disabled={disabled}
        onClick={handleClick}
        className={cn(
          "opacity-0 group-hover:opacity-100 transition absolute top-3 right-3 text-muted-foreground hover:text-yellow-600",
          disabled && "cursor-not-allowed opacity-75"
        )}
      >
        <Star
          className={cn(
            "h-4 w-4",
            isFavorite && "fill-yellow-600 text-yellow-600"
          )}
        />
      </button>
    </div>
  );
}
