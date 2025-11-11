import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
  language?: string;
  fork?: boolean;
  private?: boolean;
}

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/mandanaghzare/repos")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((repo: Repo) => !repo.fork && !repo.private);
        setRepos(filtered);
      })
      .catch((err) => console.error("Error fetching GitHub repos:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <section
        id="projects"
        className="pt-32 text-center bg-[#0E0E10] text-gray-400 min-h-[50vh] flex items-center justify-center"
      >
        <p className="animate-pulse text-lg tracking-wide">
          {t("projects.loading") || "Loading projects..."}
        </p>
      </section>
    );

  return (
    <section
      id="projects"
      data-aos="fade-up"
      className="relative flex flex-col justify-center items-center bg-[#0E0E10] overflow-hidden py-20 min-h-[90vh]"
    >
      {/* glowing background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-[8%] w-[300px] h-[300px] bg-blue-500/10 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] bg-purple-600/10 blur-3xl rounded-full animate-pulse delay-1000" />
      </div>

      {/* ✅ title */}
      <div className="myProjectTitle relative z-10 text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {t("projects.title") || "My Projects"}
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          {t("projects.subtitle") || "Modern tools, clean code."}
        </p>
      </div>

      {/* ✅ Responsive layout: grid on desktop / horizontal scroll on mobile */}
      <div
        className="
          relative z-10 w-full 
          flex lg:grid lg:grid-cols-4 lg:gap-10 
          gap-6 overflow-x-auto overflow-y-hidden lg:overflow-visible scrollbar-hide 
          snap-x snap-mandatory px-6 sm:px-30 pb-12 justify-start lg:justify-center
        "
        style={{ scrollBehavior: "smooth" }}
      >
        {/* spacer for mobile scroll */}
        <div className="flex-shrink-0 w-[5%] lg:hidden" />

        {repos.map((repo, index) => (
          <div
            key={repo.id}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="group snap-center flex-shrink-0 w-[85%] sm:w-[320px] lg:w-full h-[280px]
                      bg-[#111827]/60 backdrop-blur-sm border border-white/10 rounded-2xl 
                      p-6 flex flex-col justify-between relative overflow-hidden
                      hover:border-purple-400/50 hover:shadow-[0_0_25px_#8b5cf640] 
                      transition-all duration-500 hover:-translate-y-2
                      lg:hover:scale-[1.03] lg:overflow-visible"
          >
            {/* hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-blue-500/10 via-purple-600/10 to-transparent blur-2xl pointer-events-none"></div>

            {/* content */}
            <div className="relative z-10 flex flex-col text-left flex-grow">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300 break-words">
                {repo.name}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm flex-grow leading-relaxed line-clamp-4">
                {repo.description || (
                  <span className="italic text-gray-500">No description provided.</span>
                )}
              </p>
            </div>

            {/* footer */}
            <div className="relative z-10 mt-auto flex justify-between items-center text-xs sm:text-sm text-gray-400">
              <span className="italic text-gray-500">
                {repo.language || "Unknown"}
              </span>
              <div className="flex gap-3">
                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 font-medium hover:text-blue-300 transition-all duration-300 relative"
                  >
                    Demo
                    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                )}
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-400 font-medium hover:text-purple-300 transition-all duration-300 relative"
                >
                  Code
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
            </div>
          </div>
        ))}

        <div className="flex-shrink-0 w-[10%] lg:hidden" />
      </div>

    </section>
  );
};

export default Projects;
