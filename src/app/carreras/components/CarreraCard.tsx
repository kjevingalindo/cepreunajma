"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Carrera } from '@/types/carrera';
import { FaGraduationCap, FaClock, FaArrowRight } from 'react-icons/fa';

interface CarreraCardProps {
  carrera:Carrera; 
}

// Versión corregida con exportación default correcta
export default function CarreraCard({ carrera }: CarreraCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, type: "spring" }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
      }}
      className="bg-gradient-to-b from-white to-gray-50 rounded-2xl overflow-hidden shadow-xl border border-gray-100"
    >
      {/* Encabezado con imagen */}
      <div className="relative h-52">
        <Image
          src={`/images/carreras/${carrera.imagen}`}
          fill
          className="object-cover"
          alt={carrera.nombre}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
        
        {/* Badge de duración */}
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full flex items-center gap-2"
        >
          <FaClock className="text-sm" />
          <span className="text-sm font-medium">{carrera.duracion}</span>
        </motion.div>
      </div>

      {/* Cuerpo de la tarjeta */}
      <div className="p-6">
        <motion.div
          whileHover={{ x: 5 }}
          className="flex items-center gap-3 mb-4"
        >
          <FaGraduationCap className="text-blue-500 text-xl" />
          <h3 className="text-2xl font-bold text-gray-800">{carrera.nombre}</h3>
        </motion.div>

        <p className="text-gray-600 mb-6 leading-relaxed">
          {carrera.descripcion}
        </p>

        <motion.div
          whileHover={{ gap: "1rem" }}
          className="flex items-center justify-between"
        >
          <a 
            href={carrera.enlace}
            className="flex items-center gap-2 text-blue-500 font-medium hover:text-blue-600 transition-colors"
          >
            Ver detalles
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}