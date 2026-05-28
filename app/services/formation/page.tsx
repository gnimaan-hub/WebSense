// app/services/formation/page.tsx
// Server Component — interactions déléguées à ServicePageParts

import Link from 'next/link';
import CTABand from '@/components/sections/CTABand';
import { BreadcrumbLink, HoverCard } from '@/components/ui/ServicePageParts';

export const metadata = {
  title: 'Autonomie & Formation | Cabinet WebSense · Djibouti',
  description:
    "Formations IA & automatisation, culture digitale, prise en main web et IA responsable. WebSense forme vos équipes pour qu'elles n'aient plus besoin de nous.",
};

/* ─────────────────────────────────────────────────────────
   DONNÉES — 4 grandes offres de formation
───────────────────────────────────────────────────────── */
const FORMATION_TYPES = [
  {
    id: 'ia-automatisation',
    num: '01',
    label: 'Formations IA & Automatisation',
    tagline: 'Exploiter les capacités intelligentes de votre site — sans coder.',
    desc: "Les sites modernes embarquent des capacités d'IA puissantes : chatbots agentifs, moteurs de recommandation, génération de contenu assistée. Encore faut-il savoir les piloter. Ces formations opérationnelles s'adressent aux équipes marketing, éditoriales et support qui travaillent quotidiennement avec ces outils.",
    pourQui: ['Équipes marketing et communication', 'Responsables e-commerce', 'Équipes support et service client', 'Community managers et éditeurs de contenu'],
    inclus: [
      'Module "Piloter les agents IA" : configuration, entraînement, scénarios de réponse automatique',
      'Module "Automatisation marketing" : workflows emailing, push, scoring comportemental',
      'Module "Moteur de recommandation" : personnalisation contenu/produits, règles et suivi',
      'Module "Génération de contenu assistée" : rédaction, résumés, traductions, FAQ',
      'Bonnes pratiques de relecture et validation humaine des contenus générés',
      'Support post-formation 30 jours : questions et ajustements inclus',
    ],
    duration: '1 à 3 jours',
    badge: null,
    svg: (
      <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="480" height="300" fill="#080E14"/>
        <ellipse cx="120" cy="80" rx="200" ry="110" fill="rgba(29,158,117,0.07)"/>
        <ellipse cx="380" cy="230" rx="160" ry="90" fill="rgba(232,160,32,0.06)"/>

        {/* ── Agent IA — interface chatbot ── */}
        <rect x="20" y="20" width="200" height="176" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)"/>
        <rect x="20" y="20" width="200" height="32" rx="10" fill="rgba(255,255,255,0.06)"/>
        <rect x="20" y="38" width="200" height="14" fill="rgba(255,255,255,0.06)"/>
        <circle cx="36" cy="36" r="6" fill="rgba(29,158,117,0.7)"/>
        <text x="48" y="39" fontFamily="JetBrains Mono" fontSize="8.5" fontWeight="700" fill="rgba(255,255,255,0.6)">Agent WebSense</text>
        <circle cx="206" cy="36" r="4" fill="rgba(79,212,165,0.8)"/>

        {/* Bulles de conversation */}
        <rect x="32" y="62" width="130" height="22" rx="8" fill="rgba(29,158,117,0.2)" stroke="rgba(29,158,117,0.3)"/>
        <text x="42" y="74" fontFamily="JetBrains Mono" fontSize="7.5" fill="rgba(255,255,255,0.7)">Comment puis-je vous</text>
        <text x="42" y="80" fontFamily="JetBrains Mono" fontSize="7.5" fill="rgba(255,255,255,0.7)">aider aujourd'hui ?</text>

        <rect x="88" y="92" width="118" height="22" rx="8" fill="rgba(255,255,255,0.06)"/>
        <text x="98" y="104" fontFamily="JetBrains Mono" fontSize="7.5" fill="rgba(255,255,255,0.5)">Suivi commande #4821</text>

        <rect x="32" y="122" width="150" height="32" rx="8" fill="rgba(29,158,117,0.2)" stroke="rgba(29,158,117,0.3)"/>
        <text x="42" y="134" fontFamily="JetBrains Mono" fontSize="7.5" fill="rgba(255,255,255,0.7)">✓ Commande expédiée</text>
        <text x="42" y="144" fontFamily="JetBrains Mono" fontSize="7.5" fill="rgba(255,255,255,0.5)">Livraison estimée : J+2</text>

        <rect x="32" y="162" width="150" height="22" rx="6" fill="rgba(232,160,32,0.12)" stroke="rgba(232,160,32,0.3)"/>
        <text x="42" y="174" fontFamily="JetBrains Mono" fontSize="7.5" fill="rgba(232,160,32,0.8)">→ Scénario déclenché auto.</text>

        {/* Workflow automation */}
        <rect x="234" y="20" width="226" height="176" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)"/>
        <text x="246" y="40" fontFamily="JetBrains Mono" fontSize="8.5" fontWeight="700" fill="rgba(255,255,255,0.35)" letterSpacing="0.08em">WORKFLOW AUTOMATION</text>

        {/* Étapes du workflow */}
        {[
          { y:54,  icon:'◉', label:'Trigger : achat confirmé',     col:'rgba(79,212,165,0.8)', bg:'rgba(29,158,117,0.15)' },
          { y:82,  icon:'→', label:'Email de bienvenue J+0',        col:'rgba(232,160,32,0.8)', bg:'rgba(232,160,32,0.1)'  },
          { y:110, icon:'⏱', label:'Attente 3 jours',               col:'rgba(255,255,255,0.4)',bg:'rgba(255,255,255,0.04)' },
          { y:138, icon:'◈', label:'Score > 80 → Push promo',       col:'rgba(180,40,220,0.7)', bg:'rgba(180,40,220,0.1)'  },
          { y:166, icon:'◇', label:'Recommandation produits IA',    col:'rgba(79,212,165,0.7)', bg:'rgba(29,158,117,0.1)'  },
        ].map((s,i) => (
          <g key={i}>
            {i > 0 && <line x1="270" y1={s.y-4} x2="270" y2={s.y-8} stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="2 2"/>}
            <rect x="244" y={s.y} width="208" height="22" rx="5" fill={s.bg}/>
            <text x="256" y={s.y+14} fontFamily="JetBrains Mono" fontSize="8.5" fontWeight="700" fill={s.col}>{s.icon}</text>
            <text x="270" y={s.y+14} fontFamily="JetBrains Mono" fontSize="8" fill="rgba(255,255,255,0.6)">{s.label}</text>
          </g>
        ))}

        {/* Stats génération contenu */}
        <rect x="20" y="210" width="200" height="72" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(232,160,32,0.2)"/>
        <text x="32" y="228" fontFamily="JetBrains Mono" fontSize="8.5" fontWeight="700" fill="rgba(232,160,32,0.6)" letterSpacing="0.08em">GÉNÉRATION CONTENU</text>
        {[
          {label:'Articles générés/sem.',  v:'12'},
          {label:'Taux validation humaine', v:'94%'},
          {label:'Gain de temps éditorial', v:'−65%'},
        ].map((m,i) => (
          <g key={i}>
            <text x="32" y={244+i*16} fontFamily="JetBrains Mono" fontSize="7.5" fill="rgba(255,255,255,0.35)">{m.label}</text>
            <text x="212" y={244+i*16} textAnchor="end" fontFamily="JetBrains Mono" fontSize="9" fontWeight="800" fill="rgba(232,160,32,0.8)">{m.v}</text>
          </g>
        ))}

        {/* Modules disponibles */}
        <rect x="234" y="210" width="226" height="72" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)"/>
        <text x="246" y="228" fontFamily="JetBrains Mono" fontSize="8.5" fontWeight="700" fill="rgba(255,255,255,0.35)" letterSpacing="0.08em">MODULES</text>
        {['Agents IA','Automation marketing','Moteur recommandation','Génération de contenu'].map((m,i) => (
          <g key={i}>
            <circle cx="254" cy={242+i*15} r="3.5" fill="rgba(79,212,165,0.7)"/>
            <text x="264" y={246+i*15} fontFamily="JetBrains Mono" fontSize="8" fill="rgba(255,255,255,0.5)">{m}</text>
          </g>
        ))}
      </svg>
    ),
  },

  {
    id: 'culture-digitale',
    num: '02',
    label: 'Formations stratégiques & culture digitale',
    tagline: 'Donner aux décideurs et chefs de projet les clés pour piloter la transformation numérique.',
    desc: "La transformation numérique échoue rarement pour des raisons techniques. Elle échoue parce que les décideurs ne comprennent pas les enjeux, ne savent pas lire les bons indicateurs, ou n'ont pas les outils conceptuels pour choisir. Ces formations s'adressent aux directions et chefs de projet qui doivent piloter — pas exécuter.",
    pourQui: ['Directions générales et DAF', 'Chefs de projet et responsables innovation', 'DSI et équipes IT en montée en compétence', 'Élus et cadres d\'institutions publiques'],
    inclus: [
      'Module "SEO & GEO" : moteurs de recherche, cocon sémantique, autorité thématique, tableaux de bord',
      'Module "Sobriété numérique" : empreinte carbone d\'un site, éco-conception, labels RSE',
      'Module "Gouvernance des données" : first-party, consentement, RGPD, AI Act',
      'Module "Gouvernance éditoriale" : charte IA, processus de validation, documentation',
      'Ateliers de mise en situation : cas concrets adaptés à votre secteur',
      'Livret de bord remis à chaque participant : fiches méthodes, glossaire, ressources',
    ],
    duration: '1 à 2 jours',
    badge: null,
    svg: (
      <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="480" height="300" fill="#0A100A"/>
        <ellipse cx="240" cy="150" rx="260" ry="160" fill="rgba(10,92,73,0.08)"/>

        {/* ── 4 modules en grille ── */}
        {[
          {
            x:20, y:20, w:220, h:122,
            title:'SEO & GEO', icon:'◎',
            col:'rgba(29,158,117,0.8)', bg:'rgba(29,158,117,0.1)',
            items:['Moteurs de recherche & IA','Cocon sémantique','Tableaux de bord','Indicateurs GEO'],
          },
          {
            x:250, y:20, w:210, h:122,
            title:'Sobriété numérique', icon:'◆',
            col:'rgba(79,212,165,0.8)', bg:'rgba(29,158,117,0.08)',
            items:['Empreinte carbone web','Éco-conception','Labels & certifications','Communication RSE'],
          },
          {
            x:20, y:152, w:220, h:122,
            title:'Gouvernance des données', icon:'◈',
            col:'rgba(232,160,32,0.8)', bg:'rgba(232,160,32,0.08)',
            items:['First-party & consentement','RGPD en pratique','AI Act — obligations','Audit de conformité'],
          },
          {
            x:250, y:152, w:210, h:122,
            title:'Gouvernance éditoriale', icon:'◉',
            col:'rgba(180,40,220,0.7)', bg:'rgba(180,40,220,0.07)',
            items:['Charte d\'utilisation IA','Validation du contenu','Documentation interne','Processus qualité'],
          },
        ].map((mod,i) => (
          <g key={i}>
            <rect x={mod.x} y={mod.y} width={mod.w} height={mod.h} rx="10" fill={mod.bg} stroke={mod.col} strokeWidth="1.2" opacity="0.9"/>
            <text x={mod.x+14} y={mod.y+22} fontFamily="JetBrains Mono" fontSize="9.5" fontWeight="700" fill={mod.col}>{mod.icon}</text>
            <text x={mod.x+28} y={mod.y+22} fontFamily="JetBrains Mono" fontSize="9.5" fontWeight="700" fill="rgba(255,255,255,0.7)">{mod.title}</text>
            <line x1={mod.x+12} y1={mod.y+30} x2={mod.x+mod.w-12} y2={mod.y+30} stroke={mod.col} strokeWidth="0.8" opacity="0.4"/>
            {mod.items.map((item,j) => (
              <g key={j}>
                <circle cx={mod.x+20} cy={mod.y+46+j*18} r="2.5" fill={mod.col} opacity="0.7"/>
                <text x={mod.x+30} y={mod.y+50+j*18} fontFamily="JetBrains Mono" fontSize="8" fill="rgba(255,255,255,0.55)">{item}</text>
              </g>
            ))}
          </g>
        ))}

        {/* Intersection centrale */}
        <circle cx="240" cy="148" r="18" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
        <text x="240" y="144" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7" fontWeight="700" fill="rgba(255,255,255,0.7)">VISION</text>
        <text x="240" y="154" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7" fontWeight="700" fill="rgba(255,255,255,0.7)">360°</text>
      </svg>
    ),
  },

  {
    id: 'prise-en-main',
    num: '03',
    label: 'Prise en main du Web & numérique responsable',
    tagline: 'Naviguer, communiquer et se protéger en ligne — une compétence fondamentale.',
    desc: "Beaucoup d'organisations déploient des outils numériques sans que leurs équipes sachent naviguer de manière sécurisée, identifier les arnaques, ou utiliser les services en ligne efficacement. Ces formations de base ont un impact immédiat sur la productivité et la sécurité — particulièrement dans les institutions publiques et les organisations qui débutent leur transition digitale.",
    pourQui: ['Institutions publiques en digitalisation', 'Administrations et collectivités', 'ONG avec équipes peu formées au numérique', 'PME familiales en première génération digitale'],
    inclus: [
      'Navigation web : moteurs de recherche, évaluation des sources, gestion des onglets et favoris',
      'Sécurité internet : mots de passe forts, authentification 2FA, reconnaître phishing et arnaques',
      'Email professionnel : organisation, pièces jointes, étiquette numérique, anti-spam',
      'Outils collaboratifs : Google Workspace, partage de documents, visioconférences',
      'Protection des données personnelles : ce qu\'il faut partager, ce qu\'il faut garder privé',
      'Signalement et bons réflexes : que faire en cas d\'incident ou de doute',
    ],
    duration: '½ à 2 jours',
    badge: 'Accessible à tous',
    svg: (
      <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="480" height="300" fill="#0C0C10"/>
        <ellipse cx="240" cy="150" rx="280" ry="170" fill="rgba(79,150,255,0.05)"/>

        {/* ── Navigateur sécurisé ── */}
        <rect x="20" y="20" width="260" height="172" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)"/>
        {/* Barre nav */}
        <rect x="20" y="20" width="260" height="32" rx="10" fill="rgba(255,255,255,0.07)"/>
        <rect x="20" y="38" width="260" height="14" fill="rgba(255,255,255,0.07)"/>
        <circle cx="36" cy="36" r="4" fill="#FF5F57"/><circle cx="50" cy="36" r="4" fill="#FEBC2E"/><circle cx="64" cy="36" r="4" fill="#28C840"/>
        {/* URL sécurisée */}
        <rect x="80" y="29" width="148" height="14" rx="4" fill="rgba(255,255,255,0.05)"/>
        <text x="88" y="39" fontFamily="JetBrains Mono" fontSize="8" fill="rgba(79,212,165,0.9)">🔒 websense.dj</text>
        {/* Contenu */}
        <rect x="32" y="60" width="120" height="10" rx="3" fill="rgba(255,255,255,0.4)"/>
        <rect x="32" y="76" width="200" height="8" rx="2" fill="rgba(255,255,255,0.15)"/>
        <rect x="32" y="90" width="180" height="8" rx="2" fill="rgba(255,255,255,0.1)"/>
        {/* Alerte phishing */}
        <rect x="28" y="112" width="240" height="56" rx="8" fill="rgba(255,80,80,0.12)" stroke="rgba(255,80,80,0.4)"/>
        <text x="42" y="130" fontFamily="JetBrains Mono" fontSize="8.5" fontWeight="700" fill="rgba(255,100,100,0.9)">⚠ Site potentiellement dangereux</text>
        <text x="42" y="145" fontFamily="JetBrains Mono" fontSize="7.5" fill="rgba(255,255,255,0.5)">Ce site imite websen5e.dj (faux)</text>
        <text x="42" y="158" fontFamily="JetBrains Mono" fontSize="7.5" fill="rgba(255,255,255,0.4)">Ne saisissez pas vos identifiants.</text>
        <rect x="178" y="148" width="72" height="16" rx="4" fill="rgba(255,80,80,0.2)" stroke="rgba(255,80,80,0.5)"/>
        <text x="214" y="159" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7.5" fontWeight="700" fill="rgba(255,100,100,0.9)">Revenir →</text>

        {/* ── Sécurité mots de passe ── */}
        <rect x="20" y="204" width="260" height="80" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)"/>
        <text x="32" y="222" fontFamily="JetBrains Mono" fontSize="8.5" fontWeight="700" fill="rgba(255,255,255,0.35)" letterSpacing="0.08em">SÉCURITÉ MOT DE PASSE</text>
        {[
          {label:'abc123',         force:12, col:'rgba(255,80,80,0.8)',    txt:'Très faible'},
          {label:'WebSense2024',   force:58, col:'rgba(232,160,32,0.8)',   txt:'Moyen'},
          {label:'#K9!mP2@qL$x7', force:98, col:'rgba(79,212,165,0.8)',   txt:'Excellent'},
        ].map((p,i) => (
          <g key={i}>
            <text x="32" y={238+i*17} fontFamily="JetBrains Mono" fontSize="7.5" fill="rgba(255,255,255,0.3)">{p.label}</text>
            <rect x="145" y={230+i*17} width="100" height="7" rx="3" fill="rgba(255,255,255,0.06)"/>
            <rect x="145" y={230+i*17} width={p.force} height="7" rx="3" fill={p.col}/>
            <text x="252" y={238+i*17} fontFamily="JetBrains Mono" fontSize="7.5" fontWeight="700" fill={p.col}>{p.txt}</text>
          </g>
        ))}

        {/* ── Outils collaboratifs ── */}
        <rect x="292" y="20" width="168" height="104" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)"/>
        <text x="304" y="38" fontFamily="JetBrains Mono" fontSize="8.5" fontWeight="700" fill="rgba(255,255,255,0.35)" letterSpacing="0.08em">OUTILS COLL.</text>
        {[
          {icon:'📄', label:'Google Docs',   col:'rgba(79,150,255,0.8)'},
          {icon:'📊', label:'Sheets',        col:'rgba(79,212,165,0.7)'},
          {icon:'🎥', label:'Meet / Teams',  col:'rgba(232,160,32,0.7)'},
          {icon:'📧', label:'Gmail pro',     col:'rgba(255,80,80,0.7)' },
          {icon:'☁', label:'Drive partagé', col:'rgba(79,150,255,0.7)'},
        ].map((t,i) => (
          <g key={i}>
            <rect x="300" y={46+i*13} width="152" height="11" rx="3" fill="rgba(255,255,255,0.03)"/>
            <text x="308" y={56+i*13} fontSize="9">{t.icon}</text>
            <text x="322" y={56+i*13} fontFamily="JetBrains Mono" fontSize="8" fill="rgba(255,255,255,0.55)">{t.label}</text>
            <circle cx="442" cy={51+i*13} r="4" fill={t.col} opacity="0.8"/>
          </g>
        ))}

        {/* ── Bons réflexes ── */}
        <rect x="292" y="136" width="168" height="148" rx="10" fill="rgba(79,212,165,0.06)" stroke="rgba(79,212,165,0.2)"/>
        <text x="304" y="154" fontFamily="JetBrains Mono" fontSize="8.5" fontWeight="700" fill="rgba(79,212,165,0.6)" letterSpacing="0.08em">BONS RÉFLEXES</text>
        {[
          {ok:true,  label:'Vérifier l\'URL avant de cliquer'},
          {ok:true,  label:'2FA activé sur tous les comptes'},
          {ok:true,  label:'Mise à jour automatique activée'},
          {ok:false, label:'Mot de passe partagé par email'},
          {ok:false, label:'WiFi public sans VPN'},
          {ok:true,  label:'Sauvegardes régulières'},
          {ok:true,  label:'Signaler les emails suspects'},
        ].map((r,i) => (
          <g key={i}>
            <text x="304" y={172+i*17} fontFamily="JetBrains Mono" fontSize="9" fontWeight="700"
              fill={r.ok?"rgba(79,212,165,0.8)":"rgba(255,80,80,0.7)"}>
              {r.ok?'✓':'✗'}
            </text>
            <text x="318" y={172+i*17} fontFamily="JetBrains Mono" fontSize="7.5" fill="rgba(255,255,255,0.5)">{r.label}</text>
          </g>
        ))}
      </svg>
    ),
  },

  {
    id: 'ia-responsable',
    num: '04',
    label: 'IA responsable & dangers du numérique',
    tagline: 'Comprendre l\'IA pour ne pas la subir — ni s\'en méfier sans raison.',
    desc: "L'IA est partout : dans les outils que vous utilisez, dans les décisions qui vous concernent, dans les contenus que vous consommez. Mais très peu de gens comprennent vraiment comment elle fonctionne, ce qu'elle peut faire, ce qu'elle ne peut pas faire — et surtout, quels risques elle introduit si on l'utilise sans discernement. Cette formation démystifie l'IA et donne des repères pratiques pour toutes les équipes.",
    pourQui: ['Toutes les équipes sans exception', 'Managers et cadres en charge de l\'adoption IA', 'Institutions publiques et organisations sensibles', 'Parents et enseignants (format adapté disponible)'],
    inclus: [
      'Comment fonctionne l\'IA : grands modèles de langage, données d\'entraînement, biais algorithmiques',
      'Ce que l\'IA ne sait pas faire : hallucinations, limites factuelles, manque de jugement éthique',
      'Deepfakes et désinformation : détecter les contenus manipulés, vérifier les sources',
      'Vie privée et IA : quelles données sont collectées, comment les minimiser, vos droits',
      'IA au travail : ce qui peut être automatisé, ce qui ne doit pas l\'être, impact sur l\'emploi',
      'Cadre légal : AI Act européen, responsabilité des utilisateurs, signalement des dérives',
    ],
    duration: '½ à 1 jour',
    badge: 'Recommandé pour tous',
    svg: (
      <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="480" height="300" fill="#0E080E"/>
        <ellipse cx="160" cy="100" rx="200" ry="130" fill="rgba(180,40,120,0.07)"/>
        <ellipse cx="360" cy="220" rx="170" ry="100" fill="rgba(232,160,32,0.05)"/>

        {/* ── Cerveau IA central ── */}
        <circle cx="240" cy="130" r="58" fill="rgba(180,40,120,0.1)" stroke="rgba(180,40,120,0.35)" strokeWidth="1.5"/>
        <circle cx="240" cy="130" r="40" fill="rgba(180,40,120,0.15)"/>
        {/* Réseau neuronal stylisé */}
        {[
          [218,112],[262,112],[240,100],[218,148],[262,148],[240,158],
          [206,130],[274,130],
        ].map(([cx,cy],i) => (
          <circle key={i} cx={cx} cy={cy} r="3.5" fill="rgba(232,160,32,0.6)"/>
        ))}
        {/* Connexions neuronales */}
        {[
          [218,112,262,112],[218,112,240,100],[262,112,240,100],
          [218,148,262,148],[218,148,240,158],[262,148,240,158],
          [218,112,218,148],[262,112,262,148],
          [218,112,206,130],[262,112,274,130],
          [218,148,206,130],[262,148,274,130],
          [240,100,240,130],[240,158,240,130],
        ].map(([x1,y1,x2,y2],i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(232,160,32,0.2)" strokeWidth="1"/>
        ))}
        <text x="240" y="134" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fontWeight="700" fill="rgba(255,255,255,0.5)">LLM</text>

        {/* ── Risques — 4 coins ── */}
        {[
          {
            x:20, y:20, title:'Hallucinations', icon:'⚠',
            col:'rgba(255,80,80,0.8)', bg:'rgba(255,80,80,0.1)',
            desc:['L\'IA invente des faits','avec confiance','→ Toujours vérifier'],
          },
          {
            x:322, y:20, title:'Deepfakes', icon:'👁',
            col:'rgba(255,150,0,0.8)', bg:'rgba(255,150,0,0.08)',
            desc:['Images, voix, vidéos','manipulées','→ Vérifier la source'],
          },
          {
            x:20, y:196, title:'Vie privée', icon:'🔒',
            col:'rgba(79,150,255,0.8)', bg:'rgba(79,150,255,0.08)',
            desc:['Données collectées','sans consentement','→ Minimiser les infos'],
          },
          {
            x:322, y:196, title:'Biais algorithmiques', icon:'⚖',
            col:'rgba(180,40,220,0.8)', bg:'rgba(180,40,220,0.08)',
            desc:['IA reflète les biais','de ses données','→ Esprit critique'],
          },
        ].map((r,i) => (
          <g key={i}>
            <rect x={r.x} y={r.y} width="138" height="88" rx="10" fill={r.bg} stroke={r.col} strokeWidth="1.2"/>
            <text x={r.x+14} y={r.y+22} fontSize="14">{r.icon}</text>
            <text x={r.x+34} y={r.y+22} fontFamily="JetBrains Mono" fontSize="9.5" fontWeight="700" fill={r.col}>{r.title}</text>
            {r.desc.map((d,j) => (
              <text key={j} x={r.x+14} y={r.y+40+j*16} fontFamily="JetBrains Mono" fontSize="8" fill="rgba(255,255,255,0.5)">{d}</text>
            ))}
          </g>
        ))}

        {/* ── AI Act badge ── */}
        <rect x="168" y="210" width="144" height="72" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(232,160,32,0.3)"/>
        <text x="240" y="232" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fontWeight="700" fill="rgba(232,160,32,0.8)">🇪🇺 AI ACT</text>
        <text x="240" y="248" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="rgba(255,255,255,0.45)">Risque inacceptable</text>
        <text x="240" y="261" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="rgba(255,255,255,0.35)">Risque élevé</text>
        <text x="240" y="274" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="rgba(79,212,165,0.6)">Risque limité / minimal</text>
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
export default function FormationPage() {
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
            <span style={{ color: 'var(--or-dark)', fontWeight: 600 }}>Autonomie & Formation</span>
          </nav>

          <div style={{ maxWidth: '780px' }}>
            <div className="section-badge rev">// WS·04 · Advisory · Autonomie & Formation</div>
            <h1 className="section-h2 rev d1" style={{ fontSize: 'clamp(36px,5.5vw,64px)', marginBottom: '20px' }}>
              Nous construisons pour que<br/>vous <em>n'ayez plus besoin de nous</em>
            </h1>
            <p className="section-sub rev d2" style={{ fontSize: '18px', fontWeight: 400, marginBottom: '32px', maxWidth: '620px' }}>
              Notre objectif n'est pas de créer une dépendance — c'est de vous rendre autonome. Chaque formation est conçue pour que vos équipes maîtrisent leurs outils, comprennent les enjeux et prennent de bonnes décisions, seules.
            </p>

            <div className="rev d3" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { icon: '◎', label: 'Formations sur mesure' },
                { icon: '⬡', label: 'Sessions en présentiel ou à distance' },
                { icon: '◈', label: 'Support 30 jours post-formation' },
              ].map(p => (
                <div key={p.label} style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '8px 14px', borderRadius: '100px',
                  background: 'rgba(255,255,255,0.7)', border: '1px solid var(--border)',
                  backdropFilter: 'blur(8px)', fontSize: '14px', fontWeight: 500, color: 'var(--ink-2)',
                }}>
                  <span style={{ color: 'var(--or)', fontWeight: 700 }}>{p.icon}</span>
                  {p.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── FORMATIONS ── */}
      <section style={{ paddingBottom: '100px', position: 'relative', zIndex: 2 }}>
        <div className="container-custom">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '88px' }}>
            {FORMATION_TYPES.map((type, idx) => (
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
                      <SectionLabel>Ce qui est couvert</SectionLabel>
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
                        <span style={{ fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 600, color: 'var(--ink-3)' }}>Durée :</span>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: '14px', fontWeight: 700, color: 'var(--ink)' }}>{type.duration}</span>
                      </div>
                      <div style={{ width: '1px', height: '20px', background: 'var(--border)', flexShrink: 0 }} />
                      <Link href="/tarifs" style={{ fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 600, color: 'var(--ink-3)', textDecoration: 'underline', textDecorationColor: 'rgba(44,44,42,0.2)' }}>
                        Voir les tarifs →
                      </Link>
                      <Link href={`/contact?service=formation&type=${type.id}`} className="btn-primary" style={{ marginLeft: 'auto' }}>
                        <span>Demander un programme</span><span>→</span>
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
            Vous voulez combiner formation et accompagnement projet ?{' '}
            <Link href="/contact" style={{ color: 'var(--or-dark)', fontWeight: 700, textDecoration: 'underline', textDecorationColor: 'rgba(166,107,0,0.3)' }}>
              Décrivez votre contexte
            </Link>
            {' '}— on construit un programme sur mesure.
          </p>
        </div>
      </div>

      <CTABand />
    </>
  );
}