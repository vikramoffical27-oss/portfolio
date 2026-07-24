import { motion } from "framer-motion";

function Internship() {
  return (
    <section id="internship" className="py-28 px-6 relative text-white">

      {/* 🌌 Background glow */}
      <div className="absolute inset-0 opacity-20 
        bg-[radial-gradient(circle_at_30%_20%,#3b82f6,transparent_40%),
            radial-gradient(circle_at_70%_80%,#9333ea,transparent_40%)]" 
      />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* 🔥 Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-20 gradient-text"
        >
          Internship
        </motion.h2>

        {/* 📍 Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-4 top-0 w-1 h-full bg-linear-to-b from-blue-500 to-purple-500 rounded-full" />

          {/* 💎 Timeline Item */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="ml-12 mb-16"
          >

            {/* Dot */}
            <div className="absolute left-2 w-6 h-6 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50" />

            {/* Card */}
            <div className="glass glow-border soft-shadow rounded-2xl p-8 hover-smooth">

              <h3 className="text-2xl font-semibold">
                Front End Developer Intern
              </h3>

              <p className="text-blue-400 mt-2">
                Valvenet Technologies
              </p>

              <ul className="mt-6 space-y-3 text-gray-300 leading-7">
                <li>🚀 Built responsive web apps using HTML, CSS, JavaScript</li>
                <li>🎨 Designed clean and user-friendly UI layouts</li>
                <li>⚡ Added interactive features & validations</li>
                <li>📱 Optimized performance for all devices</li>
              </ul>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Internship;