"use client";

import { slideLeft, slideRight, viewAnimation } from "@/animations/motionVarients";
import { PROFILE } from "@/constants/profile";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <div
      className="min-h-screen w-full max-w-[1600px] mx-auto py-5 md:py-20"
    >
      <motion.div
        variants={slideRight}
        {...viewAnimation}
        className="space-y-5 md:space-y-10"
      >
        <div className="flex gap-5 items-center text-sm font-semibold tracking-[0.3em] uppercase text-orange-500 dark:text-emerald-500">
          <span className="h-3 w-3 rounded-full bg-orange-500 dark:bg-emerald-500 animate-bounce" />
          Contact
        </div>

        <div className="relative p-3 md:p-12 border border-black/10 dark:border-white/10 flex flex-wrap items-center gap-5">
          <div className="font-code font-bold absolute -top-4 -left-6 w-fit h-fit p-3 -rotate-12 uppercase bg-yellow-300 text-black">Start a project</div>
          {/* Left text */}
          <div className="space-y-3 md:space-y-5">
            {/* title */}
            <p className="font-code text-xl md:text-3xl lg:text-5xl font-bold leading-tight text-orange-500 dark:text-emerald-500 uppercase">Let's talk code.</p>
            {/* descriptions */}
            <p className="font-code text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400">I'm always open to new opportunities and freelance projects.</p>
            {/* links */}
            {
              PROFILE.data.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.id} className="flex items-center justify-start gap-5">
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 font-code font-semibold text-sm md:text-base rounded-xl hover:scale-105 transition-transform duration-200 active:scale-95">
                      <div className="bg-gray-100 dark:bg-white/10 p-3">
                        <Icon className="w-4 h-4 md:w-7 md:h-7" />
                      </div>
                      {item.value}
                    </a>
                  </div>
                )
              })
            }
          </div>
          {/* Right Form */}
        </div>
      </motion.div>

    </div>
  )
}

export default ContactSection