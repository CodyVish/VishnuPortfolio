"use client";

import React from "react";
import { motion } from "framer-motion";
import About from "./sections/about";
import ExperiencePage from "./sections/experience";
import TechnicalSkills from "./sections/technicalSkills";
import ProjectsAndCertifications from "./sections/projectsAndCertifications";
import Achievements from "./sections/achievements";
import Contact from "./sections/contact";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden text-center px-6 mt-35 sm:px-4">
      
      {/* Aurora Background */}
      <div className="aurora absolute top-0 left-0 w-full h-full"></div>

      {/* Transparent Top Bar */}
      <div className="fixed top-0 left-0 w-full h-[3cm] bg-white/10 backdrop-blur-md shadow-md flex items-center px-8 z-50 sm:h-[2.5cm] sm:px-4">
        <a
          href="#top"
          className="text-cyan-200 text-4xl font-extrabold tracking-wide font-poppins transform transition-transform duration-300 hover:scale-110 hover:text-purple-400"
        >
          Portfolio
        </a>
      </div>

      {/* Content Wrapper for Scrollable Content */}
      <div className="flex flex-col justify-center items-center flex-grow pt-16 space-y-8">
        {/* Animated Heading */}
        <motion.h1
          className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400 text-7xl sm:text-6xl font-extrabold leading-tight font-poppins"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, Vishnu here!
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          className="text-gray-300 text-2xl max-w-6xl leading-relaxed font-inter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Welcome to my digital space! More than just a resume, this is a reflection of my journey, skills, and projects.
          Dive in and explore how I turn ideas into reality.
        </motion.p>

        {/* Section Buttons (Now Responsive) */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-3 md:flex-nowrap">
          {[
            { href: "#about", label: "About" },
            { href: "#experience", label: "Experience" },
            { href: "#technicalSkills", label: "Technical Skills" },
            { href: "#projectsAndCertifications", label: "Projects & Certifications" },
            { href: "#achievements", label: "Achievements" },
            { href: "#contact", label: "Contact" },
          ].map(({ href, label }, index) => (
            <a key={href} href={href} className="w-full sm:w-auto">
              <motion.button
                className="w-full md:w-auto bg-gradient-to-r from-cyan-300 to-purple-400 text-black px-6 py-3 rounded-full text-xl sm:text-lg font-poppins transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1 + index * 0.2 }}
              >
                {label}
              </motion.button>
            </a>
          ))}
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-grow overflow-y-auto pt-16">
        <div id="about" className="mb-20">
          <About />
        </div>

        <div id="experience" className="mt-20">
          <ExperiencePage />
        </div>

        <div id="technicalSkills" className="mt-20">
          <TechnicalSkills />
        </div>

        <div id="projectsAndCertifications" className="mt-20">
          <ProjectsAndCertifications />
        </div>

        <div id="achievements" className="mt-20">
          <Achievements />
        </div>

        <div id="contact" className="mt-20">
          <Contact />
        </div>
      </div>
    </div>
  );
}
