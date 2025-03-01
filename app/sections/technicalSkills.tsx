"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TechnicalSkills() {
  const skillSections = [
    { title: "Programming Languages", skills: "Python, Java, C, SQL, HTML, CSS, JavaScript" },
    { title: "Frameworks", skills: "Node.js, React.js, Vue.js, Tailwind CSS" },
    { title: "Developer Tools", skills: "VS Code, Jupyter Notebook, Git, GitHub" },
    { title: "Other Skills", skills: "Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, REST API's" },
    { title: "Soft Skills", skills: "Problem Solving, Collaborative, Innovative, Teamwork, Attention to Detail, Critical Thinking, Communication, Rapid Learning" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 py-10">
      <motion.h1
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400 cursor-pointer hover:scale-110 transition-transform duration-300"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        Technical Skills
      </motion.h1>

      <div className="mt-6 text-2xl text-gray-300 font-semibold max-w-3xl">
        {skillSections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className="mt-6"
          >
            <h2 className="text-cyan-300 font-bold text-3xl font-mono">{section.title}</h2>
            <p className="mt-2 text-gray-300 text-xl font-sans">{section.skills}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
