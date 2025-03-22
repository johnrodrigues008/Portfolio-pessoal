"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TextAnimate } from "./magicui/text-animate";
import { WordRotate } from "./magicui/word-rotate";
import { NumberTicker } from "./magicui/number-ticker";

export function Into() {
  return (
    <div className="relative w-full h-[100vh] flex flex-col-reverse items-center lg:gap-4 lg:flex-row lg:justify-between lg:h-[100vh] lg:backgroundImageOne">
      <div className="absolute inset-0 bg-black opacity-50 lg:hidden"></div>

      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center lg:hidden"
        style={{ backgroundImage: "url('/image/img_john1.JPG')" }}
      ></div>

      <div className="relative flex flex-col gap-4 w-full h-full justify-center mt-[200px] lg:mt-0 lg:w-9/12">
        <div>
          <h1 className="flex flex-col justify-center items-center md:flex-row md:justify-start mb-5 text-4xl lg:text-4xl text-center lg:text-start text-white">
            <TextAnimate animation="blurInUp" by="character" once>
              Olá!
            </TextAnimate>
            <TextAnimate
              className="mx-2 font-thin text-red-500"
              animation="blurInUp"
              by="character"
              once
            >
              Eu sou
            </TextAnimate>
            <WordRotate
              className=" text-white"
              words={[
                "John Rodrigues",
                "Programador",
                "Desenvolvedor",
                "Designer",
              ]}
            />
          </h1>
          <p className="text-center text-base text-gray-300 max-w-[700px] md:text-start lg:text-gray-500">
            &quot;Faça o teu melhor, na condição que você tem, enquanto você não
            tem condições melhores para fazer melhor ainda&quot; -{" "}
            <span className="text-green-500">Mário</span>{" "}
            <span className="text-amber-300">Sérgio</span>{" "}
            <span className="text-blue-700">Cortella</span>.
          </p>
        </div>
        <div className="flex">
          <div className="text-center w-full flex flex-col md:w-auto md:mr-5 text-white">
            <div>
              <span className="text-xl">+</span>
              <NumberTicker
                value={37}
                className="whitespace-pre-wrap text-2xl font-medium tracking-tighter text-white"
              />
            </div>
            <span className="text-1xl">Freelancers</span>
          </div>
          <div className="text-center w-full flex flex-col md:w-auto md:mr-5 text-white">
            <div>
              <span className="text-xl">+</span>
              <NumberTicker
                value={11}
                className="whitespace-pre-wrap text-2xl font-medium tracking-tighter text-white"
              />
            </div>
            <span className="text-1xl">E-commerces</span>
          </div>
          <div className="text-center w-full flex flex-col md:w-auto md:mr-5 text-white">
            <div>
              <span className="text-xl">+</span>
              <NumberTicker
                value={8}
                className="whitespace-pre-wrap text-2xl font-medium tracking-tighter text-white"
              />
            </div>
            <span className="text-1xl">Sistemas</span>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ x: -900, filter: "blur(10px)", opacity: 0 }}
        animate={{ x: 0, filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="hidden lg:block w-[400px] h-[500px] overflow-hidden relative"
      >
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover object-[40%_80%]"
          src="/image/img_john1.JPG"
          alt="John Rodrigues"
          width={1000}
          height={1000}
        />
      </motion.div>
    </div>
  );
};