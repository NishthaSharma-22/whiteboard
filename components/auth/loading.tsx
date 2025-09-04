import Image from "next/image";
export const Loading = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Image
        src="/globe.svg"
        alt="logo"
        height={200}
        width={200}
        className="animate-pulse duration-1000 flex justify-center"
      />
    </div>
  );
};
