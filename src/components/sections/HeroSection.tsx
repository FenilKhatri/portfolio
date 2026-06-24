"use client";

import { TypeAnimation } from "react-type-animation";
import Button from "../ui/Button";
import H1 from "../ui/H1";
import Description from "../ui/Description";
import { Download, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, scaleIn, loadAnimation } from "@/animations/motionVarients";
import useTheme from "@/hooks/useTheme";
import Heroimg from "../hero/Heroimg";
import { useEffect, useState } from "react";

const HeroSection = () => {

    const { theme } = useTheme();
    const [profile, setProfile] = useState<any>(null);

    useEffect(() => {
        const handleProfile = async () => {
            try {
                const res = await fetch("/api/profile");
                const data = await res.json();
                if (data.data && data.data.length > 0) {
                    setProfile(data.data[0]);
                }
            } catch (error) {
                console.log(error);
            }
        };
        handleProfile();
    }, []);

    if (!profile) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

    return (
        <div
            id="home"
            className="min-h-screen w-full max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-8 lg:gap-16 px-5 py-20"
        >
            {/* Text Section */}
            <motion.div
                variants={containerVariants}
                {...loadAnimation}
                className="w-full md:w-1/2 flex flex-col gap-5 md:gap-8 items-start text-left">
                <motion.div variants={itemVariants}>
                    <p className="bg-orange-100/20 dark:bg-emerald-100/20 text-orange-500 dark:text-emerald-500 border border-orange-500/30 dark:border-emerald-500/30 w-fit px-4 py-2">{profile.tagline}</p>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <H1 className="relative">
                        <span className="absolute -top-12 -left-5 md:-top-16 md:-left-20 opacity-30">
                            <Quote className="rotate-180 w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20" />
                        </span>
                        Hi, I'm{" "}
                        <span className="block font-code text-orange-500 dark:text-emerald-500 mt-2">
                            {profile.name}
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
                        {profile.headline}
                    </H1>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <Description className="max-w-2xl text-base sm:text-lg lg:text-xl leading-8 text-slate-600 dark:text-slate-400 text-justify">
                        {profile.about}
                    </Description>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto">
                    <a href="#projects">
                        <Button
                            variant={theme === "dark" ? "primary" : "secondary"}
                            size="md"
                        >
                            View Projects
                        </Button>
                    </a>

                    <a
                        href={profile.resumeURL}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            variant="outline"
                            size="md"
                            className="flex items-center gap-2"
                        >
                            Download Resume
                            <Download size={20} />
                        </Button>
                    </a>
                </motion.div>
            </motion.div>

            {/* Image Section */}
            <motion.div
                variants={scaleIn}
                {...loadAnimation}
                className="relative flex justify-center mt-12 md:mt-0 w-full md:w-1/2 mx-auto">

                {profile.imageURL && <Heroimg image={profile.imageURL} />}
            </motion.div>
        </div>
    );
};

export default HeroSection;