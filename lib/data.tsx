import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiPrisma,
  SiGraphql,
  SiDrizzle,
  SiBun,
  SiFramer,
} from "react-icons/si";
import { RiStackLine } from "react-icons/ri";
import { TbPolaroid } from "react-icons/tb";
import { NavItem, ExperienceItem, Project, Skill, Certificate, Achievement } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", id: "home", href: "/#home" },
  { label: "Projects", id: "projects", href: "/#projects" },
  { label: "Skills", id: "skills", href: "/#skills" },
  { label: "Certificates", id: "certificates", href: "/#certificates" },
  { label: "Achievements", id: "achievements", href: "/#achievements" },
  { label: "Background", id: "about", href: "/#about" },
  // { label: "Blog", id: "blog", href: "/blog" },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Full Stack Developer",
    company: "Personal Work",
    period: "2025 - Present",
    description:
      "Building web applications, experimenting with new technologies, and shipping side projects.",
    current: true,
  },
  {
    role: "CS Student",
    company: "University",
    period: "2024 - Present",
    description:
      "Pursuing Computer Science, diving deep into algorithms, system design, and software engineering fundamentals.",
    current: true,
  },
];

export const PROJECTS_DATA: Project[] = [
  // {
  //   title: "TldrAI",
  //   description:
  //   "An AI-powered productivity and knowledge assistant that helps users upload documents, extract insights, and interact with content using generative AI. Features authentication, drag-and-drop interfaces, PDF parsing, and a modern dashboard built for fast, intelligent workflows.",
  //   tech: [
  //     "Next.js",
  //     "TypeScript",
  //     "MongoDB",
  //     "Google Generative AI",
  //     "Better Auth",
  //     "Tailwind CSS",
  //     "ShadCN UI",
  //     "Zod"
  //   ],
  //   liveUrl: "https://tldrai-opal.vercel.app/",
  //   githubUrl: "https://github.com/subramanyambattari/tldrai",
  //   image: "/tldr.png"
  // },
  {
    title: "SpendFlow",
    description:
    "A smart personal finance management platform that helps users track expenses, manage budgets, and gain insights into their spending habits. Monitor transactions, categorize expenses, visualize financial data, and make better financial decisions with a clean and intuitive dashboard.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind" , "Prisma"],
    liveUrl: "https://spend-flow-six.vercel.app/",
    githubUrl: "https://github.com/subramanyambattari/SpendFlow",
    image: "/spendflow.png"
  },
  {
    title: "ConvoAI",
    description:
        "A real-time AI conversational platform that combines chat, video, and intelligent agents into one seamless experience. Users can interact with AI in live sessions, manage conversations, and leverage background workflows powered by event-driven architecture. Built with scalable serverless infrastructure, realtime streaming, authentication, and modern SaaS-grade tooling.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind","Drizzle", "ShadCN UI", "Zod"],
    liveUrl: "https://convo-ai-one.vercel.app/sign-in",
    githubUrl: "https://github.com/subramanyambattari/ConvoAi",
    image: "/convoai.png"
  }
  // {
  //   title: "FolderMage",
  //   description:
  //     "A desktop app that transforms your messy Downloads and cluttered folders into organized bliss. Features smart auto-sorting, undo functionality, background job queues, and a clean dashboard to keep everything in order.",
  //   tech: ["TypeScript", "Redis", "Docker"],
  //   githubUrl: "https://github.com/MonisMS/folder-organizer",
  //   isBuilding: true,
  //   image: "/folder-mage.png"
  // },
  // {
  //   title: "PharmaGuard",
  //   description:
  //     "A pharmacogenomic risk prediction system that analyzes patient genetic data (VCF files) against CPIC guidelines. Returns deterministic drug safety assessments with AI-generated clinical explanations. Built for the RIFT 2026 hackathon.",
  //   tech: ["Next.js", "TypeScript", "Tailwind"],
  //   liveUrl: "https://photonx-rift-2026.vercel.app/",
  //   githubUrl: "https://github.com/MonisMS/photonx-rift-2026",
  //   image:"/pharmaguard.png"
  // },
  // {
  //   title: "Beats Generator",
  //   description:
  //     "An AI-powered music generator that creates unique tunes using the Gemini API. Just describe the vibe you want, and it generates beats for you. Features a vinyl-inspired UI with full playback controls.",
  //   tech: ["React", "TypeScript", "Vite", "Tailwind"],
  //   liveUrl: "https://tunes-generator.vercel.app/",
  //   githubUrl: "https://github.com/MonisMS/Tunes-generator-",
  //   image: "/tunes-generator-image (2).png"
  // },
];

export const SKILLS_DATA: Skill[] = [
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Bun", icon: <SiBun /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "GraphQL", icon: <SiGraphql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Prisma", icon: <SiPrisma /> },
  { name: "Drizzle", icon: <SiDrizzle /> },
  { name: "TanStack", icon: <RiStackLine /> },
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "Vercel", icon: <SiVercel /> },
  // { name: "Framer Motion", icon: <SiFramer /> },
  // { name: "Polar", icon: <TbPolaroid /> },
  // {name: "Inngest", icon}
];

export const CERTIFICATES_DATA: Certificate[] = [
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    file: "/certificates/Cloud%20Computing%20NPTEL%20Certificate%20Mooc.pdf",
  },
  {
    title: "Operating Systems",
    issuer: "Coursera",
    file: "/certificates/Coursera%20os.pdf",
  },
  {
    title: "AI Foundations",
    issuer: "Oracle",
    file: "/certificates/eCertificate%20ai%20oracle.pdf",
  },
  {
    title: "Computer Networks",
    issuer: "Oracle",
    file: "/certificates/eCertificate%20computer%20networks%20oracle.pdf",
  },
  {
    title: "Database Management Systems",
    issuer: "Oracle",
    file: "/certificates/eCertificate%20dbms%20oracle.pdf",
  },
  {
    title: "Frontend Developer (React)",
    file: "/certificates/frontend_developer_react%20certificate.pdf",
  },
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    title: "LeetCode Profile",
    description: "Problem-solving profile and coding practice.",
    month: "Mar",
    year: 2026,
    link: "https://leetcode.com/u/Battari_Subramanyam/",
  },
  {
    title: "Oracle Certified Foundations Associate",
    description:
      "Earned the Oracle Data Platform 2025 Certified Foundations Associate credential from Oracle University, valid until March 2028.",
    month: "Mar",
    year: 2028,
  },
  {
    title: "freeCodeCamp Responsive Web Design",
    description:
      "Earned the Responsive Web Design certification after completing 300+ hours of project-based guided practice covering HTML, CSS, Flexbox, Grid, and accessibility.",
    month: "Nov",
    year: 2023,
  },
  {
    title: "HackerRank Frontend Developer (React) Certification",
    description:
      "Passed the official HackerRank role certification test — industry-recognised proof of practical React.js skills.",
    month: "Nov",
    year: 2025,
  },
];
