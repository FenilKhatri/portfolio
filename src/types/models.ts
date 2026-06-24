export interface IExperience {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  skills?: string[];
}

export interface IEducation {
  university: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  cgpa: string;
}

export interface IProject {
  id?: number;
  title: string;
  description: string;
  techStack: string;
  githubURL: string;
  liveURL: string;
  projectStatus: string;
  featured: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
