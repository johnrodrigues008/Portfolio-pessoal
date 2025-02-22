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
    title: "Project 1",
    description: "Description 1",
    link: "https://google.com",
    code: "https://github.com",
    previewVideo: "/video/preview.mp4",
    technologies: ["React", "TypeScript", "TailwindCSS"],
  },
  {
    title: "Project 2",
    description: "Description 2",
    link: "https://github.com",
    code: "https://github.com",
    previewVideo: "/video/preview.mp4",
    technologies: ["React", "TypeScript", "TailwindCSS"],
  },
  {
    title: "Project 3",
    description: "Description 3",
    link: "https://github.com",
    code: "https://github.com",
    previewVideo: "/video/preview.mp4",
    technologies: ["React", "TypeScript", "TailwindCSS"],
  },
];

export function Projects() {
  return (
    <div className="flex flex-col gap-4 mt-4 pt-10">
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