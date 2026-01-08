import type React from "react";

interface ContainerProps {
    children: React.ReactNode;
    classes? : string;
}

const Container = ({ children, classes }: ContainerProps) => {
    return (
        <div
        className={`max-w-5xl min-h-screen mx-auto relative ${classes}`}
        >
            {children}
        </div>
    )
}

export default Container;

// TODO: Add the vertical line to the container