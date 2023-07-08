import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi"
import Link from "next/link";

export default function Hero() {
    return (
        <div className="flex flex-col justify-center gap-8 text-center my-[4%]">
            <h1 className="text-6xl font-bold text-slate-100">Joshua Zhang</h1>
            <h3 className="text-2xl font-semibold text-slate-300">
                I'm a Fullstack Developer at the
                University of Washington. <br/>Click here to see my <span className="text-violet-300">Projects</span>.
            </h3>
            <div className="flex flex-row gap-4 m-auto text-4xl">
                <Link href="https://www.linkedin.com/in/joshua-zhang-63a095236/"><BiLogoLinkedin/></Link>
                <Link href="https://github.com/Teddygat0r"><BiLogoGithub/></Link>
            </div>
        </div>
    );
}
