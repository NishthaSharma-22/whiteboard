interface OverlayProps{
    authorLabel: string;
    createdAtLabel: string;
}
export default function Overlay({ authorLabel, createdAtLabel }: OverlayProps) {
  return (
    <div className="opacity-0 group-hover:opacity-30 transition-opacity h-full w-full bg-black flex flex-col justify-end items-end p-2">
      <p className="relative text-white text-[12px] truncate">
        {authorLabel}, {createdAtLabel}
      </p>
    </div>
  );
}
