import { stagger, viewAnimation } from "@/animations/motionVarients";
import { techStack } from "@/data/skills";
import { motion } from "framer-motion";

const TechCards = () => {
    return (
        <motion.div
            variants={stagger}
            {...viewAnimation}
            className="w-full mt-10 md:mt-16"
        >
            <div className="w-full border-y-4 border-black dark:border-white py-5">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border-l border-black/10 dark:border-white/10">
                    {
                        techStack.map((tech) => (
                            <motion.div
                                key={tech.name}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    show: { opacity: 1, y: 0 }
                                }}
                                className="group relative border border-black/10 dark:border-white/10 p-6 md:p-8 flex flex-col items-center justify-center overflow-hidden bg-transparent hover:bg-orange-500/5 dark:hover:bg-emerald-500/10 transition-colors duration-300 min-h-[120px] cursor-pointer"
                            >
                                {/* Hover background glow */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none flex items-center justify-center">
                                    <div className="w-16 h-16 bg-orange-500/30 dark:bg-emerald-500/30 blur-xl rounded-full scale-0 group-hover:scale-[2.5] transition-transform duration-700 ease-out"></div>
                                    <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-orange-500 dark:bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
                                </div>

                                <div className="relative z-10 flex flex-col items-center gap-2">
                                    <span className="text-[10px] md:text-xs tracking-[0.2em] text-black/40 dark:text-white/40 uppercase font-mono">
                                        . // {tech.type}
                                    </span>
                                    <span className="font-code text-sm md:text-lg font-bold tracking-wider uppercase text-black/80 dark:text-white/80 group-hover:text-orange-600 dark:group-hover:text-emerald-400 transition-colors duration-300 text-center">
                                        {tech.name}
                                    </span>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default TechCards;