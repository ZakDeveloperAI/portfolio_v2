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
    title: "Generative & Agentic AI Engineer – Business Group SRL",
    location: "Bottanuco, BG (Hybrid)",
    description: "Integrated AI models into industrial machinery; trained YOLO models with Python; developed mobile apps with React Native; created AI Chatbots and Agents with RAG structure based on LangChain/LangGraph.",
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
    color: "#149ECA",         
    darkColor: "#61DAFB"      // Preso dal primo array
  },
  {
    language: "React Native",
    icon: TbBrandReactNative,
    color: "#0D7A9D",         
    darkColor: "#61DAFB"      // Preso dal primo array
  },
  {
    language: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",         
    darkColor: "#FFFFFF"      // Preso dal primo array
  },
  {
    language: "JavaScript",
    icon: FaJs,
    color: "#D6BA00",         
    darkColor: "#F7DF1E"      // Preso dal primo array
  },
  {
    language: "TypeScript",
    icon: SiTypescript,
    color: "#2B6CB0",         
    darkColor: "#3178C6"      // Preso dal primo array
  },
  {
    language: "Node.js",
    icon: FaNode,
    color: "#267326",         
    darkColor: "#6CC24A"      // Preso dal primo array
  },
  {
    language: "Python",
    icon: FaPython,
    color: "#2E5D87",         
    darkColor: "#4B8BBE"      // Preso dal primo array
  },
  {
    language: "TensorFlow",
    icon: SiTensorflow,
    color: "#CC5B00",         
    darkColor: "#FF8F00"      // Preso dal primo array
  },
  {
    language: "YOLO",
    icon: FaCube,
    color: "#6A1B9A",         
    darkColor: "#9D4DFF"      // Preso dal primo array
  },
  {
    language: "LangChain",
    icon: GiArtificialIntelligence,
    color: "#AD1A4D",         
    darkColor: "#FF3366"      // Preso dal primo array
  },
  {
    language: "Flask",
    icon: SiFlask,
    color: "#A31D1D",         
    darkColor: "#FF4444"      // Preso dal primo array
  },
  {
    language: "Git",
    icon: FaGitAlt,
    color: "#D33816",         
    darkColor: "#F05032"      // Preso dal primo array
  },
  {
    language: "Tailwind",
    icon: SiTailwindcss,
    color: "#2A918F",         
    darkColor: "#44C1C1"      // Preso dal primo array
  },
  {
    language: "Expo",
    icon: SiExpo,
    color: "#3520B0",         
    darkColor: "#858BFF"      // Preso dal primo array
  },
  {
    language: "MongoDB",
    icon: SiMongodb,
    color: "#3C803C",         
    darkColor: "#6BCB77"      // Preso dal primo array
  },
  {
    language: "GraphQL",
    icon: SiGraphql,
    color: "#C41C7D",         
    darkColor: "#FF79C6"      // Preso dal primo array
  },
  {
    language: "Express",
    icon: SiExpress,
    color: "#CC5500",         
    darkColor: "#FF9248"      // Preso dal primo array
  },
  {
    language: "SQL",
    icon: SiPostgresql,
    color: "#2B4F6E",         
    darkColor: "#4F9DD6"      // Preso dal primo array
  },
  {
    language: "Framer Motion",
    icon: SiFramer,
    color: "#0044CC",         
    darkColor: "#4D8AFF"      // Preso dal primo array
  }
] as const;
