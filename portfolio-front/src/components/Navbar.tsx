import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../img/logo1.png";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  visible: boolean;
}

export default function Navbar({ visible }: NavbarProps) {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const sections = ["hero", "about", "projects", "services", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.6, // Section must be at least 60% visible
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          key="navbar"
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed top-0 left-0 w-full z-50 bg-[#0E0E10]/90 backdrop-blur-md shadow-[0_0_25px_#00000080]"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
            {/* Logo */}
            <img
              src={logo}
              alt="Mandana Logo"
              className="w-28 h-auto object-contain"
            />

            {/* Nav Links */}
            <div className="flex items-center gap-8 text-sm md:text-base font-medium">
              {["Hero", "About", "Projects", "Services", "Contact"].map(
                (item) => {
                  const sectionId = item.toLowerCase();
                  const isActive = activeSection === sectionId;

                  return (
                    <a
                      key={item}
                      href={`#${sectionId}`}
                      className={`relative transition-all duration-300 ${
                        isActive
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
                          : "text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400"
                      }`}
                    >
                      {t(`nav.${item}`) || item}
                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                          isActive ? "w-full opacity-100" : "w-0 opacity-0"
                        }`}
                      />
                    </a>
                  );
                }
              )}
            </div>

            {/* Language Switch */}
            <div className="flex gap-3">
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
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
