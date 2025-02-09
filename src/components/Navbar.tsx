// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-orange-600 shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white">
          CEPRE UNAJMA
        </Link>
        <div className="flex space-x-6">
          <Link href="/carreras" className="text-white hover:text-gray-200">
            Carreras
          </Link>
          <Link href="/precios" className="text-white hover:text-gray-200">
            Precios
          </Link>
          <Link href="/login" className="text-white hover:text-gray-200">
            Iniciar Sesión
          </Link>
          <Link href="/register" className="text-white hover:text-gray-200">
            Registrarse
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
