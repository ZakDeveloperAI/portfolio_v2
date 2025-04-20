"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Before completing my high school diploma, I joined <span className="font-bold">ReService</span> as a Full Stack Developer, where I built <span className="font-bold">Next.js</span> and <span className="font-bold">React</span> web applications, implemented <span className="font-bold">GraphQL</span> APIs, and managed data with <span className="font-bold">SQL</span> databases and <span className="font-bold">MongoDB</span>. I also collaborated on a project with <span className="font-bold">Aesthetic Machinery Company</span>, integrating AI image analysis into industrial machines by training models with <span className="font-bold">Python</span> and <span className="font-bold">YOLO</span> and developing mobile apps with <span className="font-bold">React Native</span>. My daily toolkit includes <span className="font-bold">TypeScript</span>, <span className="font-bold">JavaScript</span>, <span className="font-bold">Node.js</span>, <span className="font-bold">Tailwind CSS</span>, and <span className="font-bold">Vite</span>. I will start my <span className="font-bold">BSc in Computer Engineering & AI</span> in September 2025
      </p>

      <p>
        <span className="italic">When I’m not coding</span>, I enjoy <span className="font-bold">gaming</span>, <span className="font-bold">sports</span>, and <span className="font-bold">traveling</span>. I also explore tech trends on <span className="font-bold">Reddit</span> and study <span className="font-bold">AI</span> and <span className="font-bold">quantum computing</span>.
      </p>


    </motion.section>
  );
}
