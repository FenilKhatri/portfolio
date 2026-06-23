import type { ReactNode } from "react";

type IconComponent = () => ReactNode;

export const ArrowUpRightIcon: IconComponent = () => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-3.5 h-3.5 md:w-5 md:h-5"
    >
        <path d="M7 17L17 7" />
        <path d="M8 7H17V16" />
    </svg>
);