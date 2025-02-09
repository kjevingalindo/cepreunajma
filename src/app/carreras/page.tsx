// src/app/carreras/page.tsx
import React from 'react';
import CarreraCard from './CarreraCard';
import { Carrera } from '@/models/carrera';

// Datos de ejemplo para las carreras
const carreras: Carrera[] = [
  {
    id: 1,
    nombre: "Ingeniería Agroindustrial",
    descripcion: "Transforma productos agrícolas en bienes de alto valor.",
    reseña: "La Ingeniería Agroindustrial surgió en el siglo XX...",
    imagen: "agroindustrial.jpg",
    enlace: "/carreras/1",
  },
  {
    id: 2,
    nombre: "Ingeniería Ambiental",
    descripcion: "Contribuye al cuidado del medio ambiente y la sostenibilidad.",
    reseña: "La Ingeniería Ambiental se desarrolló en la década de 1970...",
    imagen: "/images/ambiental.jpg",
    enlace: "/carreras/2",
  },
  // Agrega más carreras aquí...
];

export default function CarrerasPage() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Explora Nuestras Carreras
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {carreras.map((carrera) => (
          <CarreraCard key={carrera.id} carrera={carrera} />
        ))}
      </div>
    </div>
  );
}