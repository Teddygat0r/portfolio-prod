import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Joshua Zhang | SDE",
    description: "i love ds",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
            <body
                className={`${inter.className} flex flex-col text-slate-400 dark:bg-slate-900`}
            >
                <main className="h-full">{children}</main>
                <GoogleAnalytics gaId={"G-HGHL1B13CQ"} />
            </body>
        </html>
    );
}
