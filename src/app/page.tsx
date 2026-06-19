import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import { Metadata } from "next";
import SkillsSection from "@/components/SkillsSection";

export const metadata: Metadata = {
  metadataBase: new URL("https://fenil-khatri.vercel.app"),
  title: "Fenil Khatri | MERN Stack Developer",
  description: "Software Engineering Intern and MERN Stack Developer specializing in developing in Web development.",
  keywords: [
    "Fenil Khatri",
    "MERN Stack Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "Portfolio",
  ],
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    siteName: "Fenil Khatri",
    title: "Fenil Khatri | MERN Stack Developer",
    description: "Portfolio of Fenil Khatri, MERN Stack Developer.",
    images: ["/images/profile/image.png"],
  },
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="home" className="border-b border-slate-500"><HeroSection /></main>
      <section id="about" className="bg-linear-to-t from-stone-300 via-stone-200 to-stone-100 dark:bg-linear-to-t dark:from-black dark:via-zinc-950 dark:to-zinc-900 border-b border-slate-500"><AboutSection /></section>
      <section id='skills' className="border-b border-slate-500"><SkillsSection /></section>
      <section id='projects' className="border-b border-slate-500"><ProjectsSection /></section>
      <section id="contact" className="border-b border-slate-500"><ContactSection /></section>
    </>
  );
}
