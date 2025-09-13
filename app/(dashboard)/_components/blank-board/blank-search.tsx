import Image from "next/image";
export default function BlankSearch() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <Image
        src="next.svg"
        alt="blank search image"
        width={200}
        height={200}
      />
      <p className="m-[20]">No search results found.</p>
    </div>
  );
}
