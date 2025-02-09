import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-orange-600 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Bienvenido a CEPRE UNAJMA</h1>
            <p className="text-xl">Preparación de calidad para tu ingreso a la universidad.</p>
          </div>
        </section>

        {/* Carreras Section */}
        <section className="py-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Nuestras Carreras</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Aquí irían las tarjetas de carreras */}
            </div>
          </div>
        </section>

        {/* Precios Section */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Precios y Modalidades</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Aquí irían las tarjetas de precios */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}