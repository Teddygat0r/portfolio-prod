import ExperienceProps from "../interfaces/ExperienceProps";
import Role from "./role";

const experience: ExperienceProps[] = [
    {
        name: "Stripe",
        image: "June 2025 -> Current",
        time: "2025",
        desc: `Software Engineer Intern`,
        url: "https://stripe.com/",
    },
    {
        name: "Amazon",
        image: "January 2025 -> June 2025",
        time: "2025",
        desc: `Software Engineer Intern`,
        url: "https://amazon.com/",
    },
    {
        name: "Art of Problem Solving",
        image: "Jun 2024 -> Sept 2024",
        time: "2024",
        desc: `Software Engineer Intern`,
        url: "https://aops.com/",
    },
    {
        name: "Advanced Robotics at UW",
        image: "Sept 2023 -> Current",
        time: "2025",
        desc: `Controls Team Software Engineer`,
        url: "https://aruw.org/",
    },
    {
        name: "Department of Homeland Security",
        image: "Jun 2023 -> Aug 2023",
        time: "2023",
        desc: `Software Engineer Intern`,
        url: "https://www.dhs.gov/",
    }
];

export default function Experience() {
    return (
        <section
            className="flex flex-col justify-center gap-16 bg-white py-[8%] text-center text-slate-600 lg:px-[12%]"
            id="experience"
        >
            <h1 className="my-8 text-5xl font-bold text-slate-900 md:my-0">
                My <span className="text-violet-800">Personal Journey</span>
            </h1>
            <div className="grid md:grid-cols-2">
                <div className="m-auto flex flex-col gap-6 text-left md:mx-[4%]">
                    <div className="flex gap-12 text-lg font-bold text-slate-900">
                        <h2>Year</h2>
                        <h2>Description</h2>
                    </div>
                    {experience.map((prop, i) => {
                        return (
                            <Role
                                name={prop.name}
                                image={prop.image}
                                time={prop.time}
                                desc={prop.desc}
                                url={prop.url}
                                key={i}
                            />
                        );
                    })}
                </div>
                <div className="hidden md:flex">
                    <img
                        src="/catCoding.webp"
                        alt={"Cat Coding"}
                        className="m-auto rounded-full aspect-square"
                    />
                </div>
            </div>
        </section>
    );
}
