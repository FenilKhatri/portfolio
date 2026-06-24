import { motion } from "framer-motion";

interface TerminalCardProps {
  exp: any;
  delay?: number;
}

const TerminalCard = ({ exp, delay = 0 }: TerminalCardProps) => {
  return (
    <motion.div
      key={exp.id}
      className="group relative rounded-2xl overflow-hidden"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
    >
      {/* Inner card */}
      <div className="relative h-full bg-slate-100 dark:bg-[#0a0a0a] backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-black/5 dark:border-white/10 flex flex-col shadow-xl">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
              {exp.role}
            </h3>
            <p className="text-lg text-orange-600 dark:text-emerald-400 font-medium font-code mt-1">
              {exp.company}
            </p>
          </div>
          <div className="text-left md:text-right flex flex-col md:items-end gap-1">
            <span className="inline-block text-xs md:text-sm px-3 py-1 rounded-full bg-orange-100 dark:bg-white/5 text-orange-600 dark:text-gray-300 font-code font-semibold">
              {exp.duration}
            </span>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {exp.location}
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-black/5 dark:bg-white/10 my-4" />

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
          {exp.description}
        </p>
      </div>
    </motion.div>
  );
};

export default TerminalCard;
