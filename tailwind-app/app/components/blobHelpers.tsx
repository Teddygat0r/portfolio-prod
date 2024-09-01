export const toggleVisible = (input: string) => {
    const object = document.getElementById("blob");
    if (object) {
        object.style.opacity = input;
    }
};

export const moveBlob = (e: React.PointerEvent<HTMLElement>) => {
    document.getElementById("blob")?.animate(
        {
            left: `${e.pageX}px`,
            top: `${e.pageY}px`,
        },
        { duration: 5000, fill: "forwards" },
    );
};
