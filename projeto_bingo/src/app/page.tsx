import React from "react";
import Link from "next/link";

export default function quest() {
  return (
    <main>
      <div className="bg-white w-screen h-screen flex flex-col">
        <div className="bg-white w-screen h-24 flex justify-center items-center border-solid border-b-gray-600">
          <h1 className="text-black text-3xl italic font-bold"> Qual é o objetivo principal do Sistema de Catherine Dixon?</h1>
        </div>
        <div className="bg-white h-64 w-screen mt-auto flex justify-center">
              <button className="bg-blue-800 w-5/12 h-28 m-2 rounded-xl">
                <h1 className="text-black text-2xl italic">Desenvolver habilidades avançadas de escrita criativa.</h1>
              </button>

              <button className="bg-rose-700 w-5/12 h-28 m-2 rounded-xl">
                  <h1 className="text-black text-2xl italic">decifrar documentos antigos de forma precisa.</h1>
              </button>
      
              <button  className="bg-yellow-400 w-5/12 h-28 m-2 rounded-xl">
                <h1 className="text-black text-2xl italic">Oferecer recursos para pesquisas acadêmicas extensas.</h1>
              </button>

        </div>
      </div>

      <div className="bg-white w-screen h-screen flex flex-col">
        <div className="bg-white w-screen h-24 flex justify-center items-center border-solid border-b-gray-600">
          <h1 className="text-black text-3xl italic font-bold"> Qual é o nome dado aos caracteres usados para ornamentação?</h1>
        </div>
        <div className="bg-white h-64 w-screen mt-auto flex justify-center">
              <button className="bg-blue-800 w-5/12 h-28 m-2 rounded-xl">
                <h1 className="text-black text-2xl italic">Kerning</h1>
              </button>

              <button className="bg-rose-700 w-5/12 h-28 m-2 rounded-xl">
                  <h1 className="text-black text-2xl italic">Ampersad</h1>
              </button>
      
              <button  className="bg-yellow-400 w-5/12 h-28 m-2 rounded-xl">
                <h1 className="text-black text-2xl italic">Dingbat</h1>
              </button>

        </div>
      </div>

      <div className="bg-white w-screen h-screen flex flex-col">
        <div className="bg-white w-screen h-24 flex justify-center items-center border-solid border-b-gray-600">
          <h1 className="text-black text-3xl italic font-bold"> Quem foi o responsável por ordenar a criação do Romain du Roi? </h1>
        </div>
        <div className="bg-white h-64 w-screen mt-auto flex justify-center">
              <button className="bg-blue-800 w-5/12 h-28 m-2 rounded-xl">
                <h1 className="text-black text-2xl italic">Pierre Simon Fournier le Jeune</h1>
              </button>

              <button className="bg-rose-700 w-5/12 h-28 m-2 rounded-xl">
                  <h1 className="text-black text-2xl italic">Ampersad</h1>
              </button>
      
              <button  className="bg-yellow-400 w-5/12 h-28 m-2 rounded-xl">
                <h1 className="text-black text-2xl italic">Dingbat</h1>
              </button>

        </div>
      </div>
    </main>
    
  );
}
