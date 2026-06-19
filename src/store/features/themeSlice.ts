import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ThemeState = {
    theme: "light" | "dark";
};

const getInitialTheme = (): "light" | "dark" => {
    if (typeof window !== "undefined") {
        return (localStorage.getItem("theme") as "light" | "dark") || "dark";
    }
    return "dark";
};

const initialState: ThemeState = {
    theme: getInitialTheme(),
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<"light" | "dark">) => {
            state.theme = action.payload;
            if (typeof window !== "undefined") {
                localStorage.setItem("theme", action.payload);
            }
        },
        toggleTheme: (state) => {
            state.theme = state.theme === "dark" ? "light" : "dark";
            if (typeof window !== "undefined") {
                localStorage.setItem("theme", state.theme);
            }
        },
    },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;