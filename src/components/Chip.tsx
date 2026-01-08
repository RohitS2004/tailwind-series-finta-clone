import type { ChipProps } from "../types";

const Chip = ({ text, icon }: ChipProps) => {
    return (
        <div className="bg-slate-200/50 mx-auto w-fit px-4 py-1 border-slate-300 border rounded-full cursor-pointer hover:bg-slate-200 flex gap-3 items-center transition-colors duration-100 ease-in">
            <span className="text-sm text-slate-700 font-semibold">{text}</span>
            {icon}
        </div>
    );
};

export default Chip;
