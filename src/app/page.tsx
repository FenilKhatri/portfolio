import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceAndEducationSection from "@/components/sections/ExperienceAndEducationSection";
import ContactSection from "@/components/sections/ContactSection";
import { Metadata } from "next";
import SkillsSection from "@/components/sections/SkillsSection";

export const metadata: Metadata = {
  metadataBase: new URL("https://fenil-khatri.vercel.app"),
  title: "Fenil Khatri | MERN Stack Developer & Software Engineer",
  description: "Portfolio of Fenil Khatri, a Software Engineering Intern and MERN Stack Developer specializing in building high-performance, responsive web applications using Next.js, React, and TypeScript.",
  keywords: [
    "Fenil Khatri",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Node.js",
    "Portfolio",
    "Software Engineer",
    "Web Development"
  ],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    type: "website",
    url: "https://fenil-khatri.vercel.app",
    siteName: "Fenil Khatri",
    title: "Fenil Khatri | Full Stack Developer",
    description: "Explore my projects, skills, and experience as a MERN Stack Developer.",
    images: ["/images/profile/image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fenil Khatri | MERN Stack Developer",
    description: "Explore my projects, skills, and experience as a MERN Stack Developer.",
    images: ["/images/profile/image.png"],
  }
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="home" className="border-b border-slate-500"><HeroSection /></main>
      <section id="about" className="bg-linear-to-t from-stone-300 via-stone-200 to-stone-100 dark:bg-linear-to-t dark:from-black dark:via-zinc-950 dark:to-zinc-900 border-b border-slate-500"><AboutSection /></section>
      <section id='skills' className="border-b border-slate-500"><SkillsSection /></section>
      <section id='education&experience' className="border-b border-slate-500"><ExperienceAndEducationSection /></section>
      <section id='projects' className="border-b border-slate-500"><ProjectsSection /></section>
      <section id="contact" className="border-b border-slate-500"><ContactSection /></section>
    </>
  );
}
