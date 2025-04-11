"use client";

import React from "react";
    import Image from 'next/image'
import Link from "next/link";
import FriendDetails from "@/app/interfaces/FriendProps";

const Friend: React.FC<FriendDetails> = ({ name, desc, url, image }) => {
    const imageurl = image || "/defaulticon.png";

    return (
        <Link href={url} target="_blank" className="grid grid-cols-2 gap-12 mx-4 my-2 border-2 border-gray-300 p-4 rounded-lg hover:bg-gray-100 transition-colors text-slate-100 hover:text-violet-700">
            <div className="p-4">
                <Image src={imageurl} alt={name + " pfp"} width={300} height={300} className=""/>
            </div>
            <div>
                <h1 className="text-2xl">{name}</h1>
                <p className="opacity-80 mt-4">{desc}</p>
            </div>
            
            {/* <div className="grow-0">
                <h1>{time}</h1>
            </div>
            <div className="flex grow flex-col gap-1">
                <Link
                    className="text-base font-semibold text-blue-700"
                    href={url}
                    target="_blank"
                >
                    {name}
                </Link>
                <div className="text-sm">
                    <h2>{desc}</h2>
                    <h2>{image}</h2>
                </div>
            </div> */}
        </Link>
    );
};

export default Friend;
