import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-8 p-6 bg-[#B3A799]">
      {/* Banner Principal */}
      <div className="w-full max-w-5xl h-80 bg-cover bg-center rounded-lg flex items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: "url('/banner-kids.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
          <h1 className="text-3xl md:text-5xl font-bold">Moda Infantil con Estilo y Comodidad</h1>
          <p className="mt-2 text-lg">Descubre nuestra nueva colección para niños y bebés</p>
          <Link href="#" className="mt-4 inline-block bg-[#5E8CAB] px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#B77C52] transition">
            Ver Colección
          </Link>
        </div>
      </div>

      {/* Categorías Destacadas */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full max-w-5xl">
        {[
          { name: 'Bebés', image: '/categorias/bebes.jpg', href: '#' },
          { name: 'Niños', image: '/categorias/ninos.jpg', href: '#' },
          { name: 'Niñas', image: '/categorias/ninas.jpg', href: '#' },
          { name: 'Ofertas', image: '/categorias/ofertas.jpg', href: '#' },
          { name: 'Accesorios', image: '/categorias/accesorios.jpg', href: '#' },
        ].map((category) => (
          <Link key={category.name} href={category.href} className="group relative rounded-lg overflow-hidden shadow-lg">
            <img src={category.image} alt={category.name} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-[#5E8CAB] bg-opacity-60 flex items-center justify-center text-white text-xl font-semibold group-hover:bg-opacity-80 transition">
              {category.name}
            </div>
          </Link>
        ))}
      </div>

      {/* Productos en Tendencia */}
      <div className="w-full max-w-5xl">
        <h2 className="text-2xl font-bold text-center text-[#5E8CAB]">Productos en Tendencia</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white p-4 rounded-lg shadow-lg text-center">
              <img src={`/productos/producto${item}.jpg`} alt="Producto" className="w-full h-40 object-cover rounded-md" />
              <h3 className="mt-2 text-lg font-semibold text-[#B77C52]">Producto {item}</h3>
              <p className="text-[#5E8CAB] font-bold">$</p>
              <button className="mt-2 bg-[#5E8CAB] px-4 py-2 rounded-full text-white hover:bg-[#B77C52] transition">Comprar</button>
            </div>
          ))}
        </div>
      </div>

      {/* Promociones */}
      <div className="w-full max-w-5xl bg-[#B77C52] p-6 rounded-lg text-center text-white">
        <h2 className="text-2xl font-bold">10% de descuento en tu primera compra</h2>
        <p className="mt-2">Usa el código <strong>BIENVENIDO10</strong> al finalizar tu compra</p>
      </div>
    </div>
  );
};

export default Home;
