// app/services/marketing-digital/page.tsx
// Server Component — interactions déléguées à ServicePageParts

import Link from 'next/link';
import CTABand from '@/components/sections/CTABand';
import { BreadcrumbLink, HoverCard } from '@/components/ui/ServicePageParts';

export const metadata = {
  title: 'Marketing Digital & Croissance | Cabinet WebSense · Djibouti',
  description:
    "Influence & UGC, vidéo premium, community management et réseaux sociaux. WebSense pilote votre croissance digitale avec des stratégies mesurables et authentiques.",
};

/* ─────────────────────────────────────────────────────────
   DONNÉES — 3 grandes offres marketing
───────────────────────────────────────────────────────── */
const MARKETING_TYPES = [
  {
    id: 'influence',
    num: '01',
    label: 'Marketing d\'influence & UGC',
    tagline: 'Transformer vos clients et créateurs en ambassadeurs authentiques de votre marque.',
    desc: "Les publicités classiques convainquent de moins en moins. Ce qui convertit aujourd'hui, c'est la preuve sociale — un vrai client qui recommande, un créateur qui partage son expérience réelle. Nous construisons des stratégies d'influence et de contenu généré par les utilisateurs qui bâtissent une confiance durable, pas une visibilité artificielle.",
    pourQui: ['Marques B2C à audience jeune', 'E-commerce en phase de croissance', 'Hôtels, restaurants et lieux de vie', 'Startups cherchant la notoriété rapidement'],
    inclus: [
      'Stratégie de partenariats : mix nano/micro/macro aligné avec vos valeurs et objectifs',
      'Sélection rigoureuse : analyse d\'audience, détection de faux followers, approche relationnelle',
      'Conception de campagnes UGC : défis, concours, programmes d\'ambassadeurs',
      'Amplification on-site : intégration UGC sur fiches produits, galeries sociales',
      'Intégration publicitaire : réutilisation des contenus UGC dans vos campagnes media',
      'Mesure et animation : suivi engagement/reach/ventes, relation long terme avec les créateurs',
    ],
    duration: '1 à 3 mois / campagne',
    badge: null,
    svg: (
      <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="480" height="300" fill="#10080E"/>
        {/* Fond dégradé chaud */}
        <ellipse cx="100" cy="80"  rx="200" ry="130" fill="rgba(232,160,32,0.07)"/>
        <ellipse cx="400" cy="230" rx="180" ry="110" fill="rgba(180,40,120,0.06)"/>

        {/* Réseau d'influence — graphe de créateurs */}
        {/* Nœud marque central */}
        <circle cx="240" cy="148" r="32" fill="rgba(232,160,32,0.15)" stroke="rgba(232,160,32,0.5)" strokeWidth="1.5"/>
        <circle cx="240" cy="148" r="20" fill="rgba(232,160,32,0.25)"/>
        <text x="240" y="144" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7.5" fontWeight="700" fill="rgba(232,160,32,0.9)">VOTRE</text>
        <text x="240" y="155" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7.5" fontWeight="700" fill="rgba(232,160,32,0.9)">MARQUE</text>

        {/* Influenceurs — 3 niveaux */}
        {[
          /* Macro */
          { cx:120, cy:68,  r:20, label:'Macro',  followers:'128k', col:'rgba(180,40,120,0.8)',  ring:'rgba(180,40,120,0.3)' },
          { cx:380, cy:72,  r:20, label:'Macro',  followers:'94k',  col:'rgba(180,40,120,0.8)',  ring:'rgba(180,40,120,0.3)' },
          /* Micro */
          { cx:60,  cy:185, r:15, label:'Micro',  followers:'18k',  col:'rgba(232,160,32,0.8)',  ring:'rgba(232,160,32,0.25)' },
          { cx:420, cy:170, r:15, label:'Micro',  followers:'22k',  col:'rgba(232,160,32,0.8)',  ring:'rgba(232,160,32,0.25)' },
          { cx:175, cy:52,  r:15, label:'Micro',  followers:'11k',  col:'rgba(232,160,32,0.8)',  ring:'rgba(232,160,32,0.25)' },
          { cx:310, cy:48,  r:15, label:'Micro',  followers:'15k',  col:'rgba(232,160,32,0.8)',  ring:'rgba(232,160,32,0.25)' },
          /* Nano */
          { cx:90,  cy:250, r:10, label:'Nano',   followers:'2.4k', col:'rgba(79,212,165,0.7)',  ring:'rgba(79,212,165,0.15)' },
          { cx:200, cy:268, r:10, label:'Nano',   followers:'3.1k', col:'rgba(79,212,165,0.7)',  ring:'rgba(79,212,165,0.15)' },
          { cx:340, cy:258, r:10, label:'Nano',   followers:'1.8k', col:'rgba(79,212,165,0.7)',  ring:'rgba(79,212,165,0.15)' },
          { cx:430, cy:248, r:10, label:'Nano',   followers:'4.2k', col:'rgba(79,212,165,0.7)',  ring:'rgba(79,212,165,0.15)' },
        ].map((n,i) => {
          const dx = 240-n.cx, dy = 148-n.cy;
          const len = Math.sqrt(dx*dx+dy*dy);
          const ux = dx/len, uy = dy/len;
          const x1 = n.cx + ux*(n.r+2);
          const y1 = n.cy + uy*(n.r+2);
          const x2 = 240 - ux*34;
          const y2 = 148 - uy*34;
          return (
            <g key={i}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={n.col} strokeWidth="1" opacity="0.35" strokeDasharray="3 3"/>
              <circle cx={n.cx} cy={n.cy} r={n.r+8} fill={n.ring}/>
              <circle cx={n.cx} cy={n.cy} r={n.r} fill={`${n.col.replace('0.8','0.2')}`} stroke={n.col} strokeWidth="1.5"/>
              <text x={n.cx} y={n.cy+3} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="6.5" fontWeight="700" fill="rgba(255,255,255,0.7)">{n.followers}</text>
            </g>
          );
        })}

        {/* Légende */}
        <rect x="20" y="20" width="96" height="66" rx="7" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
        {[
          {col:'rgba(180,40,120,0.8)', label:'Macro  > 50k'},
          {col:'rgba(232,160,32,0.8)', label:'Micro  5k-50k'},
          {col:'rgba(79,212,165,0.7)', label:'Nano   < 5k'},
        ].map((l,i) => (
          <g key={i}>
            <circle cx="32" cy={35+i*18} r="5" fill={l.col}/>
            <text x="42" y={38+i*18} fontFamily="JetBrains Mono" fontSize="7.5" fill="rgba(255,255,255,0.5)">{l.label}</text>
          </g>
        ))}

        {/* Métriques campagne */}
        <rect x="336" y="112" width="128" height="80" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(232,160,32,0.2)"/>
        <text x="348" y="130" fontFamily="JetBrains Mono" fontSize="8.5" fontWeight="700" fill="rgba(232,160,32,0.6)" letterSpacing="0.08em">CAMPAGNE</text>
        {[
          {label:'Reach total',      v:'284k'},
          {label:'Taux engagement',  v:'6.4%'},
          {label:'Contenus UGC',     v:'143'},
          {label:'Conversions',      v:'+34%'},
        ].map((m,i) => (
          <g key={i}>
            <text x="348" y={145+i*14} fontFamily="JetBrains Mono" fontSize="7.5" fill="rgba(255,255,255,0.4)">{m.label}</text>
            <text x="458" y={145+i*14} textAnchor="end" fontFamily="JetBrains Mono" fontSize="8" fontWeight="700" fill="rgba(232,160,32,0.85)">{m.v}</text>
          </g>
        ))}

        {/* UGC photos flux */}
        <rect x="20" y="196" width="200" height="88" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)"/>
        <text x="32" y="214" fontFamily="JetBrains Mono" fontSize="8.5" fontWeight="700" fill="rgba(255,255,255,0.35)" letterSpacing="0.08em">FLUX UGC</text>
        {[[32,222],[98,222],[164,222],[32,260],[98,260],[164,260]].map(([x,y],i) => (
          <rect key={i} x={x} y={y} width="54" height="32" rx="4"
            fill={['rgba(180,40,120,0.15)','rgba(232,160,32,0.15)','rgba(79,212,165,0.12)','rgba(232,160,32,0.1)','rgba(180,40,120,0.12)','rgba(79,212,165,0.15)'][i]}
            stroke="rgba(255,255,255,0.08)"/>
        ))}
      </svg>
    ),
  },

  {
    id: 'video',
    num: '02',
    label: 'Production de contenu vidéo premium',
    tagline: 'La vidéo comme pilier central de votre communication — du corporate au snack content.',
    desc: "La vidéo est le format qui engage le plus, retient le mieux l'attention et convertit le plus efficacement. Mais produire de la vidéo sans stratégie, c'est brûler du budget. Nous concevons votre ligne éditoriale, produisons les contenus adaptés à chaque format et plateforme, et mesurons les résultats.",
    pourQui: ['Marques qui veulent humaniser leur image', 'E-commerce avec catalogue visuel', 'Entreprises en plein recrutement', 'Institutions et ONG en quête de visibilité'],
    inclus: [
      'Stratégie éditoriale vidéo : ligne, piliers de contenu, calendrier de production',
      'Vidéo corporate et storytelling : mini-docs, interviews de dirigeants, culture d\'entreprise',
      'Micro-storytelling social-first : Reels, Shorts, TikTok — montages dynamiques, messages clairs',
      'Vidéo interactive et shoppable : hotspots, quiz intégrés, achat direct sans friction',
      'Distribution cross-canal : web, broadcast, in-app — adaptation de format et promotion',
      'Reporting : vues, taux d\'engagement, temps de visionnage, conversions attribuées',
    ],
    duration: '2 à 6 semaines / production',
    badge: null,
    svg: (
      <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="480" height="300" fill="#0A0A14"/>

        {/* ── Format mobile — Reels/Shorts ── */}
        <rect x="22" y="24" width="108" height="192" rx="14" fill="#0E0E1C" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"/>
        <rect x="30" y="32" width="92" height="164" rx="8" fill="rgba(180,40,120,0.15)"/>
        {/* Barre de progression vidéo */}
        <rect x="30" y="192" width="92" height="2" rx="1" fill="rgba(255,255,255,0.1)"/>
        <rect x="30" y="192" width="62" height="2" rx="1" fill="rgba(232,160,32,0.8)"/>
        {/* Contenu vertical */}
        <rect x="38" y="40" width="76" height="10" rx="3" fill="rgba(255,255,255,0.5)"/>
        <rect x="38" y="56" width="60" height="8" rx="2" fill="rgba(255,255,255,0.25)"/>
        <circle cx="76" cy="108" r="28" fill="rgba(180,40,120,0.3)" stroke="rgba(180,40,120,0.6)" strokeWidth="1.5"/>
        <path d="M68 108 L88 108" stroke="rgba(255,255,255,0.9)" strokeWidth="2"/>
        <path d="M80 100 L88 108 L80 116" stroke="rgba(255,255,255,0.9)" strokeWidth="2" fill="none"/>
        {/* Reactions */}
        <text x="102" y="68" fontSize="12" textAnchor="middle">❤️</text>
        <text x="114" y="84" fontFamily="JetBrains Mono" fontSize="7" fill="rgba(255,255,255,0.5)" textAnchor="middle">4.2k</text>
        <text x="102" y="96" fontSize="12" textAnchor="middle">💬</text>
        <text x="114" y="112" fontFamily="JetBrains Mono" fontSize="7" fill="rgba(255,255,255,0.5)" textAnchor="middle">284</text>
        <text x="102" y="124" fontSize="12" textAnchor="middle">↗️</text>
        <text x="114" y="140" fontFamily="JetBrains Mono" fontSize="7" fill="rgba(255,255,255,0.5)" textAnchor="middle">831</text>
        <text x="76" y="202" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fontWeight="700" fill="rgba(255,255,255,0.4)">REELS / SHORTS</text>
        <text x="76" y="212" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7" fill="rgba(255,255,255,0.2)">15 – 60 sec</text>

        {/* ── Format desktop — Corporate ── */}
        <rect x="152" y="36" width="210" height="146" rx="10" fill="#0A0A14" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"/>
        <rect x="160" y="44" width="194" height="120" rx="6" fill="rgba(10,92,73,0.2)"/>
        {/* Scène interview */}
        <rect x="168" y="52" width="178" height="90" rx="4" fill="rgba(29,158,117,0.12)"/>
        <circle cx="257" cy="82" r="18" fill="rgba(29,158,117,0.3)"/>
        <rect x="240" y="102" width="34" height="22" rx="4" fill="rgba(29,158,117,0.2)"/>
        {/* Microphone */}
        <rect x="254" y="110" width="6" height="14" rx="3" fill="rgba(255,255,255,0.4)"/>
        <rect x="248" y="124" width="18" height="2" rx="1" fill="rgba(255,255,255,0.3)"/>
        {/* Overlay timeline */}
        <rect x="160" y="152" width="186" height="12" rx="3" fill="rgba(255,255,255,0.04)"/>
        <rect x="160" y="152" width="124" height="12" rx="3" fill="rgba(29,158,117,0.4)"/>
        <circle cx="284" cy="158" r="5" fill="#fff"/>
        {/* Timecode */}
        <text x="168" y="158" fontFamily="JetBrains Mono" fontSize="7" fill="rgba(255,255,255,0.6)">00:43</text>
        <text x="340" y="158" fontFamily="JetBrains Mono" fontSize="7" fill="rgba(255,255,255,0.4)">01:32</text>
        <text x="257" y="198" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8.5" fontWeight="700" fill="rgba(255,255,255,0.4)">CORPORATE · MINI-DOC</text>
        <text x="257" y="209" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7" fill="rgba(255,255,255,0.2)">60 – 300 sec · YouTube · web</text>

        {/* ── Vidéo shoppable ── */}
        <rect x="370" y="24" width="90" height="192" rx="14" fill="#0E0E1C" stroke="rgba(232,160,32,0.3)" strokeWidth="1.5"/>
        <rect x="378" y="32" width="74" height="140" rx="8" fill="rgba(232,160,32,0.08)"/>
        {/* Hotspot produit */}
        <circle cx="415" cy="95" r="12" fill="rgba(232,160,32,0.8)"/>
        <text x="415" y="99" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fontWeight="900" fill="#fff">+</text>
        <rect x="384" y="112" width="60" height="28" rx="5" fill="rgba(232,160,32,0.15)" stroke="rgba(232,160,32,0.5)"/>
        <text x="414" y="122" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7" fontWeight="700" fill="rgba(232,160,32,0.9)">Sac Cuir</text>
        <text x="414" y="133" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7" fill="rgba(255,255,255,0.5)">45 000 FDJ</text>
        <rect x="384" y="148" width="60" height="18" rx="4" fill="#E8A020"/>
        <text x="414" y="160" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7.5" fontWeight="800" fill="#fff">Acheter →</text>
        <text x="415" y="198" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8.5" fontWeight="700" fill="rgba(232,160,32,0.6)">SHOPPABLE</text>
        <text x="415" y="209" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7" fill="rgba(255,255,255,0.2)">UGC + conversion</text>

        {/* ── Métriques distribution ── */}
        <rect x="22" y="232" width="436" height="52" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)"/>
        <text x="34" y="250" fontFamily="JetBrains Mono" fontSize="8.5" fontWeight="700" fill="rgba(255,255,255,0.35)" letterSpacing="0.08em">DISTRIBUTION CROSS-CANAL</text>
        {[
          {x:34,  label:'Instagram',  v:'42k vues',  c:'rgba(180,40,120,0.8)'},
          {x:130, label:'YouTube',    v:'18k vues',  c:'rgba(255,80,80,0.8)' },
          {x:226, label:'TikTok',     v:'89k vues',  c:'rgba(255,255,255,0.6)'},
          {x:322, label:'LinkedIn',   v:'6.4k vues', c:'rgba(79,150,255,0.8)'},
          {x:398, label:'Site web',   v:'12k vues',  c:'rgba(79,212,165,0.8)'},
        ].map(m => (
          <g key={m.label}>
            <text x={m.x} y={266} fontFamily="JetBrains Mono" fontSize="7.5" fill="rgba(255,255,255,0.35)">{m.label}</text>
            <text x={m.x} y={277} fontFamily="JetBrains Mono" fontSize="8" fontWeight="700" fill={m.c}>{m.v}</text>
          </g>
        ))}
      </svg>
    ),
  },

  {
    id: 'community',
    num: '03',
    label: 'Community management & Réseaux sociaux',
    tagline: 'Votre présence sociale, gérée avec cohérence, authenticité et stratégie — chaque jour.',
    desc: "Publier irrégulièrement, répondre aux commentaires au hasard, copier-coller les mêmes posts sur toutes les plateformes : c'est ce que font la plupart des marques. Nous gérons vos réseaux sociaux comme une vraie rédaction — avec un ton de voix défini, un calendrier éditorial tenu, et des objectifs mesurables.",
    pourQui: ['Entreprises sans équipe communication interne', 'Marques avec audience locale à Djibouti et la région', 'Restaurants, hôtels et commerces de proximité', 'Institutions et organisations en quête de visibilité'],
    inclus: [
      'Gestion complète : Instagram, Facebook, Snapchat, LinkedIn, TikTok, X/Twitter',
      'Calendrier éditorial mensuel : piliers de contenu, dates clés, fréquence adaptée',
      'Création de contenus natifs : visuels, captions, stories, reels, carrousels',
      'Modération et engagement : réponses aux commentaires/messages dans les 24h',
      'Veille concurrentielle et tendances : identification des opportunités de contenu',
      'Rapport mensuel : portée, engagement, croissance d\'abonnés, recommandations',
    ],
    duration: 'Contrat mensuel',
    badge: 'Service phare',
    svg: (
      <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="480" height="300" fill="#0C0810"/>
        {/* Fond dégradé */}
        <ellipse cx="80"  cy="60"  rx="180" ry="100" fill="rgba(180,40,120,0.07)"/>
        <ellipse cx="400" cy="240" rx="160" ry="100" fill="rgba(79,150,255,0.06)"/>

        {/* Calendrier éditorial */}
        <rect x="20" y="20" width="260" height="156" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)"/>
        <text x="32" y="38" fontFamily="JetBrains Mono" fontSize="8.5" fontWeight="700" fill="rgba(255,255,255,0.35)" letterSpacing="0.08em">CALENDRIER ÉDITORIAL — JUIN</text>

        {/* Jours de la semaine */}
        {['L','M','M','J','V','S','D'].map((d,i) => (
          <text key={i} x={36+i*34} y={54} textAnchor="middle"
            fontFamily="JetBrains Mono" fontSize="8" fontWeight="700"
            fill="rgba(255,255,255,0.3)">{d}</text>
        ))}

        {/* Cases du calendrier */}
        {[
          /* Semaine 1 */
          [36,60,null,null],[70,60,'IG','rgba(180,40,120,0.7)'],[104,60,null,null],
          [138,60,'LI','rgba(79,150,255,0.7)'],[172,60,null,null],
          [206,60,'FB','rgba(79,130,200,0.7)'],[240,60,null,null],
          /* Semaine 2 */
          [36,86,'IG','rgba(180,40,120,0.7)'],[70,86,null,null],
          [104,86,'TK','rgba(255,255,255,0.6)'],[138,86,null,null],
          [172,86,'IG','rgba(180,40,120,0.7)'],[206,86,'LI','rgba(79,150,255,0.7)'],
          [240,86,null,null],
          /* Semaine 3 */
          [36,112,null,null],[70,112,'FB','rgba(79,130,200,0.7)'],
          [104,112,null,null],[138,112,'IG','rgba(180,40,120,0.7)'],
          [172,112,'TK','rgba(255,255,255,0.6)'],[206,112,null,null],
          [240,112,'LI','rgba(79,150,255,0.7)'],
          /* Semaine 4 */
          [36,138,'IG','rgba(180,40,120,0.7)'],[70,138,null,null],
          [104,138,'FB','rgba(79,130,200,0.7)'],[138,138,null,null],
          [172,138,'IG','rgba(180,40,120,0.7)'],[206,138,'LI','rgba(79,150,255,0.7)'],
          [240,138,'TK','rgba(255,255,255,0.6)'],
        ].map(([x,y,label,col],i) => (
          <g key={i}>
            <rect x={Number(x)-13} y={Number(y)-2} width="26" height="22" rx="4"
              fill={col ? `${col}`.replace('0.7','0.18') : 'rgba(255,255,255,0.03)'}
              stroke={col ? `${col}` : 'rgba(255,255,255,0.05)'} strokeWidth="1"/>
            {label && (
              <text x={Number(x)} y={Number(y)+13} textAnchor="middle"
                fontFamily="JetBrains Mono" fontSize="8" fontWeight="700"
                fill={String(col)}>{label as string}</text>
            )}
          </g>
        ))}

        {/* Légende plateformes */}
        <rect x="20" y="186" width="260" height="28" rx="6" fill="rgba(255,255,255,0.03)"/>
        {[
          {col:'rgba(180,40,120,0.8)', label:'Instagram'},
          {col:'rgba(79,130,200,0.8)', label:'Facebook'},
          {col:'rgba(79,150,255,0.8)', label:'LinkedIn'},
          {col:'rgba(255,255,255,0.6)', label:'TikTok'},
        ].map((l,i) => (
          <g key={i}>
            <circle cx={34+i*60} cy={200} r="5" fill={l.col}/>
            <text x={42+i*60} y={203} fontFamily="JetBrains Mono" fontSize="7.5" fill="rgba(255,255,255,0.4)">{l.label}</text>
          </g>
        ))}

        {/* Stats réseaux sociaux */}
        <rect x="292" y="20" width="168" height="194" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)"/>
        <text x="304" y="38" fontFamily="JetBrains Mono" fontSize="8.5" fontWeight="700" fill="rgba(255,255,255,0.35)" letterSpacing="0.08em">PERFORMANCE</text>

        {[
          { platform:'Instagram',   icon:'◉', col:'rgba(180,40,120,0.9)', abn:'+342',  eng:'6.8%', reach:'18.4k' },
          { platform:'Facebook',    icon:'◈', col:'rgba(79,130,200,0.9)', abn:'+128',  eng:'3.2%', reach:'7.2k'  },
          { platform:'LinkedIn',    icon:'◆', col:'rgba(79,150,255,0.9)', abn:'+84',   eng:'4.1%', reach:'4.8k'  },
          { platform:'TikTok',      icon:'◇', col:'rgba(255,255,255,0.8)', abn:'+612', eng:'9.4%', reach:'52k'   },
          { platform:'Snapchat',    icon:'◎', col:'rgba(255,220,0,0.8)',  abn:'+56',   eng:'5.7%', reach:'3.1k'  },
        ].map((p,i) => (
          <g key={i}>
            <rect x="300" y={48+i*28} width="152" height="22" rx="5" fill="rgba(255,255,255,0.03)"/>
            <text x="308" y={62+i*28} fontFamily="JetBrains Mono" fontSize="8.5" fontWeight="700" fill={p.col}>{p.icon}</text>
            <text x="320" y={62+i*28} fontFamily="JetBrains Mono" fontSize="8" fill="rgba(255,255,255,0.55)">{p.platform}</text>
            <text x="390" y={62+i*28} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7.5" fill="rgba(255,255,255,0.35)">{p.abn}</text>
            <text x="444" y={62+i*28} textAnchor="end" fontFamily="JetBrains Mono" fontSize="7.5" fontWeight="700" fill={p.col}>{p.eng}</text>
          </g>
        ))}

        {/* Divider */}
        <line x1="300" y1="192" x2="452" y2="192" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
        <text x="304" y="208" fontFamily="JetBrains Mono" fontSize="7.5" fill="rgba(255,255,255,0.3)">Abonnés cumulés</text>
        <text x="304" y="208" fontFamily="JetBrains Mono" fontSize="7.5" fill="rgba(255,255,255,0.3)">Abonnés cumulés</text>
        <text x="452" y="208" textAnchor="end" fontFamily="JetBrains Mono" fontSize="8" fontWeight="700" fill="rgba(79,212,165,0.8)">+1 222/mois</text>

        {/* Modération */}
        <rect x="20" y="226" width="440" height="58" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)"/>
        <text x="32" y="244" fontFamily="JetBrains Mono" fontSize="8.5" fontWeight="700" fill="rgba(255,255,255,0.35)" letterSpacing="0.08em">MODÉRATION & ENGAGEMENT</text>
        {[
          {x:32,  label:'Commentaires répondus',  v:'100%',  c:'rgba(79,212,165,0.8)'},
          {x:172, label:'DM traités < 4h',         v:'94%',   c:'rgba(79,212,165,0.7)'},
          {x:298, label:'Signalements',             v:'0',     c:'rgba(255,255,255,0.4)'},
          {x:370, label:'Satisfaction',             v:'4.8/5', c:'rgba(232,160,32,0.8)'},
        ].map(m => (
          <g key={m.label}>
            <text x={m.x} y={262} fontFamily="JetBrains Mono" fontSize="7.5" fill="rgba(255,255,255,0.3)">{m.label}</text>
            <text x={m.x} y={274} fontFamily="JetBrains Mono" fontSize="9" fontWeight="800" fill={m.c}>{m.v}</text>
          </g>
        ))}
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────────────────
   SOUS-COMPOSANTS SERVEUR
───────────────────────────────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 700,
      color: 'var(--ink-3)', letterSpacing: '0.08em',
      textTransform: 'uppercase' as const, marginBottom: '10px',
    }}>
      {children}
    </div>
  );
}

function BlockNum({ num, badge }: { num: string; badge: string | null }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
      <span style={{ fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '0.06em' }}>{num}</span>
      {badge && (
        <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', fontWeight: 700, background: 'var(--or)', color: '#fff', padding: '3px 10px', borderRadius: '100px', letterSpacing: '0.05em' }}>
          {badge}
        </span>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────── */
export default function MarketingDigitalPage() {
  return (
    <>
      {/* ── HERO ── */}
      <div style={{ paddingTop: '32px', position: 'relative', zIndex: 2 }}>
        <div className="container-custom" style={{ paddingBottom: '64px' }}>

          <nav style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 500,
            color: 'var(--ink-3)', marginBottom: '40px', letterSpacing: '0.03em',
          }}>
            <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
            <span style={{ opacity: 0.4 }}>/</span>
            <BreadcrumbLink href="/services">Services</BreadcrumbLink>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: 'var(--or-dark)', fontWeight: 600 }}>Marketing Digital & Croissance</span>
          </nav>

          <div style={{ maxWidth: '780px' }}>
            <div className="section-badge rev">// WS·06 · Marketing · Croissance</div>
            <h1 className="section-h2 rev d1" style={{ fontSize: 'clamp(36px,5.5vw,64px)', marginBottom: '20px' }}>
              De la visibilité<br/>à la <em>croissance mesurable</em>
            </h1>
            <p className="section-sub rev d2" style={{ fontSize: '18px', fontWeight: 400, marginBottom: '32px', maxWidth: '600px' }}>
              Influence, vidéo, réseaux sociaux — pas comme des cases à cocher, mais comme un système cohérent orienté vers un seul objectif : faire grandir votre audience et votre chiffre d'affaires.
            </p>

            <div className="rev d3" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { icon: '◎', label: 'Stratégie basée sur les données' },
                { icon: '⬡', label: 'Contenus natifs par plateforme' },
                { icon: '◈', label: 'Rapport mensuel avec KPIs' },
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

      {/* ── OFFRES ── */}
      <section style={{ paddingBottom: '100px', position: 'relative', zIndex: 2 }}>
        <div className="container-custom">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '88px' }}>
            {MARKETING_TYPES.map((type, idx) => (
              <HoverCard key={type.id} delay={0} plain>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: idx % 2 === 0 ? '1fr 1.1fr' : '1.1fr 1fr',
                  gap: '64px', alignItems: 'center',
                }}>
                  <div style={{ order: idx % 2 === 0 ? 0 : 1 }}>
                    <BlockNum num={type.num} badge={type.badge} />
                    <h2 style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 800, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '10px' }}>
                      {type.label}
                    </h2>
                    <p style={{ fontSize: '17px', fontWeight: 600, color: 'var(--or-dark)', marginBottom: '16px', letterSpacing: '-0.01em', lineHeight: 1.45 }}>
                      {type.tagline}
                    </p>
                    <p style={{ fontSize: '16px', fontWeight: 400, color: 'var(--ink-2)', lineHeight: 1.8, marginBottom: '28px' }}>
                      {type.desc}
                    </p>
                    <div style={{ marginBottom: '22px' }}>
                      <SectionLabel>Pour qui</SectionLabel>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                        {type.pourQui.map(p => (
                          <span key={p} style={{ fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 600, padding: '5px 12px', borderRadius: '100px', background: 'rgba(10,92,73,0.07)', border: '1px solid rgba(10,92,73,0.15)', color: 'var(--green)' }}>
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div style={{ marginBottom: '28px' }}>
                      <SectionLabel>Ce qui est inclus</SectionLabel>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px' }}>
                        {type.inclus.map(item => (
                          <li key={item} style={{ display: 'flex', alignItems: 'baseline', gap: '10px', fontSize: '15px', fontWeight: 500, color: 'var(--ink-2)', lineHeight: 1.55 }}>
                            <span style={{ color: 'var(--or)', fontWeight: 800, fontFamily: 'var(--mono)', fontSize: '14px', flexShrink: 0 }}>✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', paddingTop: '20px', borderTop: '1px dashed var(--border)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 600, color: 'var(--ink-3)' }}>Engagement :</span>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: '14px', fontWeight: 700, color: 'var(--ink)' }}>{type.duration}</span>
                      </div>
                      <div style={{ width: '1px', height: '20px', background: 'var(--border)', flexShrink: 0 }} />
                      <Link href="/tarifs" style={{ fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 600, color: 'var(--ink-3)', textDecoration: 'underline', textDecorationColor: 'rgba(44,44,42,0.2)' }}>
                        Voir les tarifs →
                      </Link>
                      <Link href={`/contact?service=marketing&type=${type.id}`} className="btn-primary" style={{ marginLeft: 'auto' }}>
                        <span>Demander un devis</span><span>→</span>
                      </Link>
                    </div>
                  </div>
                  <div style={{ order: idx % 2 === 0 ? 1 : 0, borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(255,255,255,0.06)', lineHeight: 0 }}>
                    {type.svg}
                  </div>
                </div>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOTE ── */}
      <div style={{ padding: '40px 0 80px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <div className="container-custom">
          <p style={{ fontFamily: 'var(--mono)', fontSize: '14px', fontWeight: 500, color: 'var(--ink-3)', lineHeight: 1.8, maxWidth: '540px', margin: '0 auto' }}>
            Vous voulez combiner marketing digital et développement web ?{' '}
            <Link href="/contact" style={{ color: 'var(--or-dark)', fontWeight: 700, textDecoration: 'underline', textDecorationColor: 'rgba(166,107,0,0.3)' }}>
              Parlons de votre stratégie
            </Link>
            {' '}— on construit un plan global cohérent.
          </p>
        </div>
      </div>

      <CTABand />
    </>
  );
}