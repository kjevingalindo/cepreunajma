// app/page.tsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import { containerVariants, itemVariants } from "@/components/animations";

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]); // Parallax effect

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      {/* Sección Hero con Parallax */}
      <motion.div style={{ y }}>
        <Hero />
      </motion.div>

      {/* Sección de Carreras */}
      <motion.section className="container mx-auto px-6 py-12" variants={itemVariants}>
        <motion.h2 className="text-3xl font-bold text-center mb-8" style={{ y }}>
          Nuestras Carreras
        </motion.h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Aquí irían las tarjetas de carreras */}
        </motion.div>
      </motion.section>

      {/* Sección de Precios y Modalidades */}
      <motion.section className="bg-gray-100 py-12" variants={itemVariants}>
        <div className="container mx-auto px-6">
          <motion.h2 className="text-3xl font-bold text-center mb-8" style={{ y }}>
            Precios y Modalidades
          </motion.h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Aquí irían las tarjetas de precios */}
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}

