//Pagina principal, aca deberian ir importados los componentes globales de mi aplicacion

"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 space-y-4 text-center">
      <h1 className="bg-red-700 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold py-4 sm:py-6 px-8 sm:px-12 rounded-lg shadow-lg">
        Elibel
      </h1>

      <Link
        href="/authPage"
        className="bg-red-700 text-white text-base sm:text-lg font-medium py-2 px-4 rounded-md shadow-md transition duration-300 hover:bg-red-800"
      >
        Página de Auth
      </Link>
    </div>
  );
}
