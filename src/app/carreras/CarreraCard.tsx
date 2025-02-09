"use client";

import React, { useState } from 'react';
import { Carrera } from '@/models/carrera';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

interface CarreraCardProps {
  carrera: Carrera;
}

const CarreraCard: React.FC<CarreraCardProps> = ({ carrera }) => {
  const [activeTab, setActiveTab] = useState('descripcion');

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-102 hover:shadow-lg">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-48 relative"
      >
        <Image
          src={`/images/carreras/${carrera.imagen}`}
          alt={carrera.nombre}
          fill
          className="object-cover"
        />
      </motion.div>
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">{carrera.nombre}</h2>
        <div className="flex space-x-4 mb-4 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('descripcion')}
            className={`pb-2 hover:text-blue-500 ${
              activeTab === 'descripcion' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'
            }`}
          >
            Descripción
          </button>
          <button
            onClick={() => setActiveTab('resena')}
            className={`pb-2 hover:text-blue-500 ${
              activeTab === 'resena' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'
            }`}
          >
            Reseña Histórica
          </button>
        </div>
        <AnimatePresence mode="wait">
          {activeTab === 'descripcion' && (
            <motion.div
              key="descripcion"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <p className="text-gray-600">{carrera.descripcion}</p>
            </motion.div>
          )}
          {activeTab === 'resena' && (
            <motion.div
              key="resena"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <p className="text-gray-600">{carrera.reseña}</p>
            </motion.div>
          )}
        </AnimatePresence>
        <Link
          href={carrera.enlace}
          className="inline-flex items-center mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Ver más <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default CarreraCard;