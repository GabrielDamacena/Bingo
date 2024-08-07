"use client";

import React, { useState } from "react";
import { useRouter } from 'next/navigation';


export default function Quest() {
  
  const [count, setCount] = useState<number>(0);

  const router = useRouter();

  
  const handleRedirect = () => {
    if (count > 2) {
      router.push('/Acertou'); 
    } else {
      router.push('/Errou'); 
    }
  };


  return (
    <main className="flex flex-col h-screen">
    <div className="bg-white h-screen flex flex-col">
      <div className="bg-cyan-400 h-24 flex justify-center items-center border-b border-gray-600">
        <h1 className="text-black sm:text-xs md:text-xs lg:text-3xl italic font-bold"> Qual é o objetivo principal do Sistema de Catherine Dixon?</h1>
      </div>
      <div className="bg-white h-screen flex flex-col justify-center items-center">
          <button className="bg-cyan-400 hover:bg-cyan-600  w-60 h-20 md:h-24 xl:h-28 m-1 rounded-xl text-sm md:text-md xl:text-lg mb-4"
          >
            <h1 className="text-black italic text-center">Desenvolver habilidades avançadas de escrita criativa.</h1>
          </button>

          <button className="bg-rose-500 hover:bg-red-700 w-60 h-20 md:h-24 xl:h-28 m-1 rounded-xl text-sm md:text-md xl:text-lg mb-4"
            onClick={() => setCount(count + 1)}
          >
            <h1 className="text-black italic text-center">Decifrar documentos antigos de forma precisa.</h1>
          </button>

          <button className="bg-amber-300 hover:bg-amber-400 w-60 h-20 md:h-24 xl:h-28 m-1 rounded-xl text-sm md:text-md xl:text-lg"
          >
            <h1 className="text-black italic text-center">Oferecer recursos para pesquisas acadêmicas extensas.</h1>
          </button>
      </div>
    </div>

    <div className="bg-white h-screen flex flex-col">
      <div className="bg-cyan-400 h-24 flex justify-center items-center border-b border-gray-600">
        <h1 className="text-black sm:text-xs md:text-xs lg:text-3xl italic font-bold"> Qual é o nome dado aos caracteres usados para ornamentação?</h1>
      </div>
      <div className="bg-white h-screen flex flex-col justify-center items-center">
        <button className="bg-cyan-400 hover:bg-cyan-600 w-60 h-20 md:h-24 xl:h-28 m-1 rounded-xl text-sm md:text-md xl:text-lg mb-4"
        >
          <h1 className="text-black italic text-center">Kerning</h1>
        </button>

        <button className="bg-rose-500 hover:bg-red-700 w-60 h-20 md:h-24 xl:h-28 m-1 rounded-xl text-sm md:text-md xl:text-lg mb-4"
        >
          <h1 className="text-black italic text-center">Ampersad</h1>
        </button>

        <button className="bg-amber-300 hover:bg-amber-400 w-60 h-20 md:h-24 xl:h-28 m-1 rounded-xl text-sm md:text-md xl:text-lg"
          onClick={() => setCount(count + 1)}
        >
          <h1 className="text-black italic text-center">Dingbat</h1>
        </button>
      </div>
    </div>

    <div className="bg-white h-screen flex flex-col">
      <div className="bg-cyan-400 h-24 flex justify-center items-center border-b border-gray-600">
        <h1 className="text-black sm:text-xs md:text-xs lg:text-3xl italic font-bold"> Quem foi o responsável por ordenar a criação do Romain du Roi? </h1>
      </div>
      <div className="bg-white h-screen flex flex-col justify-center items-center">
        <button className="bg-cyan-400 hover:bg-cyan-600 w-60 h-20 md:h-24 xl:h-28 m-1 rounded-xl text-sm md:text-md xl:text-lg mb-4"
        >
          <h1 className="text-black italic text-center">Philippe Grandjean</h1>
        </button>

        <button className="bg-rose-500 hover:bg-red-700 w-60 h-20 md:h-24 xl:h-28 m-1 rounded-xl text-sm md:text-md xl:text-lg mb-4"
          onClick={() => setCount(count + 1)}
        >
          <h1 className="text-black italic text-center">Luís XIV</h1>
        </button>

        <button className="bg-amber-300 hover:bg-amber-400 w-60 h-20 md:h-24 xl:h-28 m-1 rounded-xl text-sm md:text-md xl:text-lg"
        >
          <h1 className="text-black italic text-center">Johannes Gutenberg</h1>
        </button>
      </div>
    </div>

    <div className="bg-white h-screen flex flex-col">
      <div className="bg-cyan-400 h-24 flex justify-center items-center border-b border-gray-600">
        <h1 className="text-black sm:text-xs md:text-xs lg:text-3xl italic font-bold"> Qual das seguintes famílias tipográficas é conhecida por sua legibilidade em textos longos impressos? </h1>
      </div>
      <div className="bg-white h-screen flex flex-col justify-center items-center">
        <button className="bg-cyan-400 hover:bg-cyan-600 w-60 h-20 md:h-24 xl:h-28 m-1 rounded-xl text-sm md:text-md xl:text-lg mb-4"
        >
          <h1 className="text-black italic text-center">Arial</h1>
        </button>

        <button className="bg-rose-500 hover:bg-red-700 w-60 h-20 md:h-24 xl:h-28 m-1 rounded-xl text-sm md:text-md xl:text-lg mb-4"
        >
          <h1 className="text-black italic text-center">Comic Sans</h1>
        </button>

        <button className="bg-amber-300 hover:bg-amber-400 w-60 h-20 md:h-24 xl:h-28 m-1 rounded-xl text-sm md:text-md xl:text-lg"
        onClick={() => setCount(count + 1)}
        >
          <h1 className="text-black italic text-center">Times New Roman</h1>
        </button>
      </div>
    </div>

    <div className="bg-white h-screen flex flex-col">
      <div className="bg-cyan-400 h-24 flex justify-center items-center border-b border-gray-600">
        <h1 className="text-black sm:text-xs md:text-xs lg:text-3xl italic font-bold"> O que é uma ligadura em tipografia? </h1>
      </div>
      <div className="bg-white h-screen flex flex-col justify-center items-center">
        <button className="bg-cyan-400 hover:bg-cyan-600 w-60 h-20 md:h-24 xl:h-28 m-1 rounded-xl text-sm md:text-md xl:text-lg mb-4"
        onClick={() => setCount(count + 1)}
        >
          <h1 className="text-black italic text-center">A junção de duas ou mais letras em um único caractere</h1>
        </button>

        <button className="bg-rose-500 hover:bg-red-700 w-60 h-20 md:h-24 xl:h-28 m-1 rounded-xl text-sm md:text-md xl:text-lg mb-4"
        >
          <h1 className="text-black italic text-center">Um tipo de fonte sem serifa</h1>
        </button>

        <button className="bg-amber-300 hover:bg-amber-400 w-60 h-20 md:h-24 xl:h-28 m-1 rounded-xl text-sm md:text-md xl:text-lg"
        >
          <h1 className="text-black italic text-center">Uma técnica de impressão em relevo</h1>
        </button>
      </div>
    </div>

    

    <div className="bg-white h-24 flex justify-center items-center">
      <button
        className="bg-green-500 hover:bg-green-600 w-96 h-12 m-2 rounded-xl text-white text-xl"
        onClick={handleRedirect}
      >
        Verificar Resposta
      </button>
    </div>
  </main>
    
  );
}

