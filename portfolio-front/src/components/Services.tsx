import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Code2,
  Database,
  Smartphone,
  ShieldCheck,
  Search,
  LifeBuoy,
} from "lucide-react";
// import { items } from "framer-motion/client";

const Services: React.FC = () => {
  const { t } = useTranslation();

  const items = [
    { key: "services.list.frontend", details: "services.details.frontend", icon: <Code2 size={24} /> },
    { key: "services.list.backend", details: "services.details.backend", icon: <Database size={24} /> },
    { key: "services.list.auth", details: "services.details.auth", icon: <ShieldCheck size={24} /> },
    { key: "services.list.responsive", details: "services.details.responsive", icon: <Smartphone size={24} /> },
    { key: "services.list.seo", details: "services.details.seo", icon: <Search size={24} /> },
    { key: "services.list.support", details: "services.details.support", icon: <LifeBuoy size={24} /> },
  ];

  return (
    <section
      id="services"
      className="relative h-screen flex flex-col justify-start md:pt-28 items-center bg-[#0E0E10] text-center overflow-hidden snap-start"
    >
      {/* glowing background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[15%] w-[300px] h-[300px] bg-blue-600/10 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-[15%] w-[400px] h-[400px] bg-purple-600/10 blur-3xl rounded-full animate-pulse delay-1000"></div>
      </div>

      {/* title */}
      <motion.div
        className="serviceTitle relative z-20 mb-10 mt-24 sm:mt-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-2xl md:text-4xl sm:text-3xl font-extrabold mb-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {t("services.title") || "What I Do"}
        </h2>
        <p className="text-gray-400 text-xs w-[70%] m-auto sm:text-sm">
          {t("services.description") || "Building beautiful digital experiences."}
        </p>
      </motion.div>

      {/* cards */}
      <div
        className="
        relative z-10 w-full px-6 
        grid gap-2 sm:gap-4
        lg:grid-cols-3 md:grid-cols-2 grid-cols-2
        place-items-center
        sm:scale-[0.8] xs:scale-[0.65]
        sm:-mt-6 xs:-mt-4
        sm:h-[55vh] xs:h-[50vh]
        "
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="group bg-[#111827]/60 backdrop-blur-sm border border-white/10 rounded-xl 
                       p-2 sm:px-3 sm:py-5 w-full max-w-[240px] sm:max-w-[100%] h-[100%]
                       flex flex-col justify-between items-center text-center 
                       hover:border-purple-400/40 hover:shadow-[0_0_20px_#8b5cf640] 
                       transition-all duration-500 hover:-translate-y-1"
          >
            <div className="mb-3 p-2 sm:p-1.5 flex w-[30px] sm:w-[50px] sm:h-[50px] h-[30px] justify-center items-center rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-md">
              {item.icon}
            </div>
            <h3 className="sm:text-[1.3em] text-[0.4em] font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300">
              {t(item.key)}
            </h3>
            <p className="text-gray-400 text-[0.4em] leading-tight">
              {t(item.details)}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
