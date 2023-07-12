import Hero from "./components/hero";
import Portfolio from "./components/portfolio";
import About from "./components/about";

export default function Home() {
    return (
        <div className="flex flex-col justify-center w-full h-full">
            <Hero />
            <Portfolio />
            <About />
        </div>
    );
}
