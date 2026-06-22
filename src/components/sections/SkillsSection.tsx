"use client"
import { motion } from "framer-motion";
import TechCards from "../ui/TechCards";

const SkillsSection = () => {
    return (
        <div
            className="min-h-screen w-full max-w-[1600px] mx-auto px-5 py-10 overflow-hidden"
        >
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-3 md:space-y-10 order-1 md:order-2"
            >
                <div className="font-code text-sm uppercase font-semibold tracking-[0.3em] text-orange-500 dark:text-emerald-500">
                    Technical Arsenal
                </div>

                <h2 className="text-3xl md:text-5xl lg:text-6xl w-full max-w-3xl font-medium leading-tight">
                    Modern Technologies for {" "}
                    <span className="font-code text-orange-500 dark:text-emerald-500">future-proof</span>{" "}
                    applications.
                </h2>

                <TechCards />
            </motion.div>
        </div>
    )
}

export default SkillsSection