// types/carrera.d.ts

// Interface global reutilizable
export interface Carrera {
    id: number;
    nombre: string;
    descripcion: string;
    duracion: string;
    imagen: string;    // Ej: "ambiental.jpg"
    enlace: string;    // Ej: "/carreras/1"
  }
  
  // Opcional: Extiende tipos globales de Next.js si es necesario
  declare global {
    // Para usar en cualquier archivo sin importar
    interface Window {
      analytics: any;
    }
  }