import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
    title: "Joshua Zhang | SDE",
    description: "My Portfolio",

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
                <main className="h-full">{children}</main>
                <Footer/>
            </body>
        </html>
    );
}
