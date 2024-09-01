import Hero from "./components/hero";
import Portfolio from "./components/portfolio";
import About from "./components/about";
import { Analytics } from "@vercel/analytics/react";
import Experience from "./components/experience";

export default function Home() {
    return (
        <div className="flex h-full w-full flex-col justify-center">
            <Hero />
            <Experience />
            <About />
            <Portfolio />
            <Analytics />
            <div
                className="absolute -z-10 aspect-square w-[10%] justify-start rounded-full bg-gradient-to-br from-sky-500 to-emerald-800 opacity-0 blur-[100px] transition duration-1000"
                id="blob"
            ></div>
            z
        </div>
    );
}
