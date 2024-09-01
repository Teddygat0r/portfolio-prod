"use client";

import React from "react";
import ExperienceProps from "../interfaces/ExperienceProps";
import Link from "next/link";

const Role: React.FC<ExperienceProps> = ({ name, image, time, desc, url }) => {
    return (
        <div className="flex gap-12">
            <div className="grow-0">
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
            </div>
        </div>
    );
};

export default Role;
