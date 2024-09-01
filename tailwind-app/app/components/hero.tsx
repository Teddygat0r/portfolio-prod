"use client";

import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import Link from "next/link";
import NavBar from "./navbar";

export default function Hero() {
    const toggleVisible = (input: string) => {
        const object = document.getElementById("blob");
        if (object) {
            object.style.opacity = input;
        }
    };

    return (
        <section
            className="flex h-screen flex-col justify-center gap-8 text-center md:h-full md:pb-[7%]"
            id="hero"
            onPointerMove={(e) => {
                document.getElementById("blob")?.animate(
                    {
                        left: `${e.clientX}px`,
                        top: `${e.clientY}px`,
                    },
                    { duration: 5000, fill: "forwards" },
                );
            }}
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
            <div className="mx-auto mb-auto flex flex-row gap-4 text-4xl md:m-auto">
                <Link
                    href="https://www.linkedin.com/in/joshua-zhang-63a095236/"
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
