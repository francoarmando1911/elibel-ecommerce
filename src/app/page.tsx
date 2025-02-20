//Pagina principal, aca deberian ir importados los componentes globales de mi aplicacion

"use client";

import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
        <Header />
      </header>

      <main className="flex flex-col items-center justify-center flex-1 p-6 gap-6 text-center mt-16">
        <h1 className="text-6xl pt-10 font-bold text-red-700">Home page</h1>
      </main>
    </div>
  );
}
