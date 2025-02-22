"use client";

import Link from "next/link";

export function ContacteMe() {
  return (
    <div className="h-[400px] flex flex-col justify-center gap-4 pt-5">
      <h1 className="text-2xl font-bold">Contact Me</h1>
      <p className="text-base text-gray-700 dark:text-gray-300">
        Estou à disposição para discutir oportunidades e esclarecer dúvidas.
        Entre em contato via mensagem direta no{" "}
        <Link
          className="text-blue-500"
          href="https://www.linkedin.com/in/johnrodrigues009/"
        >
          Linkedin
        </Link>{" "}
        ou pelo email john.rodrigues008@gmail.com.
        <Link
          className="text-blue-500"
          href="maito:1ohn.rodrigues008@gmail.com"
        >
          john.rodrigues008@gmail.com
        </Link>
      </p>
    </div>
  );
};
