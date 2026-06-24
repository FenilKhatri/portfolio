"use client"

import { motion } from "framer-motion"
import { slideLeft, viewAnimation } from "@/animations/motionVarients"
import Title from "../ui/Title"
import H2 from "../ui/H2"
import TerminalCard from "../ui/TerminalCard"
import TimelineItem from "../ui/TimelineItem"
import { useEffect, useState } from "react"
import { toast } from "sonner"

const ExperienceAndEducationSection = () => {

  const [experience, setExpreience] = useState([]);
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const handleExpereince = async () => {
      try {
        const response = await fetch("/api/experience");
        const data = await response.json();

        if (!response.ok) return toast.error(data.message || "Failed to fetch");

        setExpreience(data.data);
      } catch (error: any) {
        toast.error(error.message || "Something went wrong!");
      }
    }

    const handleEducation = async () => {
      try {
        const response = await fetch("/api/education");
        const data = await response.json();

        if (!response.ok) return toast.error(data.message || "Failed to fetch");

        setEducation(data.data);
      } catch (error: any) {
        toast.error(error.message || "Something went wrong!");
      }
    }

    handleExpereince();
    handleEducation();
  }, []);

  return (
    <div className="min-h-screen w-full max-w-[1600px] mx-auto px-5 py-20">
      <div className="overflow-x-clip px-4 -mx-4 w-full">
        <motion.div
          variants={slideLeft}
          {...viewAnimation}
          className="w-full flex flex-col space-y-16 items-start justify-start"
        >

          {/* Main Grid: Experience (Left) & Education (Right) */}
          <div className="grid grid-cols-1 gap-16 lg:gap-24 w-full">

            {/* Experience Column */}
            <div className="flex flex-col space-y-8">
              <div>
                <Title title="Career" />
                <H2>
                  Professional<br />
                  <span className="font-code text-orange-500 dark:text-emerald-500">Experience</span>
                </H2>
              </div>

              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                {experience.map((exp: any, index: number) => (
                  <TerminalCard key={exp.id} exp={exp} delay={index * 0.15} />
                ))}
              </div>
            </div>

            {/* Education Column */}
            <div className="flex flex-col space-y-8">
              <div>
                <Title title="Learning" />
                <H2>
                  Education &<br />
                  <span className="font-code text-orange-500 dark:text-emerald-500">Milestones</span>
                </H2>
              </div>

              <div className="pl-2 pt-4">
                {education.map((edu: any, index: number) => (
                  <TimelineItem
                    key={edu.id}
                    edu={edu}
                    isLast={index === education.length - 1}
                    delay={index * 0.15}
                  />
                ))}
              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </div>
  )
}

export default ExperienceAndEducationSection
