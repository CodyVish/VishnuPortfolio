"use client";

import { motion } from "framer-motion";

export default function ExperiencePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 py-10">
      <motion.h2 
        className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400 cursor-pointer hover:scale-110 transition-transform duration-300 mb-6"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        Experience
      </motion.h2>

      <div className="max-w-xl sm:max-w-3xl text-left text-gray-300 space-y-3 sm:space-y-4 text-sm sm:text-lg">
        <motion.p 
          className="text-lg sm:text-xl font-semibold text-purple-400"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          Company: Oppo/OnePlus India 
        </motion.p>
        <motion.p initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }}>
          <span className="font-semibold">Role:</span> Development Intern
        </motion.p>
        <motion.p initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }}>
          <span className="font-semibold">Internship Period:</span> 02/2024 - 08/2024
        </motion.p>
        <motion.p initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }}>
          <span className="font-semibold">Location:</span> Hyderabad, India
        </motion.p>

        {[
          { title: "Full-stack Web Development", items: [
            "Developed an Inventory Management System using Vue.js, Node.js, Express.js, and MySQL.",
            "Focused on managing inventory items such as chargers, SIMs, and mobile phones.",
            "Implemented Single Sign-On (SSO) authentication for enhanced security.",
            "Improved performance by 30% through code and query optimization.",
            "Delivered the project in 30 days, ensuring secure authentication and accurate data handling."
          ]},
          { title: "Android Application Development", items: [
            "Created an Android app to monitor battery performance using Android SDK and Android Intents.",
            "Implemented features such as battery drain analysis, charger protocol detection, and compatibility testing.",
            "Designed and managed overlapping intents and permissions to ensure seamless app functionality.",
            "Integrated events-based calling, resource utilization monitoring, and data exportation capabilities.",
            "Conducted unit testing and debugging to optimize app functionality.",
            "Contributed to Agile development processes by participating in code reviews and suggesting improvements."
          ]},
          { title: "Testing & Quality Assurance", items: [
            "Conducted 500+ PRE-XTS tests (CTS, GTS, VTS, STS, GSI) on mobile devices.",
            "Reduced test failures by 20% and improved testing efficiency.",
            "Enhanced Python-based tools by testing with ADB, AT commands, and MMI instructions."
          ]},
          { title: "Code Review & Optimization", items: [
            "Conducted peer code reviews to maintain high coding standards.",
            "Provided constructive feedback and identified performance bottlenecks.",
            "Optimized SQL queries to enhance database performance and efficiency."
          ]}
        ].map((section, index) => (
          <div key={index}>
            <motion.h3 
              className="text-base sm:text-lg font-semibold text-cyan-300 mt-4"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              {section.title}
            </motion.h3>
            <motion.ul className="list-none space-y-2 sm:space-y-3">
              {section.items.map((item, idx) => (
                <motion.li 
                  key={idx} 
                  initial={{ opacity: 0, x: -100 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 1.5 }}
                >
                  {`● ${item}`}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        ))}
      </div>
    </div>
  );
}
