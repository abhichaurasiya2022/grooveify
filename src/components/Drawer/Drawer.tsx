import React, { ReactNode, useEffect } from "react";

interface DrawerProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    children: ReactNode;
    side: "right" | "left" | "top" | "bottom"; // Define the 'side' prop
    width?: string; // Optional width prop
    height?: string; // Optional height prop
}

export default function Drawer({ children, isOpen, setIsOpen, side, width, height }: DrawerProps) {
    const getTransformClass = () => {
        switch (side) {
            case "right":
                return isOpen ? "translate-x-0" : "translate-x-full";
            case "left":
                return isOpen ? "translate-x-0" : "-translate-x-full";
            case "top":
                return isOpen ? "translate-y-0" : "-translate-y-full";
            case "bottom":
                return isOpen ? "translate-y-0" : "translate-y-full";
            default:
                return "";
        }
    };

    const closeDrawer = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeDrawer();
            }
        };

        const handleBackButton = () => {
            closeDrawer();
        };

        document.addEventListener("keydown", handleKeyPress);
        window.addEventListener("popstate", handleBackButton);

        return () => {
            document.removeEventListener("keydown", handleKeyPress);
            window.removeEventListener("popstate", handleBackButton);
        };
    }, [setIsOpen]);

    return (
        <main
            className={
                "fixed m-0 top-0 overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
                (isOpen
                    ? "transition-opacity opacity-100 duration-500 " + getTransformClass()
                    : "transition-all delay-500 opacity-0 " + getTransformClass())
            }
        >
            <section
                className={
                    "m-0 w-screen max-w-lg absolute bg-white shadow-xl delay-400 duration-500 ease-in-out transition-all " +
                    (side === "right" || side === "left" ? "h-full" : "h-screen") +
                    " " +
                    (width ? `w-${width}` : "") + // Set width if provided
                    " " +
                    (height ? `h-${height}` : "") + // Set height if provided
                    " " +
                    (side === "right"
                        ? "right-0 " + getTransformClass()
                        : side === "left"
                            ? "left-0 " + getTransformClass()
                            : side === "top"
                                ? "top-0 " + getTransformClass()
                                : side === "bottom"
                                    ? "bottom-0 " + getTransformClass()
                                    : "")
                }
            >
                <article className=" m-0 relative w-screen max-w-lg pb-10 flex flex-col  overflow-y-scroll h-full">
                    <button
                        className="absolute top-2 left-3 p-2 bg-transparent rounded-full"
                        onClick={closeDrawer}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-light-primary dark:text-dark-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                    {children}
                </article>
            </section>
            <section
                className="w-screen h-full cursor-pointer"
                onClick={closeDrawer}
            ></section>
        </main>
    );
}
