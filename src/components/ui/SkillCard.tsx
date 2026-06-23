import { motion } from "framer-motion";
import { viewAnimation } from "@/animations/motionVarients";

const SkillCard = ({ value, label, variants }: { value: string, label: string, variants?: any }) => {
    return (
        <motion.div
            {...viewAnimation}
            variants={variants}
            className="border border-orange-200 dark:border-emerald-500/30 p-5 backdrop-blur-md bg-white/50 dark:bg-white/5 hover:rounded-lg transition-all duration-300 cursor-pointer">
            <h3 className="font-code text-xl md:text-2xl font-bold text-orange-500 dark:text-emerald-500">
                {value}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
                {label}
            </p>
        </motion.div>
    )
}

export default SkillCard