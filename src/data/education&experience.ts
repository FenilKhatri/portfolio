import { IEducation, IExperience } from "@/types/models";

export const experiences: IExperience[] = [
  {
    role: "Full Stack Developer Intern",
    company: "Tech Innovators Inc.",
    duration: "Jan 2024 - Present",
    location: "Remote",
    description: "Developing scalable web applications using Next.js and Node.js. Collaborated with a team of 5 to launch a new internal dashboard, improving efficiency by 30%."
  },
  {
    role: "Frontend Web Developer",
    company: "Freelance",
    duration: "Jun 2023 - Dec 2023",
    location: "Global",
    description: "Built performant landing pages and e-commerce frontends for multiple clients. Implemented complex animations and responsive designs."
  }
];

export const education: IEducation[] = [
  {
    university: "XYZ University",
    degree: "Bachelor",
    fieldOfStudy: "Computer Applications",
    startDate: "2023",
    endDate: "2026",
    cgpa: "8.0"
  },
  {
    university: "ABC School",
    degree: "Higher Secondary",
    fieldOfStudy: "Science",
    startDate: "2021",
    endDate: "2023",
    cgpa: "9.5"
  }
];