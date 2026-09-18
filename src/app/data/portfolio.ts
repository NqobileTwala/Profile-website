export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const portfolioData = {
  personal: {
    name: "Nqobile Twala",
    role: "Business Information Technology Final Year Student",
    tagline: "Building robust web platforms, efficient APIs, and scalable data-driven systems.",
    location: "Johannesburg, South Africa",
    email: "nqobiletwala02@gmail.com",
    github: "https://github.com/NqobileTwala",
    linkedin: "https://linkedin.com/in/nqobile-twala",
  },
  about: `Business Information Technology student at the University of Johannesburg with hands-on experience across software engineering, 
  web architectures, and Agile methodologies. Through industry exposure at BBD Software Development and web development training with Umuzi Academy, 
  I specialise in translating complex business requirements into scalable, practical digital solutions.`,
  skills: [
    {
      title: "Frontend & Web",
      skills: ["TypeScript", "JavaScript", "React", "Next.js", "Tailwind CSS", "HTML5 & CSS3"],
    },
    {
      title: "Backend & Systems",
      skills: ["Node.js", "Express.js", "C# / .NET", "REST APIs", "Prisma ORM"],
    },
    {
      title: "Databases & DevOps",
      skills: ["PostgreSQL", "SQL & Relational Design", "Docker", "Git & GitHub", "Linux CLI"],
    },
    {
      title: "Business Analysis & Practices",
      skills: ["Agile/Scrum Methodologies", "Business Requirements Elicitation", "Stakeholder Engagement", "Design Thinking & UI/UX", "Canva"],
    },
  ] as SkillCategory[],
  projects: [
    {
      title: "Grade Target Calculator",
      description: "A web app that solves a problem every student has faced: \"what mark do I actually need on my remaining assessments to hit my target grade?\" The app allows students to input their current grades and the weight of each assessment, and it calculates the required marks to achieve their desired final grade. ",
      tags: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
      githubUrl: "https://github.com/NqobileTwala/Grade-target-calculator",
      featured: true,
    },
    {
      title: "Product Filter App",
      description: "A React app for filtering products by name, category, and stock status. It demonstrates the use of React state management, conditional rendering, and dynamic filtering of data. The app is designed to be responsive and user-friendly.",
      tags: ["React", "JavaScript", "CSS", "Responsive Design"],
      githubUrl: "https://github.com/NqobileTwala/Product-filter-app",
      featured: true,
    },
  ] as Project[],
};