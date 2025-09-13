import Image from "next/image";

export default function BlankFavs(){
    return(
        <div className="flex flex-col justify-center items-center h-full">
            <Image src="/globe.svg"
            alt="favs not found image"
            width={200}
            height={200}/>
            <p className="m-[20]">No favorite boards yet.</p>
        </div>
    )
}