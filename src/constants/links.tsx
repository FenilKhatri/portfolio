import { PROFILE } from "./profile";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/icons";

export const NavLinks = [
    { href: "/", label: "Home" },
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

export const adminLinks = [
    { name: "Home", path: "/" },
    { name: "Profile", path: "/admin/profile" },
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Projects", path: "/admin/projects" },
    { name: "Contacts", path: "/admin/contacts" },
    { name: "Skills", path: "/admin/skills" },
    { name: "Education", path: "/admin/education" },
    { name: "Experience", path: "/admin/experience" },
  ];