import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section con imagen de fondo */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
        {/* Imagen de fondo */}
        <Image
          src="/images/ImagenTecnica1.jpg" // Ruta de la imagen
          alt="CEPRE UNAJMA"
          fill // La imagen ocupa todo el espacio del contenedor
          className="object-cover" // Asegura que la imagen cubra el espacio sin distorsionarse
        />

        {/* Overlay para mejorar la legibilidad del texto */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Bienvenido a la CEPRE UNAJMA
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8">
              Preparación de calidad para tu ingreso a la universidad.
            </p>
            <Link
              href="/carreras"
              className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition duration-300 shadow-lg"
            >
              Explora Nuestras Carreras
            </Link>
          </div>
        </div>
      </div>

      {/* Otras secciones de la página principal */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestras Carreras</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Aquí irían las tarjetas de carreras */}
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Precios y Modalidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Aquí irían las tarjetas de precios */}
          </div>
        </div>
      </section>
    </div>
  );
}