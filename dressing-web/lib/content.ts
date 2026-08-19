// Contenu du site DRESSING (FR/EN). Les textes légaux sont des MODÈLES :
// remplace les [CHAMPS] (raison sociale, SIRET, adresse…) et fais-les RELIRE PAR
// UN JURISTE avant mise en production. Je ne suis pas avocat.

export type Lang = 'fr' | 'en';
export const LANGS: Lang[] = ['fr', 'en'];

export const CONTACT_EMAIL = 'contact@dressing-app.com';
export const SUPPORT_EMAIL = 'support@dressing-app.com';

export type DocSection = { h: string; p: string[] };
export type Doc = { slug: string; title: string; intro?: string; sections: DocSection[] };

export const DOC_SLUGS = [
  'telecharger',
  'confidentialite',
  'cgu',
  'cgv',
  'mentions-legales',
  'compte',
  'contact',
] as const;
export type DocSlug = (typeof DOC_SLUGS)[number];

/** Offre payante, telle qu'affichée sur /abonnements. */
export type PricingTier = {
  key: 'essential' | 'elite';
  name: string;
  tagline: string;
  monthly: string;
  yearly: string;
  yearlyPerMonth: string;
  save: string;
  crowns: string;
  perks: string[];
};

/**
 * Une ligne du tableau /fonctionnalites. `true` = inclus, `false` = non inclus,
 * une chaîne = valeur (ex. « ×2 », « 150 / mois »).
 */
export type FeatureRow = { label: string; essential: boolean | string; elite: boolean | string };
export type FeatureGroup = { title: string; intro: string; rows: FeatureRow[] };

type Dict = {
  tagline: string;
  metaDescription: string;
  nav: Record<'home' | 'faq' | DocSlug, string> & {
    abonnements: string;
    offres: string;
    fonctionnalites: string;
    rejoindre: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    ctaDownload: string;
    soon: string;
    featuresTitle: string;
    features: { title: string; text: string }[];
    tiersTitle: string;
    tiersSub: string;
    tiers: { name: string; price: string; perks: string[] }[];
    tiersCta: string;
    aiNote: string;
  };
  /** Page /abonnements, uniquement les offres payantes. */
  pricing: {
    title: string;
    sub: string;
    perMonth: string;
    orYearly: string;
    perMonthEq: string;
    popular: string;
    crownsLabel: string;
    trialTitle: string;
    trialText: string;
    tiers: PricingTier[];
    compareCta: string;
    storeNote: string;
    aiNote: string;
  };
  /** Page /fonctionnalites, le détail de ce que débloque un abonnement. */
  features: {
    title: string;
    sub: string;
    colEssential: string;
    colElite: string;
    yes: string;
    no: string;
    groups: FeatureGroup[];
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
  };
  footer: { rights: string; madeIn: string };
  docs: Record<DocSlug, Doc>;
};

const fr: Dict = {
  tagline: 'Ton dressing intelligent.',
  metaDescription:
    'DRESSING : ta garde-robe intelligente. Tenue du jour, styliste IA, garde-robe numérique et défis entre amis.',
  nav: {
    home: 'Accueil',
    faq: 'FAQ & aide',
    rejoindre: 'Rejoindre',
    abonnements: 'Abonnements',
    offres: 'Les offres',
    fonctionnalites: 'Fonctionnalités',
    telecharger: 'Télécharger',
    confidentialite: 'Confidentialité',
    cgu: 'CGU',
    cgv: 'CGV',
    'mentions-legales': 'Mentions légales',
    compte: 'Mon compte',
    contact: 'Contact',
  },
  home: {
    heroTitle: 'Ton dressing, sublimé par l’IA.',
    heroSubtitle:
      'Numérise ta garde-robe, reçois ta tenue du jour selon la météo, discute avec ton styliste personnel et défie tes amis.',
    ctaDownload: 'Télécharger sur l’App Store',
    soon: 'Bientôt disponible',
    featuresTitle: 'Ce que fait DRESSING',
    features: [
      {
        title: 'Tenue du jour',
        text: 'Une tenue générée chaque jour selon la météo et ton événement, à partir de TA garde-robe.',
      },
      {
        title: 'Styliste IA',
        text: 'Un styliste personnel qui te conseille, se souvient de tes goûts et suit les tendances.',
      },
      {
        title: 'Garde-robe numérique',
        text: "Photographie tes pièces : l'IA les analyse (catégorie, couleur, style) et les range.",
      },
      {
        title: 'Social & défis',
        text: 'Ajoute tes amis, grimpe au classement hebdo et relève des défis de style.',
      },
    ],
    tiersTitle: 'Abonnements',
    tiersSub:
      "Deux formules. Léon travaille pour toi dans les deux, l'ELITE va simplement plus loin.",
    tiers: [
      {
        name: 'ESSENTIAL',
        price: '3,99 € / mois',
        perks: [
          '150 Crowns par mois',
          'Tenue du jour générée par Léon',
          'Analyse de vêtements & Scan Street',
          'Mannequin habillé · Carats ×2',
        ],
      },
      {
        name: 'ELITE',
        price: '7,99 € / mois',
        perks: [
          '500 Crowns par mois',
          'Passeport voyage & Semaine de Léon',
          'Profil de style par IA',
          'Carats ×3 · −20 % en annuel',
        ],
      },
    ],
    tiersCta: 'Voir le détail des offres',
    aiNote:
      'Les contenus marqués « IA » sont générés automatiquement (Anthropic / Claude) et peuvent contenir des erreurs.',
  },
  pricing: {
    title: 'Abonnements',
    sub: "Léon fait appel à une IA à chaque tenue, chaque analyse, chaque conseil. L'abonnement paie ce travail, et rien d'autre.",
    perMonth: '/ mois',
    orYearly: 'ou',
    perMonthEq: 'soit',
    popular: 'Le plus complet',
    crownsLabel: 'Crowns par mois',
    trialTitle: 'Essaie avant de payer',
    trialText:
      'Chaque compte démarre avec 8 analyses de vêtements, 3 tenues et 1 profil de style offerts. Sans limite de temps, sans carte bancaire, sans renouvellement à annuler.',
    tiers: [
      {
        key: 'essential',
        name: 'ESSENTIAL',
        tagline:
          'Tout le quotidien : ta tenue chaque matin, ta garde-robe analysée, Léon à portée de main.',
        monthly: '3,99 €',
        yearly: '38,30 € / an',
        yearlyPerMonth: '3,19 € / mois',
        save: '−20 %',
        crowns: '150',
        perks: [
          'Tenue du jour générée par Léon, chaque matin',
          'Analyse photo de tes vêtements par IA',
          'Rafale : plusieurs pièces à la suite',
          'Chat illimité avec Léon, avec mémoire',
          'Scan Street : décrypte une tenue vue dans la rue',
          'Profil de style, Wishlist, Rapports mensuels',
          'Mannequin habillé',
          'Carats ×2',
        ],
      },
      {
        key: 'elite',
        name: 'ELITE',
        tagline:
          "Pour qui veut prendre de l'avance : la semaine préparée, les voyages anticipés, trois fois plus de Crowns.",
        monthly: '7,99 €',
        yearly: '76,70 € / an',
        yearlyPerMonth: '6,39 € / mois',
        save: '−20 %',
        crowns: '500',
        perks: [
          'Tout ESSENTIAL, avec plus de trois fois plus de Crowns',
          'La Semaine de Léon : sept tenues préparées d’avance',
          'Passeport voyage : ta valise pensée pour la destination',
          'Carats ×3',
          'Priorité sur les nouvelles fonctionnalités',
        ],
      },
    ],
    compareCta: 'Comparer les fonctionnalités en détail',
    storeNote:
      "Paiement via l'App Store, résiliable à tout moment depuis les réglages de ton compte Apple. Aucune donnée bancaire ne transite par DRESSING.",
    aiNote:
      'Les contenus marqués « IA » sont générés automatiquement (Anthropic / Claude) et peuvent contenir des erreurs.',
  },
  features: {
    title: 'Fonctionnalités',
    sub: "Ce que débloque un abonnement, ligne par ligne. Les deux formules donnent accès aux mêmes fonctions, à deux exceptions près réservées à l'ELITE. Elles se distinguent surtout par le nombre de Crowns.",
    colEssential: 'ESSENTIAL',
    colElite: 'ELITE',
    yes: 'Inclus',
    no: 'Non inclus',
    groups: [
      {
        title: 'Chaque matin',
        intro: "Tu ouvres l'app, ta tenue est là.",
        rows: [
          {
            label: 'Tenue du jour générée selon la météo, ton occasion et ta garde-robe',
            essential: true,
            elite: true,
          },
          { label: 'Régénérer une tenue qui ne te parle pas', essential: true, elite: true },
          {
            label: 'Affiner : occasion, couleurs, météo manuelle, demain',
            essential: true,
            elite: true,
          },
          {
            label: 'Mannequin habillé avec tes vraies pièces détourées',
            essential: true,
            elite: true,
          },
          { label: 'Score de tenue, streak et statistiques', essential: true, elite: true },
        ],
      },
      {
        title: 'Ta garde-robe',
        intro: 'Numérisée une fois, exploitée tous les jours.',
        rows: [
          { label: 'Nombre de pièces', essential: 'Illimité', elite: 'Illimité' },
          {
            label: 'Analyse photo par IA : catégorie, couleur, matière, style',
            essential: true,
            elite: true,
          },
          {
            label: 'Rafale : photographier plusieurs pièces à la suite',
            essential: true,
            elite: true,
          },
          { label: 'Détourage automatique des pièces', essential: true, elite: true },
          { label: 'Ajout manuel et import par QR code', essential: true, elite: true },
          { label: 'Annonce Vinted prête à publier', essential: true, elite: true },
        ],
      },
      {
        title: 'Léon, ton styliste',
        intro: 'Il te connaît, il se souvient, il cherche pour toi.',
        rows: [
          { label: 'Chat illimité, avec mémoire de tes goûts', essential: true, elite: true },
          {
            label: 'Léon cherche sur le web les tendances du moment',
            essential: true,
            elite: true,
          },
          {
            label: 'Scan Street : décrypter une tenue vue dans la rue',
            essential: true,
            elite: true,
          },
          { label: 'Profil de style analysé par IA', essential: true, elite: true },
          {
            label: 'Wishlist : ce qui manque vraiment à ta garde-robe',
            essential: true,
            elite: true,
          },
          { label: 'Rapports mensuels et Wrapped annuel', essential: true, elite: true },
          {
            label: 'La Semaine de Léon : sept tenues préparées d’avance',
            essential: false,
            elite: true,
          },
          {
            label: 'Passeport voyage : la valise pensée pour la destination',
            essential: false,
            elite: true,
          },
        ],
      },
      {
        title: 'Style et progression',
        intro: 'Ce qui te fait revenir.',
        rows: [
          { label: 'Colorimétrie personnelle', essential: true, elite: true },
          { label: 'Défis hebdomadaires, badges et grades', essential: true, elite: true },
          { label: 'Journal de style', essential: true, elite: true },
          { label: 'Multiplicateur de Carats', essential: '×2', elite: '×3' },
          { label: 'Thèmes et icônes d’application', essential: true, elite: true },
        ],
      },
      {
        title: 'Entre amis',
        intro: 'Le style se partage.',
        rows: [
          {
            label: 'DRESSING Real : ta tenue du jour, à l’heure dite',
            essential: true,
            elite: true,
          },
          { label: 'Classement hebdomadaire entre amis', essential: true, elite: true },
          { label: 'Carte de membre et profils publics', essential: true, elite: true },
        ],
      },
      {
        title: 'Crowns',
        intro:
          "La monnaie qui paie le travail de l'IA. Chaque génération, chaque analyse en consomme.",
        rows: [
          { label: 'Crowns crédités chaque mois', essential: '150', elite: '500' },
          { label: 'Report des Crowns non utilisés', essential: false, elite: false },
        ],
      },
    ],
    ctaTitle: 'Prêt à commencer ?',
    ctaText:
      "Les premières analyses et les premières tenues sont offertes. Tu ne t'abonnes que si Léon te convainc.",
    ctaButton: 'Voir les offres',
  },
  footer: { rights: 'Tous droits réservés.', madeIn: 'Conçu à Paris.' },
  docs: {
    telecharger: {
      slug: 'telecharger',
      title: 'Télécharger DRESSING',
      intro: "DRESSING arrive bientôt sur l'App Store.",
      sections: [
        {
          h: 'iOS',
          p: [
            "L'application sera disponible sur l'App Store (iPhone). Cette page sera mise à jour avec le lien de téléchargement dès la publication.",
          ],
        },
        {
          h: 'Bêta',
          p: [
            'Une phase de test précédera la sortie publique. Tu peux candidater depuis la page Rejoindre, ou nous écrire à contact@dressing-app.com.',
          ],
        },
      ],
    },
    confidentialite: {
      slug: 'confidentialite',
      title: 'Politique de confidentialité',
      intro:
        "Version 1.0, en vigueur le 19 août 2026. Dressing App voit ta garde-robe, tes mensurations et, si tu l'y autorises, une photo de ton corps. Ce sont des données intimes. Ce document dit exactement ce que nous en faisons, à qui elles sont transmises, et comment les récupérer ou les effacer.",
      sections: [
        {
          h: '1. Responsable du traitement',
          p: [
            'Le responsable du traitement est Bakouch Daniel, entrepreneur individuel (micro-entreprise), SIRET 108 534 470 00019, 98 avenue Achille Peretti, 92200 Neuilly-sur-Seine, France.',
            'Contact pour toute question ou demande relative à tes données : support@dressing-app.com, en indiquant « RGPD » en objet.',
          ],
        },
        {
          h: '2. Ce que nous collectons',
          p: [
            "Ton compte : adresse email, et un mot de passe que nous ne voyons jamais. Il est haché par notre prestataire d'authentification avec un sel propre à ton compte, et ce hachage est irréversible.",
            'Ton profil : pseudo, biographie, genre, ville, mensurations (taille, poids, carrure), préférences de style, couleurs aimées ou écartées, marques, règles vestimentaires que tu poses toi-même.',
            "Tes images : photo de profil, photos de tes vêtements et leurs versions détourées, photos DRESSING Real, et une photo de mannequin. Cette dernière est une photo de toi en pied, facultative, utilisée uniquement pour produire les rendus de tenue portée. Elle est stockée dans un espace privé, distincte de ta photo de profil, et n'apparaît nulle part sans ton action.",
            'Ton usage : tenues générées et portées, dates, météo et événement associés, historique, statistiques, Crowns et Carats, badges, série, défis, souvenirs retenus par le styliste, conversations avec lui.',
            "Ta position, si tu l'autorises : une position approximative, à l'échelle du quartier, pour connaître la météo autour de toi. Elle n'est pas conservée. Tu peux la refuser et saisir une ville à la main.",
            "Ta vie sociale dans l'application : amis, demandes, abonnements, publications, réactions, signalements et blocages.",
            "Ton abonnement : statut, offre, date d'échéance. Aucune donnée bancaire ne nous parvient jamais.",
            "Ton appareil : un identifiant technique généré par l'application et conservé dans le trousseau du téléphone. Il sert uniquement à reconnaître un appareil de confiance lors d'une connexion, et à empêcher qu'un même téléphone serve à multiplier les essais gratuits. Il ne permet pas de te suivre en dehors de l'application et disparaît à la désinstallation.",
            "Les rapports d'erreur : type d'erreur, ligne de code, modèle d'appareil, version du système, accompagnés de l'identifiant technique de ton compte. Aucune image, aucune capture d'écran, aucun contenu de garde-robe ou de conversation, aucune adresse email et aucun pseudo n'y figurent.",
          ],
        },
        {
          h: '3. Pourquoi, et sur quelle base légale',
          p: [
            'Exécution du contrat : créer et tenir ton compte, analyser tes vêtements, générer des tenues, faire fonctionner le styliste, mémoriser tes préférences, faire fonctionner les fonctionnalités sociales que tu actives, gérer les abonnements.',
            "Ton consentement, retirable à tout moment : produire les rendus de tenue portée à partir de ta photo de mannequin, t'envoyer des emails de nouveauté (désactivés par défaut), utiliser ta position.",
            "Obligation légale et intérêt légitime : modérer les images publiées, détecter les abus, les fraudes à l'essai et les faux comptes, t'envoyer les emails de sécurité et de compte, corriger les bugs à partir des rapports de plantage, conserver les pièces comptables.",
            'Quand la base est le consentement, tu peux le retirer à tout moment sans que cela remette en cause ce qui a été fait avant.',
          ],
        },
        {
          h: '4. Ce que nous ne faisons pas',
          p: [
            'Nous ne vendons pas tes données. À personne, jamais. Nous ne les cédons à aucun courtier en données, régie publicitaire ou réseau social.',
            "Nous n'entraînons aucun modèle d'intelligence artificielle avec tes photos ou tes conversations, et nos prestataires n'y sont pas autorisés.",
            "Nous ne pratiquons aucun profilage publicitaire, et aucune décision produisant un effet juridique à ton égard n'est prise par un traitement entièrement automatisé.",
            "Ce site n'utilise aucun outil de mesure d'audience, aucun cookie publicitaire et aucun traceur tiers.",
          ],
        },
        {
          h: '5. À qui tes données sont transmises',
          p: [
            "Supabase reçoit l'ensemble de tes données et de tes fichiers, pour l'hébergement de la base et du stockage. Union européenne, Irlande.",
            "Anthropic reçoit les photos de vêtements, le contexte de garde-robe, les préférences, la météo et les messages adressés au styliste, pour l'analyse des pièces, la génération des tenues et le styliste conversationnel. États-Unis.",
            "FASHN AI reçoit ta photo de mannequin et l'image composite de la tenue, pour produire le rendu photoréaliste. États-Unis.",
            'Google Cloud Vision reçoit les images au moment de leur publication, pour filtrer les contenus inappropriés. États-Unis.',
            "Resend reçoit ton adresse email et le contenu du message, pour l'envoi des emails. États-Unis.",
            "RevenueCat, Apple et Google reçoivent un identifiant d'achat et le statut d'abonnement, pour le paiement. États-Unis.",
            "Sentry reçoit les rapports d'erreur technique et l'identifiant de compte, pour la correction des plantages. Union européenne, Allemagne.",
            'Open-Meteo reçoit une position approximative, sans identifiant, pour la météo et le nom de la ville. Union européenne, Allemagne.',
            'Vercel héberge ce site. États-Unis.',
            "Nous pouvons également communiquer des données à une autorité administrative ou judiciaire lorsque la loi nous y oblige, et conserver une copie d'un contenu signalé le temps de traiter le signalement et de pouvoir en justifier.",
          ],
        },
        {
          h: '6. Transferts hors Union européenne',
          p: [
            "Tes données sont hébergées dans l'Union européenne, en Irlande.",
            "Certains prestataires sont établis aux États-Unis. Ces transferts sont encadrés par les clauses contractuelles types de la Commission européenne, complétées le cas échéant par l'adhésion du prestataire au cadre de protection des données UE États-Unis.",
            "Concrètement, deux catégories d'images quittent l'Union européenne : les photos de vêtements transmises à Anthropic, et ta photo de mannequin transmise à FASHN. Si cela ne te convient pas, tu peux utiliser l'application sans ajouter de photo de mannequin : le rendu photoréaliste est alors remplacé par une composition à plat de tes pièces, et rien ne part chez FASHN.",
          ],
        },
        {
          h: '7. Combien de temps nous les gardons',
          p: [
            'Tant que ton compte existe, tes données sont conservées pour que le service fonctionne.',
            "Après la suppression de ton compte, elles sont effacées sous 30 jours au plus tard. En pratique, l'effacement de la base et des fichiers est immédiat : le délai de 30 jours couvre la rotation des sauvegardes techniques, sur lesquelles une donnée subsiste quelques jours avant d'être écrasée.",
            "Quelques exceptions, strictement délimitées. Les pièces comptables liées à un achat sont conservées 10 ans, comme la loi l'exige, et ne contiennent pas tes photos. Une copie d'un contenu signalé et la décision prise sont conservées jusqu'à 1 an, pour pouvoir justifier de la décision et traiter une contestation. Les journaux d'alerte de connexion sont conservés 90 jours. L'empreinte d'appareil liée à un essai gratuit est conservée 12 mois et ne contient ni ton nom ni ton email.",
            "Un compte inactif depuis 3 ans est supprimé, après un email d'avertissement envoyé 30 jours avant.",
          ],
        },
        {
          h: '8. Supprimer ton compte',
          p: [
            "Dans l'application : Réglages, puis « Découdre l'étiquette ». La suppression est immédiate et définitive.",
            "Elle efface ton profil, ta garde-robe et toutes ses photos y compris les versions détourées, ton historique, tes tenues, tes conversations avec le styliste, tes DRESSING Real, tes publications et leurs images, ta photo de mannequin et les rendus qui en dérivent, tes liens d'amitié, ainsi que ton compte d'authentification. Un email de confirmation t'est envoyé.",
            'Ne sont pas effacés : les pièces comptables et les copies de modération mentionnées plus haut.',
            "Supprimer ton compte ne résilie pas ton abonnement, qui se gère depuis ton magasin d'applications. Pense à le faire avant.",
          ],
        },
        {
          h: '9. Tes droits',
          p: [
            "Le RGPD te donne un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité.",
            "Accès et portabilité : écris à support@dressing-app.com, nous t'envoyons une copie de tes données dans un format lisible sous un mois. Rectification : la plupart des informations se modifient directement dans les réglages de l'application. Effacement : le bouton de suppression de compte, dans l'application.",
            "Opposition et retrait du consentement : supprime ta photo de mannequin pour le rendu photoréaliste, décoche la case des emails de nouveauté dans les réglages, retire l'autorisation de position dans les réglages du téléphone.",
            "Si notre réponse ne te convient pas, tu peux saisir la Commission nationale de l'informatique et des libertés (CNIL), 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07, cnil.fr.",
          ],
        },
        {
          h: '10. Sécurité',
          p: [
            "Les échanges entre l'application et nos serveurs sont chiffrés, et les données sont chiffrées au repos.",
            "L'accès à tes données est cloisonné au niveau de la base : une règle de sécurité par ligne fait qu'un compte ne peut lire que ses propres données, indépendamment du code de l'application.",
            'Les photos de garde-robe, de profil et de mannequin vivent dans des espaces de stockage privés, accessibles uniquement par des liens signés et temporaires. Seuls les DRESSING Real et les publications de tenues, que tu déclenches toi-même, sont dans un espace public.',
            "Les clés d'accès aux services d'intelligence artificielle ne se trouvent jamais dans l'application : tout passe par nos serveurs.",
            "Une alerte par email t'est envoyée lors d'une connexion depuis un appareil inconnu. Ce message ne contient jamais de lien de réinitialisation de mot de passe : si tu reçois un email de ce type prétendant venir de nous, il ne vient pas de nous.",
            "En cas de violation de données susceptible d'engendrer un risque pour tes droits, nous prévenons la CNIL sous 72 heures et te prévenons directement lorsque le risque est élevé.",
          ],
        },
        {
          h: '11. Mineurs',
          p: [
            "L'application est interdite aux moins de 13 ans.",
            "En France, le traitement des données d'un mineur de moins de 15 ans dans le cadre d'un service en ligne requiert le consentement conjoint du mineur et du titulaire de l'autorité parentale. Si tu as entre 13 et 15 ans, tu dois donc avoir l'accord d'un parent. Nous pouvons demander une confirmation de cet accord.",
            "Si tu es parent et que tu constates qu'un compte a été créé par ton enfant sans ton accord, écris à support@dressing-app.com : le compte et les données sont supprimés.",
            "Le fil social interdit la publication de contenu représentant une personne mineure de manière suggestive. La modération automatique est réglée pour écarter ce type d'image, et tout signalement en ce sens est traité en priorité absolue.",
          ],
        },
        {
          h: '12. Cookies',
          p: [
            "Ce site est un site statique. Il ne dépose aucun cookie de mesure d'audience, aucun cookie publicitaire et aucun traceur tiers. Aucune bannière de consentement n'est nécessaire, parce qu'il n'y a rien à consentir.",
            'Le formulaire de contact transmet uniquement ce que tu y écris, plus une donnée technique servant à limiter les envois automatisés.',
            'Si un outil de mesure venait à être ajouté un jour, une bannière de consentement conforme serait mise en place avant, et ce document mis à jour.',
          ],
        },
        {
          h: '13. Modifications',
          p: [
            "Ce document peut évoluer. Toute modification substantielle est annoncée dans l'application et par email au moins 30 jours avant son entrée en vigueur. La date de version figure en tête.",
          ],
        },
      ],
    },
    cgu: {
      slug: 'cgu',
      title: "Conditions générales d'utilisation",
      intro:
        "Version 1.0, en vigueur le 19 août 2026. Âge minimum : 13 ans. Entre 13 et 15 ans, l'accord d'un parent est requis. En créant un compte, tu acceptes ces conditions.",
      sections: [
        {
          h: '1. Qui édite Dressing App',
          p: [
            'Dressing App est édité par Bakouch Daniel, entrepreneur individuel (micro-entreprise), SIRET 108 534 470 00019, 98 avenue Achille Peretti, 92200 Neuilly-sur-Seine, France.',
            'Support et réclamations : support@dressing-app.com. Presse et partenariats : contact@dressing-app.com.',
            'Agent copyright pour les notifications de retrait au titre du DMCA : support@dressing-app.com.',
          ],
        },
        {
          h: '2. Ton compte',
          p: [
            "L'inscription est obligatoire. Elle se fait avec une adresse email et un mot de passe, et demande une confirmation par email.",
            "Tu gardes ton mot de passe confidentiel et tu es responsable de ce qui se passe depuis ton compte. Préviens-nous si tu penses que quelqu'un d'autre y accède.",
            "Un compte par personne. Créer plusieurs comptes pour bénéficier plusieurs fois d'une offre d'essai ou d'un avantage de parrainage nous autorise à les fermer et à retirer les avantages concernés.",
            "Tu peux supprimer ton compte à tout moment depuis l'application, dans Réglages, rubrique « Découdre l'étiquette ».",
          ],
        },
        {
          h: '3. Ce que tu peux publier',
          p: [
            "Autorisé : des photos de vêtements et de tenues qui t'appartiennent réellement, des photos de toi, un pseudo et une biographie qui te représentent.",
            "Interdit : le contenu pornographique ou sexuellement explicite, et sous toutes ses formes le contenu à caractère sexuel impliquant une personne mineure. Le contenu violent, la mise en scène d'armes, l'incitation à la haine, à la discrimination ou au harcèlement. L'usurpation d'identité et la photo d'une autre personne sans son accord. La reproduction d'une œuvre ou d'un visuel de marque sur lesquels tu n'as aucun droit. La publicité déguisée, le démarchage, le spam, la revente d'accès au service.",
            "Est également interdite toute tentative de contourner les limites techniques du service, d'en automatiser l'usage ou d'en extraire massivement les données.",
            'Le contenu sexuel impliquant une personne mineure entraîne la fermeture immédiate et définitive du compte, sans préavis, et un signalement aux autorités compétentes. Cette règle ne souffre aucune exception.',
          ],
        },
        {
          h: '4. Tes contenus et tes droits dessus',
          p: [
            'Tes photos restent les tiennes. Nous ne devenons propriétaires de rien.',
            "Pour faire fonctionner le service, tu nous accordes une licence limitée, non exclusive, gratuite et révocable, qui nous permet uniquement de stocker tes photos, de les afficher dans ton application, de les transmettre à nos prestataires d'intelligence artificielle pour produire les analyses et les rendus que tu demandes, et, si tu publies volontairement une tenue, de l'afficher dans le fil aux personnes concernées par l'audience que tu as choisie.",
            "Cette licence s'éteint quand tu supprimes le contenu, ou ton compte. Elle ne nous autorise ni à vendre tes photos, ni à les utiliser dans notre communication.",
            "Nous n'utilisons pas tes photos pour entraîner des modèles d'intelligence artificielle, et nos prestataires ne sont pas autorisés à le faire non plus.",
            "L'application, son nom, son logo, son design et ses textes nous appartiennent. Ces conditions ne t'en cèdent aucun droit.",
          ],
        },
        {
          h: '5. Modération, signalement, recours',
          p: [
            'Le contenu publié est modéré. Cette modération combine un filtrage automatisé des images au moment de la publication et un traitement humain des signalements.',
            "Chaque publication peut être signalée depuis l'application. Une publication qui accumule des signalements distincts est automatiquement mise en attente d'examen humain. Tu peux aussi bloquer une personne, ce qui rend son contenu invisible pour toi et le tien invisible pour elle.",
            'Nous pouvons retirer un contenu, restreindre sa visibilité ou suspendre un compte lorsque ces conditions ne sont pas respectées.',
            'Si une décision te concerne, tu en es informé et tu peux la contester en écrivant à support@dressing-app.com. Nous répondons sous 7 jours ouvrés, et cette contestation est examinée par une personne, jamais par un traitement automatisé seul.',
          ],
        },
        {
          h: "6. L'intelligence artificielle",
          p: [
            "Une partie des fonctionnalités repose sur des modèles d'intelligence artificielle exploités par des prestataires tiers, décrits dans notre Politique de confidentialité.",
            "Les suggestions ne sont pas des conseils professionnels. Elles sont fournies en l'état, sans garantie d'exactitude.",
            "Les rendus visuels sont des images générées. Quand l'application te montre une tenue portée sur toi, cette image n'est pas une photographie : elle est produite par un modèle à partir de ta photo de mannequin et des photos de tes vêtements, et elle peut comporter des différences avec la réalité. Si tu publies une telle image, elle est signalée comme générée par intelligence artificielle.",
            "Générer un rendu à partir de la photo d'une autre personne, ou publier une image générée en la faisant passer pour une photographie authentique, est interdit.",
          ],
        },
        {
          h: '7. Évolutions du service',
          p: [
            'Le service évolue. Nous pouvons ajouter, modifier ou retirer des fonctionnalités, et faire évoluer les tarifs.',
            "Lorsqu'une modification a un effet défavorable et non négligeable sur ton usage, nous t'en informons. Tu disposes alors d'au moins 30 jours à compter de cette information ou de l'entrée en vigueur de la modification, la date la plus tardive étant retenue, pour continuer d'utiliser la version non modifiée lorsque c'est techniquement possible, ou résilier sans frais.",
            "Une hausse de tarif ne s'applique jamais à une période déjà payée.",
            "Les modifications de ce document sont annoncées avec leur date d'entrée en vigueur, au moins 30 jours à l'avance.",
          ],
        },
        {
          h: '8. Disponibilité et responsabilité',
          p: [
            "Nous faisons de notre mieux pour que le service fonctionne, sans garantir qu'il soit disponible en permanence ni exempt d'erreur. Une interruption planifiée est annoncée 7 jours à l'avance.",
            "Notre responsabilité ne saurait couvrir les conséquences d'un choix vestimentaire, d'une décision d'achat ou de vente prise à la lecture d'une suggestion, ni les dommages résultant du non-respect de ces conditions.",
            "Rien ici ne limite les droits que la loi t'accorde en tant que consommateur, ni notre responsabilité en cas de faute lourde, de dol ou d'atteinte à l'intégrité physique.",
          ],
        },
        {
          h: '9. Suspension et fermeture de compte',
          p: [
            "Nous pouvons suspendre ou fermer un compte pour un motif légitime, notamment le non-respect de ces conditions, une fraude, un impayé, une atteinte à la sécurité du service ou aux droits d'autrui.",
            "Nous pouvons aussi mettre fin au contrat en cas d'impossibilité durable d'exécuter le service, ou lorsque la personne concernée figure sur une liste de sanctions internationales.",
            "Sauf faute grave ou obligation légale contraire, un préavis de 30 jours est respecté et la part d'abonnement non consommée est remboursée au prorata.",
          ],
        },
        {
          h: '10. App Store, Google Play, TestFlight',
          p: [
            "L'application est distribuée par l'App Store d'Apple et par Google Play. Ce contrat est conclu entre toi et nous, jamais avec Apple ni avec Google.",
            "Apple et Google ne sont responsables ni de l'application, ni de son contenu, ni du support. Apple et ses filiales sont tiers bénéficiaires de ce contrat et peuvent en obtenir l'exécution à ton égard. Le support est assuré par nous, à support@dressing-app.com.",
            "L'application peut être distribuée en avant-première via TestFlight. Cette distribution est réservée aux tests : la version peut être instable, incomplète, et ses données peuvent être réinitialisées. Elle ne doit être ni redistribuée, ni rendue publique, ni utilisée à des fins commerciales.",
            "Conformément aux exigences des magasins d'applications, nous maintenons un dispositif de modération des contenus, un mécanisme de signalement et de blocage, et une politique de tolérance zéro à l'égard des contenus d'exploitation ou d'abus sexuels sur mineurs.",
          ],
        },
        {
          h: '11. Accessibilité',
          p: [
            "Nous voulons que Dressing App soit utilisable par le plus grand nombre, y compris avec les outils d'accessibilité du système : lecteur d'écran, agrandissement du texte, réduction des animations, contraste renforcé.",
            "Nous ne prétendons pas à ce jour être conformes à un référentiel d'accessibilité précis. Des écarts existent et nous les corrigeons progressivement. Si une partie de l'application t'est inutilisable, écris à support@dressing-app.com en décrivant l'obstacle : ces retours sont traités en priorité.",
          ],
        },
        {
          h: '12. Territoires exclus',
          p: [
            "Le service n'est pas disponible depuis les territoires visés par les mesures restrictives adoptées par l'Union européenne, la France ou toute autre autorité compétente, ni pour les personnes figurant sur une liste de sanctions applicable.",
          ],
        },
        {
          h: '13. Droit applicable et litiges',
          p: [
            'Toute réclamation peut être adressée à support@dressing-app.com. Nous nous engageons à répondre sous 7 jours ouvrés.',
            'Les conditions de recours à la médiation de la consommation figurent dans nos Conditions générales de vente.',
            "Ces conditions sont régies par le droit français. Les tribunaux français sont compétents. Si tu es consommateur et que tu résides dans l'Union européenne, au Royaume-Uni, en Suisse, en Norvège, en Islande ou au Brésil, tu conserves le bénéfice des dispositions impératives de ton pays de résidence et la possibilité d'en saisir les tribunaux.",
          ],
        },
        {
          h: '14. Divers',
          p: [
            "Si une clause de ce document est jugée invalide, elle est écartée et le reste continue de s'appliquer. Ne pas invoquer une clause à un moment donné ne vaut pas renonciation à s'en prévaloir plus tard.",
            "Tu ne peux pas céder ce contrat. Nous pouvons le céder en cas de transmission de l'activité, sans que tes droits en soient diminués.",
            "Ces conditions, les Conditions générales de vente et la Politique de confidentialité forment l'intégralité de l'accord entre nous.",
          ],
        },
      ],
    },
    cgv: {
      slug: 'cgv',
      title: 'Conditions générales de vente',
      intro:
        "Version 1.0, en vigueur le 19 août 2026. Elles encadrent les abonnements payants de Dressing App et complètent les Conditions générales d'utilisation.",
      sections: [
        {
          h: '1. Vendeur',
          p: [
            'Les abonnements sont vendus par Bakouch Daniel, entrepreneur individuel (micro-entreprise), SIRET 108 534 470 00019, 98 avenue Achille Peretti, 92200 Neuilly-sur-Seine, France.',
            'Contact : support@dressing-app.com.',
          ],
        },
        {
          h: '2. Nature du service',
          p: [
            "Dressing App est un service numérique par abonnement. Il n'y a aucun bien physique et aucune livraison.",
            "L'enregistrement d'un compte est requis pour tout achat.",
          ],
        },
        {
          h: '3. Offres et prix',
          p: [
            "L'offre FREE est gratuite. L'offre ESSENTIAL est à 3,99 € par mois ou 38,30 € par an, et donne 150 Crowns par mois. L'offre ELITE est à 7,99 € par mois ou 76,70 € par an, et donne 500 Crowns par mois.",
            "L'offre annuelle représente une économie d'environ 20 % par rapport à douze mensualités.",
            "Les prix qui font foi sont ceux affichés dans l'application au moment de l'achat, dans ta devise et toutes taxes comprises. Les montants ci-dessus sont donnés pour la France, en euros. Ils peuvent différer selon le pays de ton compte App Store ou Google Play, qui applique sa propre grille et sa propre fiscalité.",
            "Des mois d'abonnement peuvent être offerts dans le cadre de programmes ponctuels, notamment le parrainage et le programme de bêta testeurs, selon les règles annoncées lors de ces programmes.",
          ],
        },
        {
          h: '4. Les Crowns',
          p: [
            "Les Crowns sont une unité interne qui mesure ta consommation des fonctionnalités d'intelligence artificielle. Ils sont crédités chaque mois avec l'abonnement.",
            "Ils ne sont ni achetables séparément, ni convertibles en argent, ni remboursables, ni transférables entre comptes. Ils n'ont aucune valeur monétaire et ne constituent pas une monnaie électronique. Les Crowns non consommés ne sont pas reportés d'un mois sur l'autre.",
          ],
        },
        {
          h: "5. L'essai gratuit",
          p: [
            "L'essai de Dressing App ne se compte pas en jours mais en usages. Aucune carte bancaire n'est demandée, et il ne se transforme jamais automatiquement en abonnement payant.",
            'À la création de ton compte, tu reçois 8 analyses de vêtement par photo, 1 génération de profil de style et 3 générations de tenue, les régénérations comptant dans ce total.',
            "Ces crédits n'expirent pas. Ils ne sont pas renouvelés, y compris après un abonnement puis une résiliation.",
            "Pour empêcher qu'un même appareil serve à multiplier les essais, le volume offert est réduit à partir du deuxième compte créé depuis un même téléphone, et peut être nul à partir du troisième. Si tu partages ton téléphone et que cette limitation te paraît injustifiée, écris à support@dressing-app.com : nous rétablissons l'essai.",
          ],
        },
        {
          h: '6. Commande et paiement',
          p: [
            "Nous ne traitons jamais ta carte bancaire. Les paiements passent exclusivement par l'App Store d'Apple ou Google Play, orchestrés par notre prestataire RevenueCat. Nous ne voyons ni ne stockons aucune donnée bancaire.",
            "Le contrat est conclu au moment où tu confirmes l'achat auprès de ton magasin d'applications. La confirmation d'achat et les reçus te sont adressés par email par le magasin concerné.",
          ],
        },
        {
          h: '7. Renouvellement et résiliation',
          p: [
            'Les abonnements sont à durée déterminée avec renouvellement automatique, mensuel ou annuel selon la formule choisie. Ils se renouvellent sauf désactivation au moins 24 heures avant la fin de la période en cours.',
            "La résiliation se fait depuis ton magasin d'applications, dans les réglages de ton compte Apple ou Google, rubrique Abonnements. Elle prend effet à la fin de la période déjà payée : l'accès reste ouvert jusque-là. Supprimer l'application ne résilie pas l'abonnement.",
            "Pour les consommateurs résidant en Allemagne, conformément au droit allemand, lorsqu'un abonnement se prolonge au delà de sa durée initiale, cette prolongation peut être résiliée à tout moment moyennant un préavis d'un mois.",
            "Les demandes de remboursement relèvent d'Apple ou de Google, selon le magasin où l'achat a été effectué. Nous pouvons t'aider dans la démarche mais nous n'avons pas la main dessus.",
          ],
        },
        {
          h: '8. Droit de rétractation',
          p: [
            "Si tu es consommateur et que tu résides dans l'Union européenne, au Royaume-Uni ou au Brésil, tu disposes en principe d'un délai de 14 jours pour te rétracter d'un achat à distance.",
            "Ce droit connaît une exception pour les contenus numériques fournis immédiatement. Au moment de l'achat, il t'est demandé de consentir expressément à ce que le service commence tout de suite, et de reconnaître que ce consentement te fait perdre ton droit de rétractation. Sans ce double consentement, le délai de 14 jours s'applique normalement.",
            "Tant que tu n'as consommé aucun Crown, écris à support@dressing-app.com : nous appuyons ta demande de remboursement auprès du magasin.",
          ],
        },
        {
          h: '9. Réclamations et médiation',
          p: [
            "Écris-nous d'abord, à support@dressing-app.com. Nous nous engageons à répondre sous 7 jours ouvrés.",
            'Si notre réponse ne te satisfait pas, tu peux recourir gratuitement à un médiateur de la consommation. Les coordonnées du médiateur auquel nous avons adhéré sont publiées sur cette page.',
            'Cette page sera mise à jour avec les coordonnées du médiateur avant la mise en vente des abonnements.',
          ],
        },
        {
          h: '10. Droit applicable',
          p: [
            "Ces conditions sont régies par le droit français. Les tribunaux français sont compétents, sous réserve des dispositions impératives protégeant les consommateurs résidant dans l'Union européenne, au Royaume-Uni, en Suisse, en Norvège, en Islande et au Brésil.",
          ],
        },
      ],
    },
    'mentions-legales': {
      slug: 'mentions-legales',
      title: 'Mentions légales',
      sections: [
        {
          h: 'Éditeur',
          p: [
            'Dressing App est édité par Bakouch Daniel, entrepreneur individuel (micro-entreprise).',
            'SIRET : 108 534 470 00019.',
            'Siège : 98 avenue Achille Peretti, 92200 Neuilly-sur-Seine, France.',
            'Contact : support@dressing-app.com pour le support, contact@dressing-app.com pour les demandes générales.',
          ],
        },
        {
          h: 'Directeur de la publication',
          p: ['Daniel Bakouch.'],
        },
        {
          h: 'Hébergeur du site',
          p: ['Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis. vercel.com.'],
        },
        {
          h: 'Hébergement des données de l’application',
          p: ["Supabase, sur l'infrastructure Amazon Web Services, région Europe (Irlande)."],
        },
        {
          h: 'Médiation de la consommation',
          p: [
            "Conformément à l'article L612-1 du Code de la consommation, les coordonnées du médiateur de la consommation auquel nous avons adhéré sont publiées sur la page Conditions générales de vente.",
          ],
        },
        {
          h: 'Propriété intellectuelle',
          p: [
            'Le nom Dressing App, son logo, son design, ses textes et ses visuels sont protégés. Toute reproduction sans autorisation est interdite.',
          ],
        },
      ],
    },
    compte: {
      slug: 'compte',
      title: 'Gérer mon compte et mes données',
      sections: [
        {
          h: 'Supprimer mon compte',
          p: [
            "Dans l'application : Réglages, puis « Découdre l'étiquette ». La suppression est immédiate et définitive.",
            "Elle efface ton profil, ta garde-robe et toutes ses photos, ton historique, tes tenues, tes conversations, tes DRESSING Real, tes publications, ta photo de mannequin et tes liens d'amitié. Les données restantes sur les sauvegardes techniques sont effacées sous 30 jours au plus tard.",
            "Supprimer ton compte ne résilie pas ton abonnement, qui se gère depuis ton magasin d'applications. Pense à le faire avant.",
          ],
        },
        {
          h: 'Exporter mes données',
          p: [
            'Pour obtenir une copie de tes données dans un format lisible, écris à support@dressing-app.com avec « RGPD » en objet. Nous répondons sous un mois.',
          ],
        },
        {
          h: 'Gérer mon abonnement',
          p: [
            'Les abonnements se gèrent depuis App Store, ton compte, Abonnements. Sur Android, depuis Google Play, ton compte, Paiements et abonnements.',
          ],
        },
      ],
    },
    contact: {
      slug: 'contact',
      title: 'Contact',
      intro: 'Une question, un bug, une demande RGPD ou un partenariat ? Écris-nous.',
      sections: [
        {
          h: 'Support',
          p: [
            'Support et réclamations : support@dressing-app.com. Nous répondons sous 7 jours ouvrés.',
          ],
        },
        {
          h: 'Demandes générales',
          p: ['Presse et partenariats : contact@dressing-app.com.'],
        },
        {
          h: 'Confidentialité et données',
          p: [
            'Pour toute demande relative à tes données personnelles (accès, rectification, suppression, export), écris à support@dressing-app.com en précisant « RGPD » en objet.',
          ],
        },
        {
          h: 'Adresse postale',
          p: ['Bakouch Daniel, 98 avenue Achille Peretti, 92200 Neuilly-sur-Seine, France.'],
        },
      ],
    },
  },
};

const en: Dict = {
  tagline: 'Your smart wardrobe.',
  metaDescription:
    'DRESSING: your smart wardrobe. Daily outfit, AI stylist, digital closet and challenges with friends.',
  nav: {
    home: 'Home',
    faq: 'FAQ & Help',
    rejoindre: 'Join',
    abonnements: 'Plans',
    offres: 'The plans',
    fonctionnalites: 'Features',
    telecharger: 'Download',
    confidentialite: 'Privacy',
    cgu: 'Terms',
    cgv: 'Sales terms',
    'mentions-legales': 'Legal notice',
    compte: 'My account',
    contact: 'Contact',
  },
  home: {
    heroTitle: 'Your wardrobe, elevated by AI.',
    heroSubtitle:
      'Digitize your wardrobe, get your daily outfit based on the weather, chat with your personal stylist and challenge your friends.',
    ctaDownload: 'Download on the App Store',
    soon: 'Coming soon',
    featuresTitle: 'What DRESSING does',
    features: [
      {
        title: 'Daily outfit',
        text: 'An outfit generated every day from YOUR wardrobe, based on weather and your event.',
      },
      {
        title: 'AI stylist',
        text: 'A personal stylist that advises you, remembers your taste and follows trends.',
      },
      {
        title: 'Digital wardrobe',
        text: 'Snap your pieces: the AI tags them (category, color, style) and organizes them.',
      },
      {
        title: 'Social & challenges',
        text: 'Add friends, climb the weekly leaderboard and complete style challenges.',
      },
    ],
    tiersTitle: 'Plans',
    tiersSub: 'Two plans. Léon works for you on both, ELITE simply goes further.',
    tiers: [
      {
        name: 'ESSENTIAL',
        price: '€3.99 / month',
        perks: [
          '150 Crowns per month',
          'Daily outfit by Léon',
          'Garment analysis & Street Scan',
          'Dressed mannequin · Carats ×2',
        ],
      },
      {
        name: 'ELITE',
        price: '€7.99 / month',
        perks: [
          '500 Crowns per month',
          'Travel passport & Léon’s Week',
          'AI style profile',
          'Carats ×3 · −20% yearly',
        ],
      },
    ],
    tiersCta: 'See the plans in detail',
    aiNote:
      'Content marked "AI" is generated automatically (Anthropic / Claude) and may contain errors.',
  },
  pricing: {
    title: 'Plans',
    sub: 'Léon calls an AI for every outfit, every analysis, every piece of advice. Your subscription pays for that work, and nothing else.',
    perMonth: '/ month',
    orYearly: 'or',
    perMonthEq: 'that is',
    popular: 'Most complete',
    crownsLabel: 'Crowns per month',
    trialTitle: 'Try before you pay',
    trialText:
      'Every account starts with 8 garment analyses, 3 outfits and 1 style profile on the house. No time limit, no credit card, nothing to cancel.',
    tiers: [
      {
        key: 'essential',
        name: 'ESSENTIAL',
        tagline:
          'Everything for daily life: your outfit each morning, your wardrobe analysed, Léon within reach.',
        monthly: '€3.99',
        yearly: '€38.30 / year',
        yearlyPerMonth: '€3.19 / month',
        save: '−20%',
        crowns: '150',
        perks: [
          'Daily outfit by Léon, every morning',
          'AI photo analysis of your clothes',
          'Rapid capture: several pieces in a row',
          'Unlimited chat with Léon, with memory',
          'Street Scan: decode an outfit you spotted',
          'Style profile, Wishlist, monthly reports',
          'Dressed mannequin',
          'Carats ×2',
        ],
      },
      {
        key: 'elite',
        name: 'ELITE',
        tagline:
          'For those who plan ahead: the week prepared, trips anticipated, three times the Crowns.',
        monthly: '€7.99',
        yearly: '€76.70 / year',
        yearlyPerMonth: '€6.39 / month',
        save: '−20%',
        crowns: '500',
        perks: [
          'Everything in ESSENTIAL, with more than three times the Crowns',
          'Léon’s Week: seven outfits prepared in advance',
          'Travel passport: your suitcase planned for the destination',
          'Carats ×3',
          'Early access to new features',
        ],
      },
    ],
    compareCta: 'Compare features in detail',
    storeNote:
      'Billed through the App Store, cancellable any time from your Apple account settings. No payment data ever goes through DRESSING.',
    aiNote:
      'Content marked "AI" is generated automatically (Anthropic / Claude) and may contain errors.',
  },
  features: {
    title: 'Features',
    sub: 'What a subscription unlocks, line by line. Both plans give access to the same features, except the last two, reserved for ELITE, and differ mostly in how many Crowns you get.',
    colEssential: 'ESSENTIAL',
    colElite: 'ELITE',
    yes: 'Included',
    no: 'Not included',
    groups: [
      {
        title: 'Every morning',
        intro: 'You open the app, your outfit is there.',
        rows: [
          {
            label: 'Daily outfit based on the weather, your occasion and your wardrobe',
            essential: true,
            elite: true,
          },
          {
            label: 'Regenerate an outfit that does not speak to you',
            essential: true,
            elite: true,
          },
          {
            label: 'Refine: occasion, colours, manual weather, tomorrow',
            essential: true,
            elite: true,
          },
          { label: 'Mannequin dressed with your own cut-out pieces', essential: true, elite: true },
          { label: 'Outfit score, streak and statistics', essential: true, elite: true },
        ],
      },
      {
        title: 'Your wardrobe',
        intro: 'Digitised once, used every day.',
        rows: [
          { label: 'Number of pieces', essential: 'Unlimited', elite: 'Unlimited' },
          {
            label: 'AI photo analysis: category, colour, fabric, style',
            essential: true,
            elite: true,
          },
          {
            label: 'Rapid capture: photograph several pieces in a row',
            essential: true,
            elite: true,
          },
          { label: 'Automatic background removal', essential: true, elite: true },
          { label: 'Manual entry and QR code import', essential: true, elite: true },
          { label: 'Vinted listing ready to publish', essential: true, elite: true },
        ],
      },
      {
        title: 'Léon, your stylist',
        intro: 'He knows you, he remembers, he searches for you.',
        rows: [
          { label: 'Unlimited chat, with memory of your taste', essential: true, elite: true },
          { label: 'Léon searches the web for current trends', essential: true, elite: true },
          { label: 'Street Scan: decode an outfit you spotted', essential: true, elite: true },
          { label: 'Style profile analysed by AI', essential: true, elite: true },
          {
            label: 'Wishlist: what your wardrobe is genuinely missing',
            essential: true,
            elite: true,
          },
          { label: 'Monthly reports and yearly Wrapped', essential: true, elite: true },
          {
            label: 'Léon’s Week: seven outfits prepared in advance',
            essential: false,
            elite: true,
          },
          {
            label: 'Travel passport: the suitcase planned for the destination',
            essential: false,
            elite: true,
          },
        ],
      },
      {
        title: 'Style and progression',
        intro: 'What keeps you coming back.',
        rows: [
          { label: 'Personal colour analysis', essential: true, elite: true },
          { label: 'Weekly challenges, badges and ranks', essential: true, elite: true },
          { label: 'Style journal', essential: true, elite: true },
          { label: 'Carats multiplier', essential: '×2', elite: '×3' },
          { label: 'Themes and app icons', essential: true, elite: true },
        ],
      },
      {
        title: 'With friends',
        intro: 'Style is meant to be shared.',
        rows: [
          {
            label: 'DRESSING Real: your outfit of the day, at the appointed hour',
            essential: true,
            elite: true,
          },
          { label: 'Weekly leaderboard among friends', essential: true, elite: true },
          { label: 'Membership card and public profiles', essential: true, elite: true },
        ],
      },
      {
        title: 'Crowns',
        intro:
          'The currency that pays for the AI’s work. Every generation, every analysis spends some.',
        rows: [
          { label: 'Crowns credited each month', essential: '150', elite: '500' },
          { label: 'Unused Crowns roll over', essential: false, elite: false },
        ],
      },
    ],
    ctaTitle: 'Ready to start?',
    ctaText:
      'Your first analyses and outfits are on the house. You only subscribe if Léon wins you over.',
    ctaButton: 'See the plans',
  },
  footer: { rights: 'All rights reserved.', madeIn: 'Designed in Paris.' },
  docs: {
    telecharger: {
      slug: 'telecharger',
      title: 'Download DRESSING',
      intro: 'DRESSING is coming to the App Store.',
      sections: [
        {
          h: 'iOS',
          p: [
            'The app will be available on the App Store (iPhone). This page will be updated with the download link at release.',
          ],
        },
        {
          h: 'Beta',
          p: [
            'A testing phase will precede the public release. You can apply from the Join page, or write to contact@dressing-app.com.',
          ],
        },
      ],
    },
    confidentialite: {
      slug: 'confidentialite',
      title: 'Privacy Policy',
      intro:
        'Version 1.0, effective 19 August 2026. Dressing App sees your wardrobe, your measurements and, if you allow it, a photo of your body. That is intimate data. This document says exactly what we do with it, who it is sent to, and how to retrieve or erase it.',
      sections: [
        {
          h: '1. Data controller',
          p: [
            'The data controller is Bakouch Daniel, sole trader (micro-entreprise), business number SIRET 108 534 470 00019, 98 avenue Achille Peretti, 92200 Neuilly-sur-Seine, France.',
            'Contact for any question or request about your data: support@dressing-app.com, with "GDPR" in the subject line.',
          ],
        },
        {
          h: '2. What we collect',
          p: [
            'Your account: email address, and a password we never see. It is hashed by our authentication provider with a salt unique to your account, and that hashing is irreversible.',
            'Your profile: username, bio, gender, city, measurements (height, weight, build), style preferences, colours you like or avoid, brands, dress rules you set yourself.',
            'Your images: profile photo, photos of your clothes and their cut-out versions, DRESSING Real photos, and a mannequin photo. The last is a full-length photo of you, optional, used only to produce worn-outfit renders. It is stored privately, kept separate from your profile photo, and appears nowhere without your action.',
            'Your usage: outfits generated and worn, dates, associated weather and occasion, history, statistics, Crowns and Carats, badges, streak, challenges, memories kept by the stylist, and conversations with it.',
            'Your location, if you allow it: an approximate position, at neighbourhood level, to get the weather around you. It is not retained. You can decline and type a city instead.',
            'Your social activity in the app: friends, requests, follows, posts, reactions, reports and blocks.',
            'Your subscription: status, plan, renewal date. No banking data ever reaches us.',
            'Your device: a technical identifier generated by the app and kept in the phone keychain. It serves only to recognise a trusted device at sign-in, and to prevent one phone being used to multiply free trials. It cannot track you outside the app and disappears on uninstall.',
            'Crash reports: error type, code location, device model, system version, together with your account’s technical identifier. No image, no screenshot, no wardrobe or conversation content, no email address and no username are included.',
          ],
        },
        {
          h: '3. Why, and on what legal basis',
          p: [
            'Performance of the contract: creating and running your account, analysing your clothes, generating outfits, running the stylist, remembering your preferences, running the social features you enable, managing subscriptions.',
            'Your consent, withdrawable at any time: producing worn-outfit renders from your mannequin photo, sending you product emails (off by default), using your location.',
            'Legal obligation and legitimate interest: moderating published images, detecting abuse, trial fraud and fake accounts, sending security and account emails, fixing bugs from crash reports, keeping accounting records.',
            'Where the basis is consent, you can withdraw it at any time without affecting what was done before.',
          ],
        },
        {
          h: '4. What we do not do',
          p: [
            'We do not sell your data. To anyone, ever. We do not pass it to any data broker, advertising network or social platform.',
            'We do not train any artificial intelligence model on your photos or conversations, and our providers are not permitted to.',
            'We do not carry out advertising profiling, and no decision producing legal effects concerning you is taken by an entirely automated process.',
            'This website uses no analytics, no advertising cookies and no third-party trackers.',
          ],
        },
        {
          h: '5. Who your data is sent to',
          p: [
            'Supabase receives all your data and files, for database and storage hosting. European Union, Ireland.',
            'Anthropic receives garment photos, wardrobe context, preferences, weather and the messages you send the stylist, to analyse pieces, generate outfits and run the conversational stylist. United States.',
            'FASHN AI receives your mannequin photo and the composite outfit image, to produce the photorealistic render. United States.',
            'Google Cloud Vision receives images at the moment of publication, to filter inappropriate content. United States.',
            'Resend receives your email address and the message content, to send emails. United States.',
            'RevenueCat, Apple and Google receive a purchase identifier and subscription status, for payment. United States.',
            'Sentry receives technical crash reports and the account identifier, to fix crashes. European Union, Germany.',
            'Open-Meteo receives an approximate position, with no identifier, for weather and city name. European Union, Germany.',
            'Vercel hosts this website. United States.',
            'We may also disclose data to an administrative or judicial authority where the law requires it, and keep a copy of reported content for as long as needed to handle the report and justify the decision.',
          ],
        },
        {
          h: '6. Transfers outside the European Union',
          p: [
            'Your data is hosted in the European Union, in Ireland.',
            'Some providers are established in the United States. Those transfers rely on the European Commission’s standard contractual clauses, supplemented where applicable by the provider’s certification under the EU US Data Privacy Framework.',
            'In practice, two categories of image leave the European Union: garment photos sent to Anthropic, and your mannequin photo sent to FASHN. If that does not suit you, you can use the app without adding a mannequin photo: the photorealistic render is then replaced by a flat composition of your pieces, and nothing goes to FASHN.',
          ],
        },
        {
          h: '7. How long we keep it',
          p: [
            'While your account exists, your data is kept so the service works.',
            'After you delete your account, it is erased within 30 days at the latest. In practice, erasure from the database and file storage is immediate: the 30-day window covers the rotation of technical backups, on which data persists for a few days before being overwritten.',
            'A few strictly limited exceptions. Accounting records relating to a purchase are kept for 10 years, as the law requires, and contain none of your photos. A copy of reported content and the decision taken are kept for up to 1 year, to justify the decision and handle an appeal. Sign-in alert logs are kept for 90 days. The device fingerprint tied to a free trial is kept for 12 months and contains neither your name nor your email.',
            'An account inactive for 3 years is deleted, after a warning email sent 30 days beforehand.',
          ],
        },
        {
          h: '8. Deleting your account',
          p: [
            'In the app: Settings, then account deletion. Deletion is immediate and permanent.',
            'It erases your profile, your wardrobe and all its photos including cut-out versions, your history, your outfits, your conversations with the stylist, your DRESSING Real photos, your posts and their images, your mannequin photo and the renders derived from it, your friendships, and your authentication account. A confirmation email is sent.',
            'Not erased: the accounting records and moderation copies mentioned above.',
            'Deleting your account does not cancel your subscription, which is managed from your app store. Do that first.',
          ],
        },
        {
          h: '9. Your rights',
          p: [
            'The GDPR gives you rights of access, rectification, erasure, restriction, objection and portability.',
            'Access and portability: write to support@dressing-app.com and we will send a copy of your data in a readable format within one month. Rectification: most information can be changed directly in the app settings. Erasure: the account deletion button in the app.',
            'Objection and withdrawal of consent: delete your mannequin photo to stop photorealistic rendering, untick product emails in settings, withdraw location permission in your phone settings.',
            'If our answer does not satisfy you, you can lodge a complaint with the French data protection authority, CNIL, 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07, cnil.fr.',
          ],
        },
        {
          h: '10. Security',
          p: [
            'Traffic between the app and our servers is encrypted, and data is encrypted at rest.',
            'Access to your data is partitioned at the database level: a row-level security rule means an account can only read its own data, independently of the app code.',
            'Wardrobe, profile and mannequin photos live in private storage, reachable only through signed, temporary links. Only DRESSING Real photos and outfit posts, which you trigger yourself, sit in public storage.',
            'Access keys for the artificial intelligence services are never in the app: everything goes through our servers.',
            'An email alert is sent when you sign in from an unknown device. That message never contains a password reset link: if you receive one claiming to come from us, it does not.',
            'In the event of a data breach likely to create a risk to your rights, we notify the CNIL within 72 hours and notify you directly where the risk is high.',
          ],
        },
        {
          h: '11. Minors',
          p: [
            'The app is not for under-13s.',
            'In France, processing the data of a minor under 15 for an online service requires the joint consent of the minor and the holder of parental authority. If you are between 13 and 15, you must therefore have a parent’s agreement. We may ask for confirmation of it.',
            'If you are a parent and find an account was created by your child without your agreement, write to support@dressing-app.com and the account and data will be deleted.',
            'The social feed prohibits publishing content depicting a minor suggestively. Automated moderation is set to reject such images, and any report to that effect is handled as the highest priority.',
          ],
        },
        {
          h: '12. Cookies',
          p: [
            'This is a static website. It sets no analytics cookies, no advertising cookies and no third-party trackers. No consent banner is needed, because there is nothing to consent to.',
            'The contact form transmits only what you write in it, plus one technical value used to limit automated submissions.',
            'If an analytics tool were ever added, a compliant consent banner would be put in place first, and this document updated.',
          ],
        },
        {
          h: '13. Changes',
          p: [
            'This document may change. Any substantial change is announced in the app and by email at least 30 days before it takes effect. The version date is shown at the top.',
          ],
        },
      ],
    },
    cgu: {
      slug: 'cgu',
      title: 'Terms of Use',
      intro:
        'Version 1.0, effective 19 August 2026. Minimum age: 13. Between 13 and 15, a parent must agree. Creating an account means accepting these terms.',
      sections: [
        {
          h: '1. Who publishes Dressing App',
          p: [
            'Dressing App is published by Bakouch Daniel, sole trader (micro-entreprise), business number SIRET 108 534 470 00019, 98 avenue Achille Peretti, 92200 Neuilly-sur-Seine, France.',
            'Support and complaints: support@dressing-app.com. Press and partnerships: contact@dressing-app.com.',
            'Copyright agent for DMCA takedown notices: support@dressing-app.com.',
          ],
        },
        {
          h: '2. Your account',
          p: [
            'Registration is required. It uses an email address and a password, and requires email confirmation.',
            'Keep your password confidential. You are responsible for what happens from your account. Tell us if you believe someone else is accessing it.',
            'One account per person. Creating several accounts to claim a free trial or a referral benefit more than once allows us to close them and withdraw those benefits.',
            'You can delete your account at any time from the app, in Settings.',
          ],
        },
        {
          h: '3. What you may publish',
          p: [
            'Allowed: photos of clothes and outfits you actually own, photos of yourself, a username and a bio that represent you.',
            'Not allowed: pornographic or sexually explicit content, and in any form whatsoever sexual content involving a minor. Violent content, weapons, incitement to hatred, discrimination or harassment. Impersonation, and photos of another person without their consent. Reproducing works or brand visuals you hold no rights to. Disguised advertising, solicitation, spam, reselling access to the service.',
            'Any attempt to circumvent the technical limits of the service, automate its use, or extract its data in bulk is also prohibited.',
            'Sexual content involving a minor results in immediate and permanent account closure, without notice, and a report to the competent authorities. This rule admits no exception.',
          ],
        },
        {
          h: '4. Your content and your rights in it',
          p: [
            'Your photos remain yours. We become the owner of nothing.',
            'To operate the service, you grant us a limited, non-exclusive, royalty-free and revocable licence, allowing us only to store your photos, display them in your app, transmit them to our artificial intelligence providers to produce the analyses and renders you request, and, if you voluntarily publish an outfit, display it in the feed to the audience you selected.',
            'This licence ends when you delete the content, or your account. It does not allow us to sell your photos or use them in our communications.',
            'We do not use your photos to train artificial intelligence models, and our providers are not permitted to do so either.',
            'The app, its name, logo, design and texts belong to us. These terms grant you no rights in them.',
          ],
        },
        {
          h: '5. Moderation, reporting, appeal',
          p: [
            'Published content is moderated, combining automated image filtering at publication with human handling of reports.',
            'Every post can be reported from the app. A post accumulating distinct reports is automatically placed under human review. You can also block someone, which hides their content from you and yours from them.',
            'We may remove content, restrict its visibility, or suspend an account where these terms are not respected.',
            'If a decision concerns you, you are informed and can contest it by writing to support@dressing-app.com. We reply within 7 working days, and the appeal is reviewed by a person, never by an automated process alone.',
          ],
        },
        {
          h: '6. Artificial intelligence',
          p: [
            'Some features rely on artificial intelligence models operated by third-party providers, described in our Privacy Policy.',
            'Suggestions are not professional advice. They are provided as is, without warranty of accuracy.',
            'Visual renders are generated images. When the app shows you an outfit worn on yourself, that image is not a photograph: it is produced by a model from your mannequin photo and your garment photos, and may differ from reality. If you publish such an image, it is labelled as generated by artificial intelligence.',
            'Generating a render from another person’s photo, or publishing a generated image as though it were an authentic photograph, is prohibited.',
          ],
        },
        {
          h: '7. Changes to the service',
          p: [
            'The service evolves. We may add, change or remove features, and change prices.',
            'Where a change has a significant adverse effect on your use, we inform you. You then have at least 30 days from that notice or from the change taking effect, whichever is later, either to continue using the unmodified version where technically possible, or to terminate at no cost.',
            'A price increase never applies to a period already paid for.',
            'Changes to this document are announced with their effective date, at least 30 days in advance.',
          ],
        },
        {
          h: '8. Availability and liability',
          p: [
            'We do our best to keep the service running, without guaranteeing continuous availability or freedom from error. Planned interruptions are announced 7 days in advance.',
            'Our liability does not extend to the consequences of a clothing choice, or of a decision to buy or sell made after reading a suggestion, nor to damage resulting from breach of these terms.',
            'Nothing here limits the rights the law gives you as a consumer, nor our liability for gross negligence, wilful misconduct or personal injury.',
          ],
        },
        {
          h: '9. Suspension and closure',
          p: [
            'We may suspend or close an account for legitimate reasons, including breach of these terms, fraud, non-payment, or harm to the security of the service or the rights of others.',
            'We may also terminate where performance becomes lastingly impossible, or where the person concerned appears on an international sanctions list.',
            'Except for serious misconduct or a contrary legal obligation, 30 days’ notice is given and the unused portion of the subscription is refunded pro rata.',
          ],
        },
        {
          h: '10. App Store, Google Play, TestFlight',
          p: [
            'The app is distributed by Apple’s App Store and by Google Play. This contract is between you and us, never with Apple or Google.',
            'Apple and Google are not responsible for the app, its content or its support. Apple and its subsidiaries are third-party beneficiaries of this contract and may enforce it against you. Support is provided by us, at support@dressing-app.com.',
            'The app may be distributed early via TestFlight. That distribution is for testing only: the build may be unstable, incomplete, and its data may be reset. It must not be redistributed, made public, or used commercially.',
            'In line with app store requirements, we maintain content moderation, a reporting and blocking mechanism, and a zero-tolerance policy towards child sexual abuse or exploitation material.',
          ],
        },
        {
          h: '11. Accessibility',
          p: [
            'We want Dressing App to be usable by as many people as possible, including with system accessibility tools: screen reader, larger text, reduced motion, increased contrast.',
            'We do not claim conformance with a specific accessibility standard at this stage. Gaps exist and we are closing them. If part of the app is unusable for you, write to support@dressing-app.com describing the obstacle: these reports are handled as a priority.',
          ],
        },
        {
          h: '12. Excluded territories',
          p: [
            'The service is not available from territories subject to restrictive measures adopted by the European Union, France or any other competent authority, nor to persons on an applicable sanctions list.',
          ],
        },
        {
          h: '13. Governing law and disputes',
          p: [
            'Any complaint may be sent to support@dressing-app.com. We commit to replying within 7 working days.',
            'The consumer mediation arrangements are set out in our Terms of Sale.',
            'These terms are governed by French law. The French courts have jurisdiction. If you are a consumer resident in the European Union, the United Kingdom, Switzerland, Norway, Iceland or Brazil, you keep the benefit of the mandatory provisions of your country of residence and may bring proceedings before its courts.',
          ],
        },
        {
          h: '14. Miscellaneous',
          p: [
            'If a clause of this document is held invalid, it is set aside and the rest continues to apply. Not invoking a clause at a given time is not a waiver of it.',
            'You may not assign this contract. We may assign it on a transfer of the business, without diminishing your rights.',
            'These terms, the Terms of Sale and the Privacy Policy form the entire agreement between us.',
          ],
        },
      ],
    },
    cgv: {
      slug: 'cgv',
      title: 'Terms of Sale',
      intro:
        'Version 1.0, effective 19 August 2026. These terms cover paid Dressing App subscriptions and supplement the Terms of Use.',
      sections: [
        {
          h: '1. Seller',
          p: [
            'Subscriptions are sold by Bakouch Daniel, sole trader (micro-entreprise), business number SIRET 108 534 470 00019, 98 avenue Achille Peretti, 92200 Neuilly-sur-Seine, France.',
            'Contact: support@dressing-app.com.',
          ],
        },
        {
          h: '2. Nature of the service',
          p: [
            'Dressing App is a subscription digital service. There are no physical goods and no delivery.',
            'An account is required for any purchase.',
          ],
        },
        {
          h: '3. Plans and prices',
          p: [
            'FREE is free of charge. ESSENTIAL is 3.99 EUR per month or 38.30 EUR per year, and includes 150 Crowns per month. ELITE is 7.99 EUR per month or 76.70 EUR per year, and includes 500 Crowns per month.',
            'The annual plan represents a saving of about 20 percent against twelve monthly payments.',
            'The prices that govern are those shown in the app at the time of purchase, in your currency and inclusive of all taxes. The amounts above are given for France, in euros, and may differ depending on the country of your App Store or Google Play account, which applies its own pricing and tax rules.',
            'Free months may be granted through occasional programmes, notably referral and the beta tester programme, under the rules announced with those programmes.',
          ],
        },
        {
          h: '4. Crowns',
          p: [
            'Crowns are an internal unit measuring your use of the artificial intelligence features. They are credited monthly with the subscription.',
            'They cannot be bought separately, converted into money, refunded, or transferred between accounts. They have no monetary value and are not electronic money. Unused Crowns do not carry over from one month to the next.',
          ],
        },
        {
          h: '5. The free trial',
          p: [
            'The Dressing App trial is counted in uses, not in days. No payment card is requested, and it never converts automatically into a paid subscription.',
            'On account creation you receive 8 garment photo analyses, 1 style profile generation and 3 outfit generations, with regenerations counting towards that total.',
            'These credits do not expire. They are not renewed, including after subscribing and then cancelling.',
            'To prevent one device being used to multiply trials, the amount offered is reduced from the second account created on the same phone, and may be nil from the third. If you share a phone and this limit seems unjustified, write to support@dressing-app.com and we will restore the trial.',
          ],
        },
        {
          h: '6. Order and payment',
          p: [
            'We never handle your payment card. Payments go exclusively through Apple’s App Store or Google Play, orchestrated by our provider RevenueCat. We neither see nor store any banking data.',
            'The contract is concluded when you confirm the purchase with your app store. Purchase confirmations and receipts are emailed to you by that store.',
          ],
        },
        {
          h: '7. Renewal and cancellation',
          p: [
            'Subscriptions are fixed-term with automatic renewal, monthly or yearly. They renew unless turned off at least 24 hours before the end of the current period.',
            'Cancellation is done from your app store, in your Apple or Google account settings, under Subscriptions. It takes effect at the end of the period already paid for: access remains open until then. Deleting the app does not cancel the subscription.',
            'For consumers resident in Germany, under German law, where a subscription extends beyond its initial term, that extension may be cancelled at any time with one month’s notice.',
            'Refund requests are handled by Apple or Google, depending on where the purchase was made. We can help with the process but we do not control it.',
          ],
        },
        {
          h: '8. Right of withdrawal',
          p: [
            'If you are a consumer resident in the European Union, the United Kingdom or Brazil, you have in principle 14 days to withdraw from a distance purchase.',
            'That right is subject to an exception for digital content supplied immediately. At the point of purchase you are asked to expressly consent to the service starting straight away, and to acknowledge that this consent causes you to lose your right of withdrawal. Without both, the 14-day period applies normally.',
            'As long as you have used no Crowns, write to support@dressing-app.com and we will support your refund request with the store.',
          ],
        },
        {
          h: '9. Complaints and mediation',
          p: [
            'Write to us first, at support@dressing-app.com. We commit to replying within 7 working days.',
            'If our answer does not satisfy you, you may use a consumer mediator free of charge. The details of the mediator we have signed up with are published on this page.',
            'This page will be updated with the mediator’s details before subscriptions go on sale.',
          ],
        },
        {
          h: '10. Governing law',
          p: [
            'These terms are governed by French law. The French courts have jurisdiction, subject to the mandatory provisions protecting consumers resident in the European Union, the United Kingdom, Switzerland, Norway, Iceland and Brazil.',
          ],
        },
      ],
    },
    'mentions-legales': {
      slug: 'mentions-legales',
      title: 'Legal notice',
      sections: [
        {
          h: 'Publisher',
          p: [
            'Dressing App is published by Bakouch Daniel, sole trader (micro-entreprise).',
            'Business number (SIRET): 108 534 470 00019.',
            'Registered address: 98 avenue Achille Peretti, 92200 Neuilly-sur-Seine, France.',
            'Contact: support@dressing-app.com for support, contact@dressing-app.com for general enquiries.',
          ],
        },
        {
          h: 'Publication director',
          p: ['Daniel Bakouch.'],
        },
        {
          h: 'Website host',
          p: ['Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, United States. vercel.com.'],
        },
        {
          h: 'App data hosting',
          p: ['Supabase, on Amazon Web Services infrastructure, Europe (Ireland) region.'],
        },
        {
          h: 'Consumer mediation',
          p: [
            'Under article L612-1 of the French Consumer Code, the details of the consumer mediator we have signed up with are published on the Terms of Sale page.',
          ],
        },
        {
          h: 'Intellectual property',
          p: [
            'The Dressing App name, logo, design, texts and visuals are protected. Reproduction without permission is prohibited.',
          ],
        },
      ],
    },
    compte: {
      slug: 'compte',
      title: 'Managing my account and data',
      sections: [
        {
          h: 'Delete my account',
          p: [
            'In the app: Settings, then account deletion. Deletion is immediate and permanent.',
            'It erases your profile, your wardrobe and all its photos, your history, your outfits, your conversations, your DRESSING Real photos, your posts, your mannequin photo and your friendships. Data remaining on technical backups is erased within 30 days at the latest.',
            'Deleting your account does not cancel your subscription, which is managed from your app store. Do that first.',
          ],
        },
        {
          h: 'Export my data',
          p: [
            'To get a copy of your data in a readable format, write to support@dressing-app.com with "GDPR" in the subject line. We reply within one month.',
          ],
        },
        {
          h: 'Manage my subscription',
          p: [
            'Subscriptions are managed from App Store, your account, Subscriptions. On Android, from Google Play, your account, Payments and subscriptions.',
          ],
        },
      ],
    },
    contact: {
      slug: 'contact',
      title: 'Contact',
      intro: 'A question, a bug, a GDPR request or a partnership? Write to us.',
      sections: [
        {
          h: 'Support',
          p: ['Support and complaints: support@dressing-app.com. We reply within 7 working days.'],
        },
        {
          h: 'General enquiries',
          p: ['Press and partnerships: contact@dressing-app.com.'],
        },
        {
          h: 'Privacy and data',
          p: [
            'For any request about your personal data (access, rectification, deletion, export), write to support@dressing-app.com with "GDPR" in the subject line.',
          ],
        },
        {
          h: 'Postal address',
          p: ['Bakouch Daniel, 98 avenue Achille Peretti, 92200 Neuilly-sur-Seine, France.'],
        },
      ],
    },
  },
};

export const CONTENT: Record<Lang, Dict> = { fr, en };
