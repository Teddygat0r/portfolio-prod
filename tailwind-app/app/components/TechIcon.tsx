'use client';

import React from "react"
import Image from 'next/image'


interface TechIconProps {
    logo: string;
}

const TechIcon: React.FC<TechIconProps> = ({ logo }) => {
    return (
        <div className="flex flex-col transition duration-300 hover:scale-125 hover:translate-y-[6.25%]">
            <Image src={`/icons/${ logo }.svg`} alt={logo} width="96" height="96"/>
            <p className="text-xl font-semibold text-center text-slate-300">{ logo }</p>
        </div>
    );
}

export default TechIcon;