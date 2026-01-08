import type { ReactNode } from "react";

export type NavItem = {
    name: string;
    link: string;
    isButton?: boolean;
};

export interface NavabrProps {
    items: NavItem[];
}

export type ButtonType = "primary" | "plain";

export interface ButtonProps {
    buttonType?: ButtonType;
    buttonText?: string;
    buttonIcon?: ReactNode; // react node (element in the DOM tree)
}

export interface ChipProps {
    text: string;
    icon: ReactNode; // react node (element in the DOM tree)
}

export interface IconProps {
    width: number;
    height: number;
    fill: string;
    stroke: string;
    strokeWidth: number;
}