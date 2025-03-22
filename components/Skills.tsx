"use client";

interface SkillsData {
    category: string;
    skills: string[];
}

const skillsData: SkillsData[] = [
    {
        category: "Linguagens",
        skills: ["HTML", "CSS","SCSS/SASS","JavaScript", "TypeScript", "PHP", "Python", "Java", "SQL"]
    },
    {
        category: "Frameworks e Bibliotecas",
        skills: [
            "Angular", "AngularJS", "React.js","NextJS", "NestJS","Material ui","Tailwind CSS", "shadcn/ui", "Bootstrap", "Scrapy", "Jest", "Cypress", "GraphQL", "Laravel"
        ]
    },
    {
        category: "Banco de Dados",
        skills: ["MySQL", "PostgreSQL", "MongoDB"]
    },
    {
        category: "Plataformas e Ferramentas de Desenvolvimento",
        skills: [
            "VTEX Legacy", "VTEX IO", "TryCorp", "WordPress", "Deco CX", "Salesforce", "XAMPP",
            "Power BI", "Power Automate"
        ]
    },
    {
        category: "Metodologias e Padrões de Desenvolvimento",
        skills: [
            "Scrum", "Kanban", "Metodologias Ágeis", "TDD (Test-Driven Development)", "Refactoring",
            "Design Patterns", "MVC (Model-View-Controller)", "UML (Unified Modeling Language)"
        ]
    },
    {
        category: "Controle de Versão e Colaboração",
        skills: ["Git", "GitHub", "Trello", "ClickUp", "Clockify", "Mirro"]
    },
    {
        category: "Outras Tecnologias e Ferramentas",
        skills: [
            "APIs REST", "Web Services", "SEO (Search Engine Optimization)",
            "CRO (Conversion Rate Optimization)", "UX/UI Design", "Desenvolvimento de Automação",
            "Prototipagem",
            "Acessibilidade Web",
        ]
    }
];

export function Skills() {
    return (
        <div className="flex flex-col gap-4 mt-10 p-5 md:p-0">
            <h1 className="text-2xl font-bold">Skills</h1>
            {skillsData.map((skillCategory, index) => (
                <div key={index} className="flex flex-col gap-2">
                    <h2 className="text-xl font-semibold">{skillCategory.category}</h2>
                    <div className="flex flex-wrap gap-2">
                        {skillCategory.skills.map((skill, idx) => (
                            <div key={idx} className="flex border border-gray-200 rounded-md px-2 py-1 bg-gray-600 text-sm text-white dark:bg-gray-300 dark:dark:text-black">{skill}</div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};