import React, { useState } from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";

// Datos de ejemplo (reemplaza con API o base de datos)
const carreras = [
  {
    id: 1,
    nombre: "Ingeniería Agroindustrial",
    descripcion: "Transforma productos agrícolas en bienes de alto valor.",
    reseña: "La Ingeniería Agroindustrial surgió en el siglo XX...",
    imagen: "/images/carreras/agroindustrial.jpg",
    enlace: "/carreras/1",
  },
  // Agrega más carreras aquí...
];

export default function CarreraDetallePage({ params }: { params: { id: string } }) {
  const carreraId = parseInt(params.id, 10);
  const [showDescription, setShowDescription] = useState(false);

  if (isNaN(carreraId)) {
    return notFound();
  }

  const carrera = carreras.find((c) => c.id === carreraId);

  if (!carrera) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-orange-50">
      <div className="relative w-full h-80 md:h-96 lg:h-[500px] overflow-hidden">
        <img src={carrera.imagen} alt={carrera.nombre} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold uppercase tracking-wide drop-shadow-lg text-center">
            {carrera.nombre}
          </h1>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-12 max-w-3xl">
        <motion.div 
          className="bg-white rounded-xl shadow-lg border border-orange-500 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <button 
            className="w-full bg-orange-600 text-white py-3 text-xl font-semibold tracking-wide uppercase hover:bg-orange-700 transition duration-300"
            onClick={() => setShowDescription(!showDescription)}
          >
            {showDescription ? "Ocultar Descripción" : "Ver Descripción"}
          </button>
          {showDescription && (
            <div className="p-6">
              <p className="text-gray-600 mb-4 leading-relaxed">{carrera.descripcion}</p>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Reseña Histórica</h2>
              <p className="text-gray-600 leading-relaxed">{carrera.reseña}</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
