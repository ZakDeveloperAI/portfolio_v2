"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div className="flex flex-col items-center justify-center gap-4 sm:gap-14">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
          <button className="flex items-center justify-center rounded-full bg-gray-900 px-6 py-2 text-sm font-semibold text-white shadow-md transition-all duration-200 ease-in-out hover:bg-gray-800 hover:scale-105 transform dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-100 dark:hover:scale-105">
            <a
              href="https://github.com/zakdeveloperai"
              target="_blank"
              rel="noopener noreferrer"
            >
              Show More projects
            </a>
          </button>
      </div>
    </section>
  );
}
