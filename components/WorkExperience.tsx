"use client";

interface WorkExperienceItem {
  startDate: string;
  endDate: string;
  companyName: string;
  jobTitle: string;
  description: string[];
}

const workExperienceData: WorkExperienceItem[] = [
  {
    jobTitle: "Desenvolvedor Full Stack",
    companyName: "Decisão Sistemas",
    startDate: "ago de 2023",
    endDate: "jul de 2024",
    description: [
      "Desenvolvimento de soluções de software completas utilizando TypeScript para backend e Angular para frontend, com foco em performance e escalabilidade.",
      "Colaboração com equipes ágeis usando Scrum e Kanban para entregar projetos dentro dos prazos e com qualidade.",
      "Implementação de padrões de projeto (Design Patterns, MVC) e integração com APIs REST e Web Services.",
      "Realização de testes automatizados, incluindo TDD e testes de integração, utilizando ferramentas como Jest e Cypress.",
      "Manutenção e melhoria contínua de sistemas, aplicando refactoring e boas práticas de desenvolvimento.",
      "Utilização de Git para controle de versão e colaboração em equipe.",
      "Desenvolvimento de automações com Python para alimentar os dados do backend.",
    ],
  },
  {
    jobTitle: "Analista e Desenvolvedor de SEO/CRO",
    companyName: "Media.Monks Brasil",
    startDate: "fev de 2022",
    endDate: "set de 2023",
    description: [
      "Desenvolvimento Frontend e Implementação de APIs.",
      "Manutenção eficiente de E-commerces, abrangendo diversas plataformas, incluindo VTEX Legacy, VTEX IO, TryCorp, WordPress, Deco CX, Salesforce e outras.",
      "Responsável por análises, planejamento e implementação de SEO (Search Engine Optimization) e CRO (Conversion Rate Optimization).",
      "Prototipagem de projetos com foco na experiência do usuário (UX) e interface do usuário (UI), priorizando a acessibilidade na web.",
      "Capacidade de liderar treinamentos para a equipe e apresentar dados e resultados de forma eficaz para clientes e colegas.",
      "Utilização de metodologias ágeis, incluindo Scrum e Kanban, e ferramentas de organização como Trello, ClickUp, Clockify e Miro.",
      "Domínio das linguagens HTML, CSS, JavaScript, TypeScript, PHP, Python e suas bibliotecas.",
    ],
  },
  {
    jobTitle: "Analista de Dados e Automação",
    companyName: "Ministério dos Transportes, Portos e Aviação Civil",
    startDate: "fev de 2022",
    endDate: "fev de 2023",
    description: [
      "Desenvolvimento de soluções de automação em Python, utilizando bibliotecas como Scrapy e outras para coleta e tratamento de dados.",
      "Gerenciamento de bancos de dados em PostgreSQL e MySQL, com foco na criação de pipelines de dados para análises detalhadas.",
      "Integração com plataformas como Power BI e Power Automate para automação de processos e criação de dashboards.",
    ],
  },
];

export function WorkExperience() {
  return (
    <div className="flex flex-col gap-4 pt-4">
      <h1 className="text-2xl font-bold">Work Experience</h1>

      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {workExperienceData.map((item, index) => (
          <li key={index} className="mb-5 ms-4">
            <div
              className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
              aria-hidden="true"
            ></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {item.startDate} - {item.endDate}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {item.jobTitle} at {item.companyName}
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              {item.description.map((desc, descIndex) => (
                <li key={descIndex} >{desc}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
};