import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <section id="hero" className="snap-start h-screen">
        <Hero />
      </section>
      <section id="about" data-aos="fade-up" className="snap-start h-screen">
        <About />
      </section>
      <section id="projects" data-aos="fade-up" className="snap-start h-screen">
        <Projects />
      </section>
      <section id="services" data-aos="fade-up" className="snap-start h-screen">
        <Services />
      </section>
      <section id="contact" data-aos="fade-up" className="snap-start h-screen">
        <Contact />
      </section>
    </>
  );
}
