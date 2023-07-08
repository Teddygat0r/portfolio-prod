import Hero from "./components/hero"
import Portfolio from "./components/portfolio"

export default function Home() {
  return (
    <div className="flex flex-col justify-center w-full h-full">
        <Hero/>
        <div className="absolute w-full h-full translate-y-[56%] -skew-y-6 bg-white border-2 border-white -z-10"></div>

        <Portfolio/>
    </div>
  )
}
