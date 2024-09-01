"use client";

const scroll = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const obj = document.getElementById("hero");
    obj?.scrollIntoView({ behavior: "smooth" });
};

export default function FooterToTop() {
    return (
        <div className="absolute inset-x-0 -top-[18px] flex justify-center">
            <button
                className="rounded-full bg-slate-400 p-3 text-slate-900 transition duration-300 hover:bg-violet-300"
                onClick={(e) => scroll(e)}
                aria-label="Scroll back to top"
                id="to-top"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-3 w-3 bg-transparent"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 15l7-7 7 7"
                    ></path>
                </svg>
            </button>
        </div>
    );
}
