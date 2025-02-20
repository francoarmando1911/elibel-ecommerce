//Pagina principal, aca deberian ir importados los componentes globales de mi aplicacion

"use client";

import Header from "@/components/Header";
import HomePage from "@/components/HomePage/components/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#B3A799] flex flex-col">
      <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
        <Header />
      </header>

      <main className="flex flex-col items-center justify-center flex-1 p-6 gap-6 text-center mt-16">

        {/*Importar los componentes de homepage*/}
        <HomePage/>
      </main>
    </div>
  );
}
