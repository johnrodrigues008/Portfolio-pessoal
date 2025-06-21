interface EducationItem {
  startDate: string;
  endDate: string;
  collegeName?: string;
  schollName?: string;
  courseName: string;
  address: string;
  status?: "concluido" | "andamento";
}

const educationData: EducationItem[] = [
  {
    courseName: "Desenvolvedor Frontend, Curso Complementar",
    collegeName: "Senai Taguatinga DF",
    startDate: "junho/2021",
    endDate: "",
    address: "",
  },
  {
    courseName: "Desenvolvedor Fullstack, Curso Complementar",
    collegeName: "Gama Academy",
    startDate: "agosto/2021",
    endDate: "",
    address: "",
  },
  {
    courseName: "Desenvolvedor Backend, Curso Complementar",
    collegeName: "Senai Taguatinga DF",
    startDate: "setembro/2021",
    endDate: "",
    address: "",
  },
  {
    courseName: "Processos Gerenciais, Graduação",
    collegeName: "Universidade Estácio de Sá",
    startDate: "ago/2019",
    endDate: "jul/2022",
    address: "Brasília - DF",
    status: "concluido",
  },
  {
    courseName: "Engenharia de Software, Pós Graduação",
    collegeName: "Centro Educacional Anhanguera",
    startDate: "jun/2023",
    endDate: "dez/2023",
    address: "",
    status: "concluido",
  },
  {
    courseName: "Ciências da Computação, Graduação",
    collegeName: "Universidade Estácio de Sá",
    startDate: "set/2021",
    endDate: "jul/2025",
    address: "",
    status: "andamento",
  },
  {
    courseName: "Administração de Banco de Dados, Pós Graduação",
    collegeName: "Centro Educacional Anhanguera",
    startDate: "jan/2024",
    endDate: "jun/2025",
    address: "",
    status: "andamento",
  },
];

export function Education() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16 md:mt-[80px]">
      <h2 className="font-bold text-center text-white uppercase mb-16 text-2xl md:text-3xl">
        Trajetória Acadêmica
      </h2>

      <div className="relative">
        {/* Linha central */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gray-500" />

        <div className="flex flex-col gap-16">
          {educationData.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={index} className="flex justify-between items-center w-full">
                {/* Lado esquerdo */}
                {isLeft ? (
                  <>
                    <div className="w-[45%] text-right">
                      <p className="text-sm uppercase text-gray-400">
                        {item.startDate}
                        {item.endDate && ` - ${item.endDate}`}
                      </p>
                      <p className="font-bold text-green-500">
                        {item.courseName.toUpperCase()}
                      </p>
                      <p className="font-medium text-white">
                        {item.collegeName?.toUpperCase()}
                      </p>
                      {item.address && (
                        <p className="text-sm text-gray-400">{item.address}</p>
                      )}
                      {item.status === "andamento" && (
                        <p className="text-xs text-blue-500 font-bold mt-1">
                          EM ANDAMENTO
                        </p>
                      )}
                    </div>

                    {/* Ponto central */}
                    <div className="w-4 h-4 bg-green-500 rounded-full z-10" />
                    <div className="w-[45%]" />
                  </>
                ) : (
                  <>
                    <div className="w-[45%]" />
                    <div className="w-4 h-4 bg-green-500 rounded-full z-10" />

                    {/* Lado direito */}
                    <div className="w-[45%] text-left">
                      <p className="text-sm uppercase text-gray-400">
                        {item.startDate}
                        {item.endDate && ` - ${item.endDate}`}
                      </p>
                      <p className="font-bold text-green-500">
                        {item.courseName.toUpperCase()}
                      </p>
                      <p className="font-medium text-white">
                        {item.collegeName?.toUpperCase()}
                      </p>
                      {item.address && (
                        <p className="text-sm text-gray-400">{item.address}</p>
                      )}
                      {item.status === "andamento" && (
                        <p className="text-xs text-blue-500 font-bold mt-1">
                          EM ANDAMENTO
                        </p>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
