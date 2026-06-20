"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { motion } from "framer-motion";

const EducationPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-5xl"
    >
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold font-code text-black dark:text-white tracking-tight">Add Education</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2 font-code">Manage your academic background and qualifications.</p>
      </div>
      
      <div className="p-6 md:p-10 w-full border-2 border-black/10 dark:border-white/10 bg-white/60 dark:bg-[#111] backdrop-blur-2xl shadow-2xl shadow-black/5 dark:shadow-black/50">
        <form className="flex flex-col space-y-6 md:space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Input label="College / University" name="college" placeholder="E.g. XYZ University" required />
            <Input label="Degree" name="degree" placeholder="E.g. Bachelor of Technology" required />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Input label="Start Year" name="startYear" type="number" placeholder="YYYY" required />
            <Input label="End Year" name="endYear" type="number" placeholder="YYYY" required />
            <Input label="CGPA / Grade" name="cgpa" placeholder="E.g. 8.5" required />
          </div>

          <div className="pt-4 flex justify-end">
            <Button type="submit" variant="primary" className="w-full md:w-auto px-12 py-4 shadow-lg shadow-orange-500/20 dark:shadow-emerald-500/20">Save Education</Button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default EducationPage;
