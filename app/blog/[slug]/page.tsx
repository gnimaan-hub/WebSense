import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ARTICLES, getArticle } from '../lib';
import ArticleRefonte from '@/components/blog/ArticleRefonte';
import ArticlePrix from '@/components/blog/ArticlePrix';
import ArticleUX from '@/components/blog/ArticleUX';

export async function generateStaticParams() {
  return ARTICLES.map(a => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} | Blog WebSense`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  // Route to specific article component
  if (slug === 'pourquoi-refonte-site-web-2026') {
    return <ArticleRefonte article={article} />;
  }

  if (slug === 'combien-coute-site-web-professionnel-djibouti') {
    return <ArticlePrix article={article} />;
  }

  if (slug === 'ux-design-experience-utilisateur-clients') {
    return <ArticleUX article={article} />;
  }

  // Generic placeholder for future articles
  return (
    <div style={{ paddingTop: '96px', paddingBottom: '80px' }}>
      <div className="container-custom" style={{ maxWidth: '720px' }}>
        <Link href="/blog" style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--ink-4)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '32px' }}>
          ← Blog & Insights
        </Link>
        <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: article.catColor, fontWeight: 700, letterSpacing: '0.08em', marginBottom: '12px' }}>
          {article.cat}
        </div>
        <h1 style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 800, color: 'var(--ink)', lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '16px' }}>
          {article.title}
        </h1>
        <p style={{ fontSize: '18px', color: 'var(--ink-2)', lineHeight: 1.7 }}>
          Cet article est en cours de rédaction. Revenez bientôt.
        </p>
      </div>
    </div>
  );
}
