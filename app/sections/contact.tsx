"use client";

import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-gray-400">
      {/* Heading with Motion Animation */}
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400 cursor-pointer hover:scale-110 transition-transform duration-300 mb-10"
      >
        Contact Me
      </motion.h2>

      {/* Icons Section with Framer Motion Animation */}
      <div className="flex space-x-8 text-4xl">
        {[
          { icon: <FaPhone />, link: "tel:+919912441626", color: "hover:text-green-400" },
          { icon: <FaEnvelope />, link: "mailto:vishnu991244@gmail.com", color: "hover:text-blue-400" },
          { icon: <FaInstagram />, link: "https://www.instagram.com/vishnuronaldo/", color: "hover:text-pink-400" },
          { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/vishnu-sai-nakkina-824a39284/", color: "hover:text-blue-600" },
          { icon: <FaGithub />, link: "https://github.com/CodyVish", color: "hover:text-gray-400" },
          { icon: <FaMapMarkerAlt />, link: "https://www.google.com/maps/place/Rajahmundry,+Andhra+Pradesh+533101", color: "hover:text-red-400" },
          
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.5, delay: index * 0.2 }}
            className={`transition duration-300 cursor-pointer ${item.color}`}
          >
            {item.icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
}
