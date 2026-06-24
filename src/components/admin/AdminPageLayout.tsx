"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import React from "react";

interface AdminPageLayoutProps {
  title: string;
  isEditing?: boolean;
  setIsEditing?: (val: boolean) => void;
  actionButtonLabel?: string;
  children: React.ReactNode;
}

const AdminPageLayout = ({ title, isEditing, setIsEditing, actionButtonLabel, children }: AdminPageLayoutProps) => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-5xl"
    >
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold font-code text-black dark:text-white tracking-tight">{title}</h1>
          <div 
            className="flex items-center gap-2 mt-4 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer w-fit" 
            onClick={() => { isEditing && setIsEditing ? setIsEditing(false) : router.back() }}
          >
            <ArrowLeft size={18} />
            <span className="font-code font-medium">Back</span>
          </div>
        </div>
        {!isEditing && actionButtonLabel && setIsEditing && (
          <Button variant="primary" onClick={() => setIsEditing(true)}>
            {actionButtonLabel}
          </Button>
        )}
      </div>

      {children}
    </motion.div>
  );
};

export default AdminPageLayout;
