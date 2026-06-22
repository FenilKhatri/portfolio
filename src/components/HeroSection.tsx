"use client";

import { TypeAnimation } from "react-type-animation";
import Button from "./ui/Button";
import { Code2, Database, Download, Globe, Quote, Server } from "lucide-react";
import Image from "next/image";
import heroImg from "@/public/images/profile/image.png";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, scaleIn, loadAnimation } from "@/animations/motionVarients";
import useTheme from "@/hooks/useTheme";

const HeroSection = () => {

    const { theme } = useTheme();

    return (
        <div
            id="home"
            className="min-h-screen w-full max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-8 lg:gap-16 px-5 py-20 overflow-x-hidden lg:overflow-visible"
        >
            {/* Text Section */}
            <motion.div
                variants={containerVariants}
                {...loadAnimation}
                className="w-full md:w-1/2 flex flex-col gap-5 md:gap-8 items-start text-left">
                <motion.p variants={itemVariants} className="w-fit font-heading text-orange-600 dark:text-emerald-400 px-4 py-2 bg-orange-500/10 dark:bg-emerald-500/10 border border-orange-500/20 dark:border-emerald-500/20 rounded-md">
                    MERN Stack Intern
                </motion.p>

                <motion.h1 variants={itemVariants} className="relative font-body text-4xl sm:text-5xl lg:text-6xl leading-tight">
                    <span className="absolute -top-12 -left-5 md:-top-16 md:-left-20 opacity-30">
                        <Quote className="rotate-180 w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20" />
                    </span>
                    Hi, I'm{" "}
                    <span className="block font-code text-orange-500 dark:text-emerald-500 mt-2">
                        Fenil Khatri
                    </span>

                    <span className="text-orange-500 dark:text-emerald-500">
                        <TypeAnimation
                            sequence={[
                                "Build",
                                1200,
                                "Scale",
                                1200,
                                "Deploy",
                                1200,
                            ]}
                            wrapper="span"
                            speed={10}
                            repeat={Infinity}
                        />
                    </span>{" "}
                    Web Applications
                </motion.h1>

                <motion.p variants={itemVariants} className="max-w-2xl text-base sm:text-lg lg:text-xl leading-8 text-slate-600 dark:text-slate-400 text-justify">
                    I build responsive and user-focused web applications
                    using{" "}
                    <span className="font-medium text-black dark:text-white">
                        Next.js, TypeScript, Node.js, and MongoDB/MySQL
                    </span>
                    . As a Software Engineering Intern, I'm constantly
                    learning new technologies and improving my skills
                    through real-world projects.
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto">
                    <Button
                        variant={theme === "dark" ? "primary" : "secondary"}
                        size="md"
                        children={
                            <a href="#projects">
                                View Projects
                            </a>
                        }
                    />

                    <Button
                        variant="outline"
                        size="md"
                        children={
                            <a
                                href="/resume.pdf"
                                download
                                className="flex items-center gap-2"
                            >
                                Download Resume
                                <Download size={20} />
                            </a>
                        }
                    />
                </motion.div>
            </motion.div>

            {/* Image Section */}
            <motion.div
                variants={scaleIn}
                {...loadAnimation}
                className="relative flex justify-center mt-12 md:mt-0 w-full md:w-1/2 mx-auto">

                <div className="relative w-fit flex justify-center items-center">
                    {/* Availability Badge */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-background border border-border rounded-full px-4 py-2 shadow-lg whitespace-nowrap z-20">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-sm font-medium">
                                Available for Work
                            </span>
                        </div>
                    </div>

                    {/* Floating Icons */}
                    <div className="floating-icon absolute top-4 -left-4 sm:-left-8 md:-left-6 lg:-left-12 p-2 sm:p-3 bg-background border rounded-full shadow-lg z-20">
                        <Code2 className="text-orange-500 dark:text-emerald-500 w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    <div
                        className="floating-icon absolute top-16 -right-4 sm:-right-8 md:-right-6 lg:-right-12 p-2 sm:p-3 bg-background border rounded-full shadow-lg z-20"
                        style={{ animationDelay: "0.5s" }}
                    >
                        <Database className="text-orange-500 dark:text-emerald-500 w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    <div
                        className="floating-icon absolute bottom-16 -left-4 sm:-left-8 md:-left-6 lg:-left-12 p-2 sm:p-3 bg-background border rounded-full shadow-lg z-20"
                        style={{ animationDelay: "1s" }}
                    >
                        <Server className="text-orange-500 dark:text-emerald-500 w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    <div
                        className="floating-icon absolute bottom-4 -right-4 sm:-right-8 md:-right-6 lg:-right-12 p-2 sm:p-3 bg-background border rounded-full shadow-lg z-20"
                        style={{ animationDelay: "1.5s" }}
                    >
                        <Globe className="text-orange-500 dark:text-emerald-500 w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    {/* Bottom Left Ring */}
                    <div className="floating-top-ring absolute h-40 sm:h-50 lg:h-75 w-40 sm:w-50 lg:w-75 -bottom-10 sm:-bottom-16 -left-10 sm:-left-16 border border-orange-500 dark:border-emerald-500/40 rounded-full z-0" />

                    {/* Top Right Ring */}
                    <div className="floating-bottom-ring absolute h-40 sm:h-50 lg:h-75 w-40 sm:w-50 lg:w-75 -top-10 sm:-top-16 -right-10 sm:-right-16 border border-orange-500 dark:border-emerald-500/40 rounded-full z-0" />

                    {/* Profile Image */}
                    <Image
                        src={heroImg}
                        alt="Fenil Khatri"
                        width={500}
                        height={500}
                        priority
                        className="w-[250px] sm:w-[320px] md:w-[350px] lg:w-[450px] xl:w-[500px] h-auto rounded-full border-4 border-orange-500 dark:border-emerald-500 shadow-[0_0_80px_15px_rgba(249,115,22,0.4)] dark:shadow-[0_0_50px_10px_rgba(16,185,129,0.4)] z-10"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default HeroSection;