import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CEPRE UNAJMA',
  description: 'Sitio oficial de la CEPRE UNAJMA',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {/* Navbar */}
        <Navbar />

        {/* Contenido principal */}
        <main className="pt-20"> {/* Ajusta el padding-top para que el contenido no se solape con el Navbar */}
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}