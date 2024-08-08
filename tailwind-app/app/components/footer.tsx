import Link from "next/link";
import { BiLogoLinkedin, BiLogoGithub, BiLogoGmail } from "react-icons/bi";
import FooterToTop from "./footerToTop";

export default function Footer() {
    return (
        <div className="relative flex flex-col justify-center gap-2 py-8 text-center bg-slate-950">
            <FooterToTop/>
            <div>
                <p>© Copyright 2023 Joshua Zhang</p>
            </div>
            <div className="flex flex-row justify-center gap-4 text-xl">
                <Link
                    href="mailto:jzhang0224@gmail.com"
                    className="transition duration-300 hover:text-violet-300" aria-label="My email">
                    <BiLogoGmail />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/joshua-zhang-63a095236/"
                    className="transition duration-300 hover:text-violet-300" aria-label="My linkedin">
                    <BiLogoLinkedin />
                </Link>
                <Link
                    href="https://github.com/Teddygat0r"
                    className="transition duration-300 hover:text-violet-300" aria-label="My github">
                    <BiLogoGithub />
                </Link>
            </div>
        </div>
    );
}
