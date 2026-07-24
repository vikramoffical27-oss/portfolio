import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [zoom, setZoom] = useState(1);

  const certifications = [
    {
      title: "Artificial Intelligence : Concept and Technique",
      issuer: "NPTEL",
      year: "2025",
      image: "/certificates/ai.png",
    },
    {
      title: "Hybrid Convolutional Model for Multimodal Deepfake Detection",
      issuer: "ICA6NT-2026",
      year: "2026",
      image: "/certificates/deepfake1.png",
    },
    {
      title: "Hybrid Convolutional Model for Multimodal Deepfake Detection",
      issuer: "IJRIS",
      year: "2026",
      image: "/certificates/deepfake2.png",
    },
    {
      title: "SQL, Postgre SQL",
      issuer: "IBM",
      year: "2024",
      image: "/certificates/sql.png",
    },
    {
      title: "Python Programming",
      issuer: "MSME Technology Center",
      year: "2024",
      image: "/certificates/python.png",
    },
    {
      title: "Java Programming",
      issuer: "Edusphere",
      year: "2024",
      image: "/certificates/java.png",
    },
    {
      title: "Applied Machine Learning and Deep learning in python",
      issuer: "MSME Technology Center",
      year: "2025",
      image: "/certificates/ml.png",
    },
  ];

  // 🔍 Zoom handler
  const handleZoom = (e) => {
    e.stopPropagation();

    if (e.deltaY < 0) {
      setZoom((prev) => Math.min(prev + 0.2, 3));
    } else {
      setZoom((prev) => Math.max(prev - 0.2, 1));
    }
  };

  // ❌ Close modal
  const closeModal = () => {
    setSelectedCert(null);
    setZoom(1);
  };

  return (
    <section id="certifications" className="py-24 px-6 text-white relative">

      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 opacity-20 
        bg-[radial-gradient(circle_at_20%_30%,#22c55e,transparent_40%),
            radial-gradient(circle_at_80%_70%,#06b6d4,transparent_40%)]" 
      />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* 🔥 Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16 gradient-text"
        >
          Certifications
        </motion.h2>

        {/* 💎 Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedCert(cert)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateX: 5,
                rotateY: -5,
              }}
              className="glass glow-border soft-shadow rounded-xl p-6 cursor-pointer hover-smooth group"
            >
              <h3 className="text-lg font-semibold">{cert.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{cert.issuer}</p>
              <p className="text-xs text-gray-400 mt-1">{cert.year}</p>

              <div className="mt-3 h-0.5 bg-linear-to-r from-green-400 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.div>
          ))}

        </div>
      </div>

      {/* 🖼️ IMAGE MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl max-w-5xl w-full max-h-[90vh] flex items-center justify-center relative shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* ❌ Close */}
              <button
                onClick={closeModal}
                className="absolute top-2 right-3 text-white text-2xl hover:scale-110 transition"
              >
                ✕
              </button>

              {/* 🖼️ Zoom Container */}
              <div
                onWheel={handleZoom}
                className="overflow-hidden flex items-center justify-center"
              >
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  style={{
                    transform: `scale(${zoom})`,
                    transition: "transform 0.15s ease-out",
                  }}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

export default Certifications;