"use client";

import { slideLeft, slideRight, viewAnimation } from "@/animations/motionVarients";
import { motion } from "framer-motion";
import aboutImg from "@/public/images/profile/image.png";
import { CurvedClipCard } from "@/components/ui/CurvedClipCard";
import { SocialDock } from "@/components/Social";
import { aboutSkills } from "@/data/skills";

const AboutSection = () => {
  return (
    <div
      className="min-h-screen w-full max-w-[1600px] mx-auto px-5 py-20 overflow-hidden"
    >
      <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* LEFT SIDE — image column */}
        <motion.div
          variants={slideLeft}
          {...viewAnimation}
          className="relative flex justify-center order-2 md:order-1"
        >
          {/* Ambient background glow */}
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] rounded-full bg-orange-500/15 dark:bg-emerald-500/15 blur-[100px]" />
          </div>

          {/* Subtle accent lines — minimal geometric decoration */}
          <div
            className="absolute -top-6 left-[10%] w-[35%] h-px opacity-40
              bg-linear-to-r from-transparent via-orange-400 to-transparent
              dark:via-emerald-500"
            style={{ animation: "pulse 4s ease-in-out infinite" }}
          />
          <div
            className="absolute -bottom-6 right-[10%] w-[35%] h-px opacity-30
              bg-linear-to-r from-transparent via-orange-400 to-transparent
              dark:via-emerald-500"
            style={{ animation: "pulse 4s ease-in-out 2s infinite" }}
          />
          <div
            className="absolute -top-6 left-[10%] w-px h-[200px] opacity-40
              bg-linear-to-t from-transparent via-orange-400 to-transparent
              dark:via-emerald-500"
            style={{ animation: "pulse 4s ease-in-out infinite" }}
          />
          <div
            className="absolute -bottom-6 right-[10%] w-px h-[200px] opacity-30
              bg-linear-to-b from-transparent via-orange-400 to-transparent
              dark:via-emerald-500"
            style={{ animation: "pulse 4s ease-in-out 2s infinite" }}
          />

          {/* Small accent dots */}
          <div className="absolute -top-3 left-[8%] w-1.5 h-1.5 rounded-full bg-orange-400/50 dark:bg-emerald-500/50" />
          <div className="absolute -bottom-3 right-[8%] w-1.5 h-1.5 rounded-full bg-orange-400/40 dark:bg-emerald-500/40" />

          <CurvedClipCard
            image={aboutImg}
            imageAlt="Fenil Khatri — MERN Stack Developer"
            dockPosition="top-right"
            dockContent={<SocialDock />}
          />
        </motion.div>

        <motion.div
          variants={slideRight}
          {...viewAnimation}
          className="space-y-6 order-1 md:order-2"
        >
          <div className="font-code flex gap-5 items-center text-sm font-semibold tracking-[0.3em] uppercase text-orange-500 dark:text-emerald-500">
            <span className="h-3 w-3 rounded-full bg-orange-500 dark:bg-emerald-500 animate-bounce" />
            About Me
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight">
            Building Modern
            <br />
            <span className="font-code text-orange-500 dark:text-emerald-500">
              Web Experiences
            </span>
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            I’m Fenil Khatri, an aspiring MERN Stack Developer passionate about building scalable, responsive, and user-friendly web applications. I enjoy solving real-world problems and transforming ideas into clean, functional, and impactful digital experiences.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            I’m continuously learning modern web technologies and best practices to improve my development skills and contribute effectively in a real-world engineering environment. I’m currently learning Node.js, TypeScript and MySQL to fit with modern technologies.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            {
              aboutSkills.map((skill) => (
                <div key={skill.value} className="rounded-2xl border border-orange-200 dark:border-emerald-500/30 p-5 backdrop-blur-md bg-white/50 dark:bg-white/5">
                  <h3 className="font-code text-xl md:text-2xl font-bold text-orange-500 dark:text-emerald-500">
                    {skill.value}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.label}
                  </p>
                </div>
              ))
            }
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default AboutSection;