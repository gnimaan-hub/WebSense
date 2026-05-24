import BlogGrid from '@/components/sections/BlogGrid';
import CTABand from '@/components/sections/CTABand';

export const metadata = {
  title: 'Blog & Insights | Cabinet WebSense',
  description: 'Articles sur le développement web, l’UX, le SEO et la stratégie digitale à Djibouti.',
};

export default function BlogPage() {
  return (
    <>
      <section className="pt-32 pb-12 container-custom">
        <div className="max-w-2xl">
          <div className="section-badge">// insights · journal</div>
          <h1 className="section-h2">Nos articles sur le web et le <em>digital</em></h1>
          <p className="text-base text-ink2">Tendances, bonnes pratiques, retours d’expérience – tout ce qu’il faut savoir pour réussir en ligne.</p>
        </div>
      </section>
      <BlogGrid full />
      <CTABand />
    </>
  );
}