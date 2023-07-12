'use client';

const scroll = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const obj = document.getElementById("nav");
    obj?.scrollIntoView({ behavior: "smooth" });
};

export default function FooterToTop() {
    return (
        <div className="absolute inset-x-0 flex justify-center -top-[18px]" >
            <button className="p-3 transition duration-300 rounded-full bg-slate-400 text-slate-900 hover:bg-violet-300" onClick={(e) => scroll(e)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-3 h-3 bg-transparent">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 15l7-7 7 7"></path>
                </svg>
            </button>
        </div>
    );
}
