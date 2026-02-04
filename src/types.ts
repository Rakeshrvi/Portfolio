
import React from 'react';

export interface NavLink {
  href: string;
  label: string;
}

export interface ExperienceItem {
  role: string;
  duration: string;
  company: string;
  companyLink: string;
  location: string;
  description: string[];
  projects?: {
    title: string;
    items: string[];
  };
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  funding?: string;
}

export interface VolunteeringItem {
  date: string;
  title: string;
  organization: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  specialization: string;
  institution: string;
  university: string;
  year: string;
  website: string;
}
