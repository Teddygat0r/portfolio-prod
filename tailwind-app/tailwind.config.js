module.exports = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            dropShadow: {
                glow: [
                  "0 0px 20px rgba(255,255, 255, 0.35)",
                  "0 0px 65px rgba(255, 255,255, 0.2)",
                ],
            }
        },
    },
    plugins: [],
};
