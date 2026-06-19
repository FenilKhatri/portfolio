"use client";

import Link from "next/link";
import { Code2, Globe, Server, Database, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <main className="relative min-h-screen overflow-hidden flex items-center justify-center px-5">
            {/* Animated Rings */}
            <div className="floating-top-ring absolute h-80 w-80 border border-orange-500 dark:border-emerald-500/40 rounded-full -left-20 -bottom-20" />

            <div className="floating-bottom-ring absolute h-80 w-80 border border-orange-500 dark:border-emerald-500/40 rounded-full -right-20 -top-20" />

            {/* Floating Icons */}
            <div className="floating-icon absolute top-24 left-[15%] p-3 bg-background border border-border rounded-full shadow-lg">
                <Code2 className="text-orange-500 dark:text-emerald-500" />
            </div>

            <div
                className="floating-icon absolute top-40 right-[15%] p-3 bg-background border border-border rounded-full shadow-lg"
                style={{ animationDelay: "0.5s" }}
            >
                <Database className="text-orange-500 dark:text-emerald-500" />
            </div>

            <div
                className="floating-icon absolute bottom-32 left-[20%] p-3 bg-background border border-border rounded-full shadow-lg"
                style={{ animationDelay: "1s" }}
            >
                <Server className="text-orange-500 dark:text-emerald-500" />
            </div>

            <div
                className="floating-icon absolute bottom-24 right-[20%] p-3 bg-background border border-border rounded-full shadow-lg"
                style={{ animationDelay: "1.5s" }}
            >
                <Globe className="text-orange-500 dark:text-emerald-500" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 max-w-3xl text-center"
            >
                <span className="inline-block px-4 py-2 rounded-md bg-orange-500/10 dark:bg-emerald-500/10 border border-orange-500/20 dark:border-emerald-500/20 text-orange-500 dark:text-emerald-500 font-code">
                    ERROR 404
                </span>

                <h1 className="mt-8 text-7xl sm:text-8xl md:text-9xl font-bold font-heading">
                    <span className="text-orange-500 dark:text-emerald-500">
                        404
                    </span>
                </h1>

                <h2 className="mt-4 text-3xl md:text-5xl font-heading">
                    Route Not Found
                </h2>

                <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-8 max-w-xl mx-auto">
                    Looks like you've navigated to a route that doesn't
                    exist in my application.
                    Maybe it was deleted, renamed, or never deployed.
                </p>

                <div className="mt-8 bg-card border border-border rounded-xl p-4 max-w-lg mx-auto text-left font-code text-sm">
                    <p className="text-slate-500">
                        {">"} GET /unknown-route
                    </p>

                    <p className="mt-2 text-red-500">
                        Error: Cannot find route
                    </p>

                    <p className="mt-2 text-slate-500">
                        status: 404
                    </p>
                </div>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 mt-10 px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white font-medium transition-all duration-300 hover:scale-105"
                >
                    <Home size={18} />
                    Back To Home
                </Link>
            </motion.div>
        </main>
    );
}