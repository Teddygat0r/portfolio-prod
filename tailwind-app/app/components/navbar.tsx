"use client";

import Link from "next/link";
import LinkDetails from "../interfaces/LinkDetails";

const NAVBAR_URLS: LinkDetails[] = [
    { desc: "Projects", url: "#portfolio" },
    { desc: "About", url: "#about" },
    { desc: "Friends", url: "friends" },
];

const scroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    url: string
) => {
    e.preventDefault();
    const obj = document.getElementById(url.toLowerCase().slice(1));
    obj?.scrollIntoView({ behavior: "smooth" });
};

export default function NavBar() {
    return (
        <nav
            className="justify-center hidden gap-16 mt-4 mb-8 md:flex"
            id="nav">
            {NAVBAR_URLS.map(({ desc, url }) => {
                return (
                    <Link
                        key={desc}
                        href={`${url}`}
                        onClick={(e) => {
                            if (url.startsWith("#"))
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
