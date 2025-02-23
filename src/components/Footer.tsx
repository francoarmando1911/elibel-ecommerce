import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg rounded-t-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between gap-8">
                    <div className="space-y-4 transition-all duration-300 hover:transform hover:scale-105 ">
                        <h3 className="text-lg font-semibold text-gray-900">Sobre nosotros</h3>
                        <p className="text-gray-600">
                            Descubre la mejor moda para niños, niñas y adolescentes. Ropa cómoda, moderna y de calidad para cada ocasión. 
                            ¡Viste con estilo!
                        </p>
                    </div>

                    <div className="space-y-4 transition-all duration-300 hover:transform hover:scale-105">
                        <h3 className="text-lg font-semibold text-gray-900">Contacto</h3>
                        <p className="text-gray-600">Email: elibel@gmail.com</p>
                        <p className="text-gray-600">Teléfono: (3442)310036</p>
                        <p className="text-gray-600">
                            Concepcion del Uruguay (Entre Rios) - Argentina
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Redes</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61567295186072"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Follow us on Facebook"
                                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                            >
                                <FaFacebook className="w-6 h-6" />
                            </a>
                            <a
                                href="https://www.instagram.com/intrasoftware/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Follow us on Instagram"
                                className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
                            >
                                <FaInstagram className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#000B54] py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-white text-sm">
                        © 2025 Intra Software. Todos los derechos reservados ©.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;