import React from "react";
import Link from "next/link";

export default function RespostaNegativa() {
    return(
        <main>
            <div className="flex flex-col items-center justify-center">
            <video width="100%" loop muted autoPlay className="animate-[infinite] w-96 h-96">
                <source src="img/Bingo-gif-errado.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
            </video>
                <h1 className="text-black text-sm md:text-md xl:text-lg italic font-bold text-center">Infelizmente você não acertou o número esperado de perguntas, mas não desista</h1>
                <Link href="/quiz">
                    <button className="bg-cyan-400 sm:w-56 md:w-64 lg:w-80 h-12 md:h-14 lg:h-16 m-2 rounded-2xl hover:bg-cyan-500 font-bold text-sm md:text-base lg:text-lg">Tente de novo</button>
                </Link>
            </div>
        </main>
    );
}