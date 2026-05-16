import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Joshua Zhang | ML Systems",
    description: "ML systems researcher at the University of Washington. Focused on efficient inference, SSM state compression, and multi-GPU training infrastructure.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main>{children}</main>
                <GoogleAnalytics gaId={"G-HGHL1B13CQ"} />
            </body>
        </html>
    );
}
