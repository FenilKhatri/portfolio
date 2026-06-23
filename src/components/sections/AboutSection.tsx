"use client";

import { itemVariants, slideLeft, slideRight, viewAnimation } from "@/animations/motionVarients";
import { motion } from "framer-motion";
import { aboutSkills } from "@/data/skills";
import H2 from "../ui/H2";
import Description from "../ui/Description";
import Title from "../ui/Title";
import SkillCard from "../ui/SkillCard";
import Photo from "../about/Photo";

const AboutSection = () => {
  return (
    <div
      className="min-h-screen w-full max-w-[1600px] mx-auto px-5 py-20"
    >
      <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* LEFT SIDE — image column */}
        <motion.div
          variants={slideLeft}
          {...viewAnimation}
          className="relative flex justify-center order-2 md:order-1"
        >
          <Photo />
        </motion.div>

        {/* RIGHT SIDE — text column */}
        <div className="order-1 md:order-2 overflow-x-clip px-4 -mx-4">
          <motion.div
            variants={slideRight}
            {...viewAnimation}
            className="space-y-6"
          >
          <Title title="About Me" />

          <H2>
              Building Modern
              <br />
              <span className="font-code text-orange-500 dark:text-emerald-500">
                  Web Experiences
              </span>
          </H2>

          <Description>
              I'm Fenil Khatri, an aspiring MERN Stack Developer passionate about building scalable, responsive, and user-friendly web applications. I enjoy solving real-world problems and transforming ideas into clean, functional, and impactful digital experiences.
          </Description>

          <Description>
              I'm continuously learning modern web technologies and best practices to improve my development skills and contribute effectively in a real-world engineering environment. I'm currently learning Node.js, TypeScript and MySQL to fit with modern technologies.
          </Description>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            {
              aboutSkills.map((skill) => (
                <SkillCard key={skill.label} value={skill.value} label={skill.label} variants={itemVariants} />
              ))
            }
          </div>
        </motion.div>
        </div>

      </div>
    </div>
  );
};

export default AboutSection;