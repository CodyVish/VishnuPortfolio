"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ProjectsAndCertifications() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center space-y-16">
      {/* Main Heading with Hover & Zoom Effect */}
      <motion.h2
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400 cursor-pointer hover:scale-110 transition-transform duration-300 mb-14"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        Projects & Certifications
      </motion.h2>

      {/* Projects Section */}
      <motion.div
        className="max-w-4xl text-left text-gray-300 space-y-6"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h3 className="text-3xl font-bold text-cyan-300 underline decoration-cyan-400 decoration-2 underline-offset-4">
          Projects
        </h3>

        <div className="space-y-4">
          <div className="border-l-4 border-cyan-400 pl-4">
            <h4 className="text-xl font-semibold text-cyan-400">
              Personal Portfolio Website <span className="text-purple-300">| TypeScript, Next.js, Tailwind CSS</span>
            </h4>
            <p>
              Developed a dynamic, responsive portfolio showcasing projects, skills, and experience.
            </p>
            <p>
              Implemented Framer Motion animations, a real-time typing effect, and an aurora-themed UI with smooth transitions.
            </p>
            <p>Optimized for fast load times, mobile responsiveness, and SEO best practices.</p>
          </div>

          <div className="border-l-4 border-cyan-400 pl-4">
            <h4 className="text-xl font-semibold text-cyan-400">
              Touch Virtual <span className="text-purple-300">| OpenCV, Mediapipe, PyAutoGUI</span>
            </h4>
            <p>
              Developed a deep learning-based touch input method to control computer systems from any surface without additional hardware.
            </p>
            <p>
              Used OpenCV and Mediapipe for hand landmark detection, PyAutoGUI for simulating mouse actions similar to a mousepad.
            </p>
          </div>

          <div className="border-l-4 border-cyan-400 pl-4">
            <h4 className="text-xl font-semibold text-cyan-400">
              Customer Churn Forecasting <span className="text-purple-300">| Logistic Regression, Decision Trees, Neural Networks</span>
            </h4>
            <p>
              Implemented a churn forecasting model using Random Forest, Gradient Boosting, and clustering techniques (K-Means, DBSCAN).
            </p>
            <p>
              Enhanced accuracy through advanced data preprocessing, enabling proactive retention and improved customer loyalty.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Certifications Section */}
      <motion.div
        className="max-w-4xl text-left text-gray-300 space-y-6"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h3 className="text-3xl font-bold text-purple-400 underline decoration-purple-400 decoration-2 underline-offset-4">
          Certifications
        </h3>

        <ul className="list-disc list-inside space-y-2 pl-6">
          <li className="text-lg">Azure Fundamentals Certification</li>
          <li className="text-lg">Walys Certification</li>
          <li className="text-lg">Service Now (CSA) Certification</li>
          <li className="text-lg">HQLEduTech Certification - Core Java, SQL, Soft Skills</li>
          <li className="text-lg">Walys Virtual Internship - Machine Learning Algorithms and Thier Applications </li>
        </ul>
      </motion.div>
    </div>
  );
}
