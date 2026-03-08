export interface NavLink {
  label: string;
  href: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type?: string;
  description: string[];
  tags: string[];
}

export interface ProjectItem {
  title: string;
  arabicTitle?: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface ContactLink {
  name: string;
  href: string;
  label: string;
}

export interface Content {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    logo: string;
    links: NavLink[];
    langToggle: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    sectionTag: string;
    sectionTitle: string;
    paragraphs: string[];
  };
  experience: {
    sectionTag: string;
    sectionTitle: string;
    items: ExperienceItem[];
  };
  projects: {
    sectionTag: string;
    sectionTitle: string;
    githubLabel: string;
    demoLabel: string;
    items: ProjectItem[];
  };
  skills: {
    sectionTag: string;
    sectionTitle: string;
    categories: SkillCategory[];
  };
  resume: {
    sectionTag: string;
    sectionTitle: string;
    subtitle: string;
    button: string;
    filePath: string;
  };
  contact: {
    sectionTag: string;
    sectionTitle: string;
    subtitle: string;
    email: string;
    phone: string;
    links: ContactLink[];
  };
  footer: {
    copyright: string;
    madeWith: string;
  };
}
