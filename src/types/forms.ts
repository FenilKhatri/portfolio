export interface FormProps {
  initialData?: any;
  onSuccess?: () => void;
  onCancel?: () => void;
}

export interface SkillFormData {
  category: string;
  skillName: string;
}

export interface EducationFormData {
  university: string;
  degree: string;
  fieldOfStudy?: string;
  startDate: string;
  endDate: string;
  cgpa: string;
}

export interface ExperienceFormData {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
}

export interface ProfileFormData {
  name: string;
  tagline: string;
  headline: string;
  about: string;
  profileImage: any;
  resume: any;
}

export interface ProjectFormData {
  title: string;
  description: string;
  techStack: string;
  githubURL: string;
  liveURL: string;
  image: any;
  projectStatus: string;
  featured: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface UseFormSubmitOptions {
  url: string;
  successMessage?: string;
  method?: string;
}
