//EN ESTA PAGINA DEBERIA importar TODAS LAS VISUALES DE LOGIN, REGISTER, ETC

"use client";

import React, { useState, FormEvent } from 'react';
import Link from 'next/link';

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });
  const [error, setError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    {/*
    // Simulación de petición a un API para autenticación
    try {
      // Aquí va la lógica para autenticar
      console.log('Datos enviados:', formData);
      alert('Login exitoso');
    } catch (error) {
      setError('Error al iniciar sesión. Intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  */}
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-full sm:max-w-md md:max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Iniciar Sesión</h2>

        {error && <div className="mb-4 text-red-500 text-center">{error}</div>}

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition-colors disabled:opacity-50 mb-4"
        >
          {isSubmitting ? 'Ingresando...' : 'Iniciar Sesión'}
        </button>

        {/* Botón de registro que redirige a la página de registro */}
        <Link
          href="/registerPage"
          className="w-full block text-center bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition-colors"
        >
          Registrarse
        </Link>

      </form>
    </div>
  );
};

export default Login;
