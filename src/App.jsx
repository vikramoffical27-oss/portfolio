import { useState } from "react";

import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Internship from "./components/Internship";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import stats from "./components/Stats";
import Certifications from "./components/certifications";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      
      {/* 🌌 GLOBAL BACKGROUND */}
      <div className="min-h-screen bg-linear-to-b from-black via-gray-900 to-black text-white relative overflow-hidden">

        {/* ✨ Ambient Glow Background */}
        <div className="fixed inset-0 -z-10 opacity-30 
          bg-[radial-gradient(circle_at_20%_20%,#3b82f6,transparent_40%),
              radial-gradient(circle_at_80%_80%,#9333ea,transparent_40%)]" 
        />

        {/* 🌟 Optional noise texture (premium feel) */}
        <div className="fixed inset-0 -z-10 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />

        {/* 🔝 Navbar */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* 📦 Sections */}
        <main className="relative z-10">
          <Hero darkMode={darkMode} />
          <About darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <Certifications darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Internship darkMode={darkMode} />
          <Contact darkMode={darkMode} />
          <stats darkMode={darkMode}/>
        </main>

        {/* 🔻 Footer */}
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;