"use client";

import { itemVariants, slideLeft, slideRight, stagger, viewAnimation } from "@/animations/motionVarients";
import { PROFILE } from "@/constants/profile";
import { motion } from "framer-motion";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { useSelector } from "react-redux";
import TextArea from "./ui/TextArea";

const ContactSection = () => {

  const selector = useSelector((state: any) => state.theme.theme);
  const theme = selector == 'dark' ? 'primary' : 'secondary';

  return (
    <div
      className="min-h-screen w-full max-w-[1600px] mx-auto py-10 md:py-20 px-4 sm:px-6 md:px-12"
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

        <div className="relative p-5 md:p-12 border border-black/10 dark:border-white/10 flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-20">

          {/* Background Glow */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/5 dark:bg-emerald-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500/5 dark:bg-emerald-500/5 rounded-full blur-3xl" />
          </div>

          {/* Start Project Badge */}
          <div className="font-code text-xs md:text-sm font-bold absolute -top-4 left-0 sm:-left-2 md:-left-4 px-3 py-1.5 md:px-4 md:py-2 -rotate-12 uppercase bg-yellow-300 text-black shadow-lg border border-black/20">
            Start a Project
          </div>

          {/* LEFT SIDE */}
          <div className="space-y-6 md:space-y-8 w-full lg:w-[50%]">

            <div>
              <p className="font-code text-3xl md:text-4xl font-bold leading-tight text-orange-500 dark:text-emerald-500 uppercase">
                Let's Build Something Amazing.
              </p>

              <p className="mt-4 font-code text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                I'm always open to new opportunities, freelance projects.
              </p>
            </div>

            {/* Contact Links */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col space-y-4"
            >
              {PROFILE.data.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
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
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={slideLeft}
            {...viewAnimation}
            className="w-full lg:max-w-2xl"
          >
            <form
              className="p-5 sm:p-6 md:p-8 space-y-6 border border-black/10 dark:border-white/10 bg-slate-100/80 dark:bg-black/50 backdrop-blur-md shadow-xl"
            >
              <Input
                label="Name"
                name="name"
                placeholder="Enter your name"
                autoFocus
                required
              />

              <Input
                label="Email"
                name="email"
                placeholder="Enter your email"
                required
              />

              <TextArea
                label="Message"
                name="message"
                placeholder="Enter your message"
                required
              />

              <Button type="submit" variant={theme} className="w-full" children="Send Message" />
            </form>
          </motion.div>
        </div>
      </motion.div>

    </div>
  )
}

export default ContactSection