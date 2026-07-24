import { motion } from "framer-motion";
import { useState } from "react";

function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = [
    { name: "Java", level: 85 },
    { name: "JDBC", level: 75 },
    { name: "MySQL", level: 80 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 75 },
    { name: "Python", level: 60 },
    { name: "SQL", level: 85 }
  ];

  return (
    <section id="skills" className="py-24 px-6 text-white relative">

      {/* 🌌 Background glow */}
      <div className="absolute inset-0 opacity-20 
        bg-[radial-gradient(circle_at_30%_20%,#3b82f6,transparent_40%),
            radial-gradient(circle_at_70%_80%,#9333ea,transparent_40%)]" 
      />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* 🔥 Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16 gradient-text"
        >
          Skills
        </motion.h2>

        {/* 💎 Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

          {skills.map((skill, index) => {
            const isActive = activeSkill === skill.name;

            return (
              <motion.div
                key={skill.name}
                onClick={() =>
                  setActiveSkill(isActive ? null : skill.name)
                }
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{
                  scale: 1.1,
                  rotateX: 5,
                  rotateY: -5,
                }}
                className="glass glow-border soft-shadow rounded-xl p-4 text-center cursor-pointer hover-smooth group"
              >
                {/* ✨ Skill Name */}
                <p className="font-semibold">{skill.name}</p>

                {/* 🔥 Underline */}
                <div className="mt-2 h-0.5 bg-linear-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

                {/* 📊 Skill Level (on click) */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-4"
                  >
                    <p className="text-sm mb-1 text-gray-300">
                      {skill.level}%
                    </p>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.6 }}
                        className="h-full bg-linear-to-r from-blue-500 to-purple-500"
                      />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Skills;