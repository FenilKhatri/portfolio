"use client"

import Sidebar from "@/components/admin/Sidebar";
import useTheme from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";

const layout = ({ children }: { children: React.ReactNode }) => {

    const { theme, handleTheme } = useTheme();

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-slate-50 dark:bg-[#0a0a0a]">
            {/* Sidebar Container */}
            <div className="w-full lg:w-72 xl:w-80 shrink-0 border-r border-black/5 dark:border-white/5 bg-white/50 dark:bg-black/50 backdrop-blur-xl z-10">
                <div className="flex flex-col lg:h-screen lg:sticky lg:top-0 p-5 lg:p-8">
                    <div className="mb-2 lg:mb-8 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center justify-center gap-3">
                            <div className="w-8 h-8 bg-orange-500 dark:bg-emerald-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
                                <span className="font-bold text-white text-lg font-code">FK</span>
                            </div>
                            <p className="font-code text-2xl font-bold bg-clip-text text-transparent bg-orange-500 dark:bg-emerald-500 tracking-tight">Admin Fenil</p>
                        </div>
                        <button className="cursor-pointer text-orange-500 dark:text-emerald-500" onClick={handleTheme}>
                            {
                                theme === "dark" ? <Sun size={24} /> : <Moon size={24} />
                            }
                        </button>
                    </div>
                    <Sidebar />
                </div>
            </div>

            {/* Main Content Container */}
            <div className="flex-1 w-full max-w-6xl mx-auto p-5 md:p-10 lg:p-12 overflow-x-hidden">
                {children}
            </div>
        </div>
    )
}

export default layout