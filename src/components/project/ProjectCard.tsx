import { motion } from "framer-motion"
import { containerVariants, viewAnimation } from "@/animations/motionVarients"
import H2 from "../ui/H2"
import Description from "../ui/Description"
import { ArrowUpRightIcon, GithubIcon, LinkedinIcon } from "@/components/icons/index"
import CurvedClipCard from "../ui/CurvedClipCard"
import project1 from "@/public/images/projects/project1.png"

interface ProjectCardProps {
    reverse?: boolean;
}

const ProjectCard = ({ reverse = false }: ProjectCardProps) => {
    return (
        <>
            <motion.div
                variants={containerVariants}
                {...viewAnimation}
                className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 justify-between items-center w-full py-16 lg:py-24 border-b border-black/10 dark:border-white/5 last:border-b-0`}
            >
                <CurvedClipCard
                    image={project1}
                    variant="project"
                    dockPosition="bottom-right"
                    aspectRatio="16/10"
                    maxWidth="650px"
                    className="w-full lg:flex-[0_0_40%]"
                    dockContent={
                        <a href="#">
                            <ArrowUpRightIcon />
                        </a>
                    }
                />
                <div className="flex flex-col space-y-6 items-start flex-1 w-full lg:w-[45%]">
                    <H2 children="FreshMart E-Commerce" />
                    <Description children="A full-featured grocery shopping experience with real-time inventory management, secure payments, and a powerful admin dashboard." />

                    <div className="flex flex-col space-y-3 w-full pt-2">
                        <h3 className="text-sm font-bold tracking-wider text-orange-500 dark:text-emerald-500 uppercase font-code">Core Challenges</h3>
                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                            Implemented a complex caching layer with Redis to handle 10,000+ concurrent SKU updates during flash sales while maintaining sub-200ms response times.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-start gap-2 pt-2">
                        <span className="px-3 py-1.5 rounded-md text-xs font-code font-medium text-orange-600 dark:text-emerald-400 bg-orange-500/10 dark:bg-emerald-500/10 border border-orange-500/20 dark:border-emerald-500/20">Next.js</span>
                        <span className="px-3 py-1.5 rounded-md text-xs font-code font-medium text-orange-600 dark:text-emerald-400 bg-orange-500/10 dark:bg-emerald-500/10 border border-orange-500/20 dark:border-emerald-500/20">TypeScript</span>
                        <span className="px-3 py-1.5 rounded-md text-xs font-code font-medium text-orange-600 dark:text-emerald-400 bg-orange-500/10 dark:bg-emerald-500/10 border border-orange-500/20 dark:border-emerald-500/20">Node.js</span>
                        <span className="px-3 py-1.5 rounded-md text-xs font-code font-medium text-orange-600 dark:text-emerald-400 bg-orange-500/10 dark:bg-emerald-500/10 border border-orange-500/20 dark:border-emerald-500/20">MongoDB</span>
                        <span className="px-3 py-1.5 rounded-md text-xs font-code font-medium text-orange-600 dark:text-emerald-400 bg-orange-500/10 dark:bg-emerald-500/10 border border-orange-500/20 dark:border-emerald-500/20">Stripe</span>
                        <span className="px-3 py-1.5 rounded-md text-xs font-code font-medium text-orange-600 dark:text-emerald-400 bg-orange-500/10 dark:bg-emerald-500/10 border border-orange-500/20 dark:border-emerald-500/20">Redis</span>
                    </div>

                    <div className="flex flex-wrap items-center justify-start gap-4 w-full pt-4">
                        <a href="#" className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white px-5 py-2.5 rounded-lg transition-colors font-semibold text-sm">
                            <LinkedinIcon />
                            <span>Linkedin Live Demo</span>
                        </a>
                        <a href="#" className="flex items-center gap-2 bg-transparent hover:bg-black/5 dark:hover:bg-white/5 border border-black/10 dark:border-white/10 text-black dark:text-white px-5 py-2.5 rounded-lg transition-colors font-semibold text-sm">
                            <GithubIcon />
                            <span>Code</span>
                        </a>
                    </div>
                </div>

            </motion.div>
        </>
    )
}

export default ProjectCard