"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomePage from "@/components/HomePage/components/page";
import Slider from "@/components/HomePage/components/slider";

export default function Home() {
  const pathname = usePathname();
  console.log("pathname:", pathname);

  return (
    <>
      <div className="min-h-screen bg-[#e7c093] flex flex-col">
        <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
          <Header />
        </header>
        <Slider />
        <main className="flex flex-col items-center justify-center flex-1 p-6 gap-6 text-center mt-16">
          <HomePage />
        </main>
        <Footer />
      </div>
    </>
  );
}

