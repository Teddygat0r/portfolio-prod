"use client";

import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import Link from "next/link";
import NavBar from "./navbar";

export default function Hero() {
    const makeVisible = () => {
        const object = document.getElementById("blob");
        if (object) {
            object.style.opacity = "1";
        }
    };

    return (
        <div
            className="flex flex-col justify-center gap-8 text-center pb-[7%]"
            onPointerMove={(e) => {
                makeVisible();
                document.getElementById("blob")?.animate(
                    {
                        left: `${e.clientX}px`,
                        top: `${e.clientY}px`,
                    },
                    { duration: 5000, fill: "forwards" }
                );
            }}
            onMouseEnter={(e) => {
                makeVisible();
            }}
            onMouseLeave={(e) => {
                const object = document.getElementById("blob");
                if (object) {
                    object.style.opacity = "0";
                }
            }}>
            <div
                className="absolute justify-start w-[10%] aspect-square bg-gradient-to-br from-sky-500 to-emerald-800 rounded-full -z-10 blur-[100px] duration-1000 opacity-0 transition"
                id="blob"></div>
            <NavBar />
            <h1 className="mt-12 text-6xl font-bold text-slate-100">
                I'm Joshua Zhang
            </h1>
            <h3 className="text-2xl font-semibold text-slate-300">
                A Fullstack Developer at the{" "}
                <span className="text-violet-300">
                    University of Washington
                </span>
                .<br />I love working with{" "}
                <span className="text-violet-300">Web & AI</span> frameworks!
                {
                    //Add Circle effect
                }
            </h3>
            <div className="flex flex-row gap-4 m-auto text-4xl">
                <Link
                    href="https://www.linkedin.com/in/joshua-zhang-63a095236/"
                    className="transition duration-300 hover:text-violet-300">
                    <BiLogoLinkedin />
                </Link>
                <Link
                    href="https://github.com/Teddygat0r"
                    className="transition duration-300 hover:text-violet-300">
                    <BiLogoGithub />
                </Link>
            </div>
        </div>
    );
}
