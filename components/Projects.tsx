
import { useState } from "react";

interface ProjectsData {
  title: string;
  description: string;
  link: string;
  code: string;
  previewVideo: string;
  technologies: string[];
}

const projectsData: ProjectsData[] = [
  {
    title: "Karin Portfolio Design",
    description:
      "O Karin Portfolio Design é um projeto inovador que visa criar um portfólio digital sofisticado e impactante para a designer Karin.",
    link: "https://portfolio-design-sooty.vercel.app/",
    code: "https://github.com/johnrodrigues008/portfolio-design",
    previewVideo: "/video/portfolio-design.mp4",
    technologies: ["React", "TypeScript", "TailwindCSS"],
  },
  {
    title: "Cardápio Online - Lourdes",
    description:
      "O Cardápio Online - Lourdes é um projeto moderno para restaurantes, com foco em navegação fluida e responsiva.",
    link: "https://cardapio-online-zeta-two.vercel.app/",
    code: "https://github.com/johnrodrigues008/cardapio-online",
    previewVideo: "/video/lourdes-cardapio.mp4",
    technologies: ["React", "TypeScript", "TailwindCSS"],
  },
  {
    title: "Projeto 3",
    description: "Outro projeto exemplo para portfólio.",
    link: "#",
    code: "#",
    previewVideo: "/video/portfolio-design.mp4",
    technologies: ["React", "TailwindCSS"],
  },
  {
    title: "Projeto 4",
    description: "Outro projeto exemplo para portfólio.",
    link: "#",
    code: "#",
    previewVideo: "/video/portfolio-design.mp4",
    technologies: ["React", "TailwindCSS"],
  },
  {
    title: "Projeto 5",
    description: "Outro projeto exemplo para portfólio.",
    link: "#",
    code: "#",
    previewVideo: "/video/portfolio-design.mp4",
    technologies: ["React", "TailwindCSS"],
  },
  {
    title: "Projeto 6",
    description: "Outro projeto exemplo para portfólio.",
    link: "#",
    code: "#",
    previewVideo: "/video/portfolio-design.mp4",
    technologies: ["React", "TailwindCSS"],
  },
];

export function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <section className="w-full py-10">
      <div className="mx-auto px-4 md:p-0">
        <h1 className="font-bold mb-10 uppercase text-2xl md:text-3xl text-center md:text-start">Meu trabalho</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((item, index) => (
            <div key={index} className="flex flex-col items-start">
              <h2 className="text-sm font-bold uppercase mb-2">
                {item.title}
              </h2>

              <video
                src={item.previewVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[300px] object-cover"
              />

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-green-500 text-white text-sm w-full text-center py-2 mt-4 hover:text-black hover:bg-green-100 transition"
              >
                Acesse o recurso original →
              </a>
            </div>
          ))}
        </div>

        {/* Botão Ver mais / Ver menos */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm text-white border border-green-500 px-6 py-2 hover:text-black hover:bg-green-100 transition"
          >
            {showAll ? "Ver menos projetos" : "Ver mais projetos"}
          </button>
        </div>
      </div>
    </section>
  );
}
