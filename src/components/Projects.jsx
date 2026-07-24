import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Bus Reservation System",
      tech: "Java • JDBC • MySQL",
      description:
        "Developed a desktop application for booking, cancelling, and managing bus seats with real-time availability.",
      github: "#",
      demo: "#",
    },
    {
      title: "Deepfake Detection",
      tech: "Python • CNN • LSTM",
      description:
        "AI-powered deepfake detection using CNN + LSTM for image, audio, and video.",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="relative py-24 px-6 bg-linear-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_20%_20%,#3b82f6,transparent_40%),radial-gradient(circle_at_80%_80%,#9333ea,transparent_40%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-16 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="glass glow-border rounded-2xl p-8 transition-all duration-500"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-blue-400 mb-4">
                {project.tech}
              </p>

              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>

              <div className="flex gap-4 mt-6">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={project.github}
                  className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
                >
                  GitHub
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={project.demo}
                  className="px-5 py-2 rounded-lg border border-blue-500 hover:bg-blue-500 transition"
                >
                  Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;