import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ecommerceImg from "@/public/multi_vendor_ecommerce.png";
import reservice_demoImg from "@/public/reservice_demo.png";
import ai_agentImg from "@/public/ai_agent.png";
import mobile_movie_appImg from "@/public/mobile_movie_app.png";
import { link } from "fs";
import { 
  FaJs, 
  FaPython,
  FaGitAlt,
  FaNode,
  FaCube 
} from 'react-icons/fa';
import { 
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiGraphql,
  SiExpo,
  SiTensorflow,
  SiExpress,
  SiFramer,
  SiFlask,
  SiPostgresql
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { GiArtificialIntelligence } from 'react-icons/gi';

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "AI & Software Developer – Aesthetic Machinery Company",
    location: "Bottanuco, BG (Hybrid)",
    description: "Integrated AI models into industrial machinery; trained YOLO models with Python; developed mobile apps with React Native.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2025 – Present"
  },
  {
    title: "Full Stack Developer – ReService",
    location: "Dalmine, BG (Remote)",
    description: "Developed and maintained web and mobile applications using React, Next.js, TypeScript, Node.js, and GraphQL.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2024 – Present"
  },
  {
    title: "BSc Honours in Computer Engineering & AI",
    location: "Institute of Technology of Malta",
    description: "2028 (online and on‑campus).",
    icon: React.createElement(LuGraduationCap),
    date: "2028"
  },
  {
    title: "IT Diploma",
    location: "ITI Guglielmo Marconi, Dalmine, BG",
    description: "Secondary school diploma with a GPA of 4.0/4.0.",
    icon: React.createElement(LuGraduationCap),
    date: "Jun 2025"
  }
];



export const projectsData = [
  {
    title: "Multi-Vendor E-Commerce",
    description:
      "Multi‑vendor E‑commerce platform where sellers can list products and manage storefronts. Includes an AI‑powered user analytics engine that analyzes customer behavior to suggest product.",
    tags: ["React", "Next.js", "TypeScript", "TensorFlow", "MongoDB", "AWS"],
    imageUrl: ecommerceImg,
    link: "https://github.com/ZakDeveloperAI/Reservice",
  },
  {
    title: "Mobile Movie App",
    description:
      "React Native mobile application for browsing, searching and bookmarking movies. Features include dynamic filtering, detail pages, and offline caching.",
    tags: ["React Native", "Expo", "SQL", "TypeScript", "Tailwind"],
    imageUrl: mobile_movie_appImg,
    link: "https://github.com/ZakDeveloperAI/React-Native-Mobile-Movie-App",
  },
  {
    title: "ReService Demo",
    description:
      "Showcase demo of a booking platform for beauty and wellness services. Users can book appointments, while providers manage schedules, customers and analytics via an admin dashboard.",
    tags: ["React", "TypeScript", "Next.js", "GraphQL", "Tailwind"],
    imageUrl: reservice_demoImg,
    link: "https://github.com/ZakDeveloperAI/Reservice",
  },
  {
    title: "AI Agent",
    description:
      "Autonomous AI assistant built with Python, LangChain and HuggingFace. It performs document saving, search, and reasoning via LLMs",
    tags: ["Python", "LangChain", "HuggingFace","Conda"],
    imageUrl: ai_agentImg,
    link: "https://github.com/ZakDeveloperAI/AI_Agent_From_Scratch",
  },
] as const;


export const skillsData = [
  {
    language: "React",
    icon: SiReact,
    color: "#61DAFB"
  },
  {
    language: "React Native",
    icon: TbBrandReactNative,
    color: "#61DAFB"
  },
  {
    language: "Next.js",
    icon: SiNextdotjs,
    color: "#FFFFFF" // Cambiato a bianco
  },
  {
    language: "JavaScript",
    icon: FaJs,
    color: "#F7DF1E"
  },
  {
    language: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6"
  },
  {
    language: "Node.js",
    icon: FaNode,
    color: "#339933"
  },
  {
    language: "Python",
    icon: FaPython,
    color: "#3776AB"
  },
  {
    language: "TensorFlow",
    icon: SiTensorflow,
    color: "#FF6F00"
  },
  {
    language: "YOLO",
    icon: FaCube,
    color: "#8A2BE2"
  },
  {
    language: "LangChain",
    icon: GiArtificialIntelligence,
    color: "#D72E62"
  },
  {
    language: "Flask",
    icon: SiFlask,
    color: "#FF0000" // Cambiato a rosso
  },
  {
    language: "Git",
    icon: FaGitAlt,
    color: "#F05032"
  },
  {
    language: "Tailwind",
    icon: SiTailwindcss,
    color: "#38B2AC"
  },
  {
    language: "Expo",
    icon: SiExpo,
    color: "#FFFFFF" // Cambiato a bianco
  },
  {
    language: "MongoDB",
    icon: SiMongodb,
    color: "#47A248"
  },
  {
    language: "GraphQL",
    icon: SiGraphql,
    color: "#E535AB"
  },
  {
    language: "Express",
    icon: SiExpress,
    color: "#FF6600" // Cambiato a arancione
  },
  {
    language: "SQL",
    icon: SiPostgresql,
    color: "#336791"
  },
  {
    language: "Framer Motion",
    icon: SiFramer,
    color: "#0055FF"
  }
] as const;
