"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [cartCount] = useState(11);
    const router = useRouter();

    const categories = [
        { id: 1, name: "Nacimientos", path: "/newborn" },
        { id: 2, name: "Niñas", path: "/baby-girls" },
        { id: 3, name: "Niños", path: "/baby-boys" },
        { id: 4, name: "Accesorios", path: "/accessories" },
    ];

    return (
        <header className="bg-gradient-to-r from-blue-50 to-indigo-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Menu de celu (boton) */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
                            aria-label="Main menu"
                        >
                            {isMenuOpen ? (
                                <FiX className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <FiMenu className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Image
                            src="/logo2.png" 
                            alt="Kids Fashion Store"
                            width={64}
                            height={64}
                            className="h-12 w-auto sm:h-14 md:h-16"
                            priority 
                        />
                    </div>

                    {/* Navegacion en web */}
                    <nav className="hidden md:flex space-x-8">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className="text-gray-700 hover:text-[#5E8CAB] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                            >
                                {category.name}
                            </button>
                        ))}
                    </nav>

                    {/* Login - registro de usuarios */}
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => {
                                setIsLoginOpen(!isLoginOpen)
                                router.push("/authPage");       //Ruta a la pagina de auth
                            }}
                            
                            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-[#B77C52] text-white hover:bg-opacity-90 transition-colors duration-200"
                            aria-label="Login"
                        >
                            <FiUser className="h-5 w-5" />
                            <span className="hidden sm:inline">Ingresar</span>
                        </button>

                        {/*Boton carrito*/}
                        <button
                            className="relative flex items-center space-x-2 px-4 py-2 rounded-full bg-[#B3A799] text-white hover:bg-opacity-90 transition-colors duration-200"
                            aria-label="Shopping cart"
                        >
                            <FiShoppingCart className="h-5 w-5" />
                            <span className="hidden sm:inline">Carrito</span>
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/*Menu celular */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#5E8CAB] hover:bg-gray-100 transition-colors duration-200"
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;