import { motion } from "framer-motion";

interface TimelineItemProps {
  edu: any;
  isLast?: boolean;
  delay?: number;
}

const TimelineItem = ({ edu, isLast = false, delay = 0 }: TimelineItemProps) => {
  return (
    <div className="relative flex gap-6 pb-12">
      {/* Timeline Line & Dot */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: delay }}
          className="relative w-4 h-4 rounded-full bg-orange-500 dark:bg-emerald-500 z-10 shadow-[0_0_12px_rgba(249,115,22,0.8)] dark:shadow-[0_0_12px_rgba(16,185,129,0.8)]"
        >
          {/* Pulsing effect */}
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-orange-500 dark:bg-emerald-500"
          />
        </motion.div>
        
        {!isLast && (
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: delay + 0.2 }}
            className="w-0.5 bg-linear-to-b from-orange-500 to-transparent dark:from-emerald-500 dark:to-transparent absolute top-4 bottom-0"
          />
        )}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: delay + 0.1 }}
        className="flex flex-col space-y-2 -mt-1.5"
      >
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {edu.degree} {edu.fieldOfStudy ? `in ${edu.fieldOfStudy}` : ""}
        </h3>
        <p className="text-base text-gray-700 dark:text-gray-300">
          {edu.university}
        </p>
        <div className="flex flex-wrap items-center gap-3 mt-1">
          <span className="font-code text-sm text-orange-600 dark:text-emerald-400">
            {edu.startDate} - {edu.endDate}
          </span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-gray-600 dark:text-gray-400">
            CGPA (grade): {edu.cgpa}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default TimelineItem;
