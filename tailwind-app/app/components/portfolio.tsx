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
        name: "ByTech",
        image: "bytech",
        tech: ["Next", "React", "Typescript", "Tailwind", "Firebase"],
        desc: `Classroom built for programming teachers. Allows teachers to host classrooms and publish coding assignments for their students. Gives teachers a 
                leetcode-esque platform for them to publish their own programming problems, create test cases, and manage assignments. Compiles python into WASM 
                to be run in browsers.`,
        url: "https://github.com/Teddygat0r/dualhacks",
    },
    {
        name: "Auto Reddit Video",
        image: "reddit",
        tech: ["Python"],
        desc: `Built a python script that scrapes reddit for a popular post, then edits together a Youtube Short / TikTok reading the post using text to speech, 
               with minecraft parkour playing in the background. Generated ~50k views and 1.5k likes across all platforms.`,
        url: "https://github.com/Teddygat0r/auto-reddit-video",
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
    {
        name: "Valorant Pro Vod Processor",
        image: "riot",
        tech: ["Python", "Next", "React", "Flask", "Tailwind"],
        desc: `Processes a valorant (VCT) game into JSON data for the game to be analyzed later. Will be using NextJS and Flask to host this data on
                a public frontend for users to look into.`,
        url: "https://github.com/Teddygat0r/valorant_vod_processor",
    },
    {
        name: "Racketeer Games",
        image: "Racketeer",
        tech: ["Nuxt", "Vue", "Tailwind", "Firebase"],
        desc: `Fullstack blog built around the Nuxt 3 Framework and Tailwind. It features User Auth, Likes, Read/Post, and Commenting features. 
                WYSIWYG editor designed with TipTap featuring image & video upload, font settings, text formatting -- similar Google Docs.
                Users are also able to filter for posts by tags and topics custom chosen by the author of the post.`,
        url: "https://github.com/Teddygat0r/blog",
    },
    {
        name: "Batman's Kitchen Web Design",
        image: "Batman",
        tech: ["Nuxt", "Vue", "Tailwind"],
        desc: `The redesigned homepage of UW Batman's Kitchen incorporates cutting-edge features to deliver an enhanced user experience. With reactive design, the website
                seamlessly adapts to various devices, ensuring a consistent and visually pleasing interface for both desktop and mobile users. `,
        url: "https://github.com/Teddygat0r/batmans-kitchen-homepage",
    },
    {
        name: "FFA Chess",
        image: "Chess",
        tech: ["Javascript", "Express", "Socketio"],
        desc: `Express.js and Socket.IO-powered free-for-all chess app enabling multiplayer gameplay with real-time communication and simultaneous matches. 
                Provides an interactive platform for chess enthusiasts to compete against multiple opponents in a dynamic and engaging environment.        `,
        url: "https://github.com/Teddygat0r/ffa-chess",
    },
];

export default function Portfolio() {
    return (
        <section
            className="flex flex-col justify-center gap-8 bg-white py-[8%] text-center"
            id="portfolio"
        >
            <h1 className="my-8 text-5xl font-bold text-slate-900 md:my-0">
                My <span className="text-violet-800">Projects</span>
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
