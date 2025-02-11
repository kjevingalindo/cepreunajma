import React from "react";
import { notFound } from "next/navigation"; // Manejo de errores 404

// Datos de ejemplo (reemplaza con API o base de datos)
const carreras = [
  {
    id: 1,
    nombre: "Ingeniería Agroindustrial",
    descripcion: "Transforma productos agrícolas en bienes de alto valor.",
    reseña: "La Ingeniería Agroindustrial surgió en el siglo XX...",
    imagen: "/images/carreras/agroindustrial.jpg", // Ajuste en la ruta de la imagen
    enlace: "/carreras/1",
  },
  // Agrega más carreras aquí...
];

export default function CarreraDetallePage({ params }: { params: { id: string } }) {
  const carreraId = parseInt(params.id, 10); // Convertir params.id en número

  if (isNaN(carreraId)) {
    return notFound(); // Si el ID no es válido, mostrar página 404
  }

  const carrera = carreras.find((c) => c.id === carreraId);

  if (!carrera) {
    return notFound(); // Si la carrera no existe, mostrar página 404
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-2xl mx-auto">
        <img
          src={carrera.imagen}
          alt={carrera.nombre}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {carrera.nombre}
          </h1>
          <p className="text-gray-600 mb-4">{carrera.descripcion}</p>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Reseña Histórica</h2>
          <p className="text-gray-600">{carrera.reseña}</p>
        </div>
      </div>
    </div>
  );
}
