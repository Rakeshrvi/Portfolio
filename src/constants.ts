// FIX: Import React to be able to use React.createElement
import React from 'react';
import type { NavLink, ExperienceItem, SkillCategory, Project, VolunteeringItem, EducationItem } from './types';
import { Briefcase, Building, ChartPie, CheckCircle, ChevronRight, Code, Cogs, Cpu, GraduationCap, HardDrive, Mail, MapPin, Phone, Rocket, Shield, ShoppingCart, Star, Tractor, Truck, Users, Zap } from './components/icons';

export const NAV_LINKS: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#volunteering', label: 'Volunteering' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Regional Material Coordinator',
    duration: 'July 2023 - July 2024 (1+ Years)',
    company: 'L&T Construction (Renewable Energy)',
    companyLink: 'https://www.lntecc.com/',
    location: 'Ahmedabad, Gujarat',
    description: [
      'Spearheaded end-to-end material management for 4 major solar power plant projects.',
      'Managed a complex import portfolio over ₹750 Crores, navigating FOB/CIF incoterms.',
      'Cultivated strategic partnerships with 60+ reputed domestic and international suppliers.',
    ],
    projects: {
      title: 'Major Projects Handled',
      items: [
        '210 MW Solar Power Plant, Babarzar, Gujarat for GSECL',
        '40 MW Solar Power Plant, Haripar, Gujarat for GSECL',
        '35 MW Solar Power Plant with 57 MWH BESS, Kutch, Gujarat for GSECL',
        '25 MW Solar Power Plant Palitana, Gujarat for GSECL',
      ]
    }
  },
  {
    role: 'Logistics & Supply Chain Intern',
    duration: 'Oct 2024 - Dec 2024 (3 Months)',
    company: 'Apollo Tyres Ltd',
    companyLink: 'https://www.apollotyres.com/en-in/',
    location: 'Kochi, Kerala',
    description: [
      'Coordinated finished goods logistics from 10+ Distribution Centers to 5+ Warehouses.',
      'Developed MIS reports for 18 DCs in Power BI, enhancing operational visibility.',
    ],
    projects: {
        title: 'Major Project Handled',
        items: ['Created a comprehensive Power BI Dashboard for the SCM department.']
    }
  },
  {
    role: 'Graphic Design Lead',
    duration: 'April 2021 - April 2022 (1 Year)',
    company: 'Revertech IT Solutions Pvt Ltd',
    companyLink: 'https://revertechitsolution.com/',
    location: 'Remote',
    description: [
        'Led a creative team of 10 members in conceptualizing innovative visual content tailored to client needs.',
        'Delivered impactful designs that significantly enhanced brand engagement across multiple client projects.'
    ]
  },
];

export const SKILLS_DATA: SkillCategory[] = [
    {
        title: 'SCM',
        icon: React.createElement(Cogs),
        skills: [
            { name: 'Procurement & Sourcing', icon: React.createElement(ShoppingCart) },
            { name: 'Vendor Management', icon: React.createElement(Users) },
            { name: 'Logistics & Transportation', icon: React.createElement(Truck) },
            { name: 'Inventory Optimization', icon: React.createElement(HardDrive) },
        ]
    },
    {
        title: 'Analytical',
        icon: React.createElement(ChartPie),
        skills: [
            { name: 'Business Analytics', icon: React.createElement(Rocket) },
            { name: 'Data-Driven Decisions', icon: React.createElement(Cpu) },
            { name: 'Process Improvement', icon: React.createElement(Zap) },
            { name: 'ERP Systems (SAP MM)', icon: React.createElement(Code) },
        ]
    },
    {
        title: 'Other Skills',
        icon: React.createElement(Star),
        skills: [
            { name: 'Renewable Energy Sector', icon: React.createElement(Zap) },
            { name: 'Project Coordination', icon: React.createElement(Briefcase) },
            { name: 'Stakeholder Management', icon: React.createElement(Users) },
            { name: 'Engineering Fundamentals', icon: React.createElement(Cogs) },
        ]
    }
];

export const PROJECTS_DATA: Project[] = [
    {
        title: 'Assistive Wheels for Differently Abled',
        description: 'A part of my Bachelor\'s Degree, this project focused on an Electrically Powered Wheel system to enhance mobility and independence for individuals with disabilities.',
    },
    {
        title: 'Sourajala Solar Based Water Pump with 2000L Storage',
        description: 'The Sourajala Solar-Based Water Pump provides a sustainable solution for water access using solar energy.',
        funding: 'Funded by IEEE HTB - Humanitarian Technology Board ($5300)',
    },
    {
        title: 'Interactive MIS Dashboard for SCM Dept – Apollo Tyres Ltd.',
        description: 'This dashboard provides real-time insights into key supply chain metrics, enabling efficient monitoring, data-driven decisions, and improved operational performance.',
    },
    {
        title: 'Lumen Solar PV Off Grid System for Street Lamps',
        description: 'A sustainable lighting solution designed to power street lamps using solar energy, enhancing public safety in off-grid areas.',
        funding: 'Funded by EPICS in IEEE ($4000)',
    },
    {
        title: 'E Fense Solar PV Powered Electric Fence for Agri Land',
        description: 'This renewable energy solution protects agricultural land from intrusions using a solar-powered electric fence, safeguarding crops and supporting rural farmers.',
        funding: 'Funded by IEEE HAC ($4100)',
    },
];

export const VOLUNTEERING_DATA: VolunteeringItem[] = [
    {
        date: '2022 - Present',
        title: 'Trainer & Mentor',
        organization: 'Various B-Schools & Academic Institutions',
        description: 'Conducted training sessions on Power BI, Microsoft Excel, and Microsoft Projects, helping students and professionals build practical, industry-relevant skills.',
    },
    {
        date: '2020 - 2022',
        title: 'Project Lead',
        organization: 'IEEE Humanitarian Activities Committee',
        description: 'Led multiple grant-funded projects (Sourajala, Lumen, E-Fense) from conception to deployment, managing budgets, teams, and community stakeholders to deliver impactful technology solutions.',
    },
    {
        date: '2019',
        title: 'Volunteer Coordinator',
        organization: 'Local Tech Community Events',
        description: 'Organized and coordinated volunteer efforts for tech workshops and conferences, fostering a collaborative learning environment.',
    },
];

export const EDUCATION_DATA: EducationItem[] = [
    {
        degree: 'Master of Business Administration (MBA)',
        specialization: 'Operations, Logistics & SCM, Business Analytics',
        institution: 'LEAD College of Management, Palakkad',
        university: 'University of Calicut',
        year: '2026',
        website: 'https://lead.ac.in/',
    },
    {
        degree: 'Bachelor of Technology (B.Tech)',
        specialization: 'Electrical & Electronics Engineering',
        institution: 'NSS College of Engineering, Palakkad',
        university: 'APJ Abdul Kalam Technological University',
        year: '2023',
        website: 'https://nssce.ac.in/',
    }
];