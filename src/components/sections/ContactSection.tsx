"use client";

import { itemVariants, slideRight, stagger, viewAnimation } from "@/animations/motionVarients";
import { PROFILE } from "@/constants/profile";
import { motion } from "framer-motion";
import H2 from "../ui/H2";
import Description from "../ui/Description";
import Title from "../ui/Title";

const ContactSection = () => {
  return (
    <div
      className="min-h-screen w-full max-w-[1600px] mx-auto py-10 md:py-20 px-4 sm:px-6 md:px-12"
    >

      <div
        className="space-y-5 md:space-y-10"
      >
        <Title title="Contact" />

        <div className="relative p-5 md:p-12 border border-black/10 dark:border-white/10 flex flex-col items-center justify-center gap-10">

          {/* Background Glow */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/5 dark:bg-emerald-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500/5 dark:bg-emerald-500/5 rounded-full blur-3xl" />
          </div>

          {/* Start Project Badge */}
          <div className="font-code text-xs md:text-sm font-bold absolute -top-4 left-0 sm:-left-2 md:-left-4 px-3 py-1.5 md:px-4 md:py-2 -rotate-12 uppercase bg-yellow-300 text-black shadow-lg border border-black/20">
            Start a Project
          </div>

          {/* Main Content */}
          <div className="w-full max-w-2xl mx-auto overflow-x-clip px-4">
            <motion.div
              variants={slideRight}
              {...viewAnimation}
              className="space-y-6 md:space-y-8"
            >

            <div className="mt-0">
              <H2>
                  <span className="font-code text-orange-500 dark:text-emerald-500">
                      Let's Build Something Amazing.
                  </span>
              </H2>

              <Description className="font-code mt-4">
                  I'm always open to new opportunities and freelance projects. Whether you have a question or just want to say hi, feel free to reach out using the links below!
              </Description>
            </div>

            {/* Contact Links */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col space-y-4 pt-4"
            >
              {PROFILE.data.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                  >
                    <a
                      href={item.href || "#"}
                      target={item.href ? "_blank" : undefined}
                      rel={item.href ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 hover:translate-x-2"
                    >
                      <div
                        className="p-3 bg-gray-100 dark:bg-white/10 transition-all duration-300 group-hover:bg-orange-500 dark:group-hover:bg-emerald-500 group-hover:text-white"
                      >
                        <Icon className="w-5 h-5 md:w-6 md:h-6" />
                      </div>

                      <span className="font-code text-sm md:text-base font-semibold break-all">
                        {item.value}
                      </span>
                    </a>
                  </motion.div>
                );
              })}
            </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default ContactSection