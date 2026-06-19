"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function ThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const theme = useSelector((state: RootState) => state.theme.theme);

    useEffect(() => {
        const html = document.documentElement;

        if (theme === "dark") {
            html.classList.add("dark");
        } else {
            html.classList.remove("dark");
        }
    }, [theme]);

    return <>{children}</>;
}