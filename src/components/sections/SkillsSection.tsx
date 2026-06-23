"use client"
import { motion } from "framer-motion";
import TechCards from "../ui/TechCards";
import Title from "../ui/Title";
import H2 from "../ui/H2";

const SkillsSection = () => {
    return (
        <div
            className="min-h-screen w-full max-w-[1600px] mx-auto px-5 py-10"
        >
            <div className="overflow-x-clip px-4 -mx-4 w-full">
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-3 md:space-y-10 order-1 md:order-2"
            >
                <Title title="Technical Arsenal" />

                <H2>
                    Modern Technologies for{" "}
                    <br />
                    <span className="font-code text-orange-500 dark:text-emerald-500">
                        future-proof
                    </span>{" "}
                    applications
                </H2>

                <TechCards />
            </motion.div>
            </div>
        </div>
    )
}

export default SkillsSection