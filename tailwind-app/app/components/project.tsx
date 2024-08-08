"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiLogoGithub } from "react-icons/bi";
import ProjectProps from "../interfaces/ProjectProps";

const enableBorder = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.currentTarget instanceof Element) {
        (
            e.currentTarget.querySelector("#border") as HTMLElement
        ).style.opacity = "100";
        (
            e.currentTarget.querySelector("#border") as HTMLElement
        ).style.transform = "scale(1.05, 1.1)";
    }
};

const disableBorder = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.currentTarget instanceof Element) {
        (
            e.currentTarget.querySelector("#border") as HTMLElement
        ).style.opacity = "0";
        (
            e.currentTarget.querySelector("#border") as HTMLElement
        ).style.transform = "scale(1, 1)";
    }
};

const Project: React.FC<ProjectProps> = ({ name, image, tech, desc, url }) => {
    return (
        <div>
            <div className="flex flex-col justify-center gap-4 md:hidden">
                <div>
                    <h1 className="text-xl font-bold text-slate-900">{name}</h1>
                </div>
                <div className="relative flex h-64 mx-4">
                    <Image
                        src={`/projects/${image}.png`}
                        fill={true}
                        alt={name}
                        className="object-fill h-auto m-auto rounded-md"
                    />
                </div>
                <div className="flex justify-between px-8">
                    <div className="flex gap-2">
                        {tech.map((value, i) => {
                            return (
                                <Image
                                    src={`/icons/${value}.svg`}
                                    width="32"
                                    height="32"
                                    alt={value}
                                    key={i}
                                    className="w-8 h-auto aspect-square"
                                />
                            );
                        })}
                    </div>
                    <Link
                        href={url}
                        className="flex justify-start gap-1 py-1 pl-2 pr-3 text-purple-700 align-middle border border-purple-500 rounded-md opacity-100 bg-slate-200">
                        <div className="m-auto">
                            <BiLogoGithub className="m-auto text-3xl" />
                        </div>
                        <p className="m-auto ">Code</p>
                    </Link>
                </div>
            </div>
            <div className="justify-center hidden gap-8 md:flex">
                <div className="w-[50%] flex justify-end">
                    <Image
                        src={`/projects/${image}.png`}
                        width="512"
                        height="69"
                        alt={name}
                        className="object-fill h-auto rounded-md"
                    />
                </div>
                <div className="flex flex-col justify-center gap-2 text-left w-[50%]">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900">
                            {name}
                        </h1>
                        <div className="w-[80%] rounded-full h-[2px] bg-gradient-to-r from-violet-800 to-slate-100"></div>
                    </div>
                    <p className="text-slate-600 max-w-[60%] text-sm my-2">
                        {desc}
                    </p>
                    <div className="flex justify-start gap-2 mt-2">
                        {tech.map((value, i) => {
                            return (
                                <Image
                                    src={`/icons/${value}.svg`}
                                    width="32"
                                    height="32"
                                    alt={value}
                                    key={i}
                                    className="w-8 h-auto aspect-square"
                                />
                            );
                        })}
                        <div
                            className="relative m-40 my-auto ml-2 rounded-md"
                            onMouseEnter={(e) => enableBorder(e)}
                            onMouseLeave={(e) => disableBorder(e)}>
                            <div
                                className="absolute z-0 w-full h-full transition duration-500 rounded-md opacity-0 card"
                                id="border"></div>
                            <div className="absolute z-10 w-full h-full transition duration-500 border-2 rounded-md opacity-100 bg-slate-100 border-slate-400 hover:border-opacity-0 hover:text-violet-800">
                                <Link
                                    href={url}
                                    className="flex justify-start gap-1 py-1 pl-2 pr-3 align-middle rounded-md opacity-100 bg-slate-100 text-slate-900">
                                    <div className="m-auto">
                                        <BiLogoGithub className="m-auto text-3xl" />
                                    </div>
                                    <p className="m-auto ">Code</p>
                                </Link>
                            </div>
                            <Link
                                href={url}
                                className="flex justify-start gap-1 py-1 pl-2 pr-3 align-middle border-2 rounded-md opacity-0 bg-slate-100 -z-10">
                                <div className="m-auto">
                                    <BiLogoGithub className="m-auto text-3xl" />
                                </div>
                                <p className="m-auto ">Code</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
