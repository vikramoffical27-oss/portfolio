import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-28 px-6 relative text-white">

      {/* 🌌 Background glow */}
      <div className="absolute inset-0 opacity-20 
        bg-[radial-gradient(circle_at_20%_20%,#3b82f6,transparent_40%),
            radial-gradient(circle_at_80%_80%,#9333ea,transparent_40%)]" 
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* 🔥 Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-20 gradient-text"
        >
          About Me
        </motion.h2>

        {/* 💎 Split Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* 🧠 LEFT: TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-8">
              I'm a <span className="text-blue-400 font-semibold">Computer Science graduate</span> and aspiring 
              <span className="text-purple-400 font-semibold"> Software Developer</span>.
            </p>

            <p className="text-lg text-gray-300 leading-8">
              I specialize in building modern web applications using 
              <span className="text-blue-400"> Java,MySQL</span> and 
              <span className="text-purple-400"> React</span>.
            </p>

            <p className="text-lg text-gray-300 leading-8">
              I enjoy solving real-world problems and continuously learning new technologies to improve my skills.
            </p>
          </motion.div>

          {/* 🎯 RIGHT: INTERACTIVE CARD */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            className="glass glow-border soft-shadow rounded-2xl p-8 hover-smooth"
          >
            <h3 className="text-2xl font-semibold mb-4">
              🚀 Quick Highlights
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>💻 Full Stack Development</li>
              <li>⚡ Problem Solving Mindset</li>
              <li>🎨 UI/UX Focused Design</li>
              <li>📚 Continuous Learning</li>
            </ul>

            {/* ✨ Animated line */}
            <div className="mt-6 h-0.5 bg-linear-to-r from-blue-500 to-purple-500 animate-pulse" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;