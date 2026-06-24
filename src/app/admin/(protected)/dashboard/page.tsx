"use client";

import AdminCountCard from "@/components/admin/AdminCountCard";
import { useFetch } from "@/hooks/useFetch";
import { motion } from "framer-motion";
import { Users, FolderGit2, GraduationCap, Briefcase, Code2 } from "lucide-react";

interface DashboardData {
  totalContacts: number;
  totalProjects: number;
  totalEducation: number;
  totalExpereince: number;
  totalSkils: number;
}

const DashboardPage = () => {
  const { data, loading, error } = useFetch<DashboardData>("/api/admin/dashboard");

  if (loading) {
    return <div className="p-8 text-center text-gray-500 font-code">Loading dashboard...</div>;
  }

  if (error) {
    return <div className="p-8 text-center text-red-500 font-code">{error}</div>;
  }

  const stats = data ? [
    { title: "Contacts", count: data.totalContacts, icon: Users },
    { title: "Projects", count: data.totalProjects, icon: FolderGit2 },
    { title: "Education", count: data.totalEducation, icon: GraduationCap },
    { title: "Experience", count: data.totalExpereince, icon: Briefcase },
    { title: "Skills", count: data.totalSkils, icon: Code2 },
  ] : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-7xl"
    >
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold font-code text-black dark:text-white tracking-tight">Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2 font-code">Overview of your portfolio metrics.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <AdminCountCard
            key={index}
            title={stat.title}
            count={stat.count || 0}
            icon={stat.icon}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default DashboardPage;