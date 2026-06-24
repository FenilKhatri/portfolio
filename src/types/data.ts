export interface ProfileData {
  name: string;
  headline: string;
  tagline: string;
  about: string;
  imageURL: string;
  resumeURL: string;
}

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  techStack: string;
  imageURL: string;
  githubURL: string;
  liveURL: string;
  projectStatus: string;
  featured: boolean;
}

export interface SkillData {
  id: number;
  category: string;
  skillName: string;
}

export interface EducationData {
  id: number;
  university: string;
  degree: string;
  fieldOfStudy: string | null;
  startDate: string;
  endDate: string;
  cgpa: string;
}

export interface ExperienceData {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
}

export interface ContactData {
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
}
