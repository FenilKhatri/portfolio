"use client"

import { motion } from "framer-motion"
import { slideLeft, viewAnimation } from "@/animations/motionVarients"
import Title from "../ui/Title"
import H2 from "../ui/H2"
import TerminalCard from "../ui/TerminalCard"
import TimelineItem from "../ui/TimelineItem"
import Badge from "../ui/Badge"
import { education, experiences } from "@/data/education&experience"

const ExperienceAndEducationSection = () => {
  return (
    <div className="min-h-screen w-full max-w-[1600px] mx-auto px-5 py-20">
      <div className="overflow-x-clip px-4 -mx-4 w-full">
      <motion.div
        variants={slideLeft}
        {...viewAnimation}
        className="w-full flex flex-col space-y-16 items-start justify-start"
      >
        
        {/* Main Grid: Experience (Left) & Education (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 w-full">
          
          {/* Experience Column */}
          <div className="flex flex-col space-y-8">
            <div>
              <Title title="Career" />
              <H2>
                Professional<br />
                <span className="font-code text-orange-500 dark:text-emerald-500">Experience</span>
              </H2>
            </div>
            
            <div className="flex flex-col space-y-6">
              {experiences.map((exp, idx) => (
                <TerminalCard key={idx} delay={idx * 0.1}>
                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-orange-500 dark:text-emerald-500 font-code">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-gray-800 dark:text-white font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-left md:text-right">
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-code">
                          {exp.duration}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {exp.location}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.skills.map((skill, sIdx) => (
                        <Badge key={sIdx}>{skill}</Badge>
                      ))}
                    </div>
                  </div>
                </TerminalCard>
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
              {education.map((edu, idx) => (
                <TimelineItem 
                  key={idx}
                  degree={edu.degree}
                  institution={edu.institution}
                  year={edu.year}
                  status={edu.status}
                  isLast={idx === education.length - 1}
                  delay={idx * 0.15}
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
