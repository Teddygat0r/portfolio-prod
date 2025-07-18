"use client";
import TechIcon from "./TechIcon";
import Link from "next/link";
import { HiDownload, HiOutlineMail } from "react-icons/hi";
import { moveBlob, toggleVisible } from "./blobHelpers";

const TECH_LOGOS: string[] = [
    "Python",
    "Javascript",
    "Typescript",
    "C++",
    "Csharp",
    "Java",
    "React",
    "Tailwind",
    "AWS",
    "Pytorch",
    "Docker",
    "MySQL",
];

export default function About() {
    return (
        <section
            className="py-[8%] flex flex-col justify-center gap-12 md:flex-row lg:px-[20%]"
            id="about"
            onPointerMove={moveBlob}
            onMouseEnter={(e) => {
                toggleVisible("1");
            }}
            onMouseLeave={(e) => {
                toggleVisible("0");
            }}
        >
            <div className="hidden w-[50%] flex-col md:flex">
                <h1 className="mb-8 text-3xl font-semibold text-center text-slate-200">
                    About Me
                </h1>
                <p className="text-lg text-center">
                    I'm a technology enthusiast with a passion for web
                    development and machine learning. I'm most proficient in
                    Python, C++, and Node.JS Tech stacks, but I've also used
                    many other frameworks! Seeking opportunities to contribute
                    to cutting-edge projects and further develop skills in CS.
                    Let's collaborate to build something extraordinary!
                </p>
                <div className="flex justify-center w-full gap-4 mt-6">
                    <Link href="/JoshuaZhangResume.pdf">
                        <button
                            className="flex justify-between gap-2 px-4 py-2 transition duration-300 border rounded-md border-violet-300 text-violet-300 hover:border-violet-200 hover:text-violet-200 hover:drop-shadow-glow"
                            id="resume"
                        >
                            Resumé
                            <HiDownload className="m-auto text-lg" />
                        </button>
                    </Link>
                    <Link href="mailto:jzhang0224@gmail.com">
                        <button
                            className="flex justify-between gap-2 px-4 py-2 transition duration-300 border rounded-md border-violet-300 text-violet-300 hover:border-violet-200 hover:text-violet-200 hover:drop-shadow-glow"
                            id="contact"
                        >
                            Contact
                            <HiOutlineMail className="m-auto text-lg" />
                        </button>
                    </Link>
                </div>
            </div>
            <div className="hidden w-[50%] flex-col justify-center md:flex">
                <h1 className="mb-8 text-3xl font-semibold text-center text-slate-200">
                    My Tech Stack
                </h1>
                <div className="grid justify-center grid-cols-4 gap-8">
                    {TECH_LOGOS.map((value) => {
                        return <TechIcon logo={value} key={value} />;
                    })}
                </div>
            </div>
            <div className="md:hidden">
                <h1 className="my-8 text-3xl font-semibold text-center text-slate-200">
                    My Tech Stack
                </h1>
                <div className="flex flex-wrap justify-center gap-8">
                    {TECH_LOGOS.map((value) => {
                        return <TechIcon logo={value} key={value} />;
                    })}
                </div>
            </div>
            <div className="w-full pb-12 md:hidden">
                <h1 className="my-8 text-3xl font-semibold text-center text-slate-200">
                    Contact Me
                </h1>
                <div className="flex flex-wrap justify-center gap-8">
                    <Link href="/JoshuaZhangResume.pdf">
                        <button
                            className="flex justify-between gap-2 px-4 py-2 transition duration-300 border rounded-md border-violet-300 text-violet-300 hover:border-violet-200 hover:text-violet-200 hover:drop-shadow-glow"
                            id="resume-mobile"
                        >
                            Resumé
                            <HiDownload className="m-auto text-lg" />
                        </button>
                    </Link>
                    <Link href="mailto:jzhang0224@gmail.com">
                        <button
                            className="flex justify-between gap-2 px-4 py-2 transition duration-300 border rounded-md border-violet-300 text-violet-300 hover:border-violet-200 hover:text-violet-200 hover:drop-shadow-glow"
                            id="contact-mobile"
                        >
                            Contact
                            <HiOutlineMail className="m-auto text-lg" />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
