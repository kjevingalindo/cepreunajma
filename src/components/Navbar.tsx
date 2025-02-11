// components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-orange-700 shadow-lg fixed w-full top-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/images/logo-cepre.png"
            alt="Logo del Centro Preuniversitario UNAJMA"
            width={90}
            height={90}
            priority
            className="mr-3 h-auto"
          />
          <Link href="/" className="text-xl font-bold text-white">
            CEPRE UNAJMA
          </Link>
        </div>
        <div className="flex gap-x-6">
          <Link href="/carreras" className="text-white hover:text-gray-200 block px-4 py-2">
            Carreras
          </Link>
          <Link href="/precios" className="text-white hover:text-gray-200 block px-4 py-2">
            Precios
          </Link>
          <Link href="/login" className="text-white hover:text-gray-200 block px-4 py-2">
            Iniciar Sesión
          </Link>
          <Link href="/register" className="text-white hover:text-gray-200 block px-4 py-2">
            Registrarse
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
