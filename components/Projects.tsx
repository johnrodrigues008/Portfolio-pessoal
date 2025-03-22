"use client";

import { Button } from "./ui/button";

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
    description: "O Karin Portfolio Design é um projeto inovador que visa criar um portfólio digital sofisticado e impactante para a designer Karin. Pensado para destacar a identidade única e criativa da profissional, o projeto alia estética moderna a uma experiência de usuário intuitiva e responsiva.",
    link: "https://portfolio-design-sooty.vercel.app/",
    code: "https://github.com/johnrodrigues008/portfolio-design",
    previewVideo: "/video/portfolio-design.mp4",
    technologies: ["React", "TypeScript", "TailwindCSS"],
  },
  {
    title: "Cardápio Online - Lourdes",
    description: "O Cardápio Online - Lourdes é um projeto inovador que moderniza a experiência gastronômica, oferecendo um cardápio digital elegante, intuitivo e responsivo para o Restaurante Lourdes. Com um design que une tradição e modernidade, o projeto tem como objetivo facilitar o acesso às informações dos pratos, promovendo uma navegação fluida e interativa para os clientes.",
    link: "https://cardapio-online-zeta-two.vercel.app/",
    code: "https://github.com/johnrodrigues008/cardapio-online",
    previewVideo: "/video/lourdes-cardapio.mp4",
    technologies: ["React", "TypeScript", "TailwindCSS"],
  },
];

export function Projects() {
  return (
    <div className="flex flex-col gap-4 mt-10 p-5 md:p-0">
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
        {projectsData?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col border border-gray-100 dark:border-gray-800 rounded-md"
          >
            <video
              src={item.previewVideo}
              autoPlay
              muted
              className="w-full h-full"
            />
            <div className="flex flex-col gap-3 p-4">
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p className="text-sm text-gray-500">{item.description}</p>
              <div className="flex gap-1 flex-wrap">
                {item.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex border border-gray-200 rounded-md px-2 py-1 text-sm bg-gray-500 text-white"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <div className="flex gap-2 mt-2">
                <a href={item.link}>
                  <Button variant="default">View</Button>
                </a>
                <a href={item.code}>
                  <Button variant="outline">Code</Button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};