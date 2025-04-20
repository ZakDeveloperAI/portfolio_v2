"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin } from "react-icons/sl";
import { SiWhatsapp } from "react-icons/si";
import { BiPhoneCall } from "react-icons/bi";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      suppressHydrationWarning
    >
      <SectionHeading>Contact me</SectionHeading>

      <div className="text-gray-700 -mt-6 dark:text-white/80">
        <p>
          Please contact me directly at{" "}
          <a 
            href="mailto:belfakhirzakaria@gmail.com" 
            className="underline"
            suppressHydrationWarning
          >
            belfakhirzakaria@gmail.com
          </a>
        </p>
      </div>

      {/* Social Icons */}
      <div className="mt-10">   
        <div className="inline-flex items-center justify-center w-full py-6 gap-4">
          <a 
            href="https://github.com/ZakDeveloperAI" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 text-xl bg-gray-200 dark:bg-gray-800 rounded-full inline-flex 
                     items-center justify-center hover:text-emerald-500 cursor-pointer
                     hover:-translate-y-2 transition-all duration-300"
          >
            <TbBrandGithub size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/zakaria-belfakhir-8b3221319/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 text-xl bg-gray-200 dark:bg-gray-800 rounded-full inline-flex 
                     items-center justify-center hover:text-emerald-500 cursor-pointer
                     hover:-translate-y-2 transition-all duration-300"
          >
            <SlSocialLinkedin size={20} />
          </a>
          <a 
            href="https://wa.me/+393517929011" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 text-xl bg-gray-200 dark:bg-gray-800 rounded-full inline-flex 
                     items-center justify-center hover:text-emerald-500 cursor-pointer
                     hover:-translate-y-2 transition-all duration-300"
          >
            <SiWhatsapp size={20} />
          </a>
          <a 
            href="tel:+393517929011"
            className="w-10 h-10 text-xl bg-gray-200 dark:bg-gray-800 rounded-full inline-flex 
                     items-center justify-center hover:text-emerald-500 cursor-pointer
                     hover:-translate-y-2 transition-all duration-300"
          >
            <BiPhoneCall size={20} />
          </a>
        </div>
        
        <div className="flex flex-col items-center justify-center w-full py-6 gap-2 text-xs text-gray-700 dark:text-white/70">
          <h2>Designed & Developed by Belfakhir Zakaria</h2>
          <p className="text-emerald-500">belfakhirzakaria@gmail.com</p>
        </div>
      </div>
    </motion.section>
  );
}