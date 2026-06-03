'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// ─── Types (mirror of PricingCalculator sim param) ───────────────────────────

type SimItem = {
  s: string;   // service label
  t: string;   // tier name
  p: number;   // price
  u: string;   // unit
  r: boolean;  // recurring
};

function fmt(n: number) { return n.toLocaleString('fr-FR'); }

function buildSimSummary(items: SimItem[]): string {
  const lines = items.map((item, i) =>
    `${i + 1}. ${item.s} — Formule ${item.t} (${fmt(item.p)} ${item.u})`
  );
  const oneTimeTotal = items.filter(i => !i.r).reduce((a, i) => a + i.p, 0);
  const recurTotal   = items.filter(i =>  i.r).reduce((a, i) => a + i.p, 0);
  const totals: string[] = [];
  if (oneTimeTotal > 0) totals.push(`Total ponctuel : ${fmt(oneTimeTotal)} FDJ`);
  if (recurTotal   > 0) totals.push(`Total récurrent/session : +${fmt(recurTotal)} FDJ/pér.`);
  return `Simulation WebSense :\n${lines.join('\n')}${totals.length > 0 ? '\n\n' + totals.join('\n') : ''}`;
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [formData, setFormData]   = useState({ name: '', email: '', phone: '', type: '', org: '', message: '' });
  const [status, setStatus]       = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [simItems, setSimItems]   = useState<SimItem[]>([]);

  // Read simulation from URL on mount
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const raw = params.get('sim');
      if (raw) {
        const items: SimItem[] = JSON.parse(decodeURIComponent(raw));
        setSimItems(items);
      }
    } catch { /* ignore bad params */ }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const finalMessage = simItems.length > 0
      ? `${formData.message}\n\n---\n${buildSimSummary(simItems)}`
      : formData.message;
    setTimeout(() => {
      console.log('Formulaire soumis :', { ...formData, message: finalMessage });
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', type: '', org: '', message: '' });
      setSimItems([]);
      setTimeout(() => setStatus('idle'), 4000);
    }, 1000);
  };

  const oneTimeTotal = simItems.filter(i => !i.r).reduce((a, i) => a + i.p, 0);
  const recurTotal   = simItems.filter(i =>  i.r).reduce((a, i) => a + i.p, 0);

  return (
    <>
      <section style={{ paddingTop: '96px', paddingBottom: '80px' }}>
        <div className="container-custom">

          {/* Header */}
          <div className="max-w-2xl mx-auto text-center" style={{ marginBottom: '48px' }}>
            <div className="section-badge" style={{ display: 'inline-flex', justifyContent: 'center', marginBottom: '16px' }}>
              // contactez-nous
            </div>
            <h1 className="section-h2">Parlons de votre <em>projet web</em></h1>
            <p style={{ fontSize: '17px', color: 'var(--ink-2)', lineHeight: 1.7, maxWidth: '520px', margin: '0 auto' }}>
              Que vous ayez une idée précise ou besoin d&apos;un conseil, nous sommes à votre écoute.{' '}
              <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>Réponse sous 24h garantie.</strong>
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) 320px',
            gap: '32px',
            maxWidth: '920px',
            margin: '0 auto',
            alignItems: 'start',
          }}>

            {/* ── Formulaire ── */}
            <div style={{
              background: 'var(--bg-white)',
              border: '1px solid var(--border)',
              borderRadius: '20px',
              padding: '32px',
              boxShadow: 'var(--shadow-sm)',
            }}>
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--ink)', marginBottom: '24px' }}>
                Formulaire de contact
              </h2>

              {/* ── Simulation recap (pièce jointe) ── */}
              {simItems.length > 0 && (
                <div style={{
                  marginBottom: '24px',
                  border: '1px solid var(--or)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                }}>
                  {/* Header */}
                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '12px 16px',
                    background: 'rgba(232,160,32,0.08)',
                    borderBottom: '1px solid var(--or)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '16px' }}>📎</span>
                      <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: 700, color: 'var(--or)', letterSpacing: '0.06em' }}>
                        SIMULATION WEBSENSE
                      </span>
                    </div>
                    <button
                      onClick={() => setSimItems([])}
                      style={{
                        background: 'none', border: 'none', cursor: 'pointer',
                        fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--ink-4)',
                        textDecoration: 'underline',
                      }}
                    >
                      Retirer
                    </button>
                  </div>

                  {/* Services list */}
                  <div style={{ padding: '12px 16px 0' }}>
                    {simItems.map((item, i) => (
                      <div key={i} style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        gap: '12px', padding: '8px 0',
                        borderBottom: i < simItems.length - 1 ? '1px solid var(--border)' : 'none',
                      }}>
                        <div>
                          <div style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--ink)' }}>
                            {item.s}
                          </div>
                          <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--ink-3)', marginTop: '1px' }}>
                            Formule {item.t} · {item.r ? 'récurrent' : 'ponctuel'}
                          </div>
                        </div>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', fontWeight: 700, color: 'var(--ink-2)', flexShrink: 0 }}>
                          {fmt(item.p)} {item.u.replace('FDJ', '').trim() || 'FDJ'}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Totals */}
                  <div style={{
                    display: 'flex', gap: '12px', flexWrap: 'wrap',
                    padding: '12px 16px',
                    background: 'rgba(232,160,32,0.05)',
                    borderTop: '1px solid var(--border)',
                  }}>
                    {oneTimeTotal > 0 && (
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--ink-4)', textTransform: 'uppercase' as const }}>Ponctuel :</span>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: '15px', fontWeight: 800, color: 'var(--or)' }}>{fmt(oneTimeTotal)} FDJ</span>
                      </div>
                    )}
                    {recurTotal > 0 && (
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--ink-4)', textTransform: 'uppercase' as const }}>Récurrent :</span>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: '14px', fontWeight: 700, color: 'var(--green-lt)' }}>+{fmt(recurTotal)} FDJ/pér.</span>
                      </div>
                    )}
                  </div>
                  <div style={{ padding: '6px 16px 10px', fontFamily: 'var(--mono)', fontSize: '9.5px', color: 'var(--ink-4)', fontStyle: 'italic' }}>
                    Prix indicatifs · Devis définitif après cadrage gratuit
                  </div>
                </div>
              )}

              {/* Form fields */}
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: 'var(--ink-2)', marginBottom: '6px' }}>
                      Nom &amp; prénom <span style={{ color: 'var(--or)' }}>*</span>
                    </label>
                    <input
                      type="text" required
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%', padding: '10px 14px',
                        border: '1px solid var(--border)', borderRadius: '9px',
                        background: 'var(--bg)', color: 'var(--ink)',
                        fontFamily: 'var(--font)', fontSize: '14px', outline: 'none',
                        boxSizing: 'border-box' as const,
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: 'var(--ink-2)', marginBottom: '6px' }}>
                      Téléphone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="+253 …"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%', padding: '10px 14px',
                        border: '1px solid var(--border)', borderRadius: '9px',
                        background: 'var(--bg)', color: 'var(--ink)',
                        fontFamily: 'var(--font)', fontSize: '14px', outline: 'none',
                        boxSizing: 'border-box' as const,
                      }}
                    />
                  </div>
                </div>

                {/* Profil contact */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: 'var(--ink-2)', marginBottom: '6px' }}>
                      Vous êtes… <span style={{ color: 'var(--or)' }}>*</span>
                    </label>
                    <select
                      required
                      value={formData.type}
                      onChange={e => setFormData({ ...formData, type: e.target.value })}
                      style={{
                        width: '100%', padding: '10px 14px',
                        border: '1px solid var(--border)', borderRadius: '9px',
                        background: 'var(--bg)', color: formData.type ? 'var(--ink)' : 'var(--ink)',
                        fontFamily: 'var(--font)', fontSize: '14px', outline: 'none',
                        boxSizing: 'border-box' as const, cursor: 'pointer',
                      }}
                    >
                      <option value="" disabled>Sélectionner…</option>
                      <option value="Particulier">Particulier</option>
                      <option value="Société / Entreprise">Société / Entreprise</option>
                      <option value="Startup">Startup</option>
                      <option value="Institution publique">Institution publique</option>
                      <option value="Administration">Administration</option>
                      <option value="ONG / Association">ONG / Association</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: 'var(--ink-2)', marginBottom: '6px' }}>
                      {formData.type === 'Particulier' ? 'Ville / Pays' : 'Nom de l\'organisme'}
                      {' '}<span style={{ color: 'var(--or)' }}>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={formData.type === 'Particulier' ? 'Ex : Djibouti' : 'Ex : ONU, Ministère…'}
                      value={formData.org}
                      onChange={e => setFormData({ ...formData, org: e.target.value })}
                      style={{
                        width: '100%', padding: '10px 14px',
                        border: '1px solid var(--border)', borderRadius: '9px',
                        background: 'var(--bg)', color: 'var(--ink)',
                        fontFamily: 'var(--font)', fontSize: '14px', outline: 'none',
                        boxSizing: 'border-box' as const,
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: 'var(--ink-2)', marginBottom: '6px' }}>
                    Email <span style={{ color: 'var(--or)' }}>*</span>
                  </label>
                  <input
                    type="email" required
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%', padding: '10px 14px',
                      border: '1px solid var(--border)', borderRadius: '9px',
                      background: 'var(--bg)', color: 'var(--ink)',
                      fontFamily: 'var(--font)', fontSize: '14px', outline: 'none',
                      boxSizing: 'border-box' as const,
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: 'var(--ink-2)', marginBottom: '6px' }}>
                    Message <span style={{ color: 'var(--or)' }}>*</span>
                    {simItems.length > 0 && (
                      <span style={{ fontFamily: 'var(--mono)', fontSize: '10.5px', color: 'var(--ink-3)', fontWeight: 400, marginLeft: '8px' }}>
                        (votre simulation sera jointe automatiquement)
                      </span>
                    )}
                  </label>
                  <textarea
                    rows={6}
                    required
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%', padding: '10px 14px',
                      border: '1px solid var(--border)', borderRadius: '9px',
                      background: 'var(--bg)', color: 'var(--ink)',
                      fontFamily: 'var(--mono)', fontSize: '13px',
                      outline: 'none', resize: 'vertical', lineHeight: 1.7,
                      boxSizing: 'border-box' as const,
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary btn-hero-cta"
                  style={{ justifyContent: 'center', opacity: status === 'loading' ? 0.7 : 1 }}
                >
                  <span>{status === 'loading' ? 'Envoi en cours…' : simItems.length > 0 ? 'Envoyer ma simulation + message' : 'Envoyer le message'}</span>
                  <span>→</span>
                </button>

                {status === 'success' && (
                  <div style={{
                    padding: '14px 16px', borderRadius: '10px',
                    background: 'rgba(29,158,117,0.1)', border: '1px solid var(--green)',
                    display: 'flex', alignItems: 'center', gap: '10px',
                  }}>
                    <span style={{ fontSize: '18px' }}>✅</span>
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--ink)', fontSize: '14px' }}>Message envoyé !</div>
                      <div style={{ color: 'var(--ink-2)', fontSize: '13px', marginTop: '2px' }}>Nous vous répondrons sous 24h ouvrées.</div>
                    </div>
                  </div>
                )}
                {status === 'error' && (
                  <p style={{ color: '#f87171', fontSize: '14px', textAlign: 'center' }}>
                    Une erreur est survenue. Veuillez réessayer ou nous écrire directement.
                  </p>
                )}
              </form>
            </div>

            {/* ── Colonne droite ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

              {/* Bouton vers simulateur */}
              {simItems.length === 0 && (
                <div style={{
                  background: 'rgba(232,160,32,0.06)',
                  border: '1px solid rgba(232,160,32,0.28)',
                  borderRadius: '16px', padding: '22px',
                }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: 700, color: 'var(--or)', letterSpacing: '0.06em', marginBottom: '10px' }}>
                    // ESTIMER MON PROJET
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--ink-2)', marginBottom: '16px', lineHeight: 1.65 }}>
                    Pas encore de simulation ? Estimez votre projet en quelques clics — votre sélection sera jointe au formulaire.
                  </p>
                  <Link href="/tarifs" className="btn-primary btn-hero-cta" style={{ display: 'flex', justifyContent: 'center' }}>
                    <span>Simuler mon projet</span>
                    <span>→</span>
                  </Link>
                </div>
              )}

              {/* Coordonnées */}
              <div style={{
                background: 'var(--bg-white)',
                border: '1px solid var(--border)',
                borderRadius: '16px', padding: '24px',
                boxShadow: 'var(--shadow-sm)',
              }}>
                <h2 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--ink)', marginBottom: '16px' }}>
                  Coordonnées
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
                  {[
                    { icon: '📍', content: 'Djibouti (Centre-ville)', href: null },
                    { icon: '📧', content: 'websense.contacts@gmail.com', href: 'mailto:websense.contacts@gmail.com' },
                    { icon: '📞', content: '+253 77 28 00 63', href: 'tel:+25377280063' },
                    { icon: '💬', content: 'WhatsApp', href: 'https://wa.me/25377280063' },
                  ].map(({ icon, content, href }) => (
                    <p key={content} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: 'var(--ink-2)', margin: 0 }}>
                      <span style={{ fontSize: '18px' }}>{icon}</span>
                      {href ? (
                        <a href={href} style={{ color: 'inherit', transition: 'color .2s' }}
                          onMouseEnter={e => (e.currentTarget.style.color = 'var(--or)')}
                          onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-2)')}>
                          {content}
                        </a>
                      ) : content}
                    </p>
                  ))}
                </div>
              </div>

              {/* Temps de réponse */}
              <div style={{
                background: 'rgba(232,160,32,0.07)',
                border: '1px solid rgba(232,160,32,0.25)',
                borderRadius: '16px', padding: '24px',
              }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '10.5px', color: 'var(--ink-3)', textTransform: 'uppercase' as const, letterSpacing: '0.06em', marginBottom: '8px' }}>
                  // Réponse moyenne
                </div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '34px', fontWeight: 700, color: 'var(--ink)' }}>
                  &lt; 24h
                </div>
                <p style={{ fontSize: '13px', color: 'var(--ink-3)', marginTop: '8px', lineHeight: 1.6 }}>
                  Toute demande reçoit une première réponse sous 24h ouvrées.
                </p>
                <Link href="/#faq" style={{ display: 'inline-block', marginTop: '14px', fontSize: '13.5px', fontWeight: 600, color: 'var(--or-dark)', transition: 'opacity .2s' }}>
                  Consulter la FAQ →
                </Link>
              </div>
            </div>

          </div>

          {/* Mobile: full-width layout below 900px */}
          <style>{`
            @media (max-width: 900px) {
              .contact-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>
    </>
  );
}
