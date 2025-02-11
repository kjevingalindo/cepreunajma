// app/page.tsx
"use client";

// app/page.tsx
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import { containerVariants, itemVariants } from "@/components/animations";

export default function Home() {
  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <Hero />
      
      <motion.section className="container mx-auto px-6 py-12" variants={itemVariants}>
        <h2 className="text-3xl font-bold text-center mb-8">Nuestras Carreras</h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Aquí irían las tarjetas de carreras */}
        </motion.div>
      </motion.section>

      <motion.section className="bg-gray-100 py-12" variants={itemVariants}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Precios y Modalidades</h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Aquí irían las tarjetas de precios */}
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}
