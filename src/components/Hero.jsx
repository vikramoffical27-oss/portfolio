import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

function Hero({ darkMode }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX - innerWidth / 2) / 25;
    const y = (e.clientY - innerHeight / 2) / 25;
    setPosition({ x, y });
  };

  return (
    <motion.section
      id="home"
      onMouseMove={handleMouseMove}
      className="min-h-screen pt-28 bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col justify-center items-center transition-colors duration-500 relative overflow-hidden"
    >
      {/* Glow Background */}
      <div
        className="absolute w-100 h-100 bg-blue-500 opacity-20 blur-3xl rounded-full"
        style={{
          transform: `translate(${position.x * 2}px, ${position.y * 2}px)`,
        }}
      />

      {/* Profile Image with Tilt */}
      <motion.img
        src="/portfolio/profile.jpg.jpeg"
        alt="Vikram"
        className="w-64 h-64 rounded-full border-4 border-blue-500 shadow-2xl object-cover object-top mb-8 cursor-pointer"
        animate={{
          x: position.x,
          y: position.y,
          rotateX: position.y,
          rotateY: position.x,
        }}
        transition={{ type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.1 }}
      />

      {/* Heading */}
      <motion.h1
        className="text-6xl font-bold"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm <span className="text-blue-500">Vikram</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        className="text-2xl mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Software Developer
      </motion.h2>

      {/* Description */}
      <motion.p
        className="max-w-2xl text-center mt-5 text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Passionate about Java, MySQL , React, and building modern web applications.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex gap-6 mt-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <a
          href="/resume.pdf"
          download
          className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transform hover:scale-110 transition duration-300 shadow-lg"
        >
          Download Resume
        </a>

        <a
          href="#contact"
          className="border border-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500 transform hover:scale-110 transition duration-300"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="flex gap-6 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {[FaGithub, FaLinkedin, FaEnvelope].map((Icon, i) => (
          <motion.a
            key={i}
            href={
              i === 0
                ? "https://github.com/YOUR_GITHUB_USERNAME"
                : i === 1
                ? "https://linkedin.com/in/vikramoffical"
                : "mailto:vikramoffical27@gmail.com"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl"
            whileHover={{ scale: 1.3, color: "#3b82f6" }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon />
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Hero;