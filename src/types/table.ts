export type Contact = {
    id?: number;
    name: string;
    email: string;
    subject?: string;
    message: string;
};

export type Education = {
    id?: number;
    university: string;
    degree: string;
    fieldOfStudy: string;
    startDate: string;
    endDate: string;
    cgpa: string;
};

export type Experience = {
    id?: number;
    company: string;
    role: string;
    duration: string;
    location: string;
    description: string;
};

export type Project = {
    id?: number;
    title: string;
    description: string;
    techStack: string | string[];
    projectStatus: string;
    featured: boolean;
};

export type Skill = {
    id?: number;
    category: string;
    skillName: string;
    date?: string;
};