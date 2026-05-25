// app/services/developpement-web/page.tsx
// Server Component — interactions déléguées à ServicePageParts

import Link from 'next/link';
import CTABand from '@/components/sections/CTABand';
import { BreadcrumbLink, HoverCard } from '@/components/ui/ServicePageParts';

export const metadata = {
  title: 'Développement Web Sur Mesure | Cabinet WebSense · Djibouti',
  description:
    'Sites vitrine, e-commerce, applications web sur mesure à Djibouti. Découvrez tous les types de sites que nous développons.',
};

/* ─────────────────────────────────────────────────────────
   DONNÉES
───────────────────────────────────────────────────────── */
const SITE_TYPES = [
  {
    id: 'vitrine',
    num: '01',
    label: 'Site vitrine',
    tagline: 'Vous existez en ligne. Professionnellement.',
    desc: "L'essentiel pour toute entreprise qui veut être trouvée et convaincre dès le premier regard. Sobre, rapide, pensé pour vos clients.",
    pourQui: ['PME', 'Artisans', 'Professions libérales', 'Associations'],
    inclus: ['5 à 10 pages sur mesure', 'Design responsive mobile-first', 'Formulaire de contact', 'Optimisation SEO de base', 'Mise en ligne incluse'],
    duration: '2 à 3 semaines',
    badge: 'Le plus demandé',
    svg: (
      <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="480" height="300" fill="#15201D"/>
        <rect x="0" y="0" width="480" height="48" fill="#0E1716"/>
        <rect x="24" y="16" width="80" height="16" rx="4" fill="rgba(255,255,255,0.6)"/>
        <rect x="320" y="18" width="40" height="12" rx="3" fill="rgba(255,255,255,0.15)"/>
        <rect x="368" y="18" width="40" height="12" rx="3" fill="rgba(255,255,255,0.15)"/>
        <rect x="416" y="14" width="48" height="20" rx="5" fill="#E8A020"/>
        <rect x="40" y="76" width="220" height="22" rx="4" fill="rgba(232,160,32,0.7)"/>
        <rect x="40" y="106" width="280" height="12" rx="3" fill="rgba(255,255,255,0.25)"/>
        <rect x="40" y="124" width="240" height="12" rx="3" fill="rgba(255,255,255,0.15)"/>
        <rect x="40" y="148" width="100" height="32" rx="6" fill="#E8A020"/>
        <rect x="148" y="148" width="100" height="32" rx="6" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)"/>
        <rect x="300" y="64" width="156" height="136" rx="10" fill="rgba(29,158,117,0.18)" stroke="rgba(29,158,117,0.3)"/>
        <circle cx="378" cy="122" r="28" fill="rgba(29,158,117,0.25)"/>
        <path d="M366 122 L374 130 L392 114" stroke="#4FD4A5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        {[0,1,2].map(i => <rect key={i} x={40+i*142} y="220" width="128" height="60" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>)}
        <rect x="56" y="234" width="40" height="8" rx="3" fill="rgba(232,160,32,0.5)"/>
        <rect x="56" y="248" width="80" height="6" rx="3" fill="rgba(255,255,255,0.15)"/>
        <rect x="198" y="234" width="40" height="8" rx="3" fill="rgba(29,158,117,0.5)"/>
        <rect x="198" y="248" width="80" height="6" rx="3" fill="rgba(255,255,255,0.15)"/>
        <rect x="340" y="234" width="40" height="8" rx="3" fill="rgba(159,225,203,0.5)"/>
        <rect x="340" y="248" width="80" height="6" rx="3" fill="rgba(255,255,255,0.15)"/>
      </svg>
    ),
  },
  {
    id: 'ecommerce',
    num: '02',
    label: 'Boutique en ligne',
    tagline: 'Vendez 24h/24, sans effort supplémentaire.',
    desc: 'Une boutique complète pour vendre vos produits ou services en ligne. Catalogue, panier, paiement sécurisé et gestion des commandes.',
    pourQui: ['Commerces', 'Revendeurs', 'Créateurs', 'Importateurs'],
    inclus: ['Catalogue produits', 'Panier & paiement sécurisé', 'Espace client', 'Gestion des commandes', 'Tableau de bord admin'],
    duration: '4 à 6 semaines',
    badge: null,
    svg: (
      <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="480" height="300" fill="#1E2A26"/>
        <rect x="0" y="0" width="480" height="48" fill="#0E1716"/>
        <rect x="24" y="16" width="70" height="16" rx="4" fill="rgba(255,255,255,0.6)"/>
        <rect x="200" y="18" width="36" height="12" rx="3" fill="rgba(255,255,255,0.15)"/>
        <rect x="244" y="18" width="36" height="12" rx="3" fill="rgba(255,255,255,0.15)"/>
        <rect x="288" y="18" width="36" height="12" rx="3" fill="rgba(255,255,255,0.15)"/>
        <rect x="400" y="14" width="36" height="20" rx="4" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)"/>
        <rect x="440" y="14" width="24" height="20" rx="4" fill="#E8A020"/>
        {[[24,56],[172,56],[320,56],[24,190]].map(([x,y],i) => (
          <g key={i}>
            <rect x={x} y={y} width="120" height="108" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
            <rect x={x+8} y={y+8} width="104" height="60" rx="5" fill="rgba(255,255,255,0.07)"/>
            <rect x={x+8} y={y+74} width="70" height="8" rx="3" fill="rgba(255,255,255,0.3)"/>
            <rect x={x+8} y={y+88} width="45" height="8" rx="3" fill="rgba(232,160,32,0.6)"/>
          </g>
        ))}
        <rect x="356" y="190" width="100" height="96" rx="8" fill="rgba(232,160,32,0.12)" stroke="rgba(232,160,32,0.35)"/>
        <rect x="364" y="202" width="60" height="8" rx="3" fill="rgba(255,255,255,0.5)"/>
        <rect x="364" y="216" width="80" height="6" rx="3" fill="rgba(255,255,255,0.2)"/>
        <rect x="364" y="228" width="80" height="6" rx="3" fill="rgba(255,255,255,0.15)"/>
        <rect x="364" y="244" width="80" height="28" rx="5" fill="#E8A020"/>
        <rect x="380" y="253" width="48" height="10" rx="3" fill="rgba(255,255,255,0.8)"/>
        <rect x="172" y="190" width="136" height="96" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)"/>
        <rect x="180" y="202" width="50" height="8" rx="3" fill="rgba(255,255,255,0.3)"/>
        {[218,232,246,260].map((y,i) => <rect key={i} x={180} y={y} width="110" height="6" rx="3" fill="rgba(255,255,255,0.1)"/>)}
      </svg>
    ),
  },
  {
    id: 'webapp',
    num: '03',
    label: 'Application métier',
    tagline: 'Un outil sur mesure pour vos processus internes.',
    desc: "Dashboard, intranet, plateforme de gestion ou outil SaaS. Si vous avez un processus répétitif, on peut probablement le digitaliser.",
    pourQui: ['PME en croissance', 'Institutions', 'ONG', 'Entreprises logistiques'],
    inclus: ["Interface d'administration", 'Gestion des utilisateurs et rôles', 'Base de données sécurisée', 'API & intégrations', 'Tableaux de bord & exports'],
    duration: '6 à 10 semaines',
    badge: null,
    svg: (
      <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="480" height="300" fill="#0E1716"/>
        <rect x="0" y="0" width="96" height="300" fill="#071210"/>
        <rect x="12" y="20" width="72" height="18" rx="4" fill="rgba(255,255,255,0.5)"/>
        {[56,80,104,128,152].map((y,i) => <rect key={i} x="12" y={y} width="72" height="14" rx="3" fill={i===0?"rgba(232,160,32,0.6)":"rgba(255,255,255,0.1)"}/>)}
        <rect x="12" y="270" width="72" height="14" rx="3" fill="rgba(255,255,255,0.08)"/>
        <rect x="96" y="0" width="384" height="48" fill="#0A1A16"/>
        <rect x="112" y="16" width="140" height="16" rx="4" fill="rgba(255,255,255,0.35)"/>
        <rect x="380" y="12" width="24" height="24" rx="12" fill="rgba(232,160,32,0.4)"/>
        <rect x="408" y="12" width="60" height="24" rx="4" fill="rgba(29,158,117,0.2)"/>
        {[[108,60],[252,60],[360,60]].map(([x,y],i) => (
          <g key={i}>
            <rect x={x} y={y} width="128" height="72" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)"/>
            <rect x={x+10} y={y+12} width="60" height="10" rx="3" fill="rgba(255,255,255,0.2)"/>
            <rect x={x+10} y={y+28} width="80" height="20" rx="3" fill={i===0?"rgba(232,160,32,0.5)":i===1?"rgba(29,158,117,0.4)":"rgba(79,212,165,0.3)"}/>
          </g>
        ))}
        <rect x="108" y="148" width="264" height="132" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)"/>
        <rect x="120" y="160" width="80" height="10" rx="3" fill="rgba(255,255,255,0.3)"/>
        <polyline points="120,260 160,230 200,240 240,210 280,220 320,195 360,205" stroke="#4FD4A5" strokeWidth="2" fill="none"/>
        <polyline points="120,270 160,255 200,260 240,245 280,250 320,235 360,242" stroke="rgba(232,160,32,0.5)" strokeWidth="1.5" fill="none" strokeDasharray="4 3"/>
        <rect x="380" y="148" width="84" height="132" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)"/>
        {[160,178,196,214,232,250].map((y,i) => <rect key={i} x="388" y={y} width="68" height="8" rx="3" fill={i===0?"rgba(255,255,255,0.25)":"rgba(255,255,255,0.09)"}/>)}
      </svg>
    ),
  },
  {
    id: 'reservation',
    num: '04',
    label: 'Site avec réservation',
    tagline: 'Vos clients réservent sans vous appeler.',
    desc: 'Parfait pour les hôtels, restaurants, cliniques ou prestataires de services. Vos clients choisissent leur créneau en ligne, vous gérez depuis un tableau de bord.',
    pourQui: ['Hôtels & hébergements', 'Restaurants', 'Cliniques & cabinets', 'Prestataires de services'],
    inclus: ['Calendrier de disponibilités', 'Formulaire de réservation en ligne', 'Confirmations automatiques', 'Tableau de bord de gestion', 'Notifications email'],
    duration: '3 à 5 semaines',
    badge: null,
    svg: (
      <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="480" height="300" fill="#1E2A26"/>
        <rect x="0" y="0" width="480" height="52" fill="#0E1716"/>
        <rect x="24" y="17" width="90" height="18" rx="4" fill="rgba(255,255,255,0.6)"/>
        <rect x="360" y="15" width="96" height="22" rx="6" fill="#E8A020"/>
        <rect x="370" y="21" width="76" height="10" rx="3" fill="rgba(255,255,255,0.8)"/>
        <rect x="0" y="52" width="260" height="152" fill="rgba(29,158,117,0.12)"/>
        <rect x="24" y="76" width="160" height="20" rx="4" fill="rgba(255,255,255,0.7)"/>
        <rect x="24" y="104" width="200" height="10" rx="3" fill="rgba(255,255,255,0.25)"/>
        <rect x="24" y="120" width="180" height="10" rx="3" fill="rgba(255,255,255,0.15)"/>
        <rect x="272" y="64" width="184" height="204" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(232,160,32,0.4)"/>
        <rect x="284" y="78" width="120" height="14" rx="3" fill="rgba(255,255,255,0.5)"/>
        <rect x="284" y="98" width="160" height="96" rx="6" fill="rgba(255,255,255,0.04)"/>
        {[0,1,2,3,4,5,6].map(i => <rect key={i} x={284+i*23} y={102} width={18} height={10} rx="2" fill="rgba(255,255,255,0.15)"/>)}
        {[0,1,2,3,4].map(row => [0,1,2,3,4,5,6].map(col => {
          const active = (row===1&&col===2)||(row===2&&col===4);
          const today  = row===0&&col===3;
          return <rect key={`${row}-${col}`} x={284+col*23} y={118+row*16} width={18} height={12} rx="3" fill={active?"#E8A020":today?"rgba(29,158,117,0.4)":"rgba(255,255,255,0.05)"}/>;
        }))}
        <rect x="284" y="204" width="160" height="22" rx="5" fill="rgba(255,255,255,0.06)"/>
        <rect x="294" y="210" width="80" height="10" rx="3" fill="rgba(255,255,255,0.2)"/>
        <rect x="284" y="234" width="160" height="26" rx="6" fill="#E8A020"/>
        <rect x="310" y="241" width="108" height="12" rx="3" fill="rgba(255,255,255,0.9)"/>
        {[0,1,2].map(i => <rect key={i} x={i*88} y="220" width="80" height="60" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)"/>)}
      </svg>
    ),
  },
  {
    id: 'multilingue',
    num: '05',
    label: 'Site multilingue',
    tagline: 'Votre audience parle plusieurs langues. Votre site aussi.',
    desc: "Pour les organisations qui s'adressent à des publics francophones, anglophones et arabophones. Contenu géré depuis une interface unique.",
    pourQui: ['Institutions publiques', 'ONG internationales', 'Hôtels & tourisme', 'Entreprises régionales'],
    inclus: ['2 à 3 langues (FR / EN / AR)', 'Interface admin unifiée', 'URLs localisées', 'SEO multilingue', 'Sélecteur de langue discret'],
    duration: '+ 1 semaine / langue',
    badge: null,
    svg: (
      <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="480" height="300" fill="#15201D"/>
        <rect x="0" y="0" width="480" height="52" fill="#0E1716"/>
        <rect x="24" y="17" width="80" height="18" rx="4" fill="rgba(255,255,255,0.6)"/>
        <rect x="340" y="14" width="52" height="24" rx="5" fill="rgba(232,160,32,0.2)" stroke="rgba(232,160,32,0.5)"/>
        <rect x="348" y="20" width="24" height="12" rx="2" fill="rgba(255,255,255,0.7)"/>
        <rect x="349" y="21" width="22" height="4" rx="1" fill="#2563EB" opacity="0.7"/>
        <rect x="349" y="27" width="22" height="4" rx="1" fill="#DC2626" opacity="0.7"/>
        <circle cx="240" cy="176" r="90" fill="none" stroke="rgba(29,158,117,0.2)" strokeWidth="1.5"/>
        <circle cx="240" cy="176" r="60" fill="none" stroke="rgba(232,160,32,0.15)" strokeWidth="1"/>
        <ellipse cx="240" cy="176" rx="36" ry="90" fill="none" stroke="rgba(29,158,117,0.15)" strokeWidth="1" strokeDasharray="4 3"/>
        <ellipse cx="240" cy="176" rx="90" ry="28" fill="none" stroke="rgba(29,158,119,0.15)" strokeWidth="1" strokeDasharray="4 3"/>
        <circle cx="240" cy="176" r="14" fill="rgba(232,160,32,0.3)"/>
        {[
          {cx:160,cy:128,label:'FR',color:'rgba(29,158,117,0.6)'},
          {cx:320,cy:128,label:'EN',color:'rgba(232,160,32,0.6)'},
          {cx:240,cy:248,label:'AR',color:'rgba(159,225,203,0.5)'},
        ].map(l => (
          <g key={l.label}>
            <circle cx={l.cx} cy={l.cy} r="22" fill={l.color}/>
            <text x={l.cx} y={l.cy+5} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="12" fontWeight="700" fill="white">{l.label}</text>
            <line x1={l.cx} y1={l.label==='AR'?l.cy-22:l.cy+22} x2="240" y2={l.label==='AR'?234:162} stroke="rgba(255,255,255,0.1)" strokeDasharray="3 3"/>
          </g>
        ))}
      </svg>
    ),
  },
  {
    id: 'catalogue',
    num: '06',
    label: 'Catalogue & portfolio',
    tagline: 'Montrez votre travail. Obtenez des demandes.',
    desc: "Pour les entreprises qui veulent présenter leurs réalisations ou produits de manière visuelle et professionnelle, sans vendre en ligne.",
    pourQui: ['Agences', 'Architectes & designers', 'Photographes', 'Artisans & constructeurs'],
    inclus: ['Galerie filtrée par catégorie', 'Fiches détaillées par projet', 'Formulaire de demande de devis', 'Gestion des photos via admin', 'Optimisation images & performance'],
    duration: '2 à 3 semaines',
    badge: null,
    svg: (
      <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="480" height="300" fill="#1A2820"/>
        <rect x="0" y="0" width="480" height="50" fill="#0E1716"/>
        <rect x="24" y="16" width="80" height="18" rx="4" fill="rgba(255,255,255,0.6)"/>
        <rect x="300" y="18" width="40" height="14" rx="3" fill="rgba(255,255,255,0.12)"/>
        <rect x="348" y="18" width="40" height="14" rx="3" fill="rgba(255,255,255,0.12)"/>
        <rect x="396" y="14" width="60" height="22" rx="5" fill="rgba(232,160,32,0.7)"/>
        <rect x="24" y="62" width="432" height="28" rx="6" fill="rgba(255,255,255,0.03)"/>
        {['Tous','Architecture','Intérieur','Commercial','Résidentiel'].map((_,i) => (
          <rect key={i} x={32+i*86} y={67} width={80} height={18} rx="4" fill={i===0?"rgba(232,160,32,0.6)":"rgba(255,255,255,0.05)"}/>
        ))}
        <rect x="24" y="102" width="220" height="120" rx="8" fill="rgba(29,158,117,0.18)"/>
        <rect x="252" y="102" width="100" height="56" rx="8" fill="rgba(232,160,32,0.12)"/>
        <rect x="360" y="102" width="96" height="56" rx="8" fill="rgba(159,225,203,0.12)"/>
        <rect x="252" y="166" width="204" height="56" rx="8" fill="rgba(255,255,255,0.06)"/>
        <rect x="24" y="230" width="100" height="50" rx="8" fill="rgba(232,160,32,0.1)"/>
        <rect x="132" y="230" width="100" height="50" rx="8" fill="rgba(29,158,117,0.1)"/>
        <rect x="240" y="230" width="216" height="50" rx="8" fill="rgba(255,255,255,0.04)"/>
        <rect x="32" y="192" width="100" height="10" rx="3" fill="rgba(255,255,255,0.5)"/>
        <rect x="32" y="208" width="70" height="7" rx="3" fill="rgba(232,160,32,0.4)"/>
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────────────────
   COMPOSANTS DE MISE EN PAGE INTERNES
───────────────────────────────────────────────────────── */

/* Label section (Pour qui / Ce qui est inclus) */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontFamily: 'var(--mono)',
      fontSize: '13px',        /* ≥ 12px, jamais en dessous */
      fontWeight: 700,
      color: 'var(--ink-3)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase' as const,
      marginBottom: '10px',
    }}>
      {children}
    </div>
  );
}

/* Numéro du bloc */
function BlockNum({ num, badge }: { num: string; badge: string | null }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
      <span style={{
        fontFamily: 'var(--mono)',
        fontSize: '13px',       /* ≥ 12px */
        fontWeight: 700,
        color: 'var(--ink-3)',
        letterSpacing: '0.06em',
      }}>
        {num}
      </span>
      {badge && (
        <span style={{
          fontFamily: 'var(--mono)',
          fontSize: '12px',     /* ≥ 12px */
          fontWeight: 700,
          background: 'var(--or)',
          color: '#fff',
          padding: '3px 10px',
          borderRadius: '100px',
          letterSpacing: '0.05em',
        }}>
          {badge}
        </span>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────── */
export default function DeveloppementWebPage() {
  return (
    <>
      {/* ── HERO ── */}
      <div style={{ paddingTop: '32px', position: 'relative', zIndex: 2 }}>
        <div className="container-custom" style={{ paddingBottom: '64px' }}>

          {/* Fil d'Ariane */}
          <nav style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            fontFamily: 'var(--mono)',
            fontSize: '13px',   /* ≥ 12px */
            fontWeight: 500,
            color: 'var(--ink-3)',
            marginBottom: '40px',
            letterSpacing: '0.03em',
          }}>
            <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
            <span style={{ opacity: 0.4 }}>/</span>
            <BreadcrumbLink href="/services">Services</BreadcrumbLink>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: 'var(--or-dark)', fontWeight: 600 }}>Développement web</span>
          </nav>

          {/* Titre */}
          <div style={{ maxWidth: '760px' }}>
            <div className="section-badge rev">// WS·01 · Core · Développement web</div>
            <h1
              className="section-h2 rev d1"
              style={{ fontSize: 'clamp(36px,5.5vw,64px)', marginBottom: '20px' }}
            >
              Quel site web<br/>vous faut-il ?
            </h1>
            <p
              className="section-sub rev d2"
              style={{ fontSize: '18px', fontWeight: 400, marginBottom: '0' }}
            >
              Chaque projet est différent. Parcourez les types de sites que nous développons — reconnaissez votre situation, et on part de là.
            </p>
          </div>
        </div>
      </div>

      {/* ── LISTE DES TYPES ── */}
      <section style={{ paddingBottom: '100px', position: 'relative', zIndex: 2 }}>
        <div className="container-custom">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>

            {SITE_TYPES.map((type, idx) => (
              <HoverCard key={type.id} delay={0} plain>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: idx % 2 === 0 ? '1fr 1.1fr' : '1.1fr 1fr',
                  gap: '64px',
                  alignItems: 'center',
                }}>

                  {/* ── Colonne texte ── */}
                  <div style={{ order: idx % 2 === 0 ? 0 : 1 }}>

                    <BlockNum num={type.num} badge={type.badge} />

                    {/* Titre du type */}
                    <h2 style={{
                      fontSize: 'clamp(26px,3vw,38px)',
                      fontWeight: 800,
                      color: 'var(--ink)',
                      letterSpacing: '-0.03em',
                      lineHeight: 1.1,
                      marginBottom: '10px',
                    }}>
                      {type.label}
                    </h2>

                    {/* Tagline */}
                    <p style={{
                      fontSize: '17px',
                      fontWeight: 600,
                      color: 'var(--or-dark)',
                      marginBottom: '16px',
                      letterSpacing: '-0.01em',
                      lineHeight: 1.4,
                    }}>
                      {type.tagline}
                    </p>

                    {/* Description */}
                    <p style={{
                      fontSize: '16px',
                      fontWeight: 400,
                      color: 'var(--ink-2)',
                      lineHeight: 1.75,
                      marginBottom: '28px',
                    }}>
                      {type.desc}
                    </p>

                    {/* Pour qui */}
                    <div style={{ marginBottom: '22px' }}>
                      <SectionLabel>Pour qui</SectionLabel>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                        {type.pourQui.map(p => (
                          <span key={p} style={{
                            fontFamily: 'var(--mono)',
                            fontSize: '13px',  /* ≥ 12px */
                            fontWeight: 600,
                            padding: '5px 12px',
                            borderRadius: '100px',
                            background: 'rgba(10,92,73,0.07)',
                            border: '1px solid rgba(10,92,73,0.15)',
                            color: 'var(--green)',
                          }}>
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Ce qui est inclus */}
                    <div style={{ marginBottom: '28px' }}>
                      <SectionLabel>Ce qui est inclus</SectionLabel>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px' }}>
                        {type.inclus.map(item => (
                          <li key={item} style={{
                            display: 'flex',
                            alignItems: 'baseline',
                            gap: '10px',
                            fontSize: '15px',   /* ≥ 12px, lisible */
                            fontWeight: 500,
                            color: 'var(--ink-2)',
                            lineHeight: 1.5,
                          }}>
                            <span style={{
                              color: 'var(--or)',
                              fontWeight: 800,
                              fontFamily: 'var(--mono)',
                              fontSize: '14px',  /* ≥ 12px, plus le 11px */
                              flexShrink: 0,
                            }}>
                              ✓
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Durée + CTA — SANS les prix */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      flexWrap: 'wrap',
                      paddingTop: '20px',
                      borderTop: '1px dashed var(--border)',
                    }}>
                      {/* Durée */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{
                          fontFamily: 'var(--mono)',
                          fontSize: '13px',   /* ≥ 12px */
                          fontWeight: 600,
                          color: 'var(--ink-3)',
                        }}>
                          Durée :
                        </span>
                        <span style={{
                          fontFamily: 'var(--mono)',
                          fontSize: '14px',   /* ≥ 12px */
                          fontWeight: 700,
                          color: 'var(--ink)',
                        }}>
                          {type.duration}
                        </span>
                      </div>

                      {/* Séparateur */}
                      <div style={{ width: '1px', height: '20px', background: 'var(--border)', flexShrink: 0 }} />

                      {/* Lien tarifs */}
                      <Link
                        href="/tarifs"
                        style={{
                          fontFamily: 'var(--mono)',
                          fontSize: '13px',
                          fontWeight: 600,
                          color: 'var(--ink-3)',
                          textDecoration: 'underline',
                          textDecorationColor: 'rgba(44,44,42,0.2)',
                          transition: 'color .2s',
                        }}
                      >
                        Voir les tarifs →
                      </Link>

                      {/* CTA */}
                      <Link
                        href={`/contact?projet=${type.id}`}
                        className="btn-primary"
                        style={{ marginLeft: 'auto' }}
                      >
                        <span>Demander un devis</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>

                  {/* ── Illustration ── */}
                  <div style={{
                    order: idx % 2 === 0 ? 1 : 0,
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-lg)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    lineHeight: 0,   /* supprime l'espace sous les SVG inline */
                  }}>
                    {type.svg}
                  </div>

                </div>
              </HoverCard>
            ))}

          </div>
        </div>
      </section>

      {/* ── NOTE FINALE ── */}
      <div style={{ padding: '40px 0 80px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <div className="container-custom">
          <p style={{
            fontFamily: 'var(--mono)',
            fontSize: '14px',     /* ≥ 12px, plus le 13px flou */
            fontWeight: 500,
            color: 'var(--ink-3)',
            lineHeight: 1.8,
            maxWidth: '520px',
            margin: '0 auto',
          }}>
            Vous ne vous reconnaissez dans aucun de ces profils ?{' '}
            <Link
              href="/contact"
              style={{
                color: 'var(--or-dark)',
                fontWeight: 700,
                textDecoration: 'underline',
                textDecorationColor: 'rgba(166,107,0,0.3)',
              }}
            >
              Décrivez-nous votre besoin
            </Link>
            {' '}— on trouve la bonne approche ensemble.
          </p>
        </div>
      </div>

      <CTABand />
    </>
  );
}