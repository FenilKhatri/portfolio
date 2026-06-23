import { motion } from "framer-motion";

interface TerminalCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const TerminalCard = ({ children, className = "", delay = 0 }: TerminalCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className={`relative w-full rounded-xl overflow-hidden bg-black/40 dark:bg-black/60 border border-white/10 dark:border-white/5 backdrop-blur-sm shadow-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] dark:hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:border-orange-500/30 dark:hover:border-emerald-500/30 ${className}`}
    >
      {/* Mac OS Style Top Bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-white/5 dark:bg-white/5 border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
      </div>
      
      {/* Content Area */}
      <div className="p-6">
        {children}
      </div>
    </motion.div>
  );
};

export default TerminalCard;
