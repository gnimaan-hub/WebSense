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
          <p className="text-base text-ink2">Que vous ayez une idée précise ou besoin d’un conseil, nous sommes à votre écoute. Réponse sous 24h garantie.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Formulaire de contact</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-ink2 mb-1">Nom & prénom</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-or/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink2 mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-or/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink2 mb-1">Message</label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-or/50"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full btn-primary justify-center"
              >
                {status === 'loading' ? 'Envoi...' : 'Envoyer le message →'}
              </button>
              {status === 'success' && <p className="text-green text-sm text-center">✅ Message envoyé ! Nous vous répondrons sous 24h.</p>}
              {status === 'error' && <p className="text-red-500 text-sm text-center">❌ Une erreur est survenue. Veuillez réessayer.</p>}
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Coordonnées</h2>
              <div className="space-y-3 text-ink2">
                <p className="flex items-center gap-3"><span className="text-or text-lg">📍</span> Djibouti (Centre‑ville)</p>
                <p className="flex items-center gap-3"><span className="text-or text-lg">📧</span> <a href="mailto:websense.contacts@gmail.com" className="hover:text-or">websense.contacts@gmail.com</a></p>
                <p className="flex items-center gap-3"><span className="text-or text-lg">📞</span> <a href="tel:+25377000000" className="hover:text-or">+253 77 28 00 63</a></p>
                <p className="flex items-center gap-3"><span className="text-or text-lg">💬</span> <a href="https://wa.me/25377000000" className="hover:text-or">WhatsApp</a></p>
              </div>
            </div>
            <div className="bg-or-pale border border-or/20 rounded-2xl p-6">
              <div className="font-mono text-sm text-ink3 mb-2">// Réponse moyenne</div>
              <div className="font-mono text-3xl font-bold text-ink">&lt; 24h</div>
              <p className="text-sm text-ink3 mt-2">Toute demande reçoit une première réponse sous 24h ouvrées.</p>
              <Link href="/#faq" className="inline-block mt-4 text-sm font-semibold text-or hover:underline">Consulter la FAQ →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}