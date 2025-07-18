"use client";

import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import Link from "next/link";
import NavBar from "./navbar";
import { moveBlob, toggleVisible } from "./blobHelpers";

export default function Hero() {
    return (
        <section
            className="flex h-screen flex-col justify-center gap-8 text-center md:h-full md:pb-[7%]"
            id="hero"
            onPointerMove={moveBlob}
            onMouseEnter={(e) => {
                toggleVisible("1");
            }}
            onMouseLeave={(e) => {
                toggleVisible("0");
            }}
        >
            <NavBar />
            <h1 className="mt-auto text-6xl font-bold text-slate-100 md:mt-12">
                I'm Joshua <span className="hidden md:inline">Zhang</span>
            </h1>
            <h2 className="text-2xl font-semibold text-slate-300">
                A Fullstack Developer at the{" "}
                <span className="text-violet-300">
                    University of Washington
                </span>
                <span className="hidden md:inline">
                    .<br />
                    Lets build something great{" "}
                    <span className="text-violet-300">together!</span>{" "}
                </span>
            </h2>
            <div className="flex flex-row gap-4 mx-auto mb-auto text-4xl md:m-auto">
                <Link
                    href="https://www.linkedin.com/in/joshzh/"
                    className="transition duration-300 hover:text-violet-300"
                    aria-label="View My linkedin"
                >
                    <BiLogoLinkedin />
                </Link>
                <Link
                    href="https://github.com/Teddygat0r"
                    className="transition duration-300 hover:text-violet-300"
                    aria-label="View My Github"
                >
                    <BiLogoGithub />
                </Link>
            </div>
        </section>
    );
}
