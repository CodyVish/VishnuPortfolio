"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div id="about" className="h-screen flex justify-center items-center mt-80">
      <motion.div
        className="max-w-4xl text-center px-8 py-16 bg-white/10 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h2
          className="text-3xl text-cyan-200 font-extrabold mb-6 transform transition-transform duration-300 hover:scale-110 hover:-translate-y-2"
        >
          About Me
        </h2>

        <motion.p
          className="text-gray-300 text-xl leading-relaxed font-inter mb-4"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          Hi, my name is Vishnu Sai Nakkina, a passionate web developer with a deep interest in building dynamic and scalable web applications.
        </motion.p>

        <motion.p
          className="text-gray-300 text-xl leading-relaxed font-inter mb-4"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
I am from Rajahmundry, Andhra Pradesh, where I completed my high school and intermediate education. I earned my Bachelor's degree in Computer Science and Engineering with a specialization in Artificial Intelligence and Data Science from BVC Engineering College (Odalarevu, AP) in 2024.        </motion.p>

        <motion.p
          className="text-gray-300 text-xl leading-relaxed font-inter mb-4"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          Throughout my academic career, I have honed my skills in programming languages, frameworks, and software development methodologies. My passion for technology drives me to explore new areas such as AI, machine learning, and data science, and I am continuously learning to enhance my technical expertise.
        </motion.p>

        <motion.p
          className="text-gray-300 text-xl leading-relaxed font-inter mb-4"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          In addition to my technical pursuits, I am also passionate about sports. I have represented my college in state-level badminton tournaments across Andhra Pradesh, which helped me develop not just physical fitness but also discipline, teamwork, and a competitive spirit. These experiences have taught me the importance of perseverance and consistency, both on and off the court.
        </motion.p>

        <motion.p
          className="text-gray-300 text-xl leading-relaxed font-inter"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          I strive to apply my technical skills to create innovative, user-centric solutions, contribute to impactful projects, and continuously learn and adapt to new technologies.
        </motion.p>
      </motion.div>
    </div>
  );
}
