import { PROFILE } from "./profile";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/icons";
import { Home, User, LayoutDashboard, Folder, Mail, Code, GraduationCap, Briefcase } from "lucide-react";

export const NavLinks = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#education&experience", label: "Experience" },
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
    { name: "Home", path: "/", icon: Home },
    { name: "Profile", path: "/admin/profile", icon: User },
    { name: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Projects", path: "/admin/projects", icon: Folder },
    { name: "Contacts", path: "/admin/contacts", icon: Mail },
    { name: "Skills", path: "/admin/skills", icon: Code },
    { name: "Education", path: "/admin/education", icon: GraduationCap },
    { name: "Experience", path: "/admin/experience", icon: Briefcase },
  ];