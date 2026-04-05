import Project from "./project";
import ProjectProps from "../interfaces/ProjectProps";

const projects: ProjectProps[] = [
    {
        name: "Spotify Recommender",
        image: "Spotify",
        tech: ["Next", "React", "Typescript", "Tailwind", "Scikit"],
        desc: `Employed various data preprocessing techniques, including One Hot Encoding, MinMax scaling, and Z-score normalization, 
                to standardize the columns of a dataset. This data was then used to generate vector embeddings for 12,000 songs using distance
                formulas such as Cosine, Euclidean, and Manhattan. To make this resource accessible, I developed a Flask API server for
                fetching song recommendations. Additionally, I created an aesthetically pleasing user interface using Next.js and
                Tailwind CSS, providing users with a visual representation of songs and their recommended counterparts.`,
        url: "https://github.com/Teddygat0r/spotify-recommender",
    },
    {
        name: "WildEye AI",
        image: "Wildeye",
        tech: ["Tensorflow", "Next", "React", "Flask", "Tailwind"],
        desc: `Identifies movement within camera footage using image subtraction techniques, then submitting frames with movement to the image
                classification model. If it is determined that there was an animal inside the frame, it sends a POST request to the FLASK server to store the image. 
                Finally the database can be viewed through the NextJS frontend.`,
        url: "https://github.com/Teddygat0r/jetson-animal-detection",
    },
    {
        name: "Identifying NEOS using Tensorflow",
        image: "Astro",
        tech: ["Tensorflow", "Python"],
        desc: `This TensorFlow machine learning project focuses on detecting near-earth objects (NEOs) using data from NASA's WISE database. The
                goal is to develop a deep learning model that can identify and classify NEOs based on their infrared signatures. By leveraging 
                TensorFlow's capabilities, this project contributes to planetary defense efforts by enhancing our understanding and monitoring of
                potentially hazardous asteroids near Earth.`,
        url: "/projects/astro.pdf",
    },
];

export default function Portfolio() {
    return (
        <section
            className="flex flex-col justify-center gap-8 bg-white py-[8%] text-center"
            id="research"
        >
            <h1 className="my-8 text-5xl font-bold text-slate-900 md:my-0">
                Research & <span className="text-violet-800">Projects</span>
            </h1>
            <div className="flex flex-col gap-12">
                {projects.map((prop, i) => {
                    return (
                        <Project
                            name={prop.name}
                            image={prop.image}
                            tech={prop.tech}
                            desc={prop.desc}
                            url={prop.url}
                            key={i}
                        />
                    );
                })}
            </div>
        </section>
    );
}
