//Pagina principal, aca deberian ir importados los componentes globales de mi aplicacion

"use client";

import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
        <Header />
      </header>

      <main className="flex flex-col items-center justify-center flex-1 p-6 gap-6 text-center mt-16">
        <Link
          href="/authPage"
          className="bg-red-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-red-700 hover:scale-105"
        >
          Página de Auth
        </Link>
      </main>
    </div>
  );
}
