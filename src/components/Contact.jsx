import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact({ darkMode }) {
  return (
    <section
      id="contact"
      className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white py-24 px-6 transition-colors duration-500 relative overflow-hidden"
    >
      {/* 🔥 Background Glow */}
      <div className="absolute w-75 h-75 bg-blue-500 opacity-20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-75 h-75 bg-purple-500 opacity-20 blur-3xl rounded-full bottom-10 right-10"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-blue-500 mb-6"
        >
          Contact Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-400 mb-12"
        >
          Interested in working together? Let’s build something amazing 🚀
        </motion.p>

        {/* 💎 FORM */}
        <motion.form
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="backdrop-blur-xl bg-white/10 dark:bg-gray-900/40 border border-gray-300 dark:border-gray-700 rounded-2xl p-8 shadow-2xl space-y-6"
        >

          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-lg bg-gray-200 dark:bg-gray-800 text-black dark:text-white outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-lg bg-gray-200 dark:bg-gray-800 text-black dark:text-white outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          {/* Message */}
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-4 rounded-lg bg-gray-200 dark:bg-gray-800 text-black dark:text-white outline-none focus:ring-2 focus:ring-blue-500 transition"
          ></textarea>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-600 py-4 rounded-lg text-white font-semibold hover:bg-blue-700 transition shadow-lg"
          >
            Send Message 🚀
          </motion.button>
        </motion.form>

        {/* 🔗 SOCIAL CONTACT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex justify-center gap-8 mt-12 text-3xl"
        >
          <motion.a
            href="https://github.com/YOUR_GITHUB_USERNAME"
            target="_blank"
            whileHover={{ scale: 1.3, color: "#3b82f6" }}
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/vikramoffical"
            target="_blank"
            whileHover={{ scale: 1.3, color: "#3b82f6" }}
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="mailto:vikramoffical27@gmail.com"
            whileHover={{ scale: 1.3, color: "#3b82f6" }}
          >
            <FaEnvelope />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;