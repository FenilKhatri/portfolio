"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import { motion } from "framer-motion";

const ProfilePage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-5xl"
    >
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold font-code text-black dark:text-white tracking-tight">Profile Settings</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2 font-code">Manage your personal information and resume.</p>
      </div>
      
      <div className="p-6 md:p-10 w-full border-2 border-black/10 dark:border-white/10 bg-white/60 dark:bg-[#111] backdrop-blur-2xl shadow-2xl shadow-black/5 dark:shadow-black/50">
        <form className="flex flex-col space-y-6 md:space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Input label="Name" name="name" placeholder="Enter your full name" required />
            <Input label="Headline" name="headline" placeholder="E.g. Full Stack Developer" required />
          </div>
          
          <TextArea label="Bio" name="bio" placeholder="Write a short bio about yourself..." required />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-6 bg-black/5 dark:bg-white/5 border-2 border-black/10 dark:border-white/10">
            <Input 
              label="Profile Image" 
              name="profileImage" 
              type="file" 
              accept="image/*" 
              className="file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 dark:file:bg-emerald-500/10 dark:file:text-emerald-500 cursor-pointer"
            />

            <Input 
              label="Resume (PDF)" 
              name="resume" 
              type="file" 
              accept=".pdf" 
              className="file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 dark:file:bg-emerald-500/10 dark:file:text-emerald-500 cursor-pointer"
            />
          </div>

          <div className="pt-4 flex justify-end">
            <Button type="submit" variant="primary" className="w-full md:w-auto px-12 py-4 shadow-lg shadow-orange-500/20 dark:shadow-emerald-500/20">Save Profile</Button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default ProfilePage;
