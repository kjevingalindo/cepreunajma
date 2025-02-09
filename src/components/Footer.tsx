import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/carreras" className="hover:text-blue-500">Carreras</a></li>
              <li><a href="/precios" className="hover:text-blue-500">Precios</a></li>
              <li><a href="/login" className="hover:text-blue-500">Iniciar Sesión</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <p>Email: cepre@unajma.edu.pe</p>
            <p>Teléfono: +51 123 456 789</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500"><FaFacebook size={24} /></a>
              <a href="#" className="hover:text-blue-500"><FaTwitter size={24} /></a>
              <a href="#" className="hover:text-blue-500"><FaInstagram size={24} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;