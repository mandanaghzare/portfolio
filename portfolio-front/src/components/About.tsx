import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const About: React.FC = () => {
  const { i18n } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const text =
    i18n.language === "fr"
      ? {
          title: "À propos de moi",
          paragraph1:
            "Je suis une développeuse full-stack passionnée par la création d’applications rapides, modernes et élégantes avec TypeScript, React et Node.js. Je conçois des expériences numériques fluides alliant créativité, code propre et technologies de pointe.",
          paragraph2:
            "Au-delà du code, je suis motivée par le design, la stratégie et l’innovation. Je crois que chaque ligne de code doit servir à la fois la fonctionnalité et l’émotion. Mon objectif est de construire des produits significatifs qui simplifient la vie des gens tout en la rendant plus intelligente — grâce à une technologie qui reste profondément humaine.",
          readMore: "En savoir plus",
          readLess: "Afficher moins",
        }
      : {
          title: "About Me",
          paragraph1:
            "I’m a full-stack developer passionate about creating fast, scalable, and elegant applications using TypeScript, React, and Node.js. I specialize in building seamless digital experiences that combine creativity, clean code, and cutting-edge technologies.",
          paragraph2:
            "Beyond the code, I’m driven by design, strategy, and innovation. I believe every line of code should serve both functionality and emotion. My goal is to build meaningful products that make people’s lives easier and smarter — powered by technology that feels human.",
          readMore: "Read more",
          readLess: "Read less",
        };

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 px-6 sm:px-8 md:px-12 text-center text-gray-300 bg-[#0E0E10] overflow-hidden border-t border-white/5"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-[5%] w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] bg-blue-500/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-[5%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-purple-700/10 blur-3xl rounded-full"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {text.title}
        </h2>

        {/* Paragraphs */}
        <div className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed mb-8 space-y-6">
          <p>{text.paragraph1}</p>

          <AnimatePresence initial={false}>
            {(isExpanded || !isMobile) && (
              <motion.div
                key="expanded"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className={`${
                  isMobile
                    ? "max-h-[250px] overflow-y-auto overscroll-contain touch-pan-y scrollbar-thin scrollbar-thumb-purple-700/30"
                    : ""
                }`}
              >
                <p>{text.paragraph2}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Read More button (only on mobile) */}
        {isMobile && (
          <div className="mb-10">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-6 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition-all border border-white/10"
            >
              {isExpanded ? text.readLess : text.readMore}
            </button>
          </div>
        )}

        {/* Tech stack badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12"
        >
          {[
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "Prisma",
            "Tailwind",
            "PostgreSQL",
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 sm:px-4 py-2 text-sm font-medium border border-white/10 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 hover:from-blue-600/20 hover:to-purple-600/20 transition-all duration-300 text-gray-300"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        <div className="mx-auto w-32 sm:w-40 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-[0_0_10px_#7e22ce70]" />
      </motion.div>
    </section>
  );
};

export default About;
