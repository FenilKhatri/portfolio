"use client";

import Button from "@/components/ui/Button";
import { adminLinks } from "@/constants/links";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="h-full flex flex-col justify-between gap-3 overflow-y-auto">
      <div className="flex flex-row lg:flex-col gap-2 w-full overflow-x-auto pb-2 lg:pb-0 scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {adminLinks.map((link) => {
          const isActive = pathname === link.path;
          return (
            <Link
              key={link.name}
              href={link.path}
              className={`group flex items-center px-4 py-3 whitespace-nowrap font-code transition-all duration-300 relative overflow-hidden ${isActive
                  ? "text-orange-600 dark:text-emerald-400 font-semibold bg-orange-500/10 dark:bg-emerald-500/10 border border-orange-500/20 dark:border-emerald-500/20 shadow-sm"
                  : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 border border-transparent"
                }`}
            >
              {isActive && (
                <div className="absolute left-0 top-0 w-1 h-full bg-orange-500 dark:bg-emerald-500 shadow-[0_0_10px_rgba(249,115,22,0.8)] dark:shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
              )}
              <span className="relative z-10">{link.name}</span>
            </Link>
          );
        })}
      </div>
      <Button variant="danger" className="w-full flex justify-between items-center" >
        <span>Logout</span>
        <LogOut size={20} />
      </Button>
    </div>
  );
};

export default Sidebar;