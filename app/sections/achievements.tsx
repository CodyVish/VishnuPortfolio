"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 sm:px-4 text-center sm:text-left space-y-10 sm:space-y-12">
      {/* Heading with Color Effect */}
      <motion.h2
        className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-400 cursor-pointer hover:scale-110 transition-transform duration-300 mb-6 sm:mb-8"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        Achievements
      </motion.h2>

      {/* Achievements List */}
      <div className="max-w-3xl text-gray-300 space-y-4 sm:space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="border-l-4 border-green-400 pl-4 sm:pl-6"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-cyan-400">Hackathon IT Day</h3>
          <p className="text-sm sm:text-base">
            Got shortlisted for Hackathon IT Day in Rajasthan University, Jaipur and managed to deploy an AI working model within 36 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="border-l-4 border-green-400 pl-4 sm:pl-6"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-cyan-400">Coding Challenges</h3>
          <p className="text-sm sm:text-base">
            Participated in multiple online competitive coding challenges, showcasing problem-solving skills and algorithmic thinking.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="border-l-4 border-green-400 pl-4 sm:pl-6"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-cyan-400">State-Level Badminton Player</h3>
          <p className="text-sm sm:text-base">
            Represented Andhra Pradesh and my college in state-wise badminton tournaments, demonstrating teamwork, perseverance, and competitive spirit.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
