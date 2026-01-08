import type { ButtonProps } from "../types";

const Button = ({ buttonType, buttonText, buttonIcon }: ButtonProps) => {
    return buttonType === "primary" ? (
        <button className="text-slate-100 font-semibold text-md bg-primary px-3 py-1.5 rounded-lg shadow-primary-button-shadow text-shadow-2xs cursor-pointer hover:bg-primary-hover transition-colors duration-100 ease-in">
            {buttonText}
        </button>
    ) : (
        <button
        className="flex gap-2 items-center cursor-pointer hover:bg-slate-300 px-3 py-1.5 rounded-lg transition-colors duration-100 ease-in"
        >
            <span className="text-slate-700 font-semibold text-md">{buttonText}</span>
            {buttonIcon}
        </button>
    );
};

export default Button;
