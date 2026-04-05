"use client";
import Link from "next/link";
import { HiDownload, HiOutlineMail } from "react-icons/hi";
import { moveBlob, toggleVisible } from "./blobHelpers";

export default function About() {
    return (
        <section
            className="flex flex-col items-center justify-center gap-8 py-[8%] px-8 lg:px-[20%]"
            id="about"
            onPointerMove={moveBlob}
            onMouseEnter={(e) => {
                toggleVisible("1");
            }}
            onMouseLeave={(e) => {
                toggleVisible("0");
            }}
        >
            <h1 className="text-3xl font-semibold text-slate-200">
                About Me
            </h1>
            <p className="max-w-2xl text-center text-lg">
                I'm researching efficient inference and state compression for
                large sequence models in the SyFI and PnCEL labs at UW.
                Currently focused on SSM state compression, hybrid prefix
                caching, and multi-GPU training infrastructure. I work
                primarily with PyTorch, CUDA, and Triton.
            </p>
            <p className="max-w-2xl text-center text-lg text-violet-300">
                Looking for ML systems or ML research roles.
            </p>
            <div className="flex justify-center gap-4 mt-2">
                <Link href="/JoshuaZhangResume.pdf">
                    <button
                        className="flex justify-between gap-2 px-4 py-2 transition duration-300 border rounded-md border-violet-300 text-violet-300 hover:border-violet-200 hover:text-violet-200 hover:drop-shadow-glow"
                    >
                        Resume
                        <HiDownload className="m-auto text-lg" />
                    </button>
                </Link>
                <Link href="mailto:jzhang0224@gmail.com">
                    <button
                        className="flex justify-between gap-2 px-4 py-2 transition duration-300 border rounded-md border-violet-300 text-violet-300 hover:border-violet-200 hover:text-violet-200 hover:drop-shadow-glow"
                    >
                        Email
                        <HiOutlineMail className="m-auto text-lg" />
                    </button>
                </Link>
            </div>
        </section>
    );
}
