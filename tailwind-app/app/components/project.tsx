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
                <div className="relative mx-4 flex h-64">
                    <Image
                        src={`/projects/${image}.png`}
                        fill={true}
                        alt={name}
                        className="m-auto h-auto rounded-md object-fill"
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
                                    className="aspect-square h-auto w-8"
                                />
                            );
                        })}
                    </div>
                    <Link
                        href={url}
                        className="flex justify-start gap-1 rounded-md border border-purple-500 bg-slate-200 py-1 pl-2 pr-3 align-middle text-purple-700 opacity-100"
                    >
                        <div className="m-auto">
                            <BiLogoGithub className="m-auto text-3xl" />
                        </div>
                        <p className="m-auto">Code</p>
                    </Link>
                </div>
            </div>
            <div className="hidden justify-center gap-8 md:flex">
                <div className="flex w-[50%] justify-end">
                    <Image
                        src={`/projects/${image}.png`}
                        width="512"
                        height="69"
                        alt={name}
                        className="h-auto rounded-md object-fill"
                    />
                </div>
                <div className="flex w-[50%] flex-col justify-center gap-2 text-left">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900">
                            {name}
                        </h1>
                        <div className="h-[2px] w-[80%] rounded-full bg-gradient-to-r from-violet-800 to-slate-100"></div>
                    </div>
                    <p className="my-2 max-w-[60%] text-sm text-slate-600">
                        {desc}
                    </p>
                    <div className="mt-2 flex justify-start gap-2">
                        {tech.map((value, i) => {
                            return (
                                <Image
                                    src={`/icons/${value}.svg`}
                                    width="32"
                                    height="32"
                                    alt={value}
                                    key={i}
                                    className="aspect-square h-auto w-8"
                                />
                            );
                        })}
                        <div
                            className="relative m-40 my-auto ml-2 rounded-md"
                            onMouseEnter={(e) => enableBorder(e)}
                            onMouseLeave={(e) => disableBorder(e)}
                        >
                            <div
                                className="card absolute z-0 h-full w-full rounded-md opacity-0 transition duration-500"
                                id="border"
                            ></div>
                            <div className="absolute z-10 h-full w-full rounded-md border-2 border-slate-400 bg-slate-100 opacity-100 transition duration-500 hover:border-opacity-0 hover:text-violet-800">
                                <Link
                                    href={url}
                                    className="flex justify-start gap-1 rounded-md bg-slate-100 py-1 pl-2 pr-3 align-middle text-slate-900 opacity-100"
                                    target="_blank"
                                >
                                    <div className="m-auto">
                                        <BiLogoGithub className="m-auto text-3xl" />
                                    </div>
                                    <p className="m-auto">Code</p>
                                </Link>
                            </div>
                            <Link
                                href={url}
                                className="-z-10 flex justify-start gap-1 rounded-md border-2 bg-slate-100 py-1 pl-2 pr-3 align-middle opacity-0"
                            >
                                <div className="m-auto">
                                    <BiLogoGithub className="m-auto text-3xl" />
                                </div>
                                <p className="m-auto">Code</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
