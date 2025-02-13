"use client";
import { motion } from "framer-motion";
import CarreraCard from "./components/CarreraCard";

const carreras = [
  {
    nombre: "Ingeniería Ambiental",
    descripcion: "Formación profesional en gestión sostenible de recursos naturales...",
    duracion: "10 meses",
    imagen: "agroindustrial.jpg",
    enlace: "/carreras/agroindustrial"
  },
  // ... otras carreras
];

export default function CarrerasPage() {
  return (
    <div className="min-h-screen bg-orange-50">
      {/* Sección Hero Carreras */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-r from-orange-700 to-orange-500 text-white py-28 shadow-lg"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            className="text-5xl font-extrabold mb-6 tracking-wide drop-shadow-lg uppercase text-white"
          >
            Nuestras Carreras
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl max-w-3xl mx-auto font-medium text-orange-200"
          >
            Descubre programas académicos diseñados para potenciar tu futuro profesional.
          </motion.p>
        </div>
      </motion.div>

      {/* Grid de Carreras */}
      <section className="container mx-auto px-6 py-16">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {carreras.map((carrera, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl overflow-hidden shadow-xl bg-orange-100 hover:shadow-2xl transition duration-300 border border-orange-500 hover:border-orange-600"
            >
              <CarreraCard carrera={carrera} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
