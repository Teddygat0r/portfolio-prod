import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-300">
            <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
                {/* Header */}
                <header className="mb-16">
                    <h1 className="text-4xl font-bold text-slate-100">
                        Joshua Zhang
                    </h1>
                    <p className="mt-2 text-lg text-slate-400">
                        ML Systems Researcher · University of Washington
                    </p>
                    <p className="mt-1 text-slate-400">
                        <Link
                            href="https://syfisys.github.io/"
                            className="text-violet-400 transition hover:text-violet-300"
                            target="_blank"
                        >
                            SyFI Lab
                        </Link>
                        {" · "}
                        <Link
                            href="https://pncel.ee.washington.edu/"
                            className="text-violet-400 transition hover:text-violet-300"
                            target="_blank"
                        >
                            PnCEL Lab
                        </Link>
                    </p>
                    <div className="mt-4 flex gap-4 text-sm">
                        <Link
                            href="mailto:jzhang0224@gmail.com"
                            className="text-violet-400 transition hover:text-violet-300"
                        >
                            email
                        </Link>
                        <Link
                            href="https://github.com/Teddygat0r"
                            className="text-violet-400 transition hover:text-violet-300"
                            target="_blank"
                        >
                            github
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/joshzh/"
                            className="text-violet-400 transition hover:text-violet-300"
                            target="_blank"
                        >
                            linkedin
                        </Link>
                        <Link
                            href="/JoshuaZhangResume.pdf"
                            className="text-violet-400 transition hover:text-violet-300"
                        >
                            cv
                        </Link>
                    </div>
                </header>

                {/* About */}
                <section className="mb-16">
                    <h2 className="mb-4 text-xl font-semibold text-slate-200">
                        About
                    </h2>
                    <p className="leading-relaxed">
                        I&apos;m a third-year undergraduate at the University of
                        Washington researching efficient inference and training
                        for large sequence models. I work primarily with
                        PyTorch, CUDA, and Triton.
                    </p>
                    <p className="mt-3 text-violet-400">
                        Looking for ML systems or ML research roles.
                    </p>
                </section>

                {/* Research */}
                <section className="mb-16">
                    <h2 className="mb-4 text-xl font-semibold text-slate-200">
                        Research
                    </h2>
                    <p className="leading-relaxed">
                        My current work focuses on SSM state compression via
                        low-rank SVD for hybrid prefix caching, contributing to
                        SGLang&apos;s MambaRadixCache. I study attention vs. SSM
                        tradeoffs&mdash;associative recall limits, state
                        saturation, and throughput&mdash;and am interested in
                        HiPPO frameworks, discretization methods, and kernel
                        interpretations of softmax attention.
                    </p>
                    <p className="mt-3 leading-relaxed">
                        Previously, I worked on post-training quantization for
                        Mamba2 (W4A4 via TorchAO), multi-GPU performance
                        modeling across DDP and FSDP, and large-scale inference
                        with vLLM on 8×H100 clusters.
                    </p>
                </section>

                {/* Projects */}
                <section className="mb-16">
                    <h2 className="mb-4 text-xl font-semibold text-slate-200">
                        Projects
                    </h2>
                    <ul className="space-y-3">
                        <li>
                            <span className="font-medium text-slate-200">
                                Spotify Recommender
                            </span>
                            {" — Song recommendation via vector embeddings using cosine, Euclidean, and Manhattan distance over 12k tracks. "}
                            <Link
                                href="https://github.com/Teddygat0r/spotify-recommender"
                                className="text-violet-400 transition hover:text-violet-300"
                                target="_blank"
                            >
                                code →
                            </Link>
                        </li>
                        <li>
                            <span className="font-medium text-slate-200">
                                WildEye AI
                            </span>
                            {" — Animal detection in camera footage using TensorFlow image classification on Jetson hardware. "}
                            <Link
                                href="https://github.com/Teddygat0r/jetson-animal-detection"
                                className="text-violet-400 transition hover:text-violet-300"
                                target="_blank"
                            >
                                code →
                            </Link>
                        </li>
                        <li>
                            <span className="font-medium text-slate-200">
                                Identifying NEOs
                            </span>
                            {" — Deep learning model for detecting near-earth objects from NASA WISE infrared data. "}
                            <Link
                                href="/projects/astro.pdf"
                                className="text-violet-400 transition hover:text-violet-300"
                            >
                                paper →
                            </Link>
                        </li>
                    </ul>
                </section>

                {/* Experience */}
                <section className="mb-16">
                    <h2 className="mb-4 text-xl font-semibold text-slate-200">
                        Experience
                    </h2>
                    <ul className="space-y-2 text-sm">
                        {[
                            {
                                company: "Stripe",
                                role: "Software Engineer Intern",
                                time: "Jun 2025 – Present",
                                url: "https://stripe.com/",
                            },
                            {
                                company: "Amazon",
                                role: "Software Engineer Intern",
                                time: "Jan – Jun 2025",
                                url: "https://amazon.com/",
                            },
                            {
                                company: "Art of Problem Solving",
                                role: "Software Engineer Intern",
                                time: "Jun – Sep 2024",
                                url: "https://aops.com/",
                            },
                            {
                                company: "Advanced Robotics at UW",
                                role: "Controls Software Engineer",
                                time: "Sep 2023 – Present",
                                url: "https://aruw.org/",
                            },
                            {
                                company: "Dept. of Homeland Security",
                                role: "Software Engineer Intern",
                                time: "Jun – Aug 2023",
                                url: "https://www.dhs.gov/",
                            },
                        ].map((exp) => (
                            <li key={exp.company}>
                                <Link
                                    href={exp.url}
                                    className="font-medium text-slate-200 transition hover:text-violet-300"
                                    target="_blank"
                                >
                                    {exp.company}
                                </Link>
                                <span className="text-slate-500">
                                    {" · "}
                                </span>
                                {exp.role}
                                <span className="text-slate-500">
                                    {" · "}
                                </span>
                                <span className="text-slate-500">
                                    {exp.time}
                                </span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Footer */}
                <footer className="border-t border-slate-800 pt-8 text-sm text-slate-500">
                    <p>
                        © 2026 Joshua Zhang
                        <span className="mx-2">·</span>
                        <Link
                            href="/friends"
                            className="transition hover:text-violet-300"
                        >
                            Friends
                        </Link>
                    </p>
                </footer>
            </div>
            <Analytics />
        </div>
    );
}
