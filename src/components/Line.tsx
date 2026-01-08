interface LineProps {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    orientation: "vertical" | "horizontal";
    leftVerticalLine?: boolean;
    topHorizontalLine?: boolean;
}

const Line = ({
    top,
    bottom,
    left,
    right,
    orientation,
    leftVerticalLine,
    topHorizontalLine,
}: LineProps) => {
    return orientation === "vertical" ? (
        <div
            className={`absolute w-px h-full top-0 bottom-0 ${
                leftVerticalLine ? left : right
            } bg-linear-to-b from-slate-200 via-slate-300 to-slate-200`}
        />
    ) : (
        <div
            className={`absolute w-full h-px right-0 left-0 ${
                topHorizontalLine ? top : bottom
            } bg-linear-to-r from-slate-200 via-slate-300 to-slate-200`}
        />
    );
};

export default Line;
