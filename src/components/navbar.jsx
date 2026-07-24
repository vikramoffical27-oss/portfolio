import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

function Navbar({ darkMode, setDarkMode }) {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = ["home", "about", "skills", "projects", "contact"];

  // 🔥 Scroll Active Section + Shrink Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      links.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 100;
          const height = el.offsetHeight;
          if (window.scrollY >= top && window.scrollY < top + height) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 backdrop-blur-xl bg-white/10 dark:bg-gray-900/80 shadow-lg"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-8 md:px-16 text-black dark:text-white">

        {/* 🔥 LOGO */}
        <motion.h1
          whileHover={{ scale: 1.1, rotate: -3 }}
          className="text-3xl font-bold text-blue-500 cursor-pointer tracking-wide"
        >
          Vikram
        </motion.h1>

        {/* 💻 DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10 relative">

          {links.map((link) => (
            <motion.a
              key={link}
              href={`#${link}`}
              onClick={() => setActive(link)}
              className="relative capitalize text-lg font-medium group"
              whileHover={{ y: -3 }}
            >
              {link}

              {/* 🔥 ACTIVE + HOVER UNDERLINE */}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-blue-500 transition-all duration-300 ${
                  active === link ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </motion.a>
          ))}

          {/* 🌙 DARK MODE */}
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            whileTap={{ scale: 0.7 }}
            whileHover={{ rotate: 180 }}
            className="text-2xl hover:text-blue-500 transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </motion.button>
        </div>

        {/* 📱 MOBILE BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
          </button>
        </div>
      </div>

      {/* 📱 MOBILE MENU */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col items-center gap-6 py-6 bg-white/10 dark:bg-gray-900/90 backdrop-blur-lg"
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setMenuOpen(false)}
              className="text-lg capitalize hover:text-blue-500"
            >
              {link}
            </a>
          ))}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-2xl"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;