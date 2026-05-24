import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import './globals-patch.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Cursor from '@/components/layout/Cursor';
import ParticlesBackground from '@/components/layout/ParticlesBackground';
import ProgressBar from '@/components/layout/ProgressBar';
import RevealObserver from '@/components/layout/RevealObserver';
import TiltCards from '@/components/layout/TiltCards';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Cabinet WebSense — Le sens du web à Djibouti',
  description:
    'Sites sur mesure, applications web, UX design, conseil stratégique — vous restez propriétaire. Cabinet WebSense, Djibouti.',
  keywords: ['développement web', 'agence web', 'Djibouti', 'site internet', 'UX design'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">

        {/* Couches de fond animées */}
        <div className="bg-grid" aria-hidden="true" />
        <div className="bg-mesh" aria-hidden="true">
          <div className="blob b1" />
          <div className="blob b2" />
          <div className="blob b3" />
        </div>

        {/* Particules canvas */}
        <ParticlesBackground />

        {/* Curseur custom */}
        <Cursor />

        {/* Barre progression scroll */}
        <ProgressBar />

        {/* Navigation */}
        <Navbar />

        {/* Contenu */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />

        {/* Reveal observer — animations au scroll */}
        <RevealObserver />

        {/* Effet tilt 3D sur cartes services / projets / packages */}
        <TiltCards />

      </body>
    </html>
  );
}
