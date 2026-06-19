import { PROFILE } from "./profile";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ICONS";

export const NavLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

export const socialLinks = [
  {
    href: PROFILE.socials.github,
    icon: GithubIcon,
    label: "GitHub",
    id: "about-github-link",
  },
  {
    href: PROFILE.socials.linkedin,
    icon: LinkedinIcon,
    label: "LinkedIn",
    id: "about-linkedin-link",
  },
  {
    href: PROFILE.socials.instagram,
    icon: InstagramIcon,
    label: "Instagram",
    id: "about-instagram-link",
  },
];