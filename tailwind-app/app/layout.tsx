import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import LinkDetails from "./interfaces/LinkDetails";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });
const NAVBAR_URLS: LinkDetails[] = [
    { desc: "Home", url: "/" },
    { desc: "Projects", url: "/projects" },
    { desc: "About", url: "/about" },
];

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",

};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
            <body
                className={`${inter.className} dark:bg-slate-900 text-slate-400 flex flex-col`}>
                <nav className="flex justify-center gap-16 my-4">
                    {NAVBAR_URLS.map(({ desc, url }) => {
                        return (
                            <Link
                                href={url}
                                className="p-4 transition duration-300 border-b-2 border-slate-900 hover:border-violet-300 hover:text-violet-300">
                                {desc}
                            </Link>
                        );
                    })}
                </nav>
                <main className="h-full">{children}</main>
                <Footer/>
            </body>
        </html>
    );
}