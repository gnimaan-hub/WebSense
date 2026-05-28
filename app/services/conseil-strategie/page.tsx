// app/services/conseil-strategie/page.tsx
// Server Component — interactions déléguées à ServicePageParts

import Link from 'next/link';
import CTABand from '@/components/sections/CTABand';
import { BreadcrumbLink, HoverCard } from '@/components/ui/ServicePageParts';

export const metadata = {
  title: 'Conseil en Stratégie Web | Cabinet WebSense · Djibouti',
  description:
    "Stratégie IA et GEO, transformation numérique, marketing responsable, données first-party. WebSense pense avec vous avant de construire pour vous.",
};

/* ─────────────────────────────────────────────────────────
   DONNÉES — 4 grandes missions de conseil
───────────────────────────────────────────────────────── */
const CONSEIL_TYPES = [
  {
    id: 'geo',
    num: '01',
    label: 'Stratégie IA générative & GEO',
    tagline: 'Être visible là où vos clients cherchent maintenant : dans les réponses des IA.',
    desc: "Le référencement classique ne suffit plus. ChatGPT, Perplexity et Google SGE répondent directement aux questions de vos clients — sans qu'ils visitent votre site. Le GEO (Generative Engine Optimization) consiste à faire en sorte que ces IA vous citent, vous recommandent et vous représentent fidèlement. C'est le SEO du prochain cycle.",
    pourQui: ['Marques qui veulent rester visibles', 'Médias et éditeurs de contenu', 'Cabinets et professions d\'expertise', 'E-commerce à forte concurrence'],
    inclus: [
      'Audit de découvrabilité IA : votre présence dans ChatGPT, Perplexity, SGE',
      'Stratégie de contenu GEO : briefs pour être sourcé par les IA (Q&A, entités, citations)',
      'Balisage sémantique avancé : Schema.org, Speakable, ClaimReview',
      'Gestion de la réputation algorithmique : éviter les hallucinations négatives',
      'Optimisation E-E-A-T : profils auteurs, citations tierces, signaux machine',
      'Rapport de suivi mensuel avec indicateurs de présence IA',
    ],
    duration: '2 à 4 semaines',
    badge: 'Nouveau & différenciant',
    svg: (
      <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="480" height="300" fill="#0A1210"/>
        {/* Réseau de nœuds IA */}
        {/* Lignes de connexion */}
        <line x1="240" y1="150" x2="100" y2="80"  stroke="rgba(232,160,32,0.2)" strokeWidth="1"/>
        <line x1="240" y1="150" x2="380" y2="80"  stroke="rgba(232,160,32,0.2)" strokeWidth="1"/>
        <line x1="240" y1="150" x2="80"  y2="220" stroke="rgba(29,158,117,0.2)" strokeWidth="1"/>
        <line x1="240" y1="150" x2="400" y2="220" stroke="rgba(29,158,117,0.2)" strokeWidth="1"/>
        <line x1="240" y1="150" x2="240" y2="40"  stroke="rgba(232,160,32,0.15)" strokeWidth="1"/>
        <line x1="100" y1="80"  x2="240" y2="40"  stroke="rgba(255,255,255,0.06)" strokeWidth="0.8"/>
        <line x1="380" y1="80"  x2="240" y2="40"  stroke="rgba(255,255,255,0.06)" strokeWidth="0.8"/>
        <line x1="100" y1="80"  x2="80"  y2="220" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8"/>
        <line x1="380" y1="80"  x2="400" y2="220" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8"/>

        {/* Nœud central — Marque */}
        <circle cx="240" cy="150" r="36" fill="rgba(232,160,32,0.12)" stroke="rgba(232,160,32,0.5)" strokeWidth="1.5"/>
        <circle cx="240" cy="150" r="24" fill="rgba(232,160,32,0.2)"/>
        <text x="240" y="146" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fontWeight="700" fill="rgba(232,160,32,0.9)" letterSpacing="0.06em">VOTRE</text>
        <text x="240" y="158" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fontWeight="700" fill="rgba(232,160,32,0.9)" letterSpacing="0.06em">MARQUE</text>

        {/* Nœuds IA — moteurs */}
        {[
          {cx:100, cy:80,  label:'ChatGPT',   active:true  },
          {cx:380, cy:80,  label:'Perplexity', active:true  },
          {cx:240, cy:40,  label:'SGE',        active:false },
          {cx:80,  cy:220, label:'Claude',     active:false },
          {cx:400, cy:220, label:'Copilot',    active:false },
        ].map((n,i) => (
          <g key={i}>
            <circle cx={n.cx} cy={n.cy} r={n.active?20:16}
              fill={n.active?"rgba(29,158,117,0.2)":"rgba(255,255,255,0.05)"}
              stroke={n.active?"rgba(29,158,117,0.6)":"rgba(255,255,255,0.15)"}
              strokeWidth="1.5"/>
            {n.active && <circle cx={n.cx} cy={n.cy} r="30"
              fill="none" stroke="rgba(29,158,117,0.12)" strokeWidth="1" strokeDasharray="3 3"/>}
            <text x={n.cx} y={n.cy+4} textAnchor="middle"
              fontFamily="JetBrains Mono" fontSize="8" fontWeight="700"
              fill={n.active?"rgba(79,212,165,0.9)":"rgba(255,255,255,0.35)"}>
              {n.label}
            </text>
          </g>
        ))}

        {/* Bulle de réponse IA */}
        <rect x="270" y="168" width="180" height="56" rx="10" fill="rgba(29,158,117,0.1)" stroke="rgba(29,158,117,0.3)"/>
        <path d="M272 186 L260 178" stroke="rgba(29,158,117,0.3)" strokeWidth="1.5"/>
        <rect x="280" y="178" width="80" height="7" rx="3" fill="rgba(255,255,255,0.3)"/>
        <rect x="280" y="190" width="140" height="6" rx="3" fill="rgba(255,255,255,0.15)"/>
        <rect x="280" y="202" width="120" height="6" rx="3" fill="rgba(255,255,255,0.12)"/>
        <rect x="280" y="214" width="60" height="6" rx="3" fill="rgba(232,160,32,0.5)"/>

        {/* Score GEO */}
        <rect x="20" y="162" width="110" height="60" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)"/>
        <text x="30" y="178" fontFamily="JetBrains Mono" fontSize="8" fontWeight="700" fill="rgba(255,255,255,0.35)" letterSpacing="0.08em">GEO SCORE</text>
        <text x="30" y="204" fontFamily="JetBrains Mono" fontSize="28" fontWeight="800" fill="rgba(232,160,32,0.85)">87</text>
        <text x="72" y="204" fontFamily="JetBrains Mono" fontSize="14" fill="rgba(255,255,255,0.3)">/100</text>
        <rect x="30" y="210" width="90" height="5" rx="2" fill="rgba(255,255,255,0.08)"/>
        <rect x="30" y="210" width="78" height="5" rx="2" fill="rgba(232,160,32,0.6)"/>

        {/* Particules de données */}
        {[[160,115],[180,185],[300,130],[320,170],[140,145],[260,110]].map(([x,y],i)=>(
          <circle key={i} cx={x} cy={y} r="2" fill="rgba(232,160,32,0.5)" opacity={0.4+i*0.1}/>
        ))}
      </svg>
    ),
  },

  {
    id: 'transformation',
    num: '02',
    label: 'Conseil en transformation numérique',
    tagline: 'Intégrer l\'IA dans votre organisation, sans se laisser emporter par l\'effet de mode.',
    desc: "Acheter des outils IA ne suffit pas. La transformation réelle passe par une stratégie claire, des équipes formées et des processus repensés. Nous aidons les organisations à définir où l'IA crée vraiment de la valeur pour elles — et à construire un plan d'action réaliste pour y parvenir.",
    pourQui: ['PME en croissance', 'Institutions et organisations publiques', 'ONG avec des ressources limitées', 'Directions générales qui veulent piloter le changement'],
    inclus: [
      'Feuille de route IA sur mesure (plan 12-24 mois, cas d\'usage priorisés)',
      'Diagnostic de maturité numérique : stack, compétences, culture data',
      'Design de flux de travail humain-IA : où automatiser, où garder l\'humain',
      'Accompagnement conduite du changement : ateliers, formations, éthique',
      'Architecture de plateforme composable : headless, MACH, API-first',
      'Sélection et recommandation des bons partenaires technologiques',
    ],
    duration: '3 à 6 semaines',
    badge: null,
    svg: (
      <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="480" height="300" fill="#0E1B16"/>
        {/* Fond dégradé */}
        <rect width="480" height="300" fill="url(#tgrad)"/>

        {/* Feuille de route — timeline */}
        {/* Ligne centrale */}
        <line x1="40" y1="150" x2="440" y2="150" stroke="rgba(29,158,117,0.3)" strokeWidth="2"/>
        {/* Étapes */}
        {[
          {x:80,  label:'Audit',       detail:'Maturité\nnumérique',   done:true,  col:'rgba(29,158,117,0.9)' },
          {x:180, label:'Stratégie',   detail:'Feuille\nde route',     done:true,  col:'rgba(29,158,117,0.9)' },
          {x:280, label:'Déploiement', detail:'Flux de\ntravail IA',   done:false, col:'rgba(232,160,32,0.9)' },
          {x:380, label:'Adoption',    detail:'Formation\n& conduite',  done:false, col:'rgba(255,255,255,0.4)' },
        ].map((s,i)=>(
          <g key={i}>
            {/* Ligne de connexion */}
            {i < 3 && <line x1={s.x} y1="150" x2={s.x+100} y2="150"
              stroke={s.done?"rgba(29,158,117,0.6)":"rgba(255,255,255,0.1)"}
              strokeWidth="2" strokeDasharray={s.done?"none":"4 3"}/>}
            {/* Cercle */}
            <circle cx={s.x} cy={150} r={s.done?14:12}
              fill={s.done?"rgba(29,158,117,0.25)":"rgba(255,255,255,0.06)"}
              stroke={s.col} strokeWidth="2"/>
            {s.done && <circle cx={s.x} cy={150} r={6} fill={s.col}/>}
            {/* Label haut */}
            <text x={s.x} y={130} textAnchor="middle"
              fontFamily="JetBrains Mono" fontSize="9" fontWeight="700"
              fill={s.done?"rgba(255,255,255,0.7)":"rgba(255,255,255,0.35)"}>
              {s.label}
            </text>
            {/* Détail bas */}
            <text x={s.x} y={174} textAnchor="middle"
              fontFamily="JetBrains Mono" fontSize="7.5"
              fill={s.done?"rgba(79,212,165,0.7)":"rgba(255,255,255,0.2)"}>
              {s.detail.split('\n')[0]}
            </text>
            <text x={s.x} y={184} textAnchor="middle"
              fontFamily="JetBrains Mono" fontSize="7.5"
              fill={s.done?"rgba(79,212,165,0.7)":"rgba(255,255,255,0.2)"}>
              {s.detail.split('\n')[1]}
            </text>
          </g>
        ))}

        {/* Bloc diagnostic */}
        <rect x="20" y="30" width="180" height="88" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)"/>
        <text x="32" y="50" fontFamily="JetBrains Mono" fontSize="9" fontWeight="700" fill="rgba(255,255,255,0.4)" letterSpacing="0.08em">MATURITÉ DIGITALE</text>
        {[
          {label:'Stack technique',   pct:72},
          {label:'Culture data',      pct:45},
          {label:'Compétences IA',    pct:30},
          {label:'Processus',         pct:60},
        ].map((b,i)=>(
          <g key={i}>
            <text x="32" y={68+i*17} fontFamily="JetBrains Mono" fontSize="7.5" fill="rgba(255,255,255,0.4)">{b.label}</text>
            <rect x="110" y={61+i*17} width="80" height="7" rx="3" fill="rgba(255,255,255,0.06)"/>
            <rect x="110" y={61+i*17} width={b.pct*0.8} height="7" rx="3"
              fill={b.pct>60?"rgba(29,158,117,0.7)":b.pct>40?"rgba(232,160,32,0.7)":"rgba(255,100,100,0.5)"}/>
            <text x="196" y={68+i*17} fontFamily="JetBrains Mono" fontSize="7.5" fill="rgba(255,255,255,0.5)">{b.pct}%</text>
          </g>
        ))}

        {/* Bloc architecture composable */}
        <rect x="280" y="30" width="180" height="88" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(232,160,32,0.2)"/>
        <text x="292" y="50" fontFamily="JetBrains Mono" fontSize="9" fontWeight="700" fill="rgba(232,160,32,0.6)" letterSpacing="0.08em">ARCHITECTURE</text>
        {[
          {y:62, w:60,  label:'CMS Headless',  col:'rgba(29,158,117,0.5)'},
          {y:76, w:90,  label:'API Layer',      col:'rgba(232,160,32,0.5)'},
          {y:90, w:75,  label:'CDP / Data',     col:'rgba(159,225,203,0.4)'},
          {y:104,w:50,  label:'AI Services',    col:'rgba(232,160,32,0.7)'},
        ].map((l,i)=>(
          <g key={i}>
            <rect x="292" y={l.y} width={l.w} height="11" rx="3" fill={l.col}/>
            <text x={296} y={l.y+8} fontFamily="JetBrains Mono" fontSize="6.5" fontWeight="700" fill="rgba(255,255,255,0.8)">{l.label}</text>
          </g>
        ))}

        {/* ROI attendu */}
        <rect x="20" y="210" width="440" height="68" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)"/>
        <text x="32" y="228" fontFamily="JetBrains Mono" fontSize="9" fontWeight="700" fill="rgba(255,255,255,0.35)" letterSpacing="0.1em">VALEUR PROJETÉE</text>
        {[
          {x:50,  v:'−35%', l:'Temps\nsaisi manuellement',   c:'rgba(29,158,117,0.8)'},
          {x:170, v:'×2.4', l:'Vitesse de mise\nsur le marché', c:'rgba(232,160,32,0.8)'},
          {x:290, v:'+28%', l:'Satisfaction\ncollaborateurs',  c:'rgba(159,225,203,0.7)'},
          {x:390, v:'−60%', l:'Coûts de\nsupport IT',         c:'rgba(29,158,117,0.7)'},
        ].map((m,i)=>(
          <g key={i}>
            <text x={m.x+40} y={254} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="20" fontWeight="800" fill={m.c}>{m.v}</text>
            <text x={m.x+40} y={266} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7" fill="rgba(255,255,255,0.3)">{m.l.split('\n')[0]}</text>
            <text x={m.x+40} y={275} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7" fill="rgba(255,255,255,0.3)">{m.l.split('\n')[1]}</text>
          </g>
        ))}

        <defs>
          <linearGradient id="tgrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#15201D" stopOpacity="1"/>
            <stop offset="100%" stopColor="#0A1210" stopOpacity="1"/>
          </linearGradient>
        </defs>
      </svg>
    ),
  },

  {
    id: 'rse',
    num: '03',
    label: 'Marketing responsable & RSE numérique',
    tagline: 'La durabilité comme avantage concurrentiel, pas comme contrainte.',
    desc: "Les consommateurs, partenaires et régulateurs attendent désormais que les marques prouvent leur engagement — pas qu'elles l'affichent. Nous aidons les organisations à mesurer leur impact numérique réel, à le réduire de manière concrète, et à le communiquer de façon crédible, sans greenwashing.",
    pourQui: ['Entreprises souhaitant une certification RSE', 'Collectivités et institutions publiques', 'ONG et organisations à impact', 'Marques exposées aux attentes ESG'],
    inclus: [
      'Audit de maturité RSE numérique : accessibilité, inclusion, empreinte carbone',
      'Stratégie de sobriété numérique : éco-conception, allongement de durée de vie des outils',
      'Accompagnement certifications : B Corp, Lucie, Numérique Responsable',
      'Rédaction de chartes éthiques IA conformes RGPD et AI Act',
      'Rapports RSE interactifs et campagnes d\'engagement crédibles',
      'Communication responsable sans greenwashing : labels, preuves, transparence',
    ],
    duration: '3 à 5 semaines',
    badge: null,
    svg: (
      <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="480" height="300" fill="#081410"/>
        {/* Fond vert forêt profond */}
        <ellipse cx="100" cy="80"  rx="180" ry="120" fill="rgba(10,92,73,0.18)"/>
        <ellipse cx="400" cy="220" rx="150" ry="100" fill="rgba(29,158,117,0.1)"/>

        {/* Globe / Planète centrale */}
        <circle cx="240" cy="148" r="70" fill="rgba(10,92,73,0.2)" stroke="rgba(29,158,117,0.4)" strokeWidth="1.5"/>
        <circle cx="240" cy="148" r="70" fill="none" stroke="rgba(79,212,165,0.15)" strokeWidth="1" strokeDasharray="3 4"/>
        {/* Continents stylisés */}
        <path d="M195 118 Q210 108 225 115 Q235 110 250 118 Q262 120 268 132 Q272 144 265 152 Q255 162 242 158 Q228 162 218 154 Q205 148 198 136 Q192 128 195 118Z"
          fill="rgba(29,158,117,0.4)"/>
        <path d="M215 165 Q222 158 232 162 Q240 165 244 174 Q246 182 238 186 Q228 188 220 182 Q212 176 215 165Z"
          fill="rgba(29,158,117,0.3)"/>
        <path d="M248 132 Q255 126 265 130 Q272 134 270 142 Q268 150 260 152 Q252 154 248 146 Q244 138 248 132Z"
          fill="rgba(29,158,117,0.25)"/>
        {/* Orbite de données */}
        <ellipse cx="240" cy="148" rx="100" ry="28" fill="none" stroke="rgba(232,160,32,0.2)" strokeWidth="1" strokeDasharray="4 4"/>
        <circle cx="340" cy="148" r="6" fill="rgba(232,160,32,0.7)"/>

        {/* 4 piliers RSE autour */}
        {[
          {angle:320, r:135, icon:'♻', label:'Éco-conception', col:'rgba(29,158,117,0.8)' },
          {angle:50,  r:135, icon:'⚖', label:'Éthique IA',     col:'rgba(232,160,32,0.8)' },
          {angle:140, r:135, icon:'♿', label:'Accessibilité',  col:'rgba(159,225,203,0.7)'},
          {angle:220, r:135, icon:'🏷', label:'Labels RSE',     col:'rgba(79,212,165,0.8)' },
        ].map((p,i)=>{
          const rad = p.angle * Math.PI / 180;
          const cx  = 240 + p.r * Math.cos(rad);
          const cy  = 148 + p.r * Math.sin(rad);
          const lx  = 240 + (p.r - 42) * Math.cos(rad);
          const ly  = 148 + (p.r - 42) * Math.sin(rad);
          return (
            <g key={i}>
              <line x1={lx} y1={ly} x2={cx} y2={cy} stroke={p.col} strokeWidth="1" opacity="0.4"/>
              <circle cx={cx} cy={cy} r="22" fill="rgba(255,255,255,0.04)" stroke={p.col} strokeWidth="1.5"/>
              <text x={cx} y={cy+2} textAnchor="middle" fontSize="14">{p.icon}</text>
              <text x={cx} y={cy+18} textAnchor="middle"
                fontFamily="JetBrains Mono" fontSize="7.5" fontWeight="700" fill={p.col}>
                {p.label}
              </text>
            </g>
          );
        })}

        {/* Score empreinte carbone */}
        <rect x="14" y="210" width="150" height="72" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(29,158,117,0.25)"/>
        <text x="24" y="228" fontFamily="JetBrains Mono" fontSize="8" fontWeight="700" fill="rgba(255,255,255,0.35)" letterSpacing="0.1em">EMPREINTE CO₂</text>
        <text x="24" y="258" fontFamily="JetBrains Mono" fontSize="26" fontWeight="800" fill="rgba(79,212,165,0.9)">−42%</text>
        <text x="24" y="272" fontFamily="JetBrains Mono" fontSize="7.5" fill="rgba(255,255,255,0.3)">vs. baseline 2023</text>

        {/* Certifications */}
        <rect x="316" y="210" width="150" height="72" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(232,160,32,0.2)"/>
        <text x="326" y="228" fontFamily="JetBrains Mono" fontSize="8" fontWeight="700" fill="rgba(255,255,255,0.35)" letterSpacing="0.1em">CERTIFICATIONS</text>
        {['B Corp', 'Lucie 26000', 'NR Label'].map((c,i)=>(
          <g key={i}>
            <rect x="326" y={236+i*14} width="8" height="8" rx="2" fill="rgba(29,158,117,0.6)"/>
            <text x="340" y={244+i*14} fontFamily="JetBrains Mono" fontSize="8.5" fill="rgba(255,255,255,0.55)">{c}</text>
          </g>
        ))}

        {/* Onde verte décorative */}
        <path d="M0 290 Q60 270 120 282 Q180 294 240 278 Q300 262 360 276 Q420 290 480 272"
          stroke="rgba(29,158,117,0.2)" strokeWidth="1.5" fill="none"/>
        <path d="M0 298 Q80 284 160 292 Q240 300 320 286 Q400 272 480 284"
          stroke="rgba(29,158,117,0.1)" strokeWidth="1" fill="none"/>
      </svg>
    ),
  },

  {
    id: 'data',
    num: '04',
    label: 'Stratégie de données first-party',
    tagline: 'Reprendre le contrôle de la relation client, sans dépendre des cookies tiers.',
    desc: "La fin des cookies tiers et le durcissement des réglementations RGPD ont radicalement changé la donne. Les organisations qui s'y préparent en construisant une relation directe avec leurs utilisateurs — des données déclarées volontairement, de qualité — obtiennent un avantage compétitif durable. Nous vous aidons à construire cette infrastructure.",
    pourQui: ['E-commerce et retail', 'Médias et éditeurs', 'Banques et assurances', 'Marques B2C à large base client'],
    inclus: [
      'Audit de collecte et consentement : CMP, analytics, CRM, CDP',
      'Stratégie « valeur contre données » : quiz, configurateurs, contenus premium',
      'Implémentation de CDP : unification des données clients multi-canal',
      'Modélisation de profils 360° : transactionnel, comportemental, déclaratif',
      'Stratégie d\'identité sans cookies : email haché, universal IDs, contextuel',
      'Conformité RGPD et Privacy Sandbox : mise en œuvre et documentation',
    ],
    duration: '4 à 8 semaines',
    badge: null,
    svg: (
      <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="480" height="300" fill="#0E1416"/>
        {/* Grille de données */}
        <g opacity="0.05" stroke="#ffffff">
          {[50,100,150,200,250].map(y=><line key={y} x1="0" y1={y} x2="480" y2={y} strokeWidth="0.5"/>)}
          {[80,160,240,320,400].map(x=><line key={x} x1={x} y1="0" x2={x} y2="300" strokeWidth="0.5"/>)}
        </g>

        {/* Profil utilisateur central */}
        <circle cx="240" cy="138" r="44" fill="rgba(232,160,32,0.1)" stroke="rgba(232,160,32,0.4)" strokeWidth="1.5"/>
        <circle cx="240" cy="120" r="16" fill="rgba(232,160,32,0.3)"/>
        <rect x="216" y="140" width="48" height="26" rx="8" fill="rgba(232,160,32,0.2)"/>
        <text x="240" y="174" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7.5" fontWeight="700" fill="rgba(232,160,32,0.8)" letterSpacing="0.06em">PROFIL 360°</text>

        {/* Sources de données qui affluent vers le centre */}
        {[
          {cx:80,  cy:70,  label:'Déclaratif',  desc:'Quiz\nPréférences',   col:'rgba(29,158,117,0.7)' },
          {cx:400, cy:70,  label:'Transact.',   desc:'Achats\nHistorique',   col:'rgba(232,160,32,0.7)' },
          {cx:60,  cy:210, label:'Comporte.',   desc:'Navigation\nClicks',   col:'rgba(159,225,203,0.6)'},
          {cx:420, cy:210, label:'Contextuel',  desc:'Géo\nAppareil',        col:'rgba(79,212,165,0.6)' },
        ].map((s,i)=>{
          const dx = 240 - s.cx, dy = 138 - s.cy;
          const len = Math.sqrt(dx*dx+dy*dy);
          const ux = dx/len, uy = dy/len;
          return (
            <g key={i}>
              {/* Ligne flux */}
              <line
                x1={s.cx + ux*28} y1={s.cy + uy*28}
                x2={240 - ux*48}  y2={138 - uy*48}
                stroke={s.col} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.7"/>
              {/* Particules */}
              {[0.35,0.6].map((t,j)=>(
                <circle key={j} r="3"
                  cx={s.cx + ux*28 + (240-s.cx-ux*76)*t}
                  cy={s.cy + uy*28 + (138-s.cy-uy*76)*t}
                  fill={s.col} opacity="0.8"/>
              ))}
              {/* Nœud source */}
              <rect x={s.cx-32} y={s.cy-24} width="64" height="48" rx="8"
                fill="rgba(255,255,255,0.04)" stroke={s.col} strokeWidth="1.5"/>
              <text x={s.cx} y={s.cy-8} textAnchor="middle"
                fontFamily="JetBrains Mono" fontSize="8.5" fontWeight="700" fill={s.col}>
                {s.label}
              </text>
              <text x={s.cx} y={s.cy+5} textAnchor="middle"
                fontFamily="JetBrains Mono" fontSize="7" fill="rgba(255,255,255,0.3)">
                {s.desc.split('\n')[0]}
              </text>
              <text x={s.cx} y={s.cy+15} textAnchor="middle"
                fontFamily="JetBrains Mono" fontSize="7" fill="rgba(255,255,255,0.3)">
                {s.desc.split('\n')[1]}
              </text>
            </g>
          );
        })}

        {/* CDP — colonne droite */}
        <rect x="316" y="118" width="140" height="88" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(232,160,32,0.25)"/>
        <text x="326" y="136" fontFamily="JetBrains Mono" fontSize="8.5" fontWeight="700" fill="rgba(232,160,32,0.7)" letterSpacing="0.08em">CDP — SEGMENTS</text>
        {[
          {label:'Acheteurs fidèles',  n:'1 284', col:'rgba(29,158,117,0.7)'},
          {label:'Prospects chauds',   n:'892',   col:'rgba(232,160,32,0.7)'},
          {label:'Inactifs > 90j',     n:'3 107', col:'rgba(255,255,255,0.3)'},
          {label:'Nouveaux visiteurs', n:'4 562', col:'rgba(159,225,203,0.5)'},
        ].map((seg,i)=>(
          <g key={i}>
            <text x="326" y={153+i*16} fontFamily="JetBrains Mono" fontSize="7.5" fill="rgba(255,255,255,0.4)">{seg.label}</text>
            <text x="448" y={153+i*16} textAnchor="end" fontFamily="JetBrains Mono" fontSize="8" fontWeight="700" fill={seg.col}>{seg.n}</text>
          </g>
        ))}

        {/* Consentement / conformité */}
        <rect x="24" y="236" width="432" height="50" rx="8" fill="rgba(29,158,117,0.07)" stroke="rgba(29,158,117,0.25)"/>
        <text x="40" y="256" fontFamily="JetBrains Mono" fontSize="9" fontWeight="700" fill="rgba(79,212,165,0.7)" letterSpacing="0.08em">CONFORMITÉ</text>
        {['RGPD ✓','CMP configurée ✓','Consentement éclairé ✓','Cookies tiers : 0','Universal ID : actif'].map((t,i)=>(
          <text key={i} x={40+i*88} y={274}
            fontFamily="JetBrains Mono" fontSize="7.5"
            fill={i<3?"rgba(79,212,165,0.6)":"rgba(232,160,32,0.6)"}>
            {t}
          </text>
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
      <span style={{
        fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 700,
        color: 'var(--ink-3)', letterSpacing: '0.06em',
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
export default function ConseilStrategiePage() {
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
            <span style={{ color: 'var(--or-dark)', fontWeight: 600 }}>Conseil en stratégie web</span>
          </nav>

          <div style={{ maxWidth: '780px' }}>
            <div className="section-badge rev">// WS·03 · Consulting · Stratégie</div>
            <h1 className="section-h2 rev d1" style={{ fontSize: 'clamp(36px,5.5vw,64px)', marginBottom: '20px' }}>
              On pense avec vous<br/>avant de <em>construire</em>
            </h1>
            <p className="section-sub rev d2" style={{ fontSize: '18px', fontWeight: 400, marginBottom: '32px', maxWidth: '600px' }}>
              Les erreurs les plus coûteuses en numérique ne sont pas techniques — elles sont stratégiques. Mauvais choix de plateforme, absence de vision data, ignorance des nouvelles règles IA. Nous intervenons en amont pour éviter ces erreurs, chiffres et alternatives à l'appui.
            </p>

            {/* 3 principes */}
            <div className="rev d3" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { icon: '◎', label: 'Recommandations chiffrées' },
                { icon: '⬡', label: 'Sans conflit d\'intérêt technologique' },
                { icon: '◈', label: 'Livrables concrets et actionnables' },
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

      {/* ── MISSIONS ── */}
      <section style={{ paddingBottom: '100px', position: 'relative', zIndex: 2 }}>
        <div className="container-custom">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '88px' }}>
            {CONSEIL_TYPES.map((type, idx) => (
              <HoverCard key={type.id} delay={0} plain>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: idx % 2 === 0 ? '1fr 1.1fr' : '1.1fr 1fr',
                  gap: '64px', alignItems: 'center',
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
                      fontSize: '17px', fontWeight: 600, color: 'var(--or-dark)',
                      marginBottom: '16px', letterSpacing: '-0.01em', lineHeight: 1.45,
                    }}>
                      {type.tagline}
                    </p>

                    <p style={{
                      fontSize: '16px', fontWeight: 400, color: 'var(--ink-2)',
                      lineHeight: 1.8, marginBottom: '28px',
                    }}>
                      {type.desc}
                    </p>

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

                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '16px',
                      flexWrap: 'wrap', paddingTop: '20px',
                      borderTop: '1px dashed var(--border)',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 600, color: 'var(--ink-3)' }}>Durée :</span>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: '14px', fontWeight: 700, color: 'var(--ink)' }}>{type.duration}</span>
                      </div>
                      <div style={{ width: '1px', height: '20px', background: 'var(--border)', flexShrink: 0 }} />
                      <Link href="/tarifs" style={{
                        fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 600,
                        color: 'var(--ink-3)', textDecoration: 'underline',
                        textDecorationColor: 'rgba(44,44,42,0.2)',
                      }}>
                        Voir les tarifs →
                      </Link>
                      <Link href={`/contact?service=conseil&type=${type.id}`} className="btn-primary" style={{ marginLeft: 'auto' }}>
                        <span>Demander un audit</span><span>→</span>
                      </Link>
                    </div>
                  </div>

                  {/* ── Illustration ── */}
                  <div style={{
                    order: idx % 2 === 0 ? 1 : 0,
                    borderRadius: '16px', overflow: 'hidden',
                    boxShadow: 'var(--shadow-lg)',
                    border: '1px solid rgba(255,255,255,0.06)', lineHeight: 0,
                  }}>
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
          <p style={{
            fontFamily: 'var(--mono)', fontSize: '14px', fontWeight: 500,
            color: 'var(--ink-3)', lineHeight: 1.8,
            maxWidth: '560px', margin: '0 auto',
          }}>
            Un audit seul, un atelier de vision, ou une mission globale ?{' '}
            <Link href="/contact" style={{
              color: 'var(--or-dark)', fontWeight: 700,
              textDecoration: 'underline',
              textDecorationColor: 'rgba(166,107,0,0.3)',
            }}>
              Décrivez votre situation
            </Link>
            {' '}— on adapte le format à votre réalité.
          </p>
        </div>
      </div>

      <CTABand />
    </>
  );
}