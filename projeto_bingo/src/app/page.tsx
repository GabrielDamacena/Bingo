"use client";

import React from "react";
import Link from "next/link";


export default function Home() {
  return (
    <main className="bg-white w-screen h-screen flex justify-center items-center">
      <div>
        <Link href="/quiz">
        <button className="bg-blue-800 w-64 h-28 m-2 rounded-xl hover:bg-blue-900">Começar</button>
        </Link>
      </div>
    </main>
    
  );
}

