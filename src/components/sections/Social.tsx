import { motion } from "framer-motion";
import { socialLinks } from "@/constants/links";

export const SocialDock = () => (
  <>
    {socialLinks.map(({ href, icon: Icon, label, id }) => (
      <motion.a
        key={label}
        id={id}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        whileHover={{ y: -3, scale: 1.15 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="flex items-center justify-center w-3 h-3 md:w-8 md:h-8 rounded-lg"
      >
        <Icon />
      </motion.a>
    ))}
  </>
);