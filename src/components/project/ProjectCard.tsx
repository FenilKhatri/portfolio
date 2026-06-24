import { motion } from "framer-motion"
import { containerVariants, viewAnimation } from "@/animations/motionVarients"
import H2 from "../ui/H2"
import Description from "../ui/Description"
import { ArrowUpRightIcon, GithubIcon, LinkedinIcon } from "@/components/icons/index"
import CurvedClipCard from "../ui/CurvedClipCard"
import { projects } from "@/data/projects"

interface ProjectCardProps {
    reverse?: boolean;
}

const ProjectCard = ({ reverse = false }: ProjectCardProps) => {

    return (
        <>
            {
                projects.map((project: any, index: number) => {
                    const titleText = project.title.split(" - ");

                    const title = titleText[0];
                    const tag = titleText.slice(1).join(" - ");
                    return (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 justify-between items-center w-full py-16 lg:py-24 border-b border-black/10 dark:border-white/5 last:border-b-0`}
                        >
                            <CurvedClipCard
                                image={project.imageURL}
                                variant="project"
                                dockPosition="bottom-right"
                                aspectRatio="16/10"
                                maxWidth="650px"
                                className="w-full lg:flex-[0_0_40%]"
                                dockContent={
                                    <a href={project.liveURL} target="_blank">
                                        <ArrowUpRightIcon />
                                    </a>
                                }
                            />
                            <div className="flex flex-col space-y-6 items-start flex-1 w-full lg:w-[45%]">
                                <H2 className="text-orange-500 dark:text-emerald-500">
                                    <span>{title}</span>
                                    {" - "}
                                    {
                                        tag && (
                                            <span className="text-black dark:text-white">{tag}</span>
                                        )
                                    }
                                </H2>
                                <Description children={project.description} />

                                <div className="flex flex-wrap items-start gap-2 pt-2">
                                    {
                                        project.techStack.split(',').map((stack: string) => (
                                            <span key={stack.trim()} className="px-3 py-1.5 rounded-md text-xs font-code font-medium text-orange-600 dark:text-emerald-400 bg-orange-500/10 dark:bg-emerald-500/10 border border-orange-500/20 dark:border-emerald-500/20">
                                                {stack.trim()}
                                            </span>
                                        ))
                                    }
                                </div>

                                <a href={project.githubURL} target="_blank" className="flex items-center gap-2 bg-transparent hover:bg-black/5 dark:hover:bg-white/5 border border-black/10 dark:border-white/10 text-black dark:text-white px-5 py-2.5 rounded-lg transition-colors font-semibold text-sm">
                                    <GithubIcon />
                                    <span>Code</span>
                                </a>
                            </div>

                        </motion.div>
                    )
                })
            }
        </>
    )
}

export default ProjectCard