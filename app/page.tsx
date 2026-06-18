import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import { Metadata } from "next";

export const metaData: Metadata = {
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
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main id=""><HeroSection /></main>
      <section id="about"><AboutSection /></section>
      <section id="projects"><ProjectsSection /></section>
      <section id="contact"><ContactSection /></section>
    </>
  );
}
