import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { link } from "fs";

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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Multi-Vendor E-Commerce",
    description:
      "Flagship multi‑vendor e‑commerce platform where sellers can list products and manage storefronts. Includes an AI‑powered user analytics engine that analyzes customer behavior to suggest personalized product recommendations.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "MongoDB", "AWS"],
    imageUrl: wordanalyticsImg,
    link: "https://github.com/ZakDeveloperAI/Reservice",
  },
  {
    title: "Mobile Movie App",
    description:
      "React Native mobile application for browsing, searching and bookmarking movies. Features include dynamic filtering, detail pages, and offline caching for a seamless user experience.",
    tags: ["React Native", "Expo", "SQL", "TypeScript", "Tailwind"],
    imageUrl: rmtdevImg,
    link: "https://github.com/ZakDeveloperAI/React-Native-Mobile-Movie-App",
  },
  {
    title: "ReService Demo",
    description:
      "Showcase demo of a booking platform for beauty and wellness services. Users can book appointments, while providers manage schedules, customers and analytics via an admin dashboard.",
    tags: ["React", "TypeScript", "Next.js", "GraphQL", "Tailwind"],
    imageUrl: corpcommentImg,
    link: "https://github.com/ZakDeveloperAI/Reservice",
  },
  {
    title: "AI Agent",
    description:
      "Autonomous AI assistant built with Python, LangChain and HuggingFace. It performs document retrieval and savinf, search, and reasoning via LLMs",
    tags: ["Python", "LangChain", "HuggingFace"],
    imageUrl: wordanalyticsImg,
    link: "https://github.com/ZakDeveloperAI/AI_Agent_From_Scratch",
  },
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
