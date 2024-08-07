"use client";

import React from "react";
import Link from "next/link";


export default function Home() {
  return (
    <main className="bg-white h-screen w-screen bg-cover flex justify-center items-center  sm:flex-col md:flex-row">
      <div className="flex flex-col items-center sm:w-full md:w-1/2 lg:w-1/3">
         <img src="img/bingologo.png" alt="bing_imagem" className="sm:w-60 md:w-80 lg:w-96 h-48 md:h-64 lg:h-80 object-cover rounded-3xl"/>
         <Link href="/quiz">
        <button className="bg-cyan-400 sm:w-56 md:w-64 lg:w-80 h-12 md:h-14 lg:h-16 m-2 rounded-2xl hover:bg-cyan-500 font-bold text-sm md:text-base lg:text-lg">Começar</button>
        </Link>
      </div>
    </main>
    
  );
}

