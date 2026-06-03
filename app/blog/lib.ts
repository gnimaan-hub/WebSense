// ─── Blog data — source of truth ────────────────────────────────────────────

export type Article = {
  slug: string;
  cat: string;
  catColor: string;
  date: string;
  readMin: number;
  title: string;
  excerpt: string;
  featured?: boolean;
};

export const ARTICLES: Article[] = [
  {
    slug: 'pourquoi-refonte-site-web-2026',
    cat: 'Guides & Conseils',
    catColor: 'var(--or)',
    date: '12 mai 2026',
    readMin: 8,
    title: "Pourquoi votre site web a besoin d'une refonte en 2026 ?",
    excerpt: "7 signaux concrets qui montrent que votre présence en ligne freine votre croissance — et comment y remédier avant que vos concurrents ne le fassent.",
    featured: true,
  },
  {
    slug: 'combien-coute-site-web-professionnel-djibouti',
    cat: 'Développement',
    catColor: 'var(--green)',
    date: '08 avril 2026',
    readMin: 6,
    title: "Combien coûte un site web professionnel à Djibouti ?",
    excerpt: "Fourchettes de prix réalistes, facteurs qui influencent le budget et comment comparer les devis sans se faire piéger.",
  },
  {
    slug: 'ux-design-experience-utilisateur-clients',
    cat: 'Stratégie · UX',
    catColor: 'rgba(79,212,165,1)',
    date: '21 mars 2026',
    readMin: 5,
    title: "UX Design : pourquoi l'expérience utilisateur génère des clients",
    excerpt: "Une interface bien conçue convertit mieux. Démonstration chiffrée et bonnes pratiques applicables à votre site dès aujourd'hui.",
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find(a => a.slug === slug);
}
