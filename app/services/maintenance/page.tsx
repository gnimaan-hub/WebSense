// app/services/maintenance/page.tsx
// Server Component — interactions déléguées à ServicePageParts

import Link from 'next/link';
import CTABand from '@/components/sections/CTABand';
import { BreadcrumbLink, HoverCard } from '@/components/ui/ServicePageParts';

export const metadata = {
  title: 'Maintenance Web & Évolution | Cabinet WebSense · Djibouti',
  description:
    "Supervision 24/7, support multicanal, mises à jour de sécurité, SLA garanti et optimisation continue. WebSense maintient votre site en pleine santé dans la durée.",
};

/* ─────────────────────────────────────────────────────────
   DONNÉES — 2 grandes offres de maintenance
───────────────────────────────────────────────────────── */
const MAINTENANCE_TYPES = [
  {
    id: 'technique',
    num: '01',
    label: 'Maintenance technique & support',
    tagline: 'Votre site fonctionne. Toujours. Vous n\'avez pas à y penser.',
    desc: "Un site livré n'est pas un site terminé. Sans suivi actif, les vulnérabilités s'accumulent, les dépendances vieillissent et les pannes surviennent au pire moment. Nous prenons en charge la santé technique de votre application dans la durée — de la supervision temps réel au support utilisateur — pour que vous puissiez vous concentrer sur votre activité.",
    pourQui: ['Sites e-commerce à fort trafic', 'Applications métier critiques', 'Sites institutionnels à haute disponibilité', 'Équipes sans développeur interne'],
    inclus: [
      'Supervision proactive 24/7 : uptime, temps de réponse, erreurs serveur, alertes immédiates',
      'Support utilisateur multicanal : chat, email, ticket — avec SLA défini contractuellement',
      'Mises à jour continues : patchs de sécurité, CMS, frameworks, bibliothèques — testés en préproduction',
      'Corrections de bugs sous SLA : bloquant 4h, majeur 24h, mineur 72h',
      'Maintenance évolutive (TMA) : petites améliorations et ajustements livrés en continu',
      'Agent IA dédié : diagnostic et résolution automatique d\'incidents courants (cache, redémarrage)',
    ],
    duration: 'Contrat mensuel',
    badge: 'Essentiel',
    svg: (
      <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="480" height="300" fill="#080F0D"/>

        {/* Fond grille monitoring */}
        <g opacity="0.06" stroke="#4FD4A5">
          {[50,100,150,200,250].map(y => <line key={y} x1="0" y1={y} x2="480" y2={y} strokeWidth="0.5"/>)}
          {[60,120,180,240,300,360,420].map(x => <line key={x} x1={x} y1="0" x2={x} y2="300" strokeWidth="0.5"/>)}
        </g>

        {/* ── Uptime chart — courbe de santé ── */}
        <rect x="20" y="20" width="296" height="140" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)"/>
        {/* Axe Y */}
        {[0,25,50,75,100].map((v,i) => (
          <g key={i}>
            <text x="28" y={148-i*26} fontFamily="JetBrains Mono" fontSize="7" fill="rgba(255,255,255,0.2)">{v}%</text>
            <line x1="44" y1={148-i*26} x2="308" y2={148-i*26} stroke="rgba(255,255,255,0.04)" strokeWidth="0.5"/>
          </g>
        ))}
        {/* Zone OK verte */}
        <rect x="44" y="32" width="255" height="106" rx="4" fill="rgba(29,158,117,0.05)"/>
        {/* Courbe uptime */}
        <polyline
          points="44,148 68,42 92,42 116,42 140,42 152,148 156,148 158,42 180,42 204,42 228,42 252,42 276,42 300,42"
          stroke="rgba(29,158,117,0.9)" strokeWidth="2" fill="none"/>
        {/* Zone rouge incident */}
        <rect x="148" y="42" width="12" height="106" fill="rgba(255,80,80,0.08)"/>
        <line x1="152" y1="32" x2="152" y2="155" stroke="rgba(255,80,80,0.5)" strokeWidth="1" strokeDasharray="3 2"/>
        {/* Alerte incident */}
        <rect x="120" y="22" width="80" height="26" rx="5" fill="rgba(255,80,80,0.15)" stroke="rgba(255,80,80,0.4)"/>
        <text x="128" y="33" fontFamily="JetBrains Mono" fontSize="7.5" fontWeight="700" fill="rgba(255,100,100,0.9)">⚠ INCIDENT</text>
        <text x="128" y="43" fontFamily="JetBrains Mono" fontSize="7" fill="rgba(255,255,255,0.4)">Détecté 02:14</text>
        {/* Résolution */}
        <rect x="155" y="22" width="80" height="26" rx="5" fill="rgba(29,158,117,0.15)" stroke="rgba(29,158,117,0.4)"/>
        <text x="163" y="33" fontFamily="JetBrains Mono" fontSize="7.5" fontWeight="700" fill="rgba(79,212,165,0.9)">✓ RÉSOLU</text>
        <text x="163" y="43" fontFamily="JetBrains Mono" fontSize="7" fill="rgba(255,255,255,0.4)">02:31 — 17 min</text>
        {/* Label uptime */}
        <text x="30" y="168" fontFamily="JetBrains Mono" fontSize="8" fontWeight="700" fill="rgba(255,255,255,0.4)" letterSpacing="0.08em">UPTIME 30J</text>
        <text x="180" y="168" fontFamily="JetBrains Mono" fontSize="22" fontWeight="800" fill="rgba(79,212,165,0.9)">99.94%</text>

        {/* ── SLA status ── */}
        <rect x="328" y="20" width="132" height="140" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)"/>
        <text x="340" y="40" fontFamily="JetBrains Mono" fontSize="8.5" fontWeight="700" fill="rgba(255,255,255,0.35)" letterSpacing="0.08em">SLA ACTUEL</text>
        {[
          { label:'Bloquant',  sla:'< 4h',   ok:true  },
          { label:'Majeur',    sla:'< 24h',  ok:true  },
          { label:'Mineur',    sla:'< 72h',  ok:true  },
          { label:'Évolutif',  sla:'continu',ok:true  },
        ].map((s,i) => (
          <g key={i}>
            <rect x="338" y={52+i*22} width="114" height="16" rx="4"
              fill={s.ok ? "rgba(29,158,117,0.12)" : "rgba(255,80,80,0.12)"}/>
            <circle cx="348" cy={60+i*22} r="4"
              fill={s.ok ? "rgba(79,212,165,0.9)" : "rgba(255,100,100,0.9)"}/>
            <text x="358" y={62+i*22} fontFamily="JetBrains Mono" fontSize="8" fill="rgba(255,255,255,0.55)">{s.label}</text>
            <text x="444" y={62+i*22} textAnchor="end" fontFamily="JetBrains Mono" fontSize="8" fontWeight="700"
              fill={s.ok ? "rgba(79,212,165,0.8)" : "rgba(255,100,100,0.8)"}>{s.sla}</text>
          </g>
        ))}
        <rect x="338" y="148" width="114" height="6" rx="3" fill="rgba(255,255,255,0.06)"/>
        <text x="340" y="162" fontFamily="JetBrains Mono" fontSize="7.5" fill="rgba(255,255,255,0.3)">Tickets ouverts : 0</text>

        {/* ── Tickets support ── */}
        <rect x="20" y="178" width="188" height="106" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)"/>
        <text x="32" y="196" fontFamily="JetBrains Mono" fontSize="8.5" fontWeight="700" fill="rgba(255,255,255,0.35)" letterSpacing="0.08em">SUPPORT TICKETS</text>
        {[
          { label:'#247 — Page 404 formulaire', status:'✓ résolu', col:'rgba(79,212,165,0.7)'  },
          { label:'#246 — Lenteur mobile iOS',  status:'✓ résolu', col:'rgba(79,212,165,0.7)'  },
          { label:'#248 — Mise à jour plugin',   status:'En cours', col:'rgba(232,160,32,0.7)'  },
        ].map((t,i) => (
          <g key={i}>
            <rect x="30" y={204+i*28} width="168" height="22" rx="5" fill="rgba(255,255,255,0.03)"/>
            <text x="38" y={218+i*28} fontFamily="JetBrains Mono" fontSize="7.5" fill="rgba(255,255,255,0.45)">{t.label}</text>
            <text x="190" y={218+i*28} textAnchor="end" fontFamily="JetBrains Mono" fontSize="7.5" fontWeight="700" fill={t.col}>{t.status}</text>
          </g>
        ))}

        {/* ── Agent IA ── */}
        <rect x="220" y="178" width="240" height="106" rx="10" fill="rgba(232,160,32,0.06)" stroke="rgba(232,160,32,0.2)"/>
        <text x="232" y="196" fontFamily="JetBrains Mono" fontSize="8.5" fontWeight="700" fill="rgba(232,160,32,0.6)" letterSpacing="0.08em">AGENT IA — DIAGNOSTIC</text>
        <rect x="232" y="202" width="216" height="20" rx="4" fill="rgba(255,255,255,0.04)"/>
        <text x="240" y="216" fontFamily="JetBrains Mono" fontSize="7.5" fill="rgba(255,255,255,0.35)">Utilisateur : cache nginx bloqué</text>
        <rect x="232" y="226" width="216" height="20" rx="4" fill="rgba(232,160,32,0.08)"/>
        <text x="240" y="240" fontFamily="JetBrains Mono" fontSize="7.5" fill="rgba(232,160,32,0.8)">Agent : Purge effectuée — 2.3s</text>
        <rect x="232" y="250" width="216" height="20" rx="4" fill="rgba(29,158,117,0.08)"/>
        <text x="240" y="264" fontFamily="JetBrains Mono" fontSize="7.5" fill="rgba(79,212,165,0.7)">✓ Site opérationnel — incident fermé</text>
      </svg>
    ),
  },

  {
    id: 'performance',
    num: '02',
    label: 'Optimisation continue des performances',
    tagline: 'Votre site gagne en valeur au fil du temps, pas l\'inverse.',
    desc: "Un site laissé sans optimisation régresse. Les performances se dégradent, les nouvelles normes SEO évoluent, les moteurs IA modifient leurs critères de citation. Nous mettons en place un cycle trimestriel d'audits et d'améliorations pour que votre site reste performant, bien référencé et conforme — longtemps après la livraison.",
    pourQui: ['Sites à fort enjeu SEO', 'Plateformes e-commerce avec catalogue évolutif', 'Organisations soumises à des obligations de conformité', 'Marques qui investissent dans le contenu GEO'],
    inclus: [
      'Audit de performance trimestriel : Core Web Vitals, mobile, desktop, goulots d\'étranglement',
      'Audit SEO technique : indexation, maillage, 404, canonicalisation, balisage, GEO',
      'Audit de sécurité & pentesting : scans automatisés + tests d\'intrusion manuels planifiés',
      'Audit d\'accessibilité WCAG 2.2/3.0 et conformité RGPD avec plan de mise à niveau',
      'Feuille de route trimestrielle priorisée : gains chiffrés, impact SEO, empreinte carbone',
      'Suivi GEO : taux de citation dans les IA génératives, ajustements balisage et contenu',
    ],
    duration: 'Contrat trimestriel',
    badge: null,
    svg: (
      <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <rect width="480" height="300" fill="#0A1008"/>

        {/* ── Radar des 4 audits ── */}
        <g transform="translate(140,152)">
          {/* Anneaux radar */}
          {[80,60,40,20].map((r,i) => (
            <polygon key={i}
              points={[0,1,2,3,4,5].map(k => {
                const a = k*60 - 90;
                const rad = a*Math.PI/180;
                return `${r*Math.cos(rad)},${r*Math.sin(rad)}`;
              }).join(' ')}
              fill="none"
              stroke={i===0?"rgba(29,158,117,0.2)":"rgba(255,255,255,0.05)"}
              strokeWidth="1"/>
          ))}
          {/* Axes */}
          {[0,1,2,3,4,5].map(k => {
            const a = k*60-90; const rad = a*Math.PI/180;
            return <line key={k} x1="0" y1="0" x2={80*Math.cos(rad)} y2={80*Math.sin(rad)} stroke="rgba(255,255,255,0.07)" strokeWidth="0.8"/>;
          })}
          {/* Zone de score */}
          {(() => {
            const scores = [92,78,85,70,88,95]; // Perf, SEO, Sécu, A11y, GEO, CWV
            const points = scores.map((s,k) => {
              const a=(k*60-90)*Math.PI/180; const r=s*0.8;
              return `${r*Math.cos(a)},${r*Math.sin(a)}`;
            }).join(' ');
            return (
              <g>
                <polygon points={points} fill="rgba(29,158,117,0.15)" stroke="rgba(79,212,165,0.7)" strokeWidth="1.5"/>
                {scores.map((s,k) => {
                  const a=(k*60-90)*Math.PI/180; const r=s*0.8;
                  return <circle key={k} cx={r*Math.cos(a)} cy={r*Math.sin(a)} r="4" fill="rgba(79,212,165,0.9)"/>;
                })}
              </g>
            );
          })()}
          {/* Labels radar */}
          {[
            {a:-90, l:'Perf.',   v:'92'},
            {a:-30, l:'SEO',     v:'78'},
            {a:30,  l:'Sécu.',   v:'85'},
            {a:90,  l:'A11y',    v:'70'},
            {a:150, l:'GEO',     v:'88'},
            {a:210, l:'CWV',     v:'95'},
          ].map((lb,i) => {
            const rad=lb.a*Math.PI/180; const r=96;
            return (
              <g key={i}>
                <text x={r*Math.cos(rad)} y={r*Math.sin(rad)+4}
                  textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fontWeight="700"
                  fill="rgba(255,255,255,0.55)">{lb.l}</text>
                <text x={r*Math.cos(rad)} y={r*Math.sin(rad)+14}
                  textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fontWeight="800"
                  fill="rgba(79,212,165,0.8)">{lb.v}</text>
              </g>
            );
          })}
        </g>

        {/* ── Core Web Vitals ── */}
        <rect x="286" y="20" width="174" height="120" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)"/>
        <text x="298" y="38" fontFamily="JetBrains Mono" fontSize="8.5" fontWeight="700" fill="rgba(255,255,255,0.35)" letterSpacing="0.08em">CORE WEB VITALS</text>
        {[
          { m:'LCP',  v:'1.2s',  status:'Bon',    col:'rgba(79,212,165,0.9)', pct:88 },
          { m:'INP',  v:'42ms',  status:'Bon',    col:'rgba(79,212,165,0.9)', pct:92 },
          { m:'CLS',  v:'0.04',  status:'Bon',    col:'rgba(79,212,165,0.9)', pct:95 },
          { m:'TTFB', v:'210ms', status:'Moyen',  col:'rgba(232,160,32,0.9)', pct:65 },
        ].map((m,i) => (
          <g key={i}>
            <text x="298" y={56+i*18} fontFamily="JetBrains Mono" fontSize="9" fontWeight="700" fill="rgba(255,255,255,0.6)">{m.m}</text>
            <text x="340" y={56+i*18} fontFamily="JetBrains Mono" fontSize="9" fill="rgba(255,255,255,0.4)">{m.v}</text>
            <rect x="382" y={47+i*18} width="68" height="8" rx="4" fill="rgba(255,255,255,0.06)"/>
            <rect x="382" y={47+i*18} width={68*m.pct/100} height="8" rx="4" fill={m.col} opacity="0.8"/>
          </g>
        ))}

        {/* ── Feuille de route trimestrielle ── */}
        <rect x="286" y="152" width="174" height="130" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(232,160,32,0.2)"/>
        <text x="298" y="170" fontFamily="JetBrains Mono" fontSize="8.5" fontWeight="700" fill="rgba(232,160,32,0.6)" letterSpacing="0.08em">ROADMAP Q3</text>
        {[
          { p:'P1', label:'Optimiser images WebP',    gain:'+18pts CWV',  col:'rgba(255,80,80,0.8)'    },
          { p:'P2', label:'Corriger 12 erreurs 404',  gain:'+SEO',        col:'rgba(232,160,32,0.8)'   },
          { p:'P2', label:'Schema.org GEO markup',    gain:'↑ citations', col:'rgba(232,160,32,0.7)'   },
          { p:'P3', label:'Contraste WCAG 2.2',       gain:'conformité',  col:'rgba(79,212,165,0.7)'   },
          { p:'P3', label:'Script analytics < 2kb',   gain:'−0.4s LCP',  col:'rgba(79,212,165,0.6)'   },
        ].map((r,i) => (
          <g key={i}>
            <rect x="296" y={178+i*19} width="154" height="15" rx="4" fill="rgba(255,255,255,0.03)"/>
            <rect x="296" y={178+i*19} width="18" height="15" rx="4"
              fill={r.p==='P1'?"rgba(255,80,80,0.25)":r.p==='P2'?"rgba(232,160,32,0.2)":"rgba(79,212,165,0.15)"}/>
            <text x="305" y={188+i*19} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7.5" fontWeight="700" fill={r.col}>{r.p}</text>
            <text x="320" y={188+i*19} fontFamily="JetBrains Mono" fontSize="7.5" fill="rgba(255,255,255,0.5)">{r.label}</text>
            <text x="444" y={188+i*19} textAnchor="end" fontFamily="JetBrains Mono" fontSize="7" fill={r.col}>{r.gain}</text>
          </g>
        ))}

        {/* ── GEO score ── */}
        <rect x="20" y="240" width="256" height="48" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(29,158,117,0.2)"/>
        <text x="32" y="258" fontFamily="JetBrains Mono" fontSize="8.5" fontWeight="700" fill="rgba(255,255,255,0.35)" letterSpacing="0.08em">PRÉSENCE IA GÉNÉRATIVE</text>
        {[
          {x:40,  label:'ChatGPT',   v:'Cité 34×/mois', col:'rgba(79,212,165,0.8)'},
          {x:180, label:'Perplexity',v:'Cité 18×/mois', col:'rgba(232,160,32,0.7)'},
        ].map((g,i) => (
          <g key={i}>
            <text x={g.x} y={274} fontFamily="JetBrains Mono" fontSize="7.5" fill="rgba(255,255,255,0.35)">{g.label}</text>
            <text x={g.x} y={282} fontFamily="JetBrains Mono" fontSize="7.5" fontWeight="700" fill={g.col}>{g.v}</text>
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
      <span style={{ fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '0.06em' }}>
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
export default function MaintenancePage() {
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
            <span style={{ color: 'var(--or-dark)', fontWeight: 600 }}>Maintenance web & Évolution</span>
          </nav>

          <div style={{ maxWidth: '780px' }}>
            <div className="section-badge rev">// WS·05 · Support · Maintenance web & Évolution</div>
            <h1 className="section-h2 rev d1" style={{ fontSize: 'clamp(36px,5.5vw,64px)', marginBottom: '20px' }}>
              Votre site reste <em>performant</em><br/>longtemps après la livraison
            </h1>
            <p className="section-sub rev d2" style={{ fontSize: '18px', fontWeight: 400, marginBottom: '32px', maxWidth: '600px' }}>
              Livrer un site, c'est une chose. Le maintenir en santé, le faire progresser et anticiper les problèmes avant qu'ils n'impactent vos utilisateurs — c'en est une autre. Nous nous en chargeons.
            </p>

            {/* 3 garanties */}
            <div className="rev d3" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { icon: '◎', label: 'SLA garanti contractuellement' },
                { icon: '⬡', label: 'Supervision 24h/7j' },
                { icon: '◈', label: 'Rapport mensuel inclus' },
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
            {MAINTENANCE_TYPES.map((type, idx) => (
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
                        <span style={{ fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 600, color: 'var(--ink-3)' }}>
                          Engagement :
                        </span>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: '14px', fontWeight: 700, color: 'var(--ink)' }}>
                          {type.duration}
                        </span>
                      </div>
                      <div style={{ width: '1px', height: '20px', background: 'var(--border)', flexShrink: 0 }} />
                      <Link href="/tarifs" style={{
                        fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 600,
                        color: 'var(--ink-3)', textDecoration: 'underline',
                        textDecorationColor: 'rgba(44,44,42,0.2)',
                      }}>
                        Voir les tarifs →
                      </Link>
                      <Link
                        href={`/contact?service=maintenance&type=${type.id}`}
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
            maxWidth: '540px', margin: '0 auto',
          }}>
            Vous voulez combiner maintenance et développement de nouvelles fonctionnalités ?{' '}
            <Link href="/contact" style={{
              color: 'var(--or-dark)', fontWeight: 700,
              textDecoration: 'underline',
              textDecorationColor: 'rgba(166,107,0,0.3)',
            }}>
              Parlons de votre situation
            </Link>
            {' '}— on construit un contrat sur mesure.
          </p>
        </div>
      </div>

      <CTABand />
    </>
  );
}