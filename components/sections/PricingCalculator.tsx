'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// ─── Types ───────────────────────────────────────────────────────────────────

type Tier = {
  id: string;
  name: string;
  desc: string;
  price: number;
  unit: string;
  recurring: boolean;
  features: string[];
  recommended?: boolean;
};

type Service = {
  id: string;
  label: string;
  desc: string;
  tiers: [Tier, Tier, Tier];
};

type Category = {
  id: string;
  num: string;
  label: string;
  tagline: string;
  color: string;
  bg: string;
  icon: string;
  services: Service[];
};

type CartItem = {
  catId: string;
  catLabel: string;
  catColor: string;
  svcLabel: string;
  tierName: string;
  price: number;
  unit: string;
  recurring: boolean;
};

type Step = 'category' | 'service' | 'tier' | 'next';

// ─── Data ────────────────────────────────────────────────────────────────────

const CATS: Category[] = [
  {
    id: 'dev', num: '01', label: 'Développement Web', icon: '◈',
    tagline: 'Sites vitrine, e-commerce, applications métier',
    color: 'var(--green)', bg: 'rgba(29,158,117,0.09)',
    services: [
      {
        id: 'vitrine', label: 'Site vitrine', desc: 'Présence professionnelle · 5 à 10 pages',
        tiers: [
          { id: 'v1', name: 'Essentiel', desc: 'Lancer votre présence rapidement', price: 350000, unit: 'FDJ', recurring: false, features: ['5 pages sur mesure', 'Design responsive mobile-first', 'Formulaire de contact', 'SEO de base', 'Mise en ligne incluse'] },
          { id: 'v2', name: 'Standard',  desc: 'Convertir et crédibiliser', price: 490000, unit: 'FDJ', recurring: false, recommended: true, features: ['7 pages + blog/actualités', 'Design sur mesure', 'Intégration Google Analytics', 'Optimisation Core Web Vitals', 'Formation utilisation 2h'] },
          { id: 'v3', name: 'Premium',   desc: 'Site vitrine haut de gamme', price: 680000, unit: 'FDJ', recurring: false, features: ['10 pages + animations avancées', 'Design premium avec micro-interactions', '2e langue incluse (EN ou AR)', 'SEO avancé + schema.org', 'Formation 4h + documentation'] },
        ],
      },
      {
        id: 'ecom', label: 'Boutique e-commerce', desc: 'Vendre en ligne · catalogue · paiement sécurisé',
        tiers: [
          { id: 'e1', name: 'Démarrage', desc: 'Vendre en ligne rapidement', price: 890000, unit: 'FDJ', recurring: false, features: ['Jusqu\'à 50 produits', 'Paiement sécurisé (carte, virement)', 'Gestion commandes de base', 'Espace client', 'Design responsive'] },
          { id: 'e2', name: 'Croissance', desc: 'Catalogue et conversions', price: 1400000, unit: 'FDJ', recurring: false, recommended: true, features: ['Catalogue illimité + filtres', 'Codes promo & promotions', 'Tableau de bord analytics', 'Email transactionnel', 'Tableau de bord admin avancé'] },
          { id: 'e3', name: 'Maîtrise',  desc: 'E-commerce avancé', price: 2200000, unit: 'FDJ', recurring: false, features: ['API fournisseurs & ERP', 'Recommandations produits IA', 'Multi-devise et multi-langue', 'Dashboard reporting complet', 'Intégration CRM & marketing'] },
        ],
      },
      {
        id: 'webapp', label: 'Application métier', desc: 'Dashboard · rôles · API · processus internes',
        tiers: [
          { id: 'w1', name: 'Fondation', desc: 'Digitaliser un processus clé', price: 2500000, unit: 'FDJ', recurring: false, features: ['3 modules fonctionnels', '3 niveaux de rôles', 'Jusqu\'à 10 utilisateurs', 'Base de données sécurisée', 'Interface web responsive'] },
          { id: 'w2', name: 'Évolution',  desc: 'Application complète intégrée', price: 4500000, unit: 'FDJ', recurring: false, recommended: true, features: ['Modules avancés sur mesure', 'Utilisateurs illimités + SSO', 'API & intégrations tierces', 'Tableaux de bord & exports', 'Tests, CI/CD, monitoring'] },
          { id: 'w3', name: 'Plateforme', desc: 'Architecture enterprise', price: 7100000, unit: 'FDJ', recurring: false, features: ['Architecture micro-services', 'IA embarquée (agents, LLM)', 'Infrastructure dédiée sécurisée', 'SLA de disponibilité garanti', 'Accompagnement 3 mois inclus'] },
        ],
      },
      {
        id: 'resa', label: 'Site avec réservation', desc: 'Calendrier · prises de RDV · confirmations auto',
        tiers: [
          { id: 'r1', name: 'Essentiel', desc: 'Réservations simples en ligne', price: 680000, unit: 'FDJ', recurring: false, features: ['Calendrier de disponibilités', 'Formulaire de réservation', 'Confirmations par email', 'Page de services/prestations', 'Design responsive'] },
          { id: 'r2', name: 'Standard',  desc: 'Gestion multi-ressources', price: 1100000, unit: 'FDJ', recurring: false, recommended: true, features: ['Multi-ressources & multi-employés', 'Paiement d\'acompte en ligne', 'Rappels automatiques SMS/email', 'Tableau de bord de gestion', 'Synchronisation Google Calendar'] },
          { id: 'r3', name: 'Premium',   desc: 'Écosystème complet hôtel/clinic', price: 1500000, unit: 'FDJ', recurring: false, features: ['CRM clients intégré', 'Règles tarifaires dynamiques', 'Analytics et taux de remplissage', 'Application mobile (PWA)', 'Intégrations OTA et partenaires'] },
        ],
      },
      {
        id: 'multi', label: 'Site multilingue', desc: 'FR / EN / AR · admin unifiée · SEO localisé',
        tiers: [
          { id: 'm1', name: 'Bilingue',   desc: '2 langues au choix', price: 350000, unit: 'FDJ', recurring: false, features: ['2 langues (FR + EN ou FR + AR)', 'Traduction manuelle du contenu', 'Sélecteur de langue discret', 'URLs localisées', 'SEO de base par langue'] },
          { id: 'm2', name: 'Trilingue',  desc: 'FR / EN / AR complet', price: 600000, unit: 'FDJ', recurring: false, recommended: true, features: ['3 langues FR + EN + AR (RTL inclus)', 'Admin contenu unifiée', 'SEO localisé avancé', 'Hreflang et balisage sémantique', 'Formation gestion contenu'] },
          { id: 'm3', name: 'Global',     desc: 'Site multilingue & multimarché', price: 850000, unit: 'FDJ', recurring: false, features: ['4+ langues', 'Traduction assistée IA', 'Devises & adaptations locales', 'Geotargeting automatique', 'Analytics par marché'] },
        ],
      },
      {
        id: 'catal', label: 'Catalogue & portfolio', desc: 'Galerie filtrée · fiches projet · devis',
        tiers: [
          { id: 'c1', name: 'Galerie',    desc: 'Vitrine de projets simple', price: 350000, unit: 'FDJ', recurring: false, features: ['Galerie 20 projets max', 'Filtres par catégorie', 'Page contact', 'Design responsive', 'SEO de base'] },
          { id: 'c2', name: 'Portfolio',  desc: 'Portfolio professionnel', price: 490000, unit: 'FDJ', recurring: false, recommended: true, features: ['Projets illimités', 'Fiches détaillées par projet', 'Formulaire demande de devis', 'Gestion photos admin', 'Analytics visiteurs'] },
          { id: 'c3', name: 'Catalogue',  desc: 'Catalogue produits avancé', price: 680000, unit: 'FDJ', recurring: false, features: ['Fiches produits/services complètes', 'Recherche et filtres avancés', 'PDF exportable par produit', 'Module devis en ligne', 'Intégration CRM'] },
        ],
      },
    ],
  },
  {
    id: 'ux', num: '02', label: 'UX Design', icon: '◎',
    tagline: 'Audit, interfaces, identité visuelle, 3D',
    color: 'var(--or)', bg: 'rgba(232,160,32,0.09)',
    services: [
      {
        id: 'audit-ux', label: 'Audit UX & analyse', desc: 'Comprendre avant de concevoir',
        tiers: [
          { id: 'au1', name: 'Découverte',   desc: 'Identifier les frictions majeures', price: 350000, unit: 'FDJ', recurring: false, features: ['Audit heuristique 10 critères', 'Analyse parcours utilisateur', 'Rapport de recommandations', 'Priorisation des corrections', 'Présentation résultats'] },
          { id: 'au2', name: 'Approfondi',   desc: 'Données + comportements réels', price: 620000, unit: 'FDJ', recurring: false, recommended: true, features: ['+ Heatmaps et scroll maps', 'Enregistrements de sessions', 'Tests utilisateurs (5 participants)', 'Benchmark concurrentiel', 'Feuille de route chiffrée'] },
          { id: 'au3', name: 'Stratégique',  desc: 'Compréhension utilisateur complète', price: 890000, unit: 'FDJ', recurring: false, features: ['+ Interviews utilisateurs', 'Personas et empathy maps', 'Cartographie parcours as-is/to-be', 'Atelier de priorisation client', 'Rapport exécutif illustré'] },
        ],
      },
      {
        id: 'design-ada', label: 'Design adaptatif', desc: 'Interfaces qui s\'ajustent à chaque profil',
        tiers: [
          { id: 'da1', name: 'Personnalisé', desc: 'Segmentation et contenu adapté', price: 700000, unit: 'FDJ', recurring: false, features: ['3 profils utilisateurs', 'Personnalisation contenu affiché', 'Règles d\'adaptation manuelles', 'Tests A/B basiques', 'Documentation système'] },
          { id: 'da2', name: 'Intelligent',  desc: 'Apprentissage comportemental', price: 1600000, unit: 'FDJ', recurring: false, recommended: true, features: ['Moteur de recommandation IA', 'A/B testing intégré au design', 'Dashboard métriques engagement', 'Personnalisation navigation', 'Documentation complète'] },
          { id: 'da3', name: 'Prédictif',    desc: 'Adaptation temps réel et IA avancée', price: 2500000, unit: 'FDJ', recurring: false, features: ['Analytics comportemental temps réel', 'Scoring utilisateur IA', 'Personnalisation multi-canal', 'Intégration CDP / CRM', 'Audit trimestriel inclus 6 mois'] },
        ],
      },
      {
        id: 'immersif', label: 'Expériences immersives 3D', desc: 'WebGL · showroom · WebXR',
        tiers: [
          { id: 'im1', name: 'Showroom 3D', desc: 'Visualisation produits en 3D', price: 2000000, unit: 'FDJ', recurring: false, features: ['Showroom 3D (5 produits)', 'Navigation à la souris/touch', 'Chargement optimisé', 'Compatible mobile et desktop', 'Intégration dans votre site'] },
          { id: 'im2', name: 'Configurateur', desc: 'Expérience interactive avancée', price: 4000000, unit: 'FDJ', recurring: false, recommended: true, features: ['Configurateur 3D temps réel', 'Narration spatiale interactive', 'Animations scroll-driven', '60fps sur mobile garanti', 'Environnements 360° navigables'] },
          { id: 'im3', name: 'WebXR',        desc: 'Réalité augmentée et virtuelle', price: 6000000, unit: 'FDJ', recurring: false, features: ['WebXR (casque VR/AR)', 'Environnements immersifs complets', 'Physique et interactions réalistes', 'Optimisation multi-device', 'Lancement produit / expérience marque'] },
        ],
      },
      {
        id: 'identite', label: 'Identité visuelle', desc: 'Palette · typographie · design system',
        tiers: [
          { id: 'id1', name: 'Identité',      desc: 'Base visuelle solide', price: 700000, unit: 'FDJ', recurring: false, features: ['Palette de couleurs', 'Sélection typographique', 'Logo (3 variantes)', 'Charte graphique PDF', 'Kit réseaux sociaux basique'] },
          { id: 'id2', name: 'Design System', desc: 'Système cohérent et maintenable', price: 1300000, unit: 'FDJ', recurring: false, recommended: true, features: ['+ Composants UI documentés', 'Design system Figma livré', 'Guidelines utilisation', 'Déclinaisons print + web', 'Formation équipe 2h'] },
          { id: 'id3', name: 'Premium',        desc: 'Identité complète multi-support', price: 2000000, unit: 'FDJ', recurring: false, features: ['+ Identité sonore', 'Motion design et animations', 'Kit complet (web, print, signalétique)', 'Documentation marque 50p', 'Suivi 3 mois post-livraison'] },
        ],
      },
    ],
  },
  {
    id: 'conseil', num: '03', label: 'Conseil Stratégie', icon: '◆',
    tagline: 'IA & GEO, transformation numérique, données',
    color: 'rgba(79,212,165,1)', bg: 'rgba(79,212,165,0.08)',
    services: [
      {
        id: 'geo', label: 'Stratégie IA & GEO', desc: 'Être cité par les IA, pas seulement référencé',
        tiers: [
          { id: 'g1', name: 'Audit GEO',   desc: 'État des lieux présence IA', price: 450000, unit: 'FDJ', recurring: false, features: ['Audit présence ChatGPT/Perplexity/SGE', 'Analyse des citations concurrentes', 'Rapport diagnostique GEO', 'Recommandations balisage', 'Présentation résultats'] },
          { id: 'g2', name: 'Stratégie',   desc: 'Plan d\'action complet', price: 900000, unit: 'FDJ', recurring: false, recommended: true, features: ['+ Stratégie contenu GEO', 'Briefs éditoriaux optimisés IA', 'Implémentation Schema.org avancée', 'E-E-A-T : profils auteurs & citations', 'Tableau de bord suivi GEO'] },
          { id: 'g3', name: 'Full GEO',    desc: 'Domination des réponses IA', price: 1400000, unit: 'FDJ', recurring: false, features: ['+ Suivi mensuel 3 mois inclus', 'Ajustements continus balisage', 'Gestion réputation algorithmique', 'Rapport de présence IA mensuel', 'Accès direct équipe stratégie'] },
        ],
      },
      {
        id: 'transfo', label: 'Transformation numérique', desc: 'Feuille de route IA · architecture · conduite',
        tiers: [
          { id: 't1', name: 'Diagnostic',    desc: 'Comprendre votre maturité digitale', price: 890000, unit: 'FDJ', recurring: false, features: ['Audit maturité numérique', 'Cartographie stack existante', 'Feuille de route 12 mois', 'Identification cas d\'usage IA', 'Rapport exécutif illustré'] },
          { id: 't2', name: 'Accompagnement', desc: 'Déployer et faire adhérer', price: 2000000, unit: 'FDJ', recurring: false, recommended: true, features: ['+ Ateliers conduite du changement', 'Design flux de travail humain-IA', 'Sélection des outils et partenaires', 'Formation décideurs (2 jours)', 'Jalons de validation mensuels'] },
          { id: 't3', name: 'Full',           desc: 'Transformation de bout en bout', price: 3000000, unit: 'FDJ', recurring: false, features: ['+ Architecture plateforme composable', 'Déploiement pilote et itérations', 'Indicateurs ROI et tableau de bord', 'Accompagnement 6 mois', 'Accès équipe technique dédiée'] },
        ],
      },
      {
        id: 'rse', label: 'RSE numérique', desc: 'Sobriété · éco-conception · certifications',
        tiers: [
          { id: 'rs1', name: 'Audit RSE',   desc: 'Mesurer son impact numérique', price: 680000, unit: 'FDJ', recurring: false, features: ['Audit empreinte carbone web', 'Évaluation accessibilité WCAG', 'Rapport de maturité RSE', 'Benchmark sectoriel', 'Recommandations priorisées'] },
          { id: 'rs2', name: 'Stratégie',   desc: 'Réduire et communiquer', price: 1200000, unit: 'FDJ', recurring: false, recommended: true, features: ['+ Plan d\'action sobriété numérique', 'Éco-conception du site', 'Rédaction charte IA et RGPD', 'Communication RSE anti-greenwashing', 'Atelier équipes (1 journée)'] },
          { id: 'rs3', name: 'Certification', desc: 'Obtenir le label et le prouver', price: 1800000, unit: 'FDJ', recurring: false, features: ['+ Accompagnement label (B Corp, Lucie…)', 'Rapport RSE interactif annuel', 'Campagnes d\'engagement crédibles', 'Veille réglementaire AI Act / RGPD', 'Suivi tableau de bord RSE'] },
        ],
      },
      {
        id: 'data', label: 'Stratégie données first-party', desc: 'CDP · RGPD · identité sans cookies',
        tiers: [
          { id: 'd1', name: 'Audit Data',  desc: 'Cartographier la collecte', price: 1400000, unit: 'FDJ', recurring: false, features: ['Audit collecte & consentement', 'Analyse CMP et analytics', 'Rapport conformité RGPD', 'Identification données first-party', 'Recommandations architecturales'] },
          { id: 'd2', name: 'Stratégie',   desc: 'Construire la relation client directe', price: 2700000, unit: 'FDJ', recurring: false, recommended: true, features: ['+ Stratégie valeur contre données', 'Implémentation CDP (unification)', 'Segmentation et profils 360°', 'Conformité Privacy Sandbox', 'Formation équipe data 1 jour'] },
          { id: 'd3', name: 'Full Data',   desc: 'Écosystème data souverain', price: 4000000, unit: 'FDJ', recurring: false, features: ['+ Identité sans cookies (universal ID)', 'Modélisation attribution multi-touch', 'Architecture data warehouse', 'Activation cross-canal', 'Accès délégué équipe data 6 mois'] },
        ],
      },
    ],
  },
  {
    id: 'formation', num: '04', label: 'Formation', icon: '◉',
    tagline: 'IA, culture digitale, prise en main web',
    color: 'rgba(159,225,203,1)', bg: 'rgba(159,225,203,0.07)',
    services: [
      {
        id: 'forma-ia', label: 'Formation IA & Automatisation', desc: 'Piloter l\'IA · agents · automatisations',
        tiers: [
          { id: 'fia1', name: 'Sensibilisation', desc: 'Comprendre pour décider', price: 150000, unit: 'FDJ / session', recurring: true, features: ['½ journée en groupe', 'Introduction aux agents IA', 'Démonstrations outils', 'Q&A personnalisé', 'Supports de cours inclus'] },
          { id: 'fia2', name: 'Opérationnel',    desc: 'Mettre en pratique dès demain', price: 280000, unit: 'FDJ / session', recurring: true, recommended: true, features: ['1 journée complète', 'Ateliers hands-on : agents IA', 'Automatisation marketing', 'Moteur de recommandation', 'Suivi post-formation 30 jours'] },
          { id: 'fia3', name: 'Expert',           desc: 'Maîtrise complète 3 jours', price: 530000, unit: 'FDJ / session', recurring: true, features: ['3 jours intensifs', '4 modules complets', 'Cas réels de votre organisation', 'Certification interne', 'Support 30 jours + accès ressources'] },
        ],
      },
      {
        id: 'forma-strat', label: 'Formation stratégique & digitale', desc: 'Décideurs · culture data · gouvernance',
        tiers: [
          { id: 'fs1', name: 'Initiation',  desc: 'Les enjeux en ½ journée', price: 120000, unit: 'FDJ / session', recurring: true, features: ['½ journée', 'SEO & GEO introduction', 'Gouvernance des données', 'Enjeux IA Act', 'Supports remis'] },
          { id: 'fs2', name: 'Pilotage',    desc: 'Décider avec les bons indicateurs', price: 250000, unit: 'FDJ / session', recurring: true, recommended: true, features: ['1 journée complète', 'Tableaux de bord et KPIs', 'Sobriété numérique et RSE', 'Gouvernance éditoriale IA', 'Livret de bord + ressources'] },
          { id: 'fs3', name: 'Leadership',  desc: 'Programme complet 2 jours', price: 420000, unit: 'FDJ / session', recurring: true, features: ['2 jours ateliers', 'Mise en situation secteur', 'Élaboration feuille de route', 'Plan de transformation interne', 'Accompagnement suivi 1 mois'] },
        ],
      },
      {
        id: 'forma-web', label: 'Prise en main web & numérique', desc: 'Naviguer · sécurité · outils collaboratifs',
        tiers: [
          { id: 'fw1', name: 'Fondamentaux', desc: 'L\'essentiel en ½ journée', price: 80000, unit: 'FDJ / session', recurring: true, features: ['½ journée accessible', 'Navigation et recherche en ligne', 'Sécurité : mots de passe, 2FA', 'Identifier le phishing', 'Supports pratiques'] },
          { id: 'fw2', name: 'Autonomie',     desc: 'Travailler efficacement en ligne', price: 140000, unit: 'FDJ / session', recurring: true, recommended: true, features: ['1 journée complète', '+ Email professionnel et étiquette', 'Google Workspace pratique', 'Visioconférences, partage de fichiers', 'Bons réflexes cybersécurité'] },
          { id: 'fw3', name: 'Complet',       desc: 'Programme 2 jours avec suivi', price: 200000, unit: 'FDJ / session', recurring: true, features: ['2 jours', '+ Protection données personnelles', 'Outils collaboratifs avancés', 'Atelier mise en situation', 'Support post-formation 2 semaines'] },
        ],
      },
      {
        id: 'forma-resp', label: 'Formation IA responsable', desc: 'Comprendre l\'IA pour ne pas la subir',
        tiers: [
          { id: 'fr1', name: 'Découverte', desc: 'Démystifier l\'IA en ½ journée', price: 80000, unit: 'FDJ / session', recurring: true, features: ['½ journée', 'Comment fonctionne un LLM', 'Hallucinations et limites', 'Deepfakes et désinformation', 'Supports pratiques remis'] },
          { id: 'fr2', name: 'Vigilance',  desc: 'Pratiques responsables', price: 150000, unit: 'FDJ / session', recurring: true, recommended: true, features: ['1 journée', '+ Vie privée et collecte de données', 'AI Act : droits et obligations', 'IA au travail : impacts emploi', 'Mise en situation et cas pratiques'] },
          { id: 'fr3', name: 'Expert',     desc: 'Former les formateurs', price: 200000, unit: 'FDJ / session', recurring: true, features: ['1 journée + kit formateur', 'Contenus adaptables à votre contexte', 'Exercices corrigés', 'Slides et scripts inclus', 'Licence d\'utilisation interne'] },
        ],
      },
    ],
  },
  {
    id: 'marketing', num: '05', label: 'Marketing Digital', icon: '◇',
    tagline: 'Influence, vidéo, community management',
    color: 'rgba(220,80,160,1)', bg: 'rgba(180,40,120,0.08)',
    services: [
      {
        id: 'influence', label: "Marketing d'influence & UGC", desc: 'Créateurs · ambassadeurs · contenus authentiques',
        tiers: [
          { id: 'inf1', name: 'Lancement',  desc: 'Campagne de notoriété ciblée', price: 300000, unit: 'FDJ / campagne', recurring: true, features: ['5 nano-influenceurs (< 5k)', '1 mois de campagne', 'Briefs et coordination', 'Rapport de performance', 'Contenus UGC récupérables'] },
          { id: 'inf2', name: 'Croissance', desc: 'Mix influenceurs et UGC', price: 700000, unit: 'FDJ / campagne', recurring: true, recommended: true, features: ['Mix nano + micro (5k–50k)', '2 mois · 15 créateurs', 'Défis et concours UGC', 'Amplification on-site', 'Reporting engagement hebdo'] },
          { id: 'inf3', name: 'Premium',    desc: 'Programme ambassadeur long terme', price: 1200000, unit: 'FDJ / campagne', recurring: true, features: ['Mix macro + micro + nano', '3 mois · programme ambassadeur', 'Réutilisation publicitaire UGC', 'Gestion relation créateurs', 'Dashboard ROI en temps réel'] },
        ],
      },
      {
        id: 'video', label: 'Production vidéo premium', desc: 'Corporate · Reels · Shoppable',
        tiers: [
          { id: 'vid1', name: 'Essentielle', desc: 'Contenu vidéo de base', price: 500000, unit: 'FDJ / production', recurring: false, features: ['2 vidéos courtes (15-60s)', 'Tournage ½ journée', 'Montage et sous-titres', 'Format mobile optimisé', 'Livraison en 1 semaine'] },
          { id: 'vid2', name: 'Complète',    desc: 'Ligne éditoriale et production', price: 1100000, unit: 'FDJ / production', recurring: false, recommended: true, features: ['5 vidéos (social + corporate)', 'Motion design et animations', 'Journée de tournage complète', 'Déclinaisons multi-format', 'Stratégie de diffusion incluse'] },
          { id: 'vid3', name: 'Premium',     desc: 'Production cinématographique', price: 2000000, unit: 'FDJ / production', recurring: false, features: ['Mini-doc + série reels + shoppable', 'Caméra cinéma + équipe pro', 'Vidéos interactives avec hotspots', 'Distribution cross-canal', 'Reporting vues et conversions'] },
        ],
      },
      {
        id: 'community', label: 'Community management', desc: 'Calendrier éditorial · modération · rapports',
        tiers: [
          { id: 'com1', name: 'Essentiel', desc: 'Présence régulière maintenue', price: 180000, unit: 'FDJ / mois', recurring: true, features: ['3 réseaux sociaux', '12 publications / mois', 'Réponses commentaires < 24h', 'Rapport mensuel simple', 'Contenus visuels basiques'] },
          { id: 'com2', name: 'Standard',  desc: 'Présence active et engageante', price: 350000, unit: 'FDJ / mois', recurring: true, recommended: true, features: ['5 réseaux (+ LinkedIn, TikTok)', '20 publications / mois', 'Modération et DMs < 4h', 'Calendrier éditorial mensuel', 'Rapport KPIs + recommandations'] },
          { id: 'com3', name: 'Full',      desc: 'Rédaction complète + veille', price: 600000, unit: 'FDJ / mois', recurring: true, features: ['Tous réseaux actifs', '30+ publications / mois', 'Veille concurrentielle et tendances', 'Campagnes boostées incluses', 'Rapport analytics avancé'] },
        ],
      },
    ],
  },
  {
    id: 'maintenance', num: '06', label: 'Maintenance', icon: '⬡',
    tagline: 'Supervision, support, optimisation continue',
    color: 'var(--ink-2)', bg: 'rgba(255,255,255,0.05)',
    services: [
      {
        id: 'maint-tech', label: 'Maintenance technique & support', desc: 'SLA · supervision 24/7 · mises à jour sécurité',
        tiers: [
          { id: 'mt1', name: 'Basique',   desc: 'Protection et disponibilité', price: 150000, unit: 'FDJ / mois', recurring: true, features: ['Sauvegardes quotidiennes', 'Mises à jour sécurité', 'Monitoring uptime', 'Support email (72h)', 'Rapport mensuel basique'] },
          { id: 'mt2', name: 'Standard',  desc: 'Support réactif et SLA', price: 280000, unit: 'FDJ / mois', recurring: true, recommended: true, features: ['+ Support chat & ticket (8h ouvrées)', 'Corrections bugs SLA 24h', 'Mises à jour frameworks testées', 'Agent IA diagnostic incidents', 'Rapport détaillé mensuel'] },
          { id: 'mt3', name: 'Premium',   desc: 'SLA garanti · support 24/7', price: 450000, unit: 'FDJ / mois', recurring: true, features: ['Support 24h/7j toutes urgences', 'SLA bloquant < 4h garanti contractuellement', 'Maintenance évolutive (TMA)', 'Préproduction tests automatisés', 'Accès prioritaire équipe technique'] },
        ],
      },
      {
        id: 'maint-perf', label: 'Optimisation des performances', desc: 'Core Web Vitals · SEO · GEO · RGPD',
        tiers: [
          { id: 'mp1', name: 'Audit',    desc: 'Rapport trimestriel', price: 300000, unit: 'FDJ / trimestre', recurring: true, features: ['Audit Core Web Vitals', 'Audit SEO technique', 'Audit accessibilité WCAG', 'Rapport priorisé', 'Présentation résultats'] },
          { id: 'mp2', name: 'Audit+',   desc: 'Audit et corrections prioritaires', price: 600000, unit: 'FDJ / trimestre', recurring: true, recommended: true, features: ['+ Implémentation corrections P1 et P2', 'Suivi GEO mensuel inclus', 'Balisage Schema.org maintenu', 'Roadmap trimestrielle chiffrée', 'Accès tableau de bord en temps réel'] },
          { id: 'mp3', name: 'Continu',  desc: 'Amélioration permanente', price: 900000, unit: 'FDJ / trimestre', recurring: true, features: ['+ Toutes corrections incluses', 'Audit sécurité & pentesting', 'Conformité RGPD maintenue', 'Suivi empreinte carbone', 'Accompagnement stratégique trimestriel'] },
        ],
      },
    ],
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function fmt(n: number) { return n.toLocaleString('fr-FR'); }

// ─── Sub-components ───────────────────────────────────────────────────────────

function StepBadge({ n, label, active, done }: { n: number; label: string; active: boolean; done: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '7px', opacity: done || active ? 1 : 0.45 }}>
      <span style={{
        width: '26px', height: '26px', borderRadius: '50%', flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: 700,
        background: done ? 'var(--green)' : active ? 'var(--or)' : 'var(--bg-white)',
        border: `2px solid ${done ? 'var(--green)' : active ? 'var(--or)' : 'var(--border)'}`,
        color: done || active ? '#0c1210' : 'var(--ink-3)',
        transition: 'all 0.3s',
      }}>
        {done ? '✓' : n}
      </span>
      <span style={{
        fontFamily: 'var(--mono)', fontSize: '12px', fontWeight: 700,
        color: active ? 'var(--ink)' : done ? 'var(--ink-2)' : 'var(--ink-4)',
        transition: 'color 0.2s',
        letterSpacing: '0.02em',
      }}>
        {label}
      </span>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function PricingCalculator() {
  const [step, setStep] = useState<Step>('category');
  const [selCat, setSelCat]     = useState<Category | null>(null);
  const [selSvc, setSelSvc]     = useState<Service | null>(null);
  const [cart, setCart]         = useState<CartItem[]>([]);

  const stepNum = { category: 1, service: 2, tier: 3, next: 4 }[step];

  const addToCart = (tier: Tier) => {
    setCart(prev => [...prev, {
      catId: selCat!.id,
      catLabel: selCat!.label,
      catColor: selCat!.color,
      svcLabel: selSvc!.label,
      tierName: tier.name,
      price: tier.price,
      unit: tier.unit,
      recurring: tier.recurring,
    }]);
    setStep('next');
  };

  const removeFromCart = (idx: number) =>
    setCart(prev => prev.filter((_, i) => i !== idx));

  const oneTimeTotal = cart.filter(i => !i.recurring).reduce((a, i) => a + i.price, 0);
  const recurTotal   = cart.filter(i => i.recurring).reduce((a, i) => a + i.price, 0);

  const simParam = cart.length > 0
    ? encodeURIComponent(JSON.stringify(cart.map(i => ({ s: i.svcLabel, t: i.tierName, p: i.price, u: i.unit, r: i.recurring }))))
    : '';
  const contactHref = cart.length > 0 ? `/contact?sim=${simParam}` : '/contact';

  // ─── Recap Panel (shared) ────────────────────────────────────────────────

  const RecapPanel = (
    <div style={{
      background: 'var(--bg-white)',
      border: '1px solid var(--border)',
      borderRadius: '16px',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{
        padding: '16px 20px', borderBottom: '1px solid var(--border)',
        fontFamily: 'var(--mono)', fontSize: '10.5px', fontWeight: 700,
        color: 'var(--ink-3)', letterSpacing: '0.07em',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <span>// récapitulatif</span>
        <span style={{ color: 'var(--or)' }}>{cart.length} service{cart.length !== 1 ? 's' : ''}</span>
      </div>

      {/* Items */}
      {cart.length === 0 ? (
        <div style={{
          padding: '28px 20px', textAlign: 'center',
          fontFamily: 'var(--mono)', fontSize: '11.5px', color: 'var(--ink-4)', lineHeight: 1.8,
        }}>
          Vos sélections<br />apparaîtront ici
        </div>
      ) : (
        <div style={{ maxHeight: '260px', overflowY: 'auto', padding: '10px' }}>
          {cart.map((item, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'flex-start', gap: '10px',
              padding: '10px 10px', borderRadius: '8px',
              background: 'transparent',
              marginBottom: '4px',
            }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: item.catColor, flexShrink: 0, marginTop: '5px' }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {item.svcLabel}
                </div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--ink-3)', marginTop: '2px' }}>
                  {item.tierName} · {fmt(item.price)} {item.unit.replace('FDJ', '').trim() || 'FDJ'}
                </div>
              </div>
              <button
                onClick={() => removeFromCart(i)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: 'var(--ink-4)', fontSize: '14px', lineHeight: 1, padding: '0 2px', flexShrink: 0,
                }}
                title="Supprimer"
              >×</button>
            </div>
          ))}
        </div>
      )}

      {/* Totals */}
      {cart.length > 0 && (
        <div style={{ padding: '14px 20px', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {oneTimeTotal > 0 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--ink-4)' }}>Ponctuel</span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '14px', fontWeight: 800, color: 'var(--or)' }}>{fmt(oneTimeTotal)} FDJ</span>
            </div>
          )}
          {recurTotal > 0 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--ink-4)' }}>Récurrent/session</span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 700, color: 'var(--green-lt)' }}>+{fmt(recurTotal)} FDJ/pér.</span>
            </div>
          )}
        </div>
      )}

      {/* CTA */}
      <div style={{ padding: '14px 20px', borderTop: cart.length > 0 ? '1px solid var(--border)' : 'none' }}>
        <Link href={contactHref} className="btn-primary" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <span>{cart.length > 0 ? 'Demander un devis' : 'Prendre contact'}</span>
          <span>→</span>
        </Link>
        <p style={{ fontFamily: 'var(--mono)', fontSize: '9.5px', color: 'var(--ink-4)', textAlign: 'center', marginTop: '8px', lineHeight: 1.6 }}>
          Cadrage gratuit · 30 min · Sans engagement
        </p>
      </div>
    </div>
  );

  // ─── Step indicator ──────────────────────────────────────────────────────

  const StepBar = (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '32px',
      fontFamily: 'var(--mono)',
    }}>
      {[
        { n: 1, label: 'Catégorie' },
        { n: 2, label: 'Service' },
        { n: 3, label: 'Formule' },
        { n: 4, label: 'Suite' },
      ].map(({ n, label }, i) => (
        <React.Fragment key={n}>
          <StepBadge n={n} label={label} active={stepNum === n} done={stepNum > n} />
          {i < 3 && (
            <span style={{ flex: 1, height: '1px', background: stepNum > n + 1 ? 'var(--green)' : 'var(--border)', minWidth: '12px', transition: 'background 0.3s' }} />
          )}
        </React.Fragment>
      ))}
    </div>
  );

  // ─── Step content ────────────────────────────────────────────────────────

  let content: React.ReactNode;

  // STEP 1 — Category
  if (step === 'category') {
    content = (
      <div>
        <h2 style={{ fontSize: 'clamp(22px,2.5vw,28px)', fontWeight: 800, color: 'var(--ink)', marginBottom: '10px' }}>
          Quel domaine vous intéresse ?
        </h2>
        <p style={{ fontSize: '16px', color: 'var(--ink-2)', marginBottom: '24px', lineHeight: 1.6 }}>
          Choisissez une catégorie pour commencer votre estimation.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '12px' }}>
          {CATS.map(cat => (
            <button
              key={cat.id}
              onClick={() => { setSelCat(cat); setStep('service'); }}
              style={{
                display: 'flex', alignItems: 'center', gap: '16px',
                padding: '18px 20px', borderRadius: '13px', cursor: 'pointer',
                border: '1px solid var(--border)', background: 'var(--bg-white)',
                textAlign: 'left', transition: 'all 0.15s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = cat.color; (e.currentTarget as HTMLElement).style.background = cat.bg; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.background = 'var(--bg-white)'; }}
            >
              <span style={{ fontSize: '26px', flexShrink: 0, color: cat.color }}>{cat.icon}</span>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', fontWeight: 700, color: cat.color, letterSpacing: '0.1em' }}>{cat.num}</span>
                  <span style={{ fontSize: '16px', fontWeight: 800, color: 'var(--ink)' }}>{cat.label}</span>
                </div>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '12.5px', color: 'var(--ink-3)', lineHeight: 1.5 }}>
                  {cat.tagline}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    );

  // STEP 2 — Service
  } else if (step === 'service' && selCat) {
    content = (
      <div>
        <button onClick={() => setStep('category')} style={{
          display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '20px',
          background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--ink-3)',
        }}>← Retour aux catégories</button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: selCat.color, fontWeight: 700, letterSpacing: '0.1em' }}>{selCat.num}</span>
          <h2 style={{ fontSize: 'clamp(22px,2.5vw,28px)', fontWeight: 800, color: 'var(--ink)' }}>{selCat.label}</h2>
        </div>
        <p style={{ fontSize: '16px', color: 'var(--ink-2)', marginBottom: '24px', lineHeight: 1.6 }}>Quel service vous intéresse ?</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {selCat.services.map(svc => {
            const minP = svc.tiers[0].price;
            const maxP = svc.tiers[2].price;
            return (
              <button
                key={svc.id}
                onClick={() => { setSelSvc(svc); setStep('tier'); }}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px',
                  padding: '16px 20px', borderRadius: '12px', cursor: 'pointer',
                  border: '1px solid var(--border)', background: 'var(--bg-white)',
                  textAlign: 'left', transition: 'all 0.15s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = selCat.color; (e.currentTarget as HTMLElement).style.background = selCat.bg; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.background = 'var(--bg-white)'; }}
              >
                <div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--ink)', marginBottom: '4px' }}>{svc.label}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--ink-3)', lineHeight: 1.4 }}>{svc.desc}</div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 700, color: 'var(--ink-2)', whiteSpace: 'nowrap' }}>
                    {fmt(minP)} → {fmt(maxP)}
                  </div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--ink-3)' }}>{svc.tiers[0].unit}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );

  // STEP 3 — Tier
  } else if (step === 'tier' && selSvc && selCat) {
    content = (
      <div>
        <button onClick={() => setStep('service')} style={{
          display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '20px',
          background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--ink-3)',
        }}>← Retour aux services</button>
        <h2 style={{ fontSize: 'clamp(20px,2.5vw,26px)', fontWeight: 800, color: 'var(--ink)', marginBottom: '6px' }}>
          {selSvc.label}
        </h2>
        <p style={{ fontSize: '16px', color: 'var(--ink-2)', marginBottom: '24px', lineHeight: 1.6 }}>
          Choisissez la formule qui correspond à vos besoins.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '14px' }}>
          {selSvc.tiers.map(tier => (
            <button
              key={tier.id}
              onClick={() => addToCart(tier)}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
                padding: '20px', borderRadius: '14px', cursor: 'pointer',
                border: `2px solid ${tier.recommended ? selCat.color : 'var(--border)'}`,
                background: tier.recommended ? selCat.bg : 'var(--bg-white)',
                textAlign: 'left', transition: 'all 0.15s', position: 'relative',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = selCat.color; (e.currentTarget as HTMLElement).style.background = selCat.bg; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = tier.recommended ? selCat.color : 'var(--border)'; (e.currentTarget as HTMLElement).style.background = tier.recommended ? selCat.bg : 'var(--bg-white)'; }}
            >
              {tier.recommended && (
                <span style={{
                  position: 'absolute', top: '-1px', right: '14px',
                  fontFamily: 'var(--mono)', fontSize: '9px', fontWeight: 700,
                  background: selCat.color, color: '#0c1210',
                  padding: '2px 10px', borderRadius: '0 0 6px 6px', letterSpacing: '0.08em',
                }}>RECOMMANDÉ</span>
              )}
              <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: selCat.color, fontWeight: 700, letterSpacing: '0.08em', marginBottom: '8px', textTransform: 'uppercase' as const }}>
                {tier.name}
              </span>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '26px', fontWeight: 800, color: 'var(--ink)', lineHeight: 1, marginBottom: '4px' }}>
                {fmt(tier.price)}
              </div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--ink-3)', marginBottom: '10px' }}>
                {tier.unit}
              </div>
              <div style={{ fontSize: '13.5px', color: 'var(--ink-2)', marginBottom: '16px', fontStyle: 'italic', lineHeight: 1.5 }}>
                {tier.desc}
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                {tier.features.map((f, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '9px', fontSize: '14px', color: 'var(--ink-2)', lineHeight: 1.45 }}>
                    <span style={{ color: selCat.color, fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </button>
          ))}
        </div>
      </div>
    );

  // STEP 4 — Next action
  } else if (step === 'next') {
    const lastItem = cart[cart.length - 1];
    content = (
      <div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '12px',
          padding: '16px 20px', borderRadius: '12px', background: 'var(--bg-white)',
          border: '1px solid var(--green)', marginBottom: '28px',
        }}>
          <span style={{ color: 'var(--green)', fontSize: '18px' }}>✓</span>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--ink)' }}>
              {lastItem?.svcLabel} — {lastItem?.tierName} ajouté
            </div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '10.5px', color: 'var(--ink-3)', marginTop: '2px' }}>
              {lastItem && fmt(lastItem.price)} {lastItem?.unit}
            </div>
          </div>
        </div>

        <h2 style={{ fontSize: 'clamp(22px,2.5vw,28px)', fontWeight: 800, color: 'var(--ink)', marginBottom: '10px' }}>
          Et ensuite ?
        </h2>
        <p style={{ fontSize: '16px', color: 'var(--ink-2)', marginBottom: '24px', lineHeight: 1.6 }}>
          Vous pouvez ajouter d'autres services à votre estimation, ou obtenir votre devis.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button
            onClick={() => setStep('category')}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '20px 24px', borderRadius: '14px', cursor: 'pointer',
              border: '1px solid var(--border)', background: 'var(--bg-white)',
              textAlign: 'left', transition: 'all 0.15s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--or)'; (e.currentTarget as HTMLElement).style.background = 'rgba(232,160,32,0.06)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.background = 'var(--bg-white)'; }}
          >
            <div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--ink)', marginBottom: '4px' }}>+ Ajouter un autre service</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '12.5px', color: 'var(--ink-3)' }}>
                Combiner plusieurs services pour un projet complet
              </div>
            </div>
            <span style={{ fontSize: '20px', color: 'var(--or)' }}>→</span>
          </button>

          <Link
            href={contactHref}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '20px 24px', borderRadius: '14px',
              border: '2px solid var(--or)', background: 'rgba(232,160,32,0.08)',
              textDecoration: 'none', transition: 'all 0.15s',
            }}
          >
            <div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--ink)', marginBottom: '4px' }}>
                Demander un devis précis
              </div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '12.5px', color: 'var(--ink-3)' }}>
                Cadrage gratuit 30 min · Réponse sous 48h · Simulation jointe
              </div>
            </div>
            <span style={{
              fontFamily: 'var(--mono)', fontSize: '18px', fontWeight: 800, color: 'var(--or)',
            }}>
              {oneTimeTotal > 0 ? fmt(oneTimeTotal) + ' FDJ' : '→'}
            </span>
          </Link>
        </div>

        {/* Reset */}
        <button
          onClick={() => { setCart([]); setStep('category'); }}
          style={{
            marginTop: '16px', background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--ink-4)',
            textDecoration: 'underline',
          }}
        >
          Recommencer depuis zéro
        </button>
      </div>
    );
  }

  // ─── Layout ──────────────────────────────────────────────────────────────

  return (
    <>
      {/* HERO */}
      <div style={{ paddingTop: '64px', paddingBottom: '40px', position: 'relative', zIndex: 2 }}>
        <div className="container-custom">
          <div style={{ maxWidth: '660px' }}>
            <div className="section-badge rev" style={{ marginBottom: '14px' }}>
              // tarifs · calculateur interactif
            </div>
            <h1 className="section-h2 rev d1" style={{ fontSize: 'clamp(34px,5vw,58px)', marginBottom: '14px' }}>
              Composez votre projet,<br /><em>étape par étape</em>
            </h1>
            <p className="section-sub rev d2" style={{ fontSize: '16px', maxWidth: '520px', marginBottom: 0 }}>
              Sélectionnez vos services et leurs formules. Votre estimation tarifaire se construit en temps réel.
            </p>
          </div>
        </div>
      </div>

      {/* CALCULATOR */}
      <section style={{ paddingBottom: '80px', position: 'relative', zIndex: 2 }}>
        <div className="container-custom">

          {/* Mobile: recap on top */}
          <div className="price-summary-mobile" style={{ marginBottom: '24px' }}>
            {RecapPanel}
          </div>

          <div className="price-calc-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 300px',
            gap: '28px',
            alignItems: 'start',
          }}>

            {/* LEFT: Tunnel */}
            <div style={{
              background: 'var(--bg-white)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '28px',
            }}>
              {StepBar}
              {content}
            </div>

            {/* RIGHT: Sticky recap */}
            <div className="price-summary-desktop" style={{ position: 'sticky', top: '96px' }}>
              {RecapPanel}
            </div>

          </div>

          <p style={{
            fontFamily: 'var(--mono)', fontSize: '10.5px', color: 'var(--ink-4)',
            textAlign: 'center', marginTop: '40px', lineHeight: 1.9,
          }}>
            Prix indicatifs en FDJ · Basés sur des projets réels à Djibouti et en région ·
            Le devis définitif est établi après un cadrage gratuit de 30 min
          </p>
        </div>
      </section>
    </>
  );
}
