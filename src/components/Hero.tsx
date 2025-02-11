// components/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "./animations";

export default function Hero() {
  return (
    <motion.div 
      className="relative h-[400px] md:h-[500px] lg:h-[600px]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <Image src="/images/ImagenTecnica1.jpg" alt="CEPRE UNAJMA" fill className="object-cover" />
      </motion.div>

      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <motion.div className="text-center text-white" variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Bienvenido a la CEPRE UNAJMA
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
            Preparación de calidad para tu ingreso a la universidad.
          </p>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link
              href="/carreras"
              className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition duration-300 shadow-lg"
            >
              Explora Nuestras Carreras
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
