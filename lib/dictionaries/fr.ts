import type { Dictionary } from "./en";

const fr: Dictionary = {
  nav: {
    services: "Services",
    process: "Notre méthode",
    about: "À propos",
    blog: "Seonid Labs",
    contact: "Contact",
    freeAudit: "Démarrer un projet",
  },
  footer: {
    tagline: "Conception web haute performance et automatisation IA pour fondateurs marocains, PME et équipes modernes. Basée à Casablanca, active à l'international.",
    agency: "Agence",
    resources: "Ressources",
    getInTouch: "Nous contacter",
    blog: "Seonid Labs",
    freeAudit: "Démarrer un projet",
    contact: "Contact",
    rights: "Tous droits réservés.",
    location: "Casablanca, Maroc — active dans le monde entier",
  },
  home: {
    meta: {
      title: "SEONID — Conception Web & Automatisation IA pour Fondateurs",
      description:
        "Sites web haute performance, visibilité dans la recherche IA (GEO) et automatisation des workflows pour fondateurs et PME. Travaillez directement avec l'ingénieur Abdelilah Karroumi.",
    },
    heroEyebrow: "Studio de Conception Web & Automatisation IA",
    heroHeadline: "Des sites web crédibles et des systèmes d'IA pour fondateurs.",
    heroSubhead:
      "Seonid est un studio solo de design et d'automatisation dirigé par Abdelilah Karroumi. Nous concevons des plateformes web rapides et crédibles, optimisons votre visibilité sur Google et les moteurs d'IA, et automatisons vos opérations répétitives.",
    heroCtaPrimary: "Démarrer un projet",
    heroCtaSecondary: "Explorer les solutions",
    // ---- Nouvelles sections marketing (voix honnête et méthodique) ----
    problem: {
      eyebrow: "Le problème",
      headline: "8 sites B2B marocains sur 10 échouent dans leur croissance sur les moteurs de recherche.",
      stat: "8 sur 10",
      statDef:
        "Parmi les sites B2B marocains que nous avons analysés, environ 8 sur 10 présentaient des blocages empêchant Google de les classer — temps de chargement lents, chemins de crawl cassés ou absence de stratégie d'indexation.",
      pains: [
        "Votre site charge lentement, et Google le pénalise avant même qu'un client n'arrive.",
        "Google n'indexe jamais les pages sur lesquelles vous avez travaillé — votre meilleur travail reste invisible.",
        "Vos meilleurs clients trouvent un concurrent qui ne le mérite pas, parce qu'il apparaît en premier.",
      ],
    },
    proof: {
      eyebrow: "Ce que contient l'audit gratuit",
      headline: "L'audit technique en 14 points, sous 48 heures.",
      points: [
        { name: "Crawlabilité", body: "Google atteint-il réellement et lit-il vos pages ? Nous vérifions robots, liens internes et pages orphelines." },
        { name: "Core Web Vitals", body: "LCP, CLS, INP mesurés en conditions réelles — les métriques qui décident de votre classement." },
        { name: "Hreflang trilingue", body: "Vos pages FR, EN et AR correctement déclarées pour que chacune se classe dans sa langue." },
        { name: "Indexation arabe", body: "Structure RTL correcte pour que les moteurs et modèles d'IA indexent et citent votre arabe." },
      ],
      cta: "Voir ce que contient l'audit",
    },
    services: {
      eyebrow: "Ce que je fais",
      headline: "Trois compétences, un seul ingénieur responsable.",
      cards: [
        {
          index: "01",
          title: "SEO technique & Performance",
          outcome: "Faire classer le site que vous avez — crawl, indexation, Core Web Vitals et corrections de schéma.",
          deliverables: ["Audit technique en 14 points", "Correction des Core Web Vitals", "Structure hreflang, schéma et mots-clés FR/AR"],
          link: "/services",
        },
        {
          index: "02",
          title: "Conception & Construction Web",
          outcome: "Lancement ou refonte sous budget de performance sous 2 secondes, avec structure trilingue dès le premier jour.",
          deliverables: ["Build Next.js sous budget de performance", "Design sombre orienté conversion", "FR/EN/AR dès le départ, prêt RTL"],
          link: "/services",
        },
        {
          index: "03",
          title: "IA & Automatisation",
          outcome: "Être cité par ChatGPT et Perplexity, et automatiser les 30 % de tâches répétitives.",
          deliverables: ["Structuration pour la recherche IA (GEO/AEO)", "Automatisation de workflows n8n", "Contenus qui répondent aux questions que vos acheteurs posent à l'IA"],
          link: "/services",
        },
      ],
      linkLabel: "Voir les services",
    },
    process: {
      eyebrow: "Comment ça marche",
      headline: "La ",
      name: "Index-Method",
      steps: [
        { n: "01", title: "Audit", body: "Votre audit technique en 14 points, livré en 48 heures — crawlabilité, métriques, schéma, indexation FR/AR/EN." },
        { n: "02", title: "Feuille de route", body: "Une liste de corrections priorisées avec tarification honnête, impact vs effort. Vous validez le périmètre avant tout travail." },
        { n: "03", title: "Build & Rank", body: "La refonte performance et le SEO technique — structure de contenu trilingue incluse, suivi hebdomadaire." },
        { n: "04", title: "Mesure", body: "Une page de chiffres, chacun défini et sourcé. Pas de gadgets de vanité, pas de surprises." },
      ],
    },
    trilingual: {
      eyebrow: "Français · Anglais · Arabe",
      headline: "Un domaine. Trois langues. Un hreflang correct.",
      body: "Vos clients internationaux vous trouvent dans leur langue — et ChatGPT aussi. Une structure trilingue correcte permet à vos pages FR, EN et AR de se classer chacune, au lieu d'un site français accompagné d'une page arabe que personne ne trouve.",
    },
    founder: {
      eyebrow: "Qui construit cela",
      headline: "Un ingénieur. Zéro intermédiaire.",
      body: "SEONID, c'est Abdelilah Karroumi, architecte web fullstack à Casablanca. Je construis votre site, puis je fais le SEO technique qui le classe — en français, anglais et arabe. Pas de chargés de compte, pas de fantasme « 1 200 clients », pas de faux témoignages : si une technique fonctionne, je vous montre les données.",
      cta: "Lire le manifeste du fondateur",
    },
    blog: {
      eyebrow: "Depuis le blog",
      headline: "La preuve par la réflexion, pas par les promesses.",
      posts: [
        { title: "Le Benchmark des 12 Agences", desc: "Ce que la comparaison de 12 sites d'agences marocaines révèle réellement.", slug: "12-agency-benchmark" },
        { title: "Pourquoi 80 % des sites B2B marocains échouent sur Google", desc: "La recherche derrière notre approche — et pourquoi l'écart est gagnable.", slug: "moroccan-b2b-seo-gap" },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      headline: "Des réponses honnêtes.",
      items: [
        { q: "L'audit est-il vraiment gratuit ?", a: "Oui. Vous envoyez une URL, je lance l'audit technique en 14 points, et vous recevez un rapport en langage clair sous 48 heures. Sans paiement, sans réengagement, sans obligation." },
        { q: "Pouvez-vous travailler sur mon site actuel, ou faut-il une refonte ?", a: "Les deux. L'audit vous le dira. Beaucoup de sites n'ont besoin que de corrections SEO techniques ; d'autres nécessitent une vraie refonte. Vous décidez après avoir vu le rapport." },
        { q: "Dans quelles langues écrivez-vous les contenus ?", a: "Français, anglais et arabe — de vraies traductions par marché, avec hreflang et RTL corrects, pas de sortie machine." },
        { q: "Quelle différence avec une agence de Casablanca ?", a: "Un ingénieur senior, pas une chaîne de juniors et de chargés de compte. Vous parlez à la personne qui écrit le code, et chaque chiffre d'un rapport est vérifiable." },
        { q: "Combien cela coûte-t-il ?", a: "Honnêtement : l'audit est gratuit ; un engagement SEO technique ou une refonte est facturé par projet avec un périmètre clair et des jalons fixes. Demandez un devis précis après votre audit gratuit." },
      ],
    },
    finalEyebrow: "Prochaine étape",
    processHeadline: "Quatre étapes pratiques du concept au système opérationnel.",
    proofHeadline: "Conçu autour de quatre résultats concrets.",
    proofBody:
      "Pas d'intermédiaires superflus ni de frais d'agence opaques. Vous collaborez directement avec un ingénieur focalisé sur l'efficacité opérationnelle, de meilleurs leads et un gain de temps réel.",
    proofStats: [
      { n: "Crédibilité", l: "Sites sur mesure rapides qui inspirent une confiance immédiate" },
      { n: "Meilleurs Leads", l: "Structuré pour le classement Google et les citations IA" },
      { n: "Gain de Temps", l: "Pipelines automatisés qui éliminent le travail manuel répétitif" },
    ],
    proofLink: "Lire notre méthode →",
    servicesHeadline: "Des compétences complémentaires au service de vos résultats.",
    serviceDesignTitle: "Conception Web Sur Mesure",
    serviceDesignBody:
      "Rapide, accessible et pensé pour la conversion — basé sur des architectures modernes avec un temps de chargement instantané.",
    serviceGrowthTitle: "SEO & Recherche IA (GEO)",
    serviceGrowthBody:
      "Structurez vos contenus et métadonnées pour être bien positionné sur Google et cité par ChatGPT et Perplexity.",
    serviceAutomationTitle: "Automatisation des Workflows",
    serviceAutomationBody:
      "Automatisez la saisie de données, le routage des leads et la synchronisation CRM grâce à des workflows n8n fiables.",
    servicesLink: "Voir tous nos services →",
    localHeadlinePart1: "Basé au Maroc.",
    localHeadlinePart2: "Conçu pour les entreprises modernes.",
    localBody:
      "Seonid collabore avec des fondateurs marocains, des PME et des clients internationaux — en français, anglais et arabe.",
    finalHeadline: "Prêt à moderniser votre site web et automatiser vos opérations ?",
    finalSub: "Partagez votre projet ou réservez un échange de découverte pour obtenir un plan technique concret.",
    finalCta: "Démarrer un projet",
  },
  services: {
    meta: {
      title: "Services — SEONID",
      description:
        "Conception Web, GEO (Optimisation pour Moteurs Génératifs) et Automatisation IA pour PME et fondateurs.",
    },
    eyebrow: "Services",
    headline: "Conception Web, GEO & Automatisation.",
    intro:
      "Conçu spécifiquement pour les fondateurs marocains, PME et équipes en croissance qui souhaitent renforcer leur crédibilité, générer des leads qualifiés et simplifier leur fonctionnement sans multiplier les prestataires.",
    designTitle: "Conception Web Sur Mesure",
    design: [
      "Positionnement et message clairs — communiquer immédiatement votre proposition de valeur",
      "Architecture Next.js rapide hébergée sur le réseau Edge mondial pour une navigation fluide",
      "Conception responsive mobile et accessible pensée pour maximiser la conversion",
      "Support multilingue complet prêt pour le français, l'anglais et l'arabe de droite à gauche",
    ],
    growthTitle: "SEO & Optimisation Recherche IA (GEO)",
    growth: [
      "SEO technique : architecture, métadonnées, sitemaps et balisage Schema JSON-LD avancé",
      "Optimisation GEO pour être cité comme source fiable par ChatGPT, Claude et Perplexity",
      "Structure de page alignée sur les intentions de recherche à fort potentiel",
      "Optimisation locale et régionale pour les marchés marocains et internationaux",
    ],
    automationTitle: "Automatisation IA & Workflows",
    automation: [
      "Workflows n8n dédiés qui éliminent les heures de travail administratif répétitif chaque semaine",
      "Capture automatisée des prospects, synchronisation CRM immédiate et alertes d'équipe",
      "Génération automatique de devis et documents connectée directement à vos formulaires",
      "Gestion rigoureuse des erreurs et contrôle humain pour une fiabilité totale",
    ],
    ctaHeadline: "Besoin d'un plan clair pour votre site ou vos automatisations ?",
    cta: "Démarrer un projet",
    orText: "Ou",
    orLink: "découvrez notre méthode",
    orSuffix: "d'abord.",
  },
  process: {
    meta: {
      title: "Notre Méthode — SEONID",
      description: "Notre modèle de sprints en 4 étapes pour livrer des sites web et des automatisations fiables dans les délais.",
    },
    eyebrow: "Notre méthode",
    headline: "Un modèle de sprints transparent. Une collaboration directe.",
    intro:
      "Nous remplaçons les processus d'agence complexes par un modèle de livraison par sprints. Vous bénéficiez de livrables réguliers, d'un contact direct et d'une visibilité totale.",
    matrixHeadline: "Les 4 phases clés",
    criteria: [
      { name: "01. Cadrage & Stratégie", weight: "Phase 1", body: "Nous définissons votre audience cible, votre offre et vos points de blocage opérationnels pour fixer des priorités claires." },
      { name: "02. Design & Architecture", weight: "Phase 2", body: "Nous concevons des interfaces crédibles et développons une base technique ultra-rapide et responsive." },
      { name: "03. Référencement & IA (GEO)", weight: "Phase 3", body: "Nous intégrons les données structurées et le balisage sémantique pour que votre marque soit visible et citée." },
      { name: "04. Automatisation & Lancement", weight: "Phase 4", body: "Nous testons vos workflows n8n, mettons en production et vous remettons un système fonctionnel et autonome." },
    ],
    principlesHeadline: "Nos principes fondamentaux",
    principlesIntro:
      "Chaque projet s'appuie sur des standards d'ingénierie stricts :",
    principles: [
      "Messages orientés résultats : proposition de valeur explicite sur chaque page.",
      "La vitesse comme priorité : chargement sub-seconde pour retenir les visiteurs.",
      "Un appel à l'action clair et répété de manière cohérente pour maximiser les demandes.",
      "Un code propre et maintenable sans dépendance à des extensions superflues.",
      "Contact direct avec l'ingénieur et respect des jalons hebdomadaires.",
      "Propriété intégrale de vos données et de vos accès dès la livraison.",
    ],
    ctaHeadline: "Prêt à définir le périmètre de votre projet ?",
    cta: "Démarrer un projet",
  },
  about: {
    meta: {
      title: "À Propos — SEONID",
      description: "Seonid est un studio d'ingénierie web et d'automatisation IA dirigé par Abdelilah Karroumi à Casablanca au Maroc.",
    },
    eyebrow: "À propos",
    headline: "Un spécialiste dédié. Un contact direct. Des résultats tangibles.",
    p1: "Seonid est dirigé par Abdelilah Karroumi, ingénieur logiciel et architecte de solutions à Casablanca, Maroc. Au lieu de diluer votre projet entre chefs de projet, graphistes juniors et prestataires externes, vous travaillez directement avec la personne qui conçoit vos pages et développe vos automatisations.",
    p2: "Notre mission est claire : aider les fondateurs marocains et les PME à renforcer leur crédibilité en ligne, capter des leads qualifiés et gagner du temps chaque semaine en transformant les tâches répétitives en systèmes autonomes.",
    bio:
      "Basé à Casablanca, au Maroc, au service d'entrepreneurs locaux et internationaux. Nous combinons ingénierie web moderne et automatisation pragmatique pour offrir un véritable levier opérationnel.",
    ctaHeadline: "Envie d'échanger sur vos besoins ?",
    cta: "Démarrer un projet",
  },
  audit: {
    meta: {
      title: "Démarrer un Projet — Demande & Consultation — SEONID",
      description: "Partagez votre projet ou réservez un échange de 30 minutes avec Abdelilah Karroumi pour analyser vos opportunités.",
    },
    eyebrow: "Demande de Projet",
    headline: "Démarrer un projet avec Seonid.",
    intro: "Partagez vos besoins ci-dessous. Nous analyserons votre situation actuelle et vous proposerons un plan technique concret sous 24 heures.",
    included: [
      { title: "Diagnostic Site & Crédibilité", body: "Analyse de la vitesse de chargement, de la clarté du message et des points de friction." },
      { title: "Visibilité Google & IA (GEO)", body: "Vérification de l'indexation, des métadonnées et de la découvrabilité par les modèles d'IA." },
      { title: "Opportunités d'Automatisation", body: "Identification des tâches manuelles automatisables avec n8n et les outils modernes." },
      { title: "Plan d'Action Priorisé", body: "Une feuille de route concrète des améliorations techniques à fort impact." },
    ],
    form: {
      name: "Nom",
      namePlaceholder: "Votre nom complet",
      email: "Email",
      emailPlaceholder: "vous@entreprise.com",
      url: "URL de votre site web (si existant)",
      urlPlaceholder: "votreentreprise.com",
      message: "Quels sont vos objectifs ou besoins prioritaires ?",
      messagePlaceholder: "ex : refonte de site, amélioration de la visibilité sur Google/IA, automatisation du traitement des leads…",
      submit: "Envoyer ma demande de projet",
      submitting: "Envoi en cours…",
      doneTitle: "Demande bien reçue.",
      doneBody: "Nous examinerons vos informations et vous recontacterons sous 24 heures avec les prochaines étapes.",
      genericError: "Une erreur est survenue. Veuillez réessayer.",
      requiredError: "L'adresse email est requise.",
      emailError: "L'adresse email ne semble pas valide.",
    },
  },
  blog: {
    meta: {
      title: "Seonid Labs — Guides & Analyses",
      description: "Conseils et guides pratiques sur le web design moderne, le GEO et l'automatisation IA par SEONID.",
    },
    eyebrow: "Seonid Labs",
    headline: "Analyses et retours d'expérience pragmatiques.",
    intro: "Des articles concrets sur la conception web performante, la visibilité dans les moteurs d'IA et l'automatisation des opérations.",
    articles: [
      {
        tag: "Web Engineering",
        title: "Comment un site web rapide renforce directement la crédibilité B2B",
        summary: "Pourquoi la vitesse d'affichage, un positionnement clair et une typographie soignée séparent les sites à fort taux de conversion des simples vitrines.",
        readTime: "5 min de lecture",
        date: "Août 2026",
      },
      {
        tag: "IA & GEO",
        title: "Generative Engine Optimization : comment les moteurs d'IA choisissent leurs sources",
        summary: "Comprendre comment ChatGPT et Perplexity analysent et citent les sites d'entreprises grâce aux données structurées.",
        readTime: "7 min de lecture",
        date: "Août 2026",
      },
    ],
    ctaHeadline: "Besoin de conseils personnalisés pour votre activité ?",
    cta: "Démarrer un projet",
  },
  contact: {
    meta: {
      title: "Contact — SEONID",
      description: "Démarrer un projet ou contacter Abdelilah Karroumi chez SEONID.",
    },
    eyebrow: "Contact",
    headline: "Démarrer un projet avec Seonid.",
    p1: "Que vous ayez besoin d'un nouveau site web performant, d'une capture de leads automatisée ou de workflows sur mesure, échangeons sur les leviers les plus efficaces pour votre activité.",
    p2Pre: "Vous préférez envoyer un email ?",
    location: "Casablanca, Maroc — actif dans le monde entier.",
    cta: "Démarrer un projet",
  },
  geo: {
    meta: {
      title: "GEO — Visibilité dans la Recherche IA — SEONID",
      description: "Generative Engine Optimization : se faire citer par ChatGPT, Perplexity et Google AI Overviews.",
    },
    eyebrow: "Visibilité Recherche IA",
    headline: "Faites-vous recommander par les moteurs d'IA.",
    intro: "Les décideurs utilisent de plus en plus ChatGPT et Perplexity pour trouver des prestataires. Nous structurons vos contenus pour que les modèles d'IA comprennent et recommandent votre entreprise.",
    whatHeadline: "Qu'est-ce que le GEO ?",
    whatBody: "Le GEO optimise votre présence numérique avec des définitions claires, des données structurées JSON-LD et des formats de questions-réponses exploitables par les modèles de langage.",
    diffHeadline: "Une mise en œuvre rigoureuse",
    diffBody: "Nous privilégions les faits concrets : chaque page est déployée avec des balises Schema vérifiées et testables directement via les outils de validation officiels de Google.",
    trackingHeadline: "Préparation opérationnelle",
    trackingBody: "Nous effectuons des tests structurés pour nous assurer que vos services sont correctement compris et restitués lors de requêtes pertinentes.",
    trackingEmpty: "Balisages et architectures sémantiques prêts pour le déploiement client.",
    ctaHeadline: "Prêt à optimiser votre visibilité pour les moteurs d'IA ?",
    cta: "Démarrer un projet",
  },
};

export default fr;
