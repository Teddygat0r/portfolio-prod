import TechIcon from "./TechIcon";
import Link from "next/link";
import { HiDownload, HiOutlineMail } from "react-icons/hi";

const TECH_LOGOS: string[] = [
    "Vue",
    "React",
    "Tailwind",
    "Django",
    "Javascript",
    "Typescript",
    "Python",
    "Java",
    "Tensorflow",
    "Git",
    "MySQL",
];

export default function About() {
    return (
        <div className="flex justify-center gap-8 px-[20%] mb-12 bg-slate-900">
            <div className="flex flex-col w-[50%]">
                <h1 className="mb-8 text-3xl font-semibold text-slate-200">
                    About Me
                </h1>
                <p className="text-lg">
                    I'm a technology enthusiast with a passion for web
                    development and machine learning. Proficient in JavaScript,
                    Python, and various frameworks, I enjoy creating innovative
                    solutions that have a tangible impact. From dynamic web
                    applications to machine learning algorithms, I thrive on
                    collaborating with teams to deliver top-notch products.
                    Seeking opportunities to contribute to cutting-edge projects
                    and further develop skills in electrical engineering. Let's
                    collaborate to build something extraordinary!
                </p>
                <div className="flex justify-center w-full gap-4 mt-6">
                    <Link href="/JoshuaZhangResume.pdf">
                        <button className="flex justify-between gap-2 px-4 py-2 transition duration-300 border rounded-md border-violet-300 text-violet-300 hover:text-violet-200 hover:drop-shadow-glow hover:border-violet-200">
                            Resumé
                            <HiDownload className="m-auto text-lg" />
                        </button>
                    </Link>
                    <Link href="mailto:jzhang0224@gmail.com">
                        <button className="flex justify-between gap-2 px-4 py-2 transition duration-300 border rounded-md border-violet-300 text-violet-300 hover:text-violet-200 hover:drop-shadow-glow hover:border-violet-200">
                            Contact Me
                            <HiOutlineMail className="m-auto text-lg" />
                        </button>
                    </Link>
                </div>
            </div>
            <div className="flex w-[50%] flex-col justify-center">
                <h1 className="mb-8 text-3xl font-semibold text-center text-slate-200">
                    My Tech Stack
                </h1>
                <div className="flex flex-wrap justify-center gap-8">
                    {TECH_LOGOS.map((value) => {
                        return <TechIcon logo={value} key={value} />;
                    })}
                </div>
            </div>
        </div>
    );
}
