"use client";

interface EducationItem {
  startDate: string;
  endDate: string;
  collegeName?: string;
  schollName?: string;
  courseName: string;
  address: string;
}

const educationData: EducationItem[] = [
  {
    collegeName: "Anhanguera Educacional",
    courseName: "Administração de banco de dados, Pós graduação",
    startDate: "jan de 2024",
    endDate: " jul de 2025",
    address: "Brasilia - DF",
  },
  {
    collegeName: "Universidade estácio de sá",
    courseName: "Ciências da Computação, Graduação Bacharelado",
    startDate: "set de 2021",
    endDate: " jul de 2025",
    address: "Brasilia - DF",
  },
  {
    collegeName: "Anhanguera Educacional",
    courseName: "Engenharia de Solftware, Pós graduação",
    startDate: "jun de 2023",
    endDate: " dez de 2023",
    address: "Brasilia - DF",
  },
  {
    collegeName: "Universidade estácio de sá",
    courseName: "Processos Gerências, Graduação Tecnologo",
    startDate: "ago de 2019",
    endDate: "jul de 2023",
    address: "Brasilia - DF",
  },
];

export function Education() {
  return (
    <div className="flex flex-col gap-4 mt-10 p-5 md:p-0">
      <h1 className="text-2xl font-bold">Education</h1>

      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {educationData.map((item, index) => (
          <li key={index} className="mb-5 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {item.startDate} - {item.endDate}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {item.courseName}
            </h3>
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
              {item?.collegeName ?? item?.schollName}
            </h3>
            <p className="text-base text-gray-700 dark:text-gray-400">
              {item.address}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};
