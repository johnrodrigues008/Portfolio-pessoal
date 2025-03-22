"use client";

import Link from "next/link";

export function ContacteMe() {
  return (
    <div className="h-[400px] flex flex-col justify-center gap-4 p-5 pt-0 mb-8 md:p-0">
      <h1 className="text-2xl font-bold">Contact Me</h1>
      <p className="text-base text-gray-700 dark:text-gray-300">
        Estou à disposição para conversar sobre oportunidades e esclarecer qualquer dúvida. Sinta-se à vontade para entrar em contato por mensagem direta no

        {" "}
        <Link
          className="text-blue-500"
          href="https://www.linkedin.com/in/johnrodrigues009/"
        >
          Linkedin
        </Link>{" "}
        ou pelo e-mail{" "}
        <Link
          className="text-blue-500"
          href="maito:1ohn.rodrigues008@gmail.com"
        >
          john.rodrigues008@gmail.com.
        </Link>
      </p>
    </div>
  );
};
