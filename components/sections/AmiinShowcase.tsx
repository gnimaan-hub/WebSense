'use client';

// Projet phare : Amiin — assistant personnel expert de Djibouti.
// Simulation animée de l'app mobile (connexion → chat → 3 questions).
// Les réponses reprennent la fiche officielle « Passeport » de egouv.dj,
// telle qu'Amiin la restitue depuis sa base documentaire.

import { useCallback, useEffect, useRef, useState } from 'react';
import { Inter } from 'next/font/google';
import styles from './AmiinShowcase.module.css';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap' });

type Msg = { role: 'user' | 'amiin'; text: string; time: string };

const EMAIL = 'demo@amiin.dj';
const PASSWORD_LEN = 10;

const SCRIPT: { q: string; a: string; qTime: string; aTime: string }[] = [
  {
    q: 'Je veux refaire mon passeport rapidement, que faire ?',
    qTime: '09:41',
    aTime: '09:41',
    a: [
      'Voici comment refaire votre **passeport biométrique** :',
      '',
      '**Pièces à fournir**',
      '• Carte d’identité nationale',
      '• 2 photos d’identité (35 × 45 mm)',
      '• Certificat de travail (salarié, fonctionnaire) ou certificat de scolarité (étudiant)',
      '• Formulaire de demande de passeport',
      '',
      '**Frais** : un timbre de **15 000 DJF**',
      '',
      'Pour aller vite : déposez un **dossier complet** dès le premier passage, c’est ce qui évite les allers-retours.',
      '',
      '_Source officielle : egouv.dj_',
    ].join('\n'),
  },
  {
    q: 'Et ça prend combien de temps ? Je dépose où ?',
    qTime: '09:42',
    aTime: '09:42',
    a: [
      '**Délai** : environ **3 jours** après le dépôt du dossier.',
      '',
      '**Lieu** : Direction de l’Immigration et des Renseignements Généraux, à Djibouti-ville.',
      '',
      '**Horaires de dépôt** : du **dimanche au jeudi, de 8h à 17h**.',
      '',
      'Astuce : en déposant un dimanche, votre passeport peut être prêt dès le mercredi. Je vous crée un rappel pour le retrait ?',
    ].join('\n'),
  },
  {
    q: 'Merci Amiin !',
    qTime: '09:43',
    aTime: '09:43',
    a: 'Avec plaisir ! Bonnes démarches, et n’hésitez pas si vous avez besoin d’autre chose.',
  },
];

type Screen = 'login' | 'chat';

interface SimState {
  screen: Screen;
  email: string;
  pwd: number;
  loggingIn: boolean;
  messages: Msg[];
  draft: string;
  thinking: boolean;
  status: 'En ligne' | 'Recherche…' | 'Rédige…';
}

const INITIAL: SimState = {
  screen: 'login',
  email: '',
  pwd: 0,
  loggingIn: false,
  messages: [],
  draft: '',
  thinking: false,
  status: 'En ligne',
};

// ── Mini-rendu markdown : **gras**, _italique_, puces « • » ─────────────────
function renderInline(line: string, key: number) {
  // Masque un marqueur ouvrant encore non fermé pendant le « streaming »
  const opens = (line.match(/\*\*/g) || []).length;
  if (opens % 2 === 1) line = line.replace(/\*\*(?!.*\*\*)/, '');
  const parts = line.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith('**') && p.endsWith('**') && p.length > 4
      ? <strong key={`${key}-${i}`}>{p.slice(2, -2)}</strong>
      : <span key={`${key}-${i}`}>{p}</span>,
  );
}

function RichText({ text }: { text: string }) {
  const lines = text.split('\n');
  return (
    <>
      {lines.map((l, i) => {
        if (l === '') return <div key={i} className={styles.gap} />;
        if (l.startsWith('_') ) {
          return <div key={i} className={styles.source}>{l.replace(/_/g, '')}</div>;
        }
        if (l.startsWith('• ')) {
          return <div key={i} className={styles.bullet}><span>•</span><span>{renderInline(l.slice(2), i)}</span></div>;
        }
        return <div key={i}>{renderInline(l, i)}</div>;
      })}
    </>
  );
}

export default function AmiinShowcase() {
  const [s, setS] = useState<SimState>(INITIAL);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const runId = useRef(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  const run = useCallback(async () => {
    const id = ++runId.current;
    const alive = () => id === runId.current;
    const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));
    const patch = (p: Partial<SimState> | ((st: SimState) => Partial<SimState>)) => {
      if (!alive()) return;
      setS((st) => ({ ...st, ...(typeof p === 'function' ? p(st) : p) }));
    };

    setRunning(true);
    setDone(false);
    setS(INITIAL);
    await wait(900);

    // ── Connexion ──
    for (let i = 1; i <= EMAIL.length && alive(); i++) { patch({ email: EMAIL.slice(0, i) }); await wait(70); }
    await wait(250);
    for (let i = 1; i <= PASSWORD_LEN && alive(); i++) { patch({ pwd: i }); await wait(60); }
    await wait(400);
    patch({ loggingIn: true });
    await wait(1300);
    patch({ screen: 'chat', loggingIn: false });
    await wait(1400);

    // ── Conversation ──
    for (const step of SCRIPT) {
      if (!alive()) return;
      for (let i = 1; i <= step.q.length && alive(); i++) { patch({ draft: step.q.slice(0, i) }); await wait(38); }
      await wait(350);
      patch((st) => ({ draft: '', messages: [...st.messages, { role: 'user', text: step.q, time: step.qTime }], thinking: true, status: 'Recherche…' }));
      await wait(step.a.length > 150 ? 2000 : 1100);
      patch((st) => ({ thinking: false, status: 'Rédige…', messages: [...st.messages, { role: 'amiin', text: '', time: step.aTime }] }));
      const chunk = 3;
      for (let i = chunk; i < step.a.length + chunk && alive(); i += chunk) {
        const txt = step.a.slice(0, i);
        patch((st) => {
          const m = st.messages.slice();
          m[m.length - 1] = { ...m[m.length - 1], text: txt };
          return { messages: m };
        });
        await wait(16);
      }
      patch({ status: 'En ligne' });
      await wait(2600);
    }
    if (alive()) { setRunning(false); setDone(true); }
  }, []);

  // Démarre quand la section devient visible (une seule fois)
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setS({
        ...INITIAL,
        screen: 'chat',
        messages: SCRIPT.flatMap((st) => [
          { role: 'user' as const, text: st.q, time: st.qTime },
          { role: 'amiin' as const, text: st.a, time: st.aTime },
        ]),
      });
      setDone(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { run(); io.disconnect(); }
    }, { threshold: 0.35 });
    io.observe(el);
    return () => { io.disconnect(); runId.current++; };
  }, [run]);

  // Défilement automatique du chat
  useEffect(() => {
    const c = chatRef.current;
    if (c) c.scrollTop = c.scrollHeight;
  }, [s.messages, s.thinking]);

  const busy = s.status !== 'En ligne';

  return (
    <section className="section" id="amiin" style={{ paddingTop: 24 }}>
      <div className="container-custom">
        <div className={styles.layout}>
          {/* ── Présentation ── */}
          <div className={styles.copy}>
            <div className="project-cat">Projet phare · Intelligence artificielle · Mobile</div>
            <h2 className={styles.title}>
              Amiin — l’assistant personnel <em>expert de Djibouti</em>
            </h2>
            <p className={styles.lead}>
              Amiin répond en quelques secondes à toutes les questions du quotidien à Djibouti :
              démarches administratives, droit et réglementation, santé, commerce, transport,
              adresses utiles… Chaque réponse s’appuie sur des sources officielles et vérifiées.
            </p>
            <ul className={styles.features}>
              <li><b>Démarches & droit</b><span>Passeport, état civil, création d’entreprise, code du travail, fiscalité, douanes.</span></li>
              <li><b>Annuaire vivant</b><span>Administrations, hôpitaux, pharmacies, hôtels : adresses, horaires, contacts.</span></li>
              <li><b>Secrétaire personnel</b><span>Agenda, rappels et notes créés directement depuis la conversation.</span></li>
              <li><b>Accessible à tous</b><span>Français, somali, anglais et arabe, à l’écrit comme à la voix.</span></li>
            </ul>
            <div className="project-metrics">
              <div className="pm"><div className="v">4</div><div className="l">Langues</div></div>
              <div className="pm"><div className="v">24/7</div><div className="l">Disponible</div></div>
              <div className="pm"><div className="v">iOS · Android</div><div className="l">Application mobile</div></div>
            </div>
            <button
              type="button"
              className={`btn-outline ${styles.replay}`}
              onClick={run}
              disabled={running}
            >
              <span>{done ? 'Rejouer la démo' : running ? 'Démo en cours…' : 'Lancer la démo'}</span><span>↻</span>
            </button>
          </div>

          {/* ── Téléphone ── */}
          <div className={styles.stage} ref={rootRef}>
            <div className={styles.glow} aria-hidden="true" />
            <div className={`${styles.phone} ${inter.className}`} role="img" aria-label="Simulation de l’application Amiin : connexion puis questions sur le renouvellement du passeport">
              <div className={styles.notch} />
              <div className={styles.screen}>
                {/* Barre de statut */}
                <div className={`${styles.statusBar} ${s.screen === 'login' ? styles.statusDark : ''}`}>
                  <span>9:41</span>
                  <span className={styles.sysIcons}>
                    <i /><i /><i /><b />
                  </span>
                </div>

                {s.screen === 'login' ? (
                  <div className={styles.login}>
                    <img src="/images/amiin/amiin-A-turquoise.png" alt="" className={styles.loginLogo} />
                    <div className={styles.loginTitle}>Bon retour</div>
                    <div className={styles.loginSub}>Connectez-vous à votre compte Amiin</div>
                    <div className={`${styles.field} ${s.email && !s.pwd ? styles.focus : ''}`}>
                      <label>Adresse e-mail</label>
                      <div>{s.email || <span className={styles.ph}>vous@example.com</span>}{s.email && !s.pwd && <span className={styles.caret} />}</div>
                    </div>
                    <div className={`${styles.field} ${s.pwd ? styles.focus : ''}`}>
                      <label>Mot de passe</label>
                      <div>{s.pwd ? '•'.repeat(s.pwd) : <span className={styles.ph}>••••••••</span>}</div>
                    </div>
                    <div className={styles.forgot}>Mot de passe oublié ?</div>
                    <div className={`${styles.primary} ${s.loggingIn ? styles.pressed : ''}`}>
                      {s.loggingIn ? <span className={styles.spinner} /> : 'Se connecter'}
                    </div>
                    <div className={styles.divider}><span />ou<span /></div>
                    <div className={styles.secondary}>Créer un compte</div>
                  </div>
                ) : (
                  <div className={styles.chat}>
                    <div className={styles.header}>
                      <img src="/images/amiin/amiin-A-turquoise.png" alt="" />
                      <div>
                        <div className={styles.hName}>Amiin</div>
                        <div className={`${styles.hStatus} ${busy ? styles.hBusy : ''}`}>{s.status}{busy && <span className={styles.dots} />}</div>
                      </div>
                    </div>
                    <div className={`${styles.horizon} ${busy ? styles.horizonBusy : ''}`} />

                    <div className={styles.thread} ref={chatRef}>
                      {s.messages.length === 0 && !s.thinking ? (
                        <div className={styles.empty}>
                          <img src="/images/amiin/amiin-A-turquoise.png" alt="" />
                          <div className={styles.emptyTitle}>Bonjour — je suis Amiin</div>
                          <div className={styles.emptySub}>Posez-moi une question sur vos démarches administratives, votre agenda ou les services publics de Djibouti.</div>
                        </div>
                      ) : (
                        <>
                          <div className={styles.date}><span>aujourd’hui</span></div>
                          {s.messages.map((m, i) => (
                            <div key={i} className={m.role === 'user' ? styles.rowUser : styles.rowAmiin}>
                              <div className={styles.rowInner}>
                                {m.role === 'amiin' && <div className={styles.avatar}>A</div>}
                                <div className={m.role === 'user' ? styles.bUser : styles.bAmiin}>
                                  {m.role === 'user' ? m.text : <RichText text={m.text} />}
                                </div>
                              </div>
                              <div className={styles.time}>{m.time}</div>
                            </div>
                          ))}
                          {s.thinking && (
                            <div className={styles.rowAmiin}>
                              <div className={styles.rowInner}>
                                <div className={styles.avatar}>A</div>
                                <div className={`${styles.bAmiin} ${styles.typing}`}><i /><i /><i /></div>
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </div>

                    <div className={styles.inputBar}>
                      <div className={styles.input}>
                        {s.draft ? <span>{s.draft}<span className={styles.caretDark} /></span> : <span className={styles.ph2}>Posez votre question…</span>}
                      </div>
                      <div className={`${styles.send} ${s.draft ? styles.sendOn : ''}`}>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M3.4 20.4 20.85 12.9a1 1 0 0 0 0-1.8L3.4 3.6a1 1 0 0 0-1.39 1.2L4.5 12l-2.49 7.2a1 1 0 0 0 1.39 1.2z"/></svg>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
