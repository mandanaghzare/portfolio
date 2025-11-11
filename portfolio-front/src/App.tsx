import { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { motion } from "framer-motion";
import { t } from "i18next";

function App() {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [showNavbar, setShowNavbar] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;

      const heroHeight = hero.offsetHeight;
      const scrollY = container.scrollTop;

      setShowNavbar(scrollY > heroHeight * 0.8);
    };

    window.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Glow effect */}
      <motion.div
        className="bg-glow fixed inset-0 -z-10"
        style={
          {
            "--x": `${pos.x}%`,
            "--y": `${pos.y}%`,
          } as React.CSSProperties
        }
        animate={{
          background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(99,102,241,0.12), rgba(0,0,0,0) 60%)`,
        }}
        transition={{ type: "tween", duration: 0.4 }}
      />

      {/* Navbar */}
      <Navbar visible={showNavbar} />

      {/* Main scroll container */}
      <div
        ref={scrollContainerRef}
        className="w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
      >
        <Home />
      </div>
      <div id="rotate-lock">
        {t("rotateMessage")}
      </div>
    </>
  );
}

export default App;
