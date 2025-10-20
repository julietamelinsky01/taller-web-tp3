export interface CV {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  skills: string[];
  experiences: Experience[];
  projects: Project[];
}

export interface Experience {
  title: string;
  company: string;
  startDate: Date;
  endDate: Date;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
}