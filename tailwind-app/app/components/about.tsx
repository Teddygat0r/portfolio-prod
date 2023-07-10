import TechIcon from "./TechIcon";
import Link from "next/link";

const TECH_LOGOS: string[] = ["Vue", "React", "Tailwind", "Django", "Javascript", "Typescript",  "Python", "Java", "Tensorflow", "Git", "MySQL" ];

export default function About() {
    return (
        <div className="flex justify-center gap-8 px-[20%] bg-slate-900">
            <div className="flex flex-col w-[50%]">
                <h1 className="mb-8 text-3xl font-semibold text-slate-200">About Me</h1>
                <p className="text-lg">
                    I'm him
                </p>
                <Link href="/JoshuaZhangResume.pdf"><button className="bg-slate-300 w-[20%] rounded-full text-slate-900">Resumé →</button></Link>
            </div>
            <div className="flex w-[50%] flex-col justify-center">
                <h1 className="mb-8 text-3xl font-semibold text-center text-slate-200">
                    My Tech Stack
                </h1>
                <div className="flex flex-wrap justify-center gap-8">
                    {TECH_LOGOS.map((value) => {
                        return <TechIcon logo={value} />;
                    })}
                </div>
            </div>
        </div>
    );
}
