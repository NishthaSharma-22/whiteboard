"use client"
import Image from "next/image";
import { useMutation } from "convex/react";

export default function BlankBoardPage(){
    return(
        <div className="flex flex-col justify-center items-center h-full">
            <Image src="/globe.svg"
            alt="favs not found image"
            width={200}
            height={200}/>
            <h3 className="m-[20]">No favorite boards yet.</h3>
            <p>Create your first board to get started!</p>
            <button>Create</button>
        </div>
    )
}