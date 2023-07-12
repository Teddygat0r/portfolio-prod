"use client";

import Link from "next/link";
import LinkDetails from "../interfaces/LinkDetails";

const NAVBAR_URLS: LinkDetails[] = [
    { desc: "Home", url: "/" },
    { desc: "Projects", url: "portfolio" },
    { desc: "About", url: "about" },
];

const scroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, url: string) => {
    e.preventDefault();
    const obj = document.getElementById(url.toLowerCase());
    obj?.scrollIntoView({ behavior: "smooth" });
};

export default function NavBar() {
    return (
        <nav className="flex justify-center gap-16 mt-4 mb-8" id="nav">
            {NAVBAR_URLS.map(({ desc, url }) => {
                return (
                    <Link
                        key={desc}
                        href={`#${url}`}
                        onClick={(e) => {
                            scroll(e, url);
                        }}
                        className="p-4 transition duration-300 border-b-2 border-slate-900 hover:border-violet-300 hover:text-violet-300">
                        {desc}
                    </Link>
                );
            })}
        </nav>
    );
}
