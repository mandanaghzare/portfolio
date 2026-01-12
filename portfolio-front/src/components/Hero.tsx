import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../img/logo1.png";
import mandanaImg from "../img/profile.jpg";

export default function HeroSection() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row min-h-screen bg-[#0E0E10] text-gray-200 overflow-hidden"
    >
      {/* --- Sidebar (Desktop) --- */}
      <aside className="hidden md:flex w-[30%] flex-col justify-between items-center border-r border-white/10 py-12 bg-[#0E0E10]">
        {/* Logo */}
        <img
          src={logo}
          alt="Mandana Logo"
          className="w-36 h-auto object-contain mb-6"
        />

        {/* Links */}
        <nav className="flex flex-col items-center gap-6 text-lg font-medium">
          {["Hero", "About", "Projects", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-purple-400 transition-colors duration-300"
            >
              {t(`nav.${item}`) || item}
            </a>
          ))}
        </nav>

        {/* Language Switch */}
        <div className="flex gap-3 mt-8">
          {["en", "fr"].map((lng) => (
            <button
              key={lng}
              onClick={() => changeLanguage(lng)}
              className={`px-3 py-1 text-sm rounded-md transition-all duration-200 ${
                i18n.language === lng
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_0_10px_#8b5cf6]"
                  : "bg-transparent border border-white/10 hover:border-purple-500/50 text-gray-300"
              }`}
            >
              {lng.toUpperCase()}
            </button>
          ))}
        </div>
      </aside>

      {/* --- Top Navbar (Mobile) --- */}
      <nav className="md:hidden fixed top-0 left-0 w-full bg-[#0E0E10]/90 backdrop-blur-md border-b border-white/10 z-50 px-6 py-4 flex justify-between items-center">
        <img src={logo} alt="Mandana Logo" className="w-28 object-contain" />

        {/* Hamburger Button */}
        <button
          className="flex flex-col gap-[5px] w-8 h-8 justify-center items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`w-6 h-[2px] bg-white transition-all ${
              isMenuOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white transition-all ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white transition-all ${
              isMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* --- Mobile Menu --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="resNav md:hidden fixed top-[64px] left-0 w-full bg-[#0E0E10]/95 backdrop-blur-lg border-b border-white/10 py-6 flex flex-col items-center gap-6 text-lg font-medium z-40"
          >
            {["Hero", "About", "Projects", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-purple-400 transition-colors duration-300"
              >
                {t(`nav.${item}`) || item}
              </a>
            ))}

            <div className="flex gap-3 mt-2">
              {["en", "fr"].map((lng) => (
                <button
                  key={lng}
                  onClick={() => changeLanguage(lng)}
                  className={`px-3 py-1 text-sm rounded-md transition-all duration-200 ${
                    i18n.language === lng
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_0_10px_#8b5cf6]"
                      : "bg-transparent border border-white/10 hover:border-purple-500/50 text-gray-300"
                  }`}
                >
                  {lng.toUpperCase()}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Hero Content --- */}
      <div className="mandanaInfo w-full md:w-[70%] flex flex-col justify-center items-center text-center px-6 sm:px-10 mt-24 md:mt-0">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500">
            {t("home.title")}
          </span>
        </motion.h2>

        <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-8 max-w-2xl">
          {t("home.description")}
        </p>

        <motion.img
          src={mandanaImg}
          alt="Mandana"
          className="mandanaImg w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full object-cover shadow-[0_0_40px_#7e22ce50] mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="px-8 py-3 cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold hover:opacity-90 transition-all"
          >
            {t("home.seeWork")}
          </a>
          <a
            href="#contact"
            className="px-8 py-3 cursor-pointer border border-gray-500 rounded-lg text-gray-300 hover:border-purple-400 hover:text-white transition-all"
          >
            {t("home.contact")}
          </a>
        </div>
      </div>
    </section>
  );
}
