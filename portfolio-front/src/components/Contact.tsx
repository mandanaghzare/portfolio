import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="relative h-screen flex flex-col justify-center items-center bg-[#0E0E10] overflow-hidden snap-start text-white"
    >
      {/* glowing background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[15%] w-[300px] h-[300px] bg-blue-600/10 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-[15%] w-[400px] h-[400px] bg-purple-600/10 blur-3xl rounded-full animate-pulse delay-1000"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="contact relative z-20 w-full max-w-6xl flex flex-col lg:flex-row justify-center items-center gap-12 px-6 md:px-10"
      >
        {/* left text */}
        <div className="flex flex-col items-start w-[85%] md:w-1/3 text-left md:text-left sm:text-center sm:items-center">
          <h2 className="text-2xl md:text-4xl sm:text-3xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {t("contact.title") || "Get in Touch"}
          </h2>
          <p className="text-gray-400 text-base sm:text-sm text-[0.7em]  md:text-[1em]">
            {t("contact.subtitle") || "Feel free to reach out for collaboration ✨"}
          </p>
          {/* social links */}
          <div className="link-left hidden text-[0.7em]  md:text-[1em] sm:flex-row justify-center md:justify-start gap-6 mt-6 text-gray-400">
            <a href="#" className="flex items-center gap-2 hover:text-purple-400 transition">
              <Mail size={18} /> Email
            </a>
            <a href="https://github.com/mandanaghzare" className="flex items-center gap-2 hover:text-purple-400 transition">
              <Github size={18} /> GitHub
            </a>
            <a href="https://linkedin.com/in/mandana-zare" className="flex items-center gap-2 hover:text-purple-400 transition">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>

        {/* form */}
        <div className="form w-64 md:w-1/2 sm:w-11/12 bg-[#111827]/60 p-8 sm:p-6 rounded-2xl border border-white/10 shadow-[0_0_20px_rgba(139,92,246,0.15)] backdrop-blur-sm">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder={t("contact.name") || "Your Name"}
              className="text-[0.7em]  md:text-[1em] bg-transparent border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-purple-500 transition-all duration-300"
            />
            <input
              type="email"
              placeholder={t("contact.email") || "Your Email"}
              className="text-[0.7em]  md:text-[1em] bg-transparent border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-purple-500 transition-all duration-300"
            />
            <textarea
              placeholder={t("contact.message") || "Your Message"}
              className="text-[0.7em]  md:text-[1em] bg-transparent border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-purple-500 transition-all duration-300 min-h-[120px]"
            ></textarea>
            <button
              type="submit"
              className="text-[0.7em]  md:text-[1em] mt-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 text-white font-semibold py-3 rounded-lg shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all duration-300"
            >
              🚀 {t("contact.send") || "Send Message"}
            </button>
          </form>

          {/* social links */}
          <div className="link-right text-[0.7em]  md:text-[1em] flex sm:flex-row justify-center md:justify-start gap-6 mt-6 text-gray-400">
            <a href="#" className="flex items-center gap-2 hover:text-purple-400 transition">
              <Mail size={18} /> Email
            </a>
            <a href="https://github.com/mandanaghzare" className="flex items-center gap-2 hover:text-purple-400 transition">
              <Github size={18} /> GitHub
            </a>
            <a href="https://linkedin.com/in/mandana-zare" className="flex items-center gap-2 hover:text-purple-400 transition">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
