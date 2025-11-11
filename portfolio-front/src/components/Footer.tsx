import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0E0E10] text-gray-400 py-10 border-t border-white/10 overflow-hidden">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-sm"></div>

      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-[10%] w-[300px] h-[300px] bg-blue-600/10 blur-3xl rounded-full"></div>
        <div className="absolute top-0 right-[10%] w-[300px] h-[300px] bg-purple-600/10 blur-3xl rounded-full"></div>
      </div>

      {/* Footer content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-6">
        {/* Social icons */}
        <div className="flex gap-6">
          <a
            href="mailto:mandana.ghz.1991@gmail.com"
            className="hover:text-blue-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
          <a
            href="https://github.com/mandanaghzare"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/mandana-zare"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
        </div>

        {/* Divider line */}
        <div className="w-24 h-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

        {/* Main text */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="text-gray-300 font-medium">Mandana Z</span> — All rights reserved.
        </p>

        {/* Signature line */}
        <p className="text-xs text-gray-600 mt-2">
          Made with <span className="text-pink-500">❤️</span> using{" "}
          <span className="text-blue-400">React</span> &{" "}
          <span className="text-purple-400">TypeScript</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
