import Hero from "./components/hero";
import Portfolio from "./components/portfolio";
import About from "./components/about";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
    return (
        <div className="flex flex-col justify-center w-full h-full">
            <Hero />
            <Portfolio />
            <About />
            <Analytics />
        </div>
    );
}
