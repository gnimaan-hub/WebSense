'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      console.log('Formulaire soumis :', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <>
      <section className="pt-32 pb-16 container-custom">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="section-badge justify-center">// contactez-nous</div>
          <h1 className="section-h2">Parlons de votre <em>projet web</em></h1>
          <p style={{ fontSize: '16px', color: 'var(--ink-2)' }}>
            Que vous ayez une idée précise ou besoin d&apos;un conseil, nous sommes à votre écoute. Réponse sous 24h garantie.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Formulaire */}
          <div style={{
            background: 'var(--bg-white)',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: 'var(--shadow-sm)',
          }}>
            <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--ink)', marginBottom: '16px' }}>
              Formulaire de contact
            </h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: 'var(--ink-2)', marginBottom: '4px' }}>
                  Nom &amp; prénom
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%', padding: '8px 16px',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    background: 'var(--bg)',
                    color: 'var(--ink)',
                    fontFamily: 'var(--font)', fontSize: '14px',
                    outline: 'none',
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: 'var(--ink-2)', marginBottom: '4px' }}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%', padding: '8px 16px',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    background: 'var(--bg)',
                    color: 'var(--ink)',
                    fontFamily: 'var(--font)', fontSize: '14px',
                    outline: 'none',
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: 'var(--ink-2)', marginBottom: '4px' }}>
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%', padding: '8px 16px',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    background: 'var(--bg)',
                    color: 'var(--ink)',
                    fontFamily: 'var(--font)', fontSize: '14px',
                    outline: 'none', resize: 'vertical',
                  }}
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary"
                style={{ justifyContent: 'center' }}
              >
                {status === 'loading' ? 'Envoi...' : 'Envoyer le message →'}
              </button>
              {status === 'success' && (
                <p style={{ color: 'var(--green-lt)', fontSize: '14px', textAlign: 'center' }}>
                  ✅ Message envoyé ! Nous vous répondrons sous 24h.
                </p>
              )}
              {status === 'error' && (
                <p style={{ color: '#f87171', fontSize: '14px', textAlign: 'center' }}>
                  ❌ Une erreur est survenue. Veuillez réessayer.
                </p>
              )}
            </form>
          </div>

          {/* Colonne droite */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Coordonnées */}
            <div style={{
              background: 'var(--bg-white)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: 'var(--shadow-sm)',
            }}>
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--ink)', marginBottom: '16px' }}>
                Coordonnées
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--ink-2)' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: 'var(--or)', fontSize: '18px' }}>📍</span>
                  Djibouti (Centre-ville)
                </p>
                <p style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: 'var(--or)', fontSize: '18px' }}>📧</span>
                  <a href="mailto:websense.contacts@gmail.com" style={{ color: 'inherit', transition: 'color .2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--or)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-2)')}>
                    websense.contacts@gmail.com
                  </a>
                </p>
                <p style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: 'var(--or)', fontSize: '18px' }}>📞</span>
                  <a href="tel:+25377280063" style={{ color: 'inherit', transition: 'color .2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--or)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-2)')}>
                    +253 77 28 00 63
                  </a>
                </p>
                <p style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: 'var(--or)', fontSize: '18px' }}>💬</span>
                  <a href="https://wa.me/25377280063" style={{ color: 'inherit', transition: 'color .2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--or)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-2)')}>
                    WhatsApp
                  </a>
                </p>
              </div>
            </div>

            {/* Temps de réponse */}
            <div style={{
              background: 'var(--or-pale)',
              border: '1px solid var(--or-pale)',
              borderRadius: '16px',
              padding: '24px',
            }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                // Réponse moyenne
              </div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '32px', fontWeight: 700, color: 'var(--ink)' }}>
                &lt; 24h
              </div>
              <p style={{ fontSize: '13px', color: 'var(--ink-3)', marginTop: '8px' }}>
                Toute demande reçoit une première réponse sous 24h ouvrées.
              </p>
              <Link href="/#faq" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', fontWeight: 600, color: 'var(--or-dark)', transition: 'opacity .2s' }}>
                Consulter la FAQ →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
