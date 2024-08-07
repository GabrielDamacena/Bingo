import React from "react";

export default function RespostaPositiva() {
    return(
        <main>
            <div className="flex flex-col items-center justify-center">
            <video width="100%" loop muted autoPlay className="animate-[infinite] w-96 h-96">
                <source src="img/Bingo-gif-certo.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
            </video>
                <h1 className="text-black text-sm md:text-md xl:text-lg italic font-bold text-center">Parabéns você acertou mais de 60% das perguntas, continue jogando</h1>
            </div>
        </main>
    );
}