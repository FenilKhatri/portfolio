"use client";

import ProjectForm from "@/components/admin/ProjectForm";
import { motion } from "framer-motion";

const ProjectsPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-5xl"
    >
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold font-code text-black dark:text-white tracking-tight">Add Project</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2 font-code">Showcase your latest work and case studies.</p>
      </div>
      
      <div className="p-6 md:p-10 w-full border-2 border-black/10 dark:border-white/10 bg-white/60 dark:bg-[#111] backdrop-blur-2xl shadow-2xl shadow-black/5 dark:shadow-black/50">
        <ProjectForm />
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
