"use client"

import { slideLeft, viewAnimation } from "@/animations/motionVarients"
import { motion } from "framer-motion"
import Title from "../ui/Title"
import H2 from "../ui/H2"
import ProjectCard from "../project/ProjectCard"

const ProjectsSection = () => {
  return (
    <div
      className="min-h-screen w-full max-w-[1600px] mx-auto px-5 py-20"
    >
      <div className="w-full h-full flex flex-col space-y-6 items-start justify-start">
        <div className="overflow-x-clip px-4 -mx-4 w-full">
          <motion.div
            variants={slideLeft}
            {...viewAnimation}
          >
        <Title title="Projects" />

        <H2>
          Explore my
          <br />
          <span className="font-code text-orange-500 dark:text-emerald-500">
            Web Projects
          </span>
        </H2>
          </motion.div>
        </div>

        <ProjectCard />
      </div>
    </div>
  )
}

export default ProjectsSection