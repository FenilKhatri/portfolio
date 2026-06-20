"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
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
        <form className="flex flex-col space-y-6 md:space-y-8">
          <Input label="Project Title" name="title" placeholder="Enter project title" required />
          <TextArea label="Description" name="description" placeholder="Project description..." required />
          
          <Input label="Tech Stack" name="techStack" placeholder="E.g. React, Next.js, Tailwind (comma separated)" required />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Input label="GitHub URL" name="githubUrl" type="url" placeholder="https://github.com/..." />
            <Input label="Live URL" name="liveUrl" type="url" placeholder="https://..." />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-6 bg-black/5 dark:bg-white/5 border-2 border-black/10 dark:border-white/10">
            <Input 
              label="Project Image" 
              name="image" 
              type="file" 
              accept="image/*" 
              className="file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 dark:file:bg-emerald-500/10 dark:file:text-emerald-500 cursor-pointer"
            />

            <div className="flex flex-col gap-2">
              <label className="font-code text-sm md:text-base font-semibold text-orange-500 dark:text-emerald-500">
                Status
              </label>
              <select name="status" className="w-full px-4 py-3 font-code bg-white dark:bg-black/50 border border-black/10 dark:border-white/10 outline-none transition-all duration-300 focus:border-orange-500 dark:focus:border-emerald-500 focus:shadow-[0_0_15px_rgba(249,115,22,0.15)] dark:focus:shadow-[0_0_15px_rgba(16,185,129,0.15)] text-black dark:text-white cursor-pointer">
                <option value="completed" className="dark:bg-[#111]">Completed</option>
                <option value="in_progress" className="dark:bg-[#111]">In Progress</option>
                <option value="planned" className="dark:bg-[#111]">Planned</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 border border-orange-500/20 dark:border-emerald-500/20 bg-orange-500/5 dark:bg-emerald-500/5">
            <input type="checkbox" id="featured" name="featured" className="w-5 h-5 accent-orange-500 dark:accent-emerald-500 cursor-pointer" />
            <label htmlFor="featured" className="font-code text-sm md:text-base font-semibold text-black dark:text-white cursor-pointer">
              Mark as Featured Project
            </label>
          </div>

          <div className="pt-4 flex justify-end">
            <Button type="submit" variant="primary" className="w-full md:w-auto px-12 py-4 shadow-lg shadow-orange-500/20 dark:shadow-emerald-500/20">Save Project</Button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
