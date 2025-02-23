"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";

type Slide = {
    id: number;
    image: string;
};

const slides: Slide[] = [
    { id: 1, image: "/rojo.png" },
    { id: 2, image: "/verde.png" },
    { id: 3, image: "/violete.png" },
];

const Slider: React.FC = () => {
    console.log("slider montado");
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [isPlaying] = useState<boolean>(true);
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, []);

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        let intervalId: ReturnType<typeof setInterval>;
        if (isPlaying && !isHovered) {
            intervalId = setInterval(nextSlide, 3000);
        }
        return () => clearInterval(intervalId);
    }, [isPlaying, isHovered, nextSlide]);

    return (
        <div className="relative max-w-full mx-auto mt-5 overflow-hidden shadow-xl">
            {/* Carrusel de imágenes */}
            <div
                className="relative h-72 sm:h-96 md:h-[500px]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                role="region"
                aria-roledescription="carousel"
                aria-label="Image Slider"
            >
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                            }`}
                        aria-hidden={index !== currentSlide}
                    >
                        <Image
                            src={slide.image}
                            alt={`Slide ${slide.id}`}
                            layout="fill"
                            objectFit="cover"
                            className="transition-all duration-500 ease-in-out transform hover:scale-105"
                        />
                    </div>
                ))}
            </div>

            {/* Banner superpuesto */}
            <div
                className="w-full max-w-5xl h-80 bg-cover bg-center rounded-lg flex items-center justify-center text-white text-center px-4 mt-5"
                style={{ backgroundImage: "url('/banner-kids.jpg')" }}
            >
                <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                    <h1 className="text-3xl md:text-5xl font-bold">
                        Moda Infantil con Estilo y Comodidad
                    </h1>
                    <p className="mt-2 text-lg">
                        Descubre nuestra nueva colección para niños y bebés
                    </p>
                    <Link
                        href="#"
                        className="mt-4 inline-block bg-[#5E8CAB] px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#B77C52] transition"
                    >
                        Ver Colección
                    </Link>
                </div>
            </div>

            {/* Indicadores */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-5 h-5 rounded-full ${index === currentSlide ? "bg-white" : "bg-gray-500"
                            }`}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Botón Anterior */}
            <button
                className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-white bg-opacity-60 rounded-full p-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 hover:bg-blue-500 hover:text-white"
                onClick={prevSlide}
                aria-label="Previous slide"
            >
                <FaChevronLeft className="text-3xl" />
            </button>

            {/* Botón Siguiente */}
            <button
                className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-white bg-opacity-60 rounded-full p-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 hover:bg-blue-500 hover:text-white"
                onClick={nextSlide}
                aria-label="Next slide"
            >
                <FaChevronRight className="text-3xl" />
            </button>
        </div>
    );
};

export default React.memo(Slider);
