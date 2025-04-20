"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg">
        {skillsData.map((skill, index) => (
          <motion.li
            className="flex items-center gap-2 rounded-xl px-5 py-3 border-[1.5px] transition-all 
                       hover:scale-[1.08] cursor-pointer relative
                       bg-[var(--light-bg)] dark:bg-[var(--dark-bg)] 
                       text-[var(--light-color)] dark:text-[var(--dark-color)] 
                       border-[var(--light-border)] dark:border-[var(--dark-border)]
                       hover:shadow-[0_0_20px_-5px_var(--light-glow)]
                       dark:hover:shadow-[0_0_24px_-6px_var(--dark-glow)]
                       hover:border-[var(--light-border-hover)]
                       dark:hover:border-[var(--dark-border-hover)]
                       hover:bg-[var(--light-bg-hover)]
                       dark:hover:bg-[var(--dark-bg-hover)]
                       filter hover:drop-shadow-[0_0_8px_var(--light-glow)]
                       dark:hover:drop-shadow-[0_0_12px_var(--dark-glow)]"
            style={{
              '--light-color': skill.color,
              '--dark-color': skill.darkColor,
              '--light-bg': `${skill.color}1a`,
              '--dark-bg': `${skill.darkColor}1a`,
              '--light-border': skill.color,
              '--dark-border': skill.darkColor,
              '--light-glow': skill.color,
              '--dark-glow': skill.darkColor,
              '--light-border-hover': `${skill.color}cc`,
              '--dark-border-hover': `${skill.darkColor}cc`,
              '--light-bg-hover': `${skill.color}22`,
              '--dark-bg-hover': `${skill.darkColor}22`,
            } as React.CSSProperties}
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <skill.icon className="text-xl relative z-10" />
            <span className="relative z-10">{skill.language}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}