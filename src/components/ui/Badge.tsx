import { motion } from "framer-motion";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge = ({ children, className = "" }: BadgeProps) => {
  return (
    <motion.span
      whileHover={{ y: -2 }}
      className={`px-3 py-1.5 rounded-md text-xs font-code font-medium text-orange-600 dark:text-emerald-400 bg-orange-500/10 dark:bg-emerald-500/10 border border-orange-500/20 dark:border-emerald-500/20 ${className}`}
    >
      {children}
    </motion.span>
  );
};

export default Badge;
