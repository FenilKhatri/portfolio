"use client";

import Button from "@/components/ui/Button";
import { adminLinks } from "@/constants/links";
import useTheme from "@/hooks/useTheme";
import { LogOut, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface SidebarProps {
  mobile?: boolean;
}

const Sidebar = ({ mobile }: SidebarProps) => {

  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { theme, handleTheme } = useTheme();

  const logout = async () => {
    setLoading(true);
    await fetch("/api/auth/logout", {
      method: "POST",
    });
    router.push("/");
    setLoading(false);
    toast.success("Logout Successful");
  };

  if (mobile) {
    return (
      <div className="flex justify-around items-center px-2 py-3 w-full">
        {adminLinks.map((link) => {
          const isActive = pathname === link.path;
          const Icon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.path}
              className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-300 ${isActive
                ? "text-orange-600 dark:text-emerald-400 bg-orange-500/10 dark:bg-emerald-500/10"
                : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                }`}
            >
              {Icon && <Icon size={24} className={isActive ? "scale-110 transition-transform" : ""} />}
              <span className="text-[10px] font-medium mt-1">{link.name}</span>
            </Link>
          );
        })}
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col justify-between py-6 px-4">
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between items-center gap-3 mb-8 px-4">
          <p className="text-xl font-bold tracking-tight text-black dark:text-white">
            Admin<span className="text-orange-500 dark:text-emerald-500">Panel</span>
          </p>
          <button className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer" onClick={handleTheme}>
            {
              theme === "dark" ? <Sun size={20} /> : <Moon size={20} />
            }
          </button>
        </div>
        {adminLinks.map((link) => {
          const isActive = pathname === link.path;
          const Icon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.path}
              className={`group flex items-center gap-3 px-4 py-3 font-code rounded-xl transition-all duration-300 relative overflow-hidden ${isActive
                ? "text-orange-600 dark:text-emerald-400 font-semibold bg-orange-500/10 dark:bg-emerald-500/10 border border-orange-500/20 dark:border-emerald-500/20 shadow-sm"
                : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 border border-transparent"
                }`}
            >
              {isActive && (
                <div className="absolute left-0 top-0 w-1 h-full bg-orange-500 dark:bg-emerald-500 shadow-[0_0_10px_rgba(249,115,22,0.8)] dark:shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
              )}
              {Icon && <Icon size={20} className={`relative z-10 ${isActive ? "text-orange-500 dark:text-emerald-500" : ""}`} />}
              <span className="relative z-10">{link.name}</span>
            </Link>
          );
        })}
      </div>
      <Button variant="danger" onClick={logout} className="w-full flex justify-between items-center mt-4">
        <span>{loading ? "Logging out..." : "Logout"}</span>
        <LogOut size={20} />
      </Button>
    </div>
  );
};

export default Sidebar;