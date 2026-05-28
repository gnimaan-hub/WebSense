import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Cursor from '@/components/layout/Cursor';
import ParticlesBackground from '@/components/layout/ParticlesBackground';
import ProgressBar from '@/components/layout/ProgressBar';
import RevealObserver from '@/components/layout/RevealObserver';
import TiltCards from '@/components/layout/TiltCards';
import ThemeInitializer from '@/components/layout/ThemeInitializer';
import AudioManager from '@/components/AudioManager';

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
  title: 'Cabinet WebSense — Le sens du web',
  description:
    'Sites sur mesure, applications web, UX design, conseil stratégique — vous restez propriétaire. Cabinet WebSense, Djibouti.',
  keywords: ['développement web', 'agence web', 'Djibouti', 'site internet', 'UX design'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html 
      lang="fr" 
      // On force la classe 'dark' par défaut (sera éventuellement modifiée par ThemeInitializer)
      className={`${plusJakarta.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning // Évite l'erreur si le client modifie la classe
    >
      <body className="antialiased" suppressHydrationWarning>
        <ThemeInitializer />

        <div className="bg-grid" aria-hidden="true" />
        <div className="bg-mesh" aria-hidden="true">
          <div className="blob b1" />
          <div className="blob b2" />
          <div className="blob b3" />
        </div>

        <ParticlesBackground />
        <Cursor />
        <ProgressBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <RevealObserver />
        <TiltCards />
        <AudioManager />
      </body>
    </html>
  );
}