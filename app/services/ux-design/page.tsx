// app/services/ux-design/page.tsx
// Server Component — interactions déléguées à ServicePageParts

import Link from 'next/link';
import CTABand from '@/components/sections/CTABand';
import { BreadcrumbLink, HoverCard } from '@/components/ui/ServicePageParts';

export const metadata = {
  title: 'UX Design & Ergonomie | Cabinet WebSense · Djibouti',
  description:
    "Audit UX, design adaptatif, expériences immersives 3D et identité visuelle distinctive. WebSense conçoit des interfaces qui se ressentent, pas seulement qui s'utilisent.",
};

/* ─────────────────────────────────────────────────────────
   DONNÉES — 4 grandes disciplines UX
───────────────────────────────────────────────────────── */
const UX_TYPES = [
  {
    id: 'audit',
    num: '01',
    label: 'Audit UX & Analyse de données',
    tagline: 'Comprendre avant de concevoir. Mesurer avant de modifier.',
    desc: "Un bon design commence par une lecture lucide de l'existant. Nous analysons comment vos utilisateurs naviguent réellement — pas comme vous l'imaginez. Chaque recommandation est chiffrée, chaque problème documenté avec ses preuves.",
    pourQui: ['Sites existants à optimiser', 'Boutiques e-commerce', 'Applications avec fort taux d\'abandon', 'Organisations souhaitant comprendre leurs utilisateurs'],
    inclus: [
      'Audit heuristique complet (10 critères Nielsen)',
      'Analyse des parcours utilisateurs réels',
      'Identification des points de friction et d\'abandon',
      'Heatmaps et enregistrements de sessions',
      'Rapport de recommandations priorisées',
      'Feuille de route d\'amélioration chiffrée',
    ],
    duration: '1 à 2 semaines',
    badge: 'Point de départ recommandé',
    svg: (
      <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="480" height="300" fill="#0E1716"/>
        {/* Fond grille subtile */}
        <g opacity="0.06" stroke="#ffffff">
          <line x1="0" y1="60" x2="480" y2="60" strokeWidth="0.5"/>
          <line x1="0" y1="120" x2="480" y2="120" strokeWidth="0.5"/>
          <line x1="0" y1="180" x2="480" y2="180" strokeWidth="0.5"/>
          <line x1="0" y1="240" x2="480" y2="240" strokeWidth="0.5"/>
          <line x1="96" y1="0" x2="96" y2="300" strokeWidth="0.5"/>
          <line x1="192" y1="0" x2="192" y2="300" strokeWidth="0.5"/>
          <line x1="288" y1="0" x2="288" y2="300" strokeWidth="0.5"/>
          <line x1="384" y1="0" x2="384" y2="300" strokeWidth="0.5"/>
        </g>
        {/* Heatmap zones */}
        <ellipse cx="180" cy="140" rx="80" ry="55" fill="rgba(232,160,32,0.25)" filter="url(#blur1)"/>
        <ellipse cx="300" cy="110" rx="55" ry="40" fill="rgba(232,160,32,0.35)" filter="url(#blur1)"/>
        <ellipse cx="240" cy="200" rx="40" ry="30" fill="rgba(29,158,117,0.3)" filter="url(#blur1)"/>
        <ellipse cx="100" cy="80" rx="30" ry="25" fill="rgba(159,225,203,0.2)" filter="url(#blur1)"/>
        {/* Wireframe page */}
        <rect x="40" y="32" width="400" height="240" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)"/>
        {/* Nav */}
        <rect x="40" y="32" width="400" height="32" rx="8" fill="rgba(255,255,255,0.07)"/>
        <rect x="52" y="42" width="60" height="12" rx="3" fill="rgba(255,255,255,0.4)"/>
        <rect x="280" y="44" width="30" height="8" rx="2" fill="rgba(255,255,255,0.15)"/>
        <rect x="318" y="44" width="30" height="8" rx="2" fill="rgba(255,255,255,0.15)"/>
        <rect x="356" y="40" width="72" height="16" rx="4" fill="#E8A020"/>
        {/* Hero zone = zone rouge (la plus cliquée) */}
        <rect x="52" y="76" width="200" height="18" rx="4" fill="rgba(232,160,32,0.5)"/>
        <rect x="52" y="100" width="160" height="10" rx="3" fill="rgba(255,255,255,0.2)"/>
        <rect x="52" y="116" width="140" height="10" rx="3" fill="rgba(255,255,255,0.12)"/>
        <rect x="52" y="136" width="80" height="26" rx="5" fill="#E8A020" opacity="0.9"/>
        {/* Curseurs / clicks */}
        <circle cx="168" cy="149" r="4" fill="#fff" opacity="0.9"/>
        <circle cx="168" cy="149" r="10" fill="none" stroke="#E8A020" strokeWidth="1.5" opacity="0.7"/>
        <circle cx="300" cy="112" r="3" fill="#fff" opacity="0.8"/>
        <circle cx="300" cy="112" r="8" fill="none" stroke="#E8A020" strokeWidth="1.5" opacity="0.6"/>
        <circle cx="100" cy="82" r="2.5" fill="#4FD4A5" opacity="0.7"/>
        {/* Annotations */}
        <line x1="250" y1="200" x2="330" y2="240" stroke="rgba(232,160,32,0.5)" strokeWidth="1" strokeDasharray="3 2"/>
        <rect x="330" y="238" width="96" height="24" rx="5" fill="rgba(232,160,32,0.15)" stroke="rgba(232,160,32,0.4)"/>
        <rect x="338" y="245" width="60" height="7" rx="2" fill="rgba(255,255,255,0.5)"/>
        <line x1="72" y1="136" x2="20" y2="170" stroke="rgba(29,158,117,0.5)" strokeWidth="1" strokeDasharray="3 2"/>
        <rect x="8" y="164" width="80" height="22" rx="5" fill="rgba(29,158,117,0.15)" stroke="rgba(29,158,117,0.4)"/>
        <rect x="14" y="170" width="56" height="7" rx="2" fill="rgba(255,255,255,0.5)"/>
        {/* Score card */}
        <rect x="308" y="158" width="120" height="80" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)"/>
        <rect x="318" y="168" width="50" height="8" rx="2" fill="rgba(255,255,255,0.3)"/>
        <rect x="318" y="182" width="80" height="20" rx="4" fill="rgba(232,160,32,0.4)"/>
        <rect x="318" y="182" width="68" height="20" rx="4" fill="rgba(232,160,32,0.6)"/>
        <rect x="318" y="210" width="40" height="7" rx="2" fill="rgba(29,158,117,0.6)"/>
        <rect x="364" y="210" width="30" height="7" rx="2" fill="rgba(255,255,255,0.2)"/>
        <defs>
          <filter id="blur1"><feGaussianBlur in="SourceGraphic" stdDeviation="18"/></filter>
        </defs>
      </svg>
    ),
  },

  {
    id: 'adaptatif',
    num: '02',
    label: 'Design adaptatif & interfaces intelligentes',
    tagline: 'Des interfaces qui apprennent de l\'utilisateur et s\'ajustent en temps réel.',
    desc: "L'interface idéale n'est pas la même pour tout le monde. Nous concevons des systèmes qui observent les comportements, détectent les préférences et adaptent le contenu, la navigation et la mise en page à chaque utilisateur — sans configuration manuelle.",
    pourQui: ['Plateformes SaaS', 'E-commerce à fort catalogue', 'Médias et éditeurs de contenu', 'Applications avec base utilisateurs diversifiée'],
    inclus: [
      'Conception de dashboards adaptatifs par profil',
      'Personnalisation dynamique du contenu affiché',
      'Moteur de recommandation UX basé sur le comportement',
      'A/B testing intégré au design system',
      'Métriques d\'engagement en temps réel',
      'Documentation du système de règles d\'adaptation',
    ],
    duration: '3 à 6 semaines',
    badge: null,
    svg: (
      <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="480" height="300" fill="#15201D"/>
        {/* 3 variantes d'interface côte à côte */}
        {/* Variante A */}
        <rect x="20" y="40" width="134" height="220" rx="10" fill="#0E1716" stroke="rgba(255,255,255,0.1)"/>
        <rect x="28" y="50" width="118" height="14" rx="4" fill="rgba(255,255,255,0.4)"/>
        <rect x="28" y="70" width="118" height="70" rx="6" fill="rgba(29,158,117,0.2)"/>
        <rect x="36" y="78" width="60" height="10" rx="3" fill="rgba(255,255,255,0.5)"/>
        <rect x="36" y="92" width="80" height="8" rx="2" fill="rgba(255,255,255,0.2)"/>
        <rect x="36" y="104" width="70" height="8" rx="2" fill="rgba(255,255,255,0.15)"/>
        <rect x="28" y="150" width="118" height="10" rx="3" fill="rgba(232,160,32,0.5)"/>
        <rect x="28" y="166" width="100" height="8" rx="2" fill="rgba(255,255,255,0.15)"/>
        <rect x="28" y="200" width="118" height="44" rx="6" fill="rgba(232,160,32,0.15)" stroke="rgba(232,160,32,0.3)"/>
        <rect x="36" y="210" width="60" height="10" rx="3" fill="rgba(232,160,32,0.6)"/>
        <rect x="36" y="226" width="80" height="8" rx="2" fill="rgba(255,255,255,0.2)"/>
        <text x="87" y="274" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fontWeight="700" fill="rgba(255,255,255,0.4)">Profil A</text>

        {/* Flèche centrale */}
        <path d="M166 150 L314 150" stroke="rgba(232,160,32,0.3)" strokeWidth="1.5" strokeDasharray="4 3"/>
        <text x="240" y="138" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fontWeight="700" fill="rgba(232,160,32,0.7)">ADAPTATION</text>
        <circle cx="240" cy="150" r="20" fill="rgba(232,160,32,0.1)" stroke="rgba(232,160,32,0.35)"/>
        {/* Icône IA au centre */}
        <path d="M232 146 L240 142 L248 146 L248 154 L240 158 L232 154Z" stroke="rgba(232,160,32,0.8)" strokeWidth="1.5" fill="none"/>
        <circle cx="240" cy="150" r="3" fill="rgba(232,160,32,0.8)"/>

        {/* Variante B */}
        <rect x="326" y="40" width="134" height="220" rx="10" fill="#0E1716" stroke="rgba(232,160,32,0.25)"/>
        <rect x="334" y="50" width="118" height="14" rx="4" fill="rgba(255,255,255,0.4)"/>
        {/* Layout différent — grille 2 col */}
        <rect x="334" y="70" width="56" height="56" rx="6" fill="rgba(29,158,117,0.25)"/>
        <rect x="396" y="70" width="56" height="26" rx="4" fill="rgba(232,160,32,0.2)"/>
        <rect x="396" y="100" width="56" height="26" rx="4" fill="rgba(255,255,255,0.06)"/>
        <rect x="334" y="132" width="118" height="8" rx="3" fill="rgba(232,160,32,0.5)"/>
        <rect x="334" y="146" width="90" height="6" rx="2" fill="rgba(255,255,255,0.15)"/>
        <rect x="334" y="158" width="100" height="6" rx="2" fill="rgba(255,255,255,0.1)"/>
        <rect x="334" y="176" width="56" height="56" rx="6" fill="rgba(159,225,203,0.12)"/>
        <rect x="396" y="176" width="56" height="56" rx="6" fill="rgba(255,255,255,0.05)"/>
        <rect x="334" y="238" width="118" height="16" rx="5" fill="#E8A020"/>
        <text x="393" y="274" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fontWeight="700" fill="rgba(232,160,32,0.7)">Profil B</text>

        {/* Métriques en bas */}
        {[
          {x:20,label:'Taux d\'engagement',v:'↑ 34%',c:'rgba(29,158,117,0.7)'},
          {x:180,label:'Temps moyen',v:'−22%',c:'rgba(232,160,32,0.7)'},
          {x:340,label:'Conversion',v:'↑ 18%',c:'rgba(159,225,203,0.7)'},
        ].map((m,i)=>(
          <g key={i}>
            <rect x={m.x} y="276" width="124" height="18" rx="4" fill="rgba(255,255,255,0.04)"/>
            <text x={m.x+8} y="288" fontFamily="JetBrains Mono" fontSize="8" fill="rgba(255,255,255,0.4)">{m.label}</text>
            <text x={m.x+100} y="288" textAnchor="end" fontFamily="JetBrains Mono" fontSize="9" fontWeight="700" fill={m.c}>{m.v}</text>
          </g>
        ))}
      </svg>
    ),
  },

  {
    id: 'immersif',
    num: '03',
    label: 'Expériences immersives & 3D',
    tagline: 'Des expériences 3D et spatiales directement dans le navigateur, sans application à télécharger.',
    desc: "La troisième dimension n'est plus réservée aux jeux vidéo ou aux applications natives. Avec WebGL et WebXR, nous construisons des espaces navigables, des showrooms virtuels et des narrations immersives accessibles depuis n'importe quel navigateur — sur desktop, mobile ou casque.",
    pourQui: ['Immobilier & promotion', 'Automobile & luxe', 'Retail & mode', 'Musées, galeries & culture', 'Agences de communication'],
    inclus: [
      'Showrooms virtuels 3D : visites interactives de biens, véhicules ou espaces',
      'Configurateurs de produits en 3D temps réel',
      'Narrations spatiales WebXR pour lancements de marque',
      'Environnements 360° navigables depuis le navigateur',
      'Animations scroll-driven et micro-interactions physiques',
      'Optimisation performances (60 fps sur mobile)',
    ],
    duration: '4 à 8 semaines',
    badge: 'Différenciant',
    svg: (
      <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="480" height="300" fill="#0A1210"/>
        {/* Espace étoilé subtil */}
        {[
          [30,20],[80,45],[150,15],[220,35],[310,18],[390,42],[450,25],
          [55,80],[120,70],[200,90],[280,65],[370,85],[440,72],
          [20,130],[90,115],[170,140],[250,125],[340,138],[420,120],
        ].map(([x,y],i)=>(
          <circle key={i} cx={x} cy={y} r={i%3===0?1.2:0.7} fill="rgba(255,255,255,0.4)"/>
        ))}
        {/* Sol 3D perspective */}
        <path d="M0 280 L240 180 L480 280Z" fill="rgba(29,158,117,0.06)"/>
        <line x1="0" y1="280" x2="240" y2="180" stroke="rgba(29,158,117,0.15)" strokeWidth="0.5"/>
        <line x1="480" y1="280" x2="240" y2="180" stroke="rgba(29,158,117,0.15)" strokeWidth="0.5"/>
        {/* Lignes de perspective sol */}
        {[-4,-3,-2,-1,0,1,2,3,4].map((i,k)=>(
          <line key={k}
            x1={240+i*80} y1={280+i*2}
            x2={240} y2={180}
            stroke="rgba(29,158,117,0.08)" strokeWidth="0.5"/>
        ))}
        {[200,220,240,255,265,272,277].map((y,i)=>(
          <line key={i} x1={0+(i*20)} y1={y} x2={480-(i*20)} y2={y} stroke="rgba(29,158,117,0.06)" strokeWidth="0.4"/>
        ))}
        {/* Objet 3D central — cube isométrique */}
        {/* Face du haut */}
        <path d="M240 120 L310 158 L240 196 L170 158Z" fill="rgba(29,158,117,0.35)" stroke="rgba(79,212,165,0.5)" strokeWidth="1"/>
        {/* Face gauche */}
        <path d="M170 158 L240 196 L240 256 L170 218Z" fill="rgba(10,92,73,0.6)" stroke="rgba(29,158,117,0.3)" strokeWidth="1"/>
        {/* Face droite */}
        <path d="M310 158 L240 196 L240 256 L310 218Z" fill="rgba(29,158,117,0.45)" stroke="rgba(79,212,165,0.4)" strokeWidth="1"/>
        {/* Reflet/brillance sur cube */}
        <path d="M240 120 L255 128 L240 136 L225 128Z" fill="rgba(255,255,255,0.15)"/>
        {/* Orbite / ring autour du cube */}
        <ellipse cx="240" cy="188" rx="110" ry="32" fill="none" stroke="rgba(232,160,32,0.25)" strokeWidth="1.5" strokeDasharray="6 4"/>
        <circle cx="350" cy="188" r="6" fill="rgba(232,160,32,0.8)"/>
        <circle cx="350" cy="188" r="12" fill="none" stroke="rgba(232,160,32,0.3)" strokeWidth="1"/>
        {/* Éléments UI flottants */}
        <rect x="18" y="148" width="110" height="52" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)"/>
        <rect x="26" y="157" width="50" height="8" rx="3" fill="rgba(255,255,255,0.35)"/>
        <rect x="26" y="170" width="80" height="6" rx="2" fill="rgba(255,255,255,0.15)"/>
        <rect x="26" y="181" width="60" height="6" rx="2" fill="rgba(232,160,32,0.4)"/>
        <rect x="352" y="148" width="110" height="52" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)"/>
        <rect x="360" y="157" width="40" height="8" rx="3" fill="rgba(232,160,32,0.5)"/>
        <rect x="360" y="170" width="80" height="6" rx="2" fill="rgba(255,255,255,0.15)"/>
        <rect x="360" y="181" width="55" height="6" rx="2" fill="rgba(255,255,255,0.1)"/>
        {/* Cursor 3D */}
        <circle cx="280" cy="155" r="5" fill="rgba(232,160,32,0.9)"/>
        <circle cx="280" cy="155" r="12" fill="none" stroke="rgba(232,160,32,0.4)" strokeWidth="1.5"/>
        <line x1="280" y1="143" x2="280" y2="137" stroke="rgba(232,160,32,0.6)" strokeWidth="1.5"/>
        <line x1="292" y1="155" x2="298" y2="155" stroke="rgba(232,160,32,0.6)" strokeWidth="1.5"/>
        <line x1="280" y1="167" x2="280" y2="173" stroke="rgba(232,160,32,0.6)" strokeWidth="1.5"/>
        <line x1="268" y1="155" x2="262" y2="155" stroke="rgba(232,160,32,0.6)" strokeWidth="1.5"/>
        {/* Label "WebXR" */}
        <rect x="188" y="94" width="104" height="22" rx="5" fill="rgba(232,160,32,0.15)" stroke="rgba(232,160,32,0.35)"/>
        <text x="240" y="109" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fontWeight="700" fill="rgba(232,160,32,0.9)">WebXR · WebGL</text>
      </svg>
    ),
  },

  {
    id: 'identite',
    num: '04',
    label: 'Design authentique & identité distinctive',
    tagline: 'Une identité visuelle qui vous appartient vraiment — loin des templates.',
    desc: "La majorité des sites se ressemblent parce qu'ils utilisent les mêmes composants, les mêmes polices, les mêmes patterns. Nous construisons des identités visuelles qui ont un caractère propre — une typographie choisie, une palette maîtrisée, des sons pensés, et un système cohérent de bout en bout.",
    pourQui: ['Marques haut de gamme', 'Startups qui veulent se différencier', 'Créatifs & agences', 'Institutions et organisations culturelles'],
    inclus: [
      'Direction artistique complète : palette, typographie, ambiance visuelle',
      'Sélection et intégration de typographies expressives originales',
      'Design de fontes variables réagissant au scroll ou à la souris',
      'Design system documenté et maintenable',
      'Identité sonore : feedbacks audio subtils pour les interactions clés',
      'Kit de marque complet (web, print, réseaux sociaux)',
    ],
    duration: '3 à 5 semaines',
    badge: null,
    svg: (
      <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="480" height="300" fill="#1A1208"/>
        {/* Fond chaleureux */}
        <ellipse cx="120" cy="80" rx="140" ry="90" fill="rgba(232,160,32,0.08)"/>
        <ellipse cx="380" cy="220" rx="120" ry="80" fill="rgba(29,158,117,0.07)"/>
        {/* Grande typographie expressive */}
        <text x="30" y="100" fontFamily="Georgia, serif" fontSize="72" fontWeight="900"
          fill="none" stroke="rgba(232,160,32,0.5)" strokeWidth="1.5" letterSpacing="-4">
          Aa
        </text>
        <text x="30" y="100" fontFamily="Georgia, serif" fontSize="72" fontWeight="900"
          fill="rgba(232,160,32,0.12)" letterSpacing="-4">
          Aa
        </text>
        {/* Palette de couleurs */}
        <rect x="262" y="32" width="200" height="80" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
        <rect x="272" y="45" width="30" height="52" rx="4" fill="#1B2622"/>
        <rect x="308" y="45" width="30" height="52" rx="4" fill="#0A5C49"/>
        <rect x="344" y="45" width="30" height="52" rx="4" fill="#1D9E75"/>
        <rect x="380" y="45" width="30" height="52" rx="4" fill="#4FD4A5"/>
        <rect x="416" y="45" width="30" height="52" rx="4" fill="#E8A020"/>
        {/* Labels hex */}
        <text x="287" y="107" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7" fill="rgba(255,255,255,0.4)">#1B2622</text>
        <text x="323" y="107" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7" fill="rgba(255,255,255,0.4)">#0A5C49</text>
        <text x="359" y="107" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7" fill="rgba(255,255,255,0.4)">#1D9E75</text>
        <text x="395" y="107" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7" fill="rgba(255,255,255,0.4)">#4FD4A5</text>
        <text x="431" y="107" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7" fill="rgba(255,255,255,0.4)">#E8A020</text>
        {/* Ligne de séparation */}
        <line x1="20" y1="122" x2="460" y2="122" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
        {/* Exemples typographiques */}
        <rect x="20" y="134" width="200" height="60" rx="8" fill="rgba(255,255,255,0.03)"/>
        <text x="32" y="154" fontFamily="JetBrains Mono" fontSize="10" fontWeight="700" fill="rgba(255,255,255,0.35)" letterSpacing="0.12em">SANS-SERIF</text>
        <text x="32" y="170" fontFamily="system-ui, sans-serif" fontSize="18" fontWeight="800" fill="rgba(255,255,255,0.7)" letterSpacing="-0.04em">Plus Jakarta</text>
        <text x="32" y="183" fontFamily="system-ui, sans-serif" fontSize="11" fill="rgba(255,255,255,0.3)">Aa Bb Cc · 300 400 700 800</text>
        <rect x="232" y="134" width="228" height="60" rx="8" fill="rgba(255,255,255,0.03)"/>
        <text x="244" y="154" fontFamily="JetBrains Mono" fontSize="10" fontWeight="700" fill="rgba(255,255,255,0.35)" letterSpacing="0.12em">SERIF DISPLAY</text>
        <text x="244" y="172" fontFamily="Georgia, serif" fontSize="20" fontWeight="900" fill="rgba(232,160,32,0.8)" fontStyle="italic" letterSpacing="-0.02em">Distinctive</text>
        <text x="244" y="183" fontFamily="Georgia, serif" fontSize="11" fill="rgba(255,255,255,0.3)">Italic · Bold · Variable</text>
        {/* Feedbacks sonores — visualisation onde */}
        <rect x="20" y="208" width="440" height="70" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)"/>
        <text x="32" y="224" fontFamily="JetBrains Mono" fontSize="9" fontWeight="700" fill="rgba(255,255,255,0.3)" letterSpacing="0.1em">IDENTITÉ SONORE</text>
        {/* Forme d'onde */}
        {Array.from({length:80}, (_,i) => {
          const h = Math.sin(i*0.35)*14 + Math.sin(i*0.8)*6 + Math.cos(i*0.2)*4;
          const absH = Math.abs(h) + 2;
          return (
            <rect key={i}
              x={32+i*5} y={250-absH/2} width="3" height={absH}
              rx="1.5"
              fill={i>20&&i<60?`rgba(232,160,32,${0.3+Math.abs(Math.sin(i*0.3))*0.5})`:"rgba(255,255,255,0.15)"}
            />
          );
        })}
        {/* Marqueurs click */}
        <line x1="142" y1="232" x2="142" y2="268" stroke="rgba(232,160,32,0.7)" strokeWidth="1.5"/>
        <circle cx="142" cy="228" r="4" fill="rgba(232,160,32,0.9)"/>
        <text x="150" y="228" fontFamily="JetBrains Mono" fontSize="8" fill="rgba(232,160,32,0.8)">click</text>
        <line x1="232" y1="232" x2="232" y2="268" stroke="rgba(29,158,117,0.7)" strokeWidth="1.5"/>
        <circle cx="232" cy="228" r="4" fill="rgba(29,158,117,0.9)"/>
        <text x="240" y="228" fontFamily="JetBrains Mono" fontSize="8" fill="rgba(29,158,117,0.8)">hover</text>
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────────────────
   SOUS-COMPOSANTS SERVEUR RÉUTILISABLES
───────────────────────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontFamily: 'var(--mono)',
      fontSize: '13px',
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

function BlockNum({ num, badge }: { num: string; badge: string | null }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
      <span style={{
        fontFamily: 'var(--mono)', fontSize: '13px',
        fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '0.06em',
      }}>
        {num}
      </span>
      {badge && (
        <span style={{
          fontFamily: 'var(--mono)', fontSize: '12px', fontWeight: 700,
          background: 'var(--or)', color: '#fff',
          padding: '3px 10px', borderRadius: '100px', letterSpacing: '0.05em',
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
export default function UXDesignPage() {
  return (
    <>
      {/* ── HERO ── */}
      <div style={{ paddingTop: '32px', position: 'relative', zIndex: 2 }}>
        <div className="container-custom" style={{ paddingBottom: '64px' }}>

          {/* Fil d'Ariane */}
          <nav style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 500,
            color: 'var(--ink-3)', marginBottom: '40px', letterSpacing: '0.03em',
          }}>
            <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
            <span style={{ opacity: 0.4 }}>/</span>
            <BreadcrumbLink href="/services">Services</BreadcrumbLink>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: 'var(--or-dark)', fontWeight: 600 }}>UX Design & Ergonomie</span>
          </nav>

          {/* Titre hero */}
          <div style={{ maxWidth: '780px' }}>
            <div className="section-badge rev">// WS·02 · Code · UX Design & Ergonomie</div>
            <h1
              className="section-h2 rev d1"
              style={{ fontSize: 'clamp(36px,5.5vw,64px)', marginBottom: '20px' }}
            >
              Des interfaces qui se <em>ressentent</em>,<br/>pas seulement qui s'utilisent
            </h1>
            <p
              className="section-sub rev d2"
              style={{ fontSize: '18px', fontWeight: 400, marginBottom: '32px', maxWidth: '600px' }}
            >
              L'ergonomie n'est pas une couche de peinture qu'on applique à la fin. C'est une discipline qui commence par comprendre vos utilisateurs, et qui s'incarne dans chaque micro-décision de design.
            </p>

            {/* 3 principes rapides */}
            <div className="rev d3" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { icon: '◎', label: 'Basé sur des données réelles' },
                { icon: '⬡', label: 'Pensé pour vos utilisateurs' },
                { icon: '◈', label: 'Livré avec la documentation' },
              ].map(p => (
                <div key={p.label} style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '8px 14px', borderRadius: '100px',
                  background: 'rgba(255,255,255,0.7)',
                  border: '1px solid var(--border)',
                  backdropFilter: 'blur(8px)',
                  fontSize: '14px', fontWeight: 500, color: 'var(--ink-2)',
                }}>
                  <span style={{ color: 'var(--or)', fontWeight: 700 }}>{p.icon}</span>
                  {p.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── LISTE DES DISCIPLINES ── */}
      <section style={{ paddingBottom: '100px', position: 'relative', zIndex: 2 }}>
        <div className="container-custom">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '88px' }}>

            {UX_TYPES.map((type, idx) => (
              <HoverCard key={type.id} delay={0} plain>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: idx % 2 === 0 ? '1fr 1.1fr' : '1.1fr 1fr',
                  gap: '64px',
                  alignItems: 'center',
                }}>

                  {/* ── Texte ── */}
                  <div style={{ order: idx % 2 === 0 ? 0 : 1 }}>

                    <BlockNum num={type.num} badge={type.badge} />

                    <h2 style={{
                      fontSize: 'clamp(24px,3vw,36px)', fontWeight: 800,
                      color: 'var(--ink)', letterSpacing: '-0.03em',
                      lineHeight: 1.15, marginBottom: '10px',
                    }}>
                      {type.label}
                    </h2>

                    <p style={{
                      fontSize: '17px', fontWeight: 600,
                      color: 'var(--or-dark)', marginBottom: '16px',
                      letterSpacing: '-0.01em', lineHeight: 1.45,
                    }}>
                      {type.tagline}
                    </p>

                    <p style={{
                      fontSize: '16px', fontWeight: 400,
                      color: 'var(--ink-2)', lineHeight: 1.8, marginBottom: '28px',
                    }}>
                      {type.desc}
                    </p>

                    {/* Pour qui */}
                    <div style={{ marginBottom: '22px' }}>
                      <SectionLabel>Pour qui</SectionLabel>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                        {type.pourQui.map(p => (
                          <span key={p} style={{
                            fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 600,
                            padding: '5px 12px', borderRadius: '100px',
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
                            display: 'flex', alignItems: 'baseline', gap: '10px',
                            fontSize: '15px', fontWeight: 500,
                            color: 'var(--ink-2)', lineHeight: 1.55,
                          }}>
                            <span style={{
                              color: 'var(--or)', fontWeight: 800,
                              fontFamily: 'var(--mono)', fontSize: '14px', flexShrink: 0,
                            }}>✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pied : durée + liens */}
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '16px',
                      flexWrap: 'wrap', paddingTop: '20px',
                      borderTop: '1px dashed var(--border)',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{
                          fontFamily: 'var(--mono)', fontSize: '13px',
                          fontWeight: 600, color: 'var(--ink-3)',
                        }}>Durée :</span>
                        <span style={{
                          fontFamily: 'var(--mono)', fontSize: '14px',
                          fontWeight: 700, color: 'var(--ink)',
                        }}>{type.duration}</span>
                      </div>

                      <div style={{ width: '1px', height: '20px', background: 'var(--border)', flexShrink: 0 }} />

                      <Link href="/tarifs" style={{
                        fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 600,
                        color: 'var(--ink-3)',
                        textDecoration: 'underline',
                        textDecorationColor: 'rgba(44,44,42,0.2)',
                      }}>
                        Voir les tarifs →
                      </Link>

                      <Link
                        href={`/contact?service=ux-design&type=${type.id}`}
                        className="btn-primary"
                        style={{ marginLeft: 'auto' }}
                      >
                        <span>Demander un devis</span><span>→</span>
                      </Link>
                    </div>
                  </div>

                  {/* ── Illustration ── */}
                  <div style={{
                    order: idx % 2 === 0 ? 1 : 0,
                    borderRadius: '16px', overflow: 'hidden',
                    boxShadow: 'var(--shadow-lg)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    lineHeight: 0,
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
            fontFamily: 'var(--mono)', fontSize: '14px', fontWeight: 500,
            color: 'var(--ink-3)', lineHeight: 1.8,
            maxWidth: '520px', margin: '0 auto',
          }}>
            Vous voulez combiner audit, design et développement ?{' '}
            <Link href="/contact" style={{
              color: 'var(--or-dark)', fontWeight: 700,
              textDecoration: 'underline',
              textDecorationColor: 'rgba(166,107,0,0.3)',
            }}>
              Parlez-nous de votre projet
            </Link>
            {' '}— on conçoit une approche sur mesure.
          </p>
        </div>
      </div>

      <CTABand />
    </>
  );
}