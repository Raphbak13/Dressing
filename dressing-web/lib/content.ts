// Contenu du site DRESSING (FR/EN). Les textes légaux sont des MODÈLES :
// remplace les [CHAMPS] (raison sociale, SIRET, adresse…) et fais-les RELIRE PAR
// UN JURISTE avant mise en production. Je ne suis pas avocat.

export type Lang = 'fr' | 'en';
export const LANGS: Lang[] = ['fr', 'en'];

export const CONTACT_EMAIL = 'contact@dressing-app.fr';

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

type Dict = {
  tagline: string;
  metaDescription: string;
  nav: Record<'home' | DocSlug, string>;
  home: {
    heroTitle: string;
    heroSubtitle: string;
    ctaDownload: string;
    soon: string;
    featuresTitle: string;
    features: { title: string; text: string }[];
    tiersTitle: string;
    tiers: { name: string; price: string; perks: string[] }[];
    aiNote: string;
  };
  footer: { rights: string; madeIn: string };
  docs: Record<DocSlug, Doc>;
};

const fr: Dict = {
  tagline: 'Ton dressing intelligent.',
  metaDescription:
    "DRESSING : ta garde-robe intelligente. Tenue du jour, styliste IA, garde-robe numérique et défis entre amis.",
  nav: {
    home: 'Accueil',
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
      "Numérise ta garde-robe, reçois ta tenue du jour selon la météo, discute avec ton styliste personnel et défie tes amis.",
    ctaDownload: 'Télécharger sur l’App Store',
    soon: 'Bientôt disponible',
    featuresTitle: 'Ce que fait DRESSING',
    features: [
      { title: 'Tenue du jour', text: "Une tenue générée chaque jour selon la météo et ton événement, à partir de TA garde-robe." },
      { title: 'Styliste IA', text: 'Un styliste personnel qui te conseille, se souvient de tes goûts et suit les tendances.' },
      { title: 'Garde-robe numérique', text: "Photographie tes pièces : l'IA les analyse (catégorie, couleur, style) et les range." },
      { title: 'Social & défis', text: 'Ajoute tes amis, grimpe au classement hebdo et relève des défis de style.' },
    ],
    tiersTitle: 'Abonnements',
    tiers: [
      { name: 'MAISON', price: '', perks: ['150 Crowns / mois', 'Tenue du jour & styliste IA', 'Analyse de vêtements & Scan Street'] },
      { name: 'ELITE', price: '', perks: ['500 Crowns / mois', 'Profil de style par IA', 'Aesthetics, carte perso, avatar IA', 'Thème & icône exclusifs'] },
    ],
    aiNote:
      "Les contenus marqués « IA » sont générés automatiquement (Anthropic / Claude) et peuvent contenir des erreurs.",
  },
  footer: { rights: 'Tous droits réservés.', madeIn: 'Conçu à Paris.' },
  docs: {
    telecharger: {
      slug: 'telecharger',
      title: 'Télécharger DRESSING',
      intro: "DRESSING arrive bientôt sur l'App Store.",
      sections: [
        { h: 'iOS', p: ["L'application sera disponible sur l'App Store (iPhone). Cette page sera mise à jour avec le lien de téléchargement dès la publication."] },
        { h: 'Bêta', p: ["Une phase de test (TestFlight) précédera la sortie publique. Écris-nous à " + CONTACT_EMAIL + ' pour participer.'] },
      ],
    },
    confidentialite: {
      slug: 'confidentialite',
      title: 'Politique de confidentialité',
      intro: 'Dernière mise à jour : [DATE]. Cette politique explique quelles données DRESSING collecte et comment elles sont utilisées.',
      sections: [
        { h: 'Responsable du traitement', p: ['DRESSING est édité par [RAISON SOCIALE], [STATUT — ex. micro-entreprise], SIRET [SIRET], [ADRESSE]. Contact : ' + CONTACT_EMAIL + '.'] },
        { h: 'Données que nous collectons', p: [
          'Compte : adresse e-mail, mot de passe (stocké de façon chiffrée/hachée).',
          'Profil : prénom, ville, genre, mensurations (taille, poids, carrure), couleurs aimées/évitées, marques, styles, bio, pseudo.',
          'Photos : photo de profil et photos de tes vêtements.',
          'Usage : garde-robe, tenues portées, historique, Crowns, défis, statistiques.',
          'Social : amis, demandes, classement, signalements/blocages.',
          'Abonnement : statut géré via Apple / RevenueCat (nous ne stockons jamais tes données bancaires).',
        ] },
        { h: 'Finalités', p: ['Fournir le service (garde-robe, tenue du jour), les recommandations par IA, les fonctions sociales et la gestion des abonnements.'] },
        { h: 'Sous-traitants et destinataires', p: [
          'Supabase — hébergement de la base de données et des fichiers (région [RÉGION]).',
          'Anthropic (Claude) — traitement par IA : les photos de vêtements et préférences nécessaires sont envoyées pour analyse/génération, via un serveur sécurisé. Le détourage des photos se fait sur ton appareil (non envoyé).',
          'Apple / RevenueCat — gestion des abonnements.',
          'Open-Meteo — météo (aucune donnée personnelle transmise).',
        ] },
        { h: 'Transferts hors Union européenne', p: ['Certains prestataires (Anthropic, Vercel) sont situés aux États-Unis ; les transferts sont encadrés par des clauses contractuelles types.'] },
        { h: 'Durée de conservation', p: ['Tes données sont conservées tant que ton compte existe. À la suppression du compte, elles sont effacées (voir « Mon compte »).'] },
        { h: 'Tes droits (RGPD)', p: ["Tu disposes d'un droit d'accès, de rectification, d'effacement, de portabilité et d'opposition. Tu peux supprimer ton compte directement dans l'app (Paramètres → Supprimer mon compte) ou nous écrire à " + CONTACT_EMAIL + '.'] },
        { h: 'Âge minimum', p: ["DRESSING n'est pas destiné aux enfants de moins de [ÂGE MINIMUM] ans."] },
        { h: 'Consentement IA', p: ["L'usage des fonctionnalités d'IA est soumis à ton consentement, recueilli au premier lancement de l'application."] },
      ],
    },
    cgu: {
      slug: 'cgu',
      title: "Conditions générales d'utilisation",
      intro: "En utilisant DRESSING, tu acceptes les présentes conditions. Dernière mise à jour : [DATE].",
      sections: [
        { h: 'Objet', p: ["Les CGU encadrent l'accès et l'usage de l'application DRESSING."] },
        { h: 'Compte', p: ['Tu es responsable de la confidentialité de tes identifiants et des activités sur ton compte. Un compte par personne.'] },
        { h: 'Usage acceptable', p: ['Tu t’engages à ne pas publier de contenu illégal, haineux, harcelant ou portant atteinte aux droits d’autrui, et à ne pas détourner le service.'] },
        { h: 'Contenu et modération', p: ['Tu restes responsable du contenu que tu publies (pseudo, bio, photos). Tout utilisateur peut signaler ou bloquer un autre utilisateur. Nous pouvons retirer un contenu et suspendre un compte en cas de manquement.'] },
        { h: 'Intelligence artificielle', p: ['Certaines fonctions reposent sur une IA (Anthropic / Claude). Les suggestions sont fournies « en l’état », sans garantie d’exactitude ; elles ne constituent pas un conseil professionnel.'] },
        { h: 'Propriété intellectuelle', p: ['L’application, sa marque et son design sont protégés. Tu conserves les droits sur tes photos ; tu nous accordes une licence limitée pour les traiter afin de fournir le service.'] },
        { h: 'Disponibilité et responsabilité', p: ['Le service est fourni sans garantie de disponibilité continue. Notre responsabilité est limitée dans les conditions prévues par la loi applicable.'] },
        { h: 'Résiliation', p: ['Tu peux supprimer ton compte à tout moment. Nous pouvons résilier en cas de violation des présentes.'] },
        { h: 'Droit applicable', p: ['Les présentes sont régies par le droit français. Contact : ' + CONTACT_EMAIL + '.'] },
      ],
    },
    cgv: {
      slug: 'cgv',
      title: 'Conditions générales de vente',
      intro: "Les présentes CGV encadrent les abonnements payants de DRESSING. Dernière mise à jour : [DATE].",
      sections: [
        { h: 'Offres', p: ['DRESSING propose des abonnements MAISON et ELITE, en formule mensuelle ou annuelle. Les prix exacts sont affichés dans l’application avant l’achat.'] },
        { h: 'Paiement', p: ['Les achats sont effectués via l’App Store d’Apple. Le paiement est débité sur ton compte Apple. Nous ne traitons ni ne stockons aucune donnée de paiement.'] },
        { h: 'Renouvellement automatique', p: ['Les abonnements sont à renouvellement automatique. Ils se renouvellent sauf désactivation au moins 24 h avant la fin de la période en cours, depuis les réglages de ton compte Apple.'] },
        { h: 'Gestion et résiliation', p: ['Tu gères et résilies ton abonnement directement dans les réglages de ton compte Apple (App Store → Abonnements).'] },
        { h: 'Rétractation', p: ["S'agissant de contenus numériques fournis immédiatement, tu reconnais renoncer à ton droit de rétractation dès le début de l'exécution. Les remboursements éventuels relèvent de la politique d'Apple."] },
        { h: 'Crowns', p: ['Les « Crowns » sont une monnaie interne permettant d’utiliser les fonctions d’IA. Ils ne sont ni convertibles en argent, ni remboursables, ni transférables.'] },
        { h: 'Contact', p: ['Pour toute question : ' + CONTACT_EMAIL + '.'] },
      ],
    },
    'mentions-legales': {
      slug: 'mentions-legales',
      title: 'Mentions légales',
      sections: [
        { h: 'Éditeur', p: ['DRESSING, édité par [RAISON SOCIALE], [STATUT], SIRET [SIRET], [ADRESSE]. Contact : ' + CONTACT_EMAIL + '.'] },
        { h: 'Directeur de la publication', p: ['[NOM DU DIRECTEUR DE PUBLICATION].'] },
        { h: 'Hébergeur du site', p: ['Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA — vercel.com.'] },
        { h: 'Hébergement des données', p: ['Les données de l’application sont hébergées par Supabase (infrastructure Amazon Web Services), région [RÉGION].'] },
      ],
    },
    compte: {
      slug: 'compte',
      title: 'Gérer mon compte et mes données',
      sections: [
        { h: 'Supprimer mon compte', p: ["Dans l'application : Paramètres → Supprimer mon compte. La suppression efface définitivement ton profil, ta garde-robe, ton historique, tes photos et tes données sociales."] },
        { h: 'Exporter mes données', p: ['Pour obtenir une copie de tes données, écris-nous à ' + CONTACT_EMAIL + '.'] },
        { h: 'Gérer mon abonnement', p: ['Les abonnements se gèrent depuis App Store → ton compte → Abonnements.'] },
      ],
    },
    contact: {
      slug: 'contact',
      title: 'Contact',
      intro: 'Une question, un bug, une demande RGPD ou un partenariat ? Écris-nous.',
      sections: [
        { h: 'E-mail', p: ['Support et demandes générales : ' + CONTACT_EMAIL + '. Nous répondons généralement sous quelques jours ouvrés.'] },
        { h: 'Confidentialité & données', p: ['Pour toute demande relative à tes données personnelles (accès, suppression, export), utilise la même adresse en précisant « RGPD » en objet.'] },
        { h: 'Signalement', p: ["Pour signaler un contenu ou un comportement inapproprié, utilise le bouton « Signaler » dans l'application, ou écris-nous directement."] },
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
      { title: 'Daily outfit', text: 'An outfit generated every day from YOUR wardrobe, based on weather and your event.' },
      { title: 'AI stylist', text: 'A personal stylist that advises you, remembers your taste and follows trends.' },
      { title: 'Digital wardrobe', text: 'Snap your pieces: the AI tags them (category, color, style) and organizes them.' },
      { title: 'Social & challenges', text: 'Add friends, climb the weekly leaderboard and complete style challenges.' },
    ],
    tiersTitle: 'Subscriptions',
    tiers: [
      { name: 'MAISON', price: '', perks: ['150 Crowns / month', 'Daily outfit & AI stylist', 'Garment analysis & Street Scan'] },
      { name: 'ELITE', price: '', perks: ['500 Crowns / month', 'AI style profile', 'Aesthetics, custom card, AI avatar', 'Exclusive theme & app icon'] },
    ],
    aiNote: 'Content marked "AI" is generated automatically (Anthropic / Claude) and may contain errors.',
  },
  footer: { rights: 'All rights reserved.', madeIn: 'Designed in Paris.' },
  docs: {
    telecharger: {
      slug: 'telecharger',
      title: 'Download DRESSING',
      intro: 'DRESSING is coming soon to the App Store.',
      sections: [
        { h: 'iOS', p: ['The app will be available on the App Store (iPhone). This page will be updated with the download link at launch.'] },
        { h: 'Beta', p: ['A TestFlight beta will precede the public release. Email us at ' + CONTACT_EMAIL + ' to join.'] },
      ],
    },
    confidentialite: {
      slug: 'confidentialite',
      title: 'Privacy Policy',
      intro: 'Last updated: [DATE]. This policy explains what data DRESSING collects and how it is used.',
      sections: [
        { h: 'Data controller', p: ['DRESSING is published by [LEGAL ENTITY], [STATUS], registration no. [ID], [ADDRESS]. Contact: ' + CONTACT_EMAIL + '.'] },
        { h: 'Data we collect', p: [
          'Account: email address, password (stored encrypted/hashed).',
          'Profile: first name, city, gender, measurements, liked/avoided colors, brands, styles, bio, username.',
          'Photos: profile photo and photos of your clothes.',
          'Usage: wardrobe, worn outfits, history, Crowns, challenges, statistics.',
          'Social: friends, requests, leaderboard, reports/blocks.',
          'Subscription: status managed via Apple / RevenueCat (we never store payment data).',
        ] },
        { h: 'Purposes', p: ['To provide the service (wardrobe, daily outfit), AI recommendations, social features and subscription management.'] },
        { h: 'Processors and recipients', p: [
          'Supabase — database and file hosting (region [REGION]).',
          'Anthropic (Claude) — AI processing: required garment photos and preferences are sent for analysis/generation via a secure server. Photo background removal runs on your device (not sent).',
          'Apple / RevenueCat — subscription management.',
          'Open-Meteo — weather (no personal data sent).',
        ] },
        { h: 'Transfers outside the EU', p: ['Some providers (Anthropic, Vercel) are located in the USA; transfers are governed by standard contractual clauses.'] },
        { h: 'Retention', p: ['Your data is kept as long as your account exists. On deletion, it is erased (see "My account").'] },
        { h: 'Your rights (GDPR)', p: ['You have the right to access, rectify, erase, port and object. You can delete your account in the app (Settings → Delete my account) or email ' + CONTACT_EMAIL + '.'] },
        { h: 'Minimum age', p: ['DRESSING is not intended for children under [MIN AGE].'] },
        { h: 'AI consent', p: ['Use of AI features is subject to your consent, collected on first launch.'] },
      ],
    },
    cgu: {
      slug: 'cgu',
      title: 'Terms of Use',
      intro: 'By using DRESSING you accept these terms. Last updated: [DATE].',
      sections: [
        { h: 'Purpose', p: ['These terms govern access to and use of the DRESSING app.'] },
        { h: 'Account', p: ['You are responsible for keeping your credentials confidential and for activity on your account. One account per person.'] },
        { h: 'Acceptable use', p: ['You agree not to post illegal, hateful, harassing or infringing content, and not to misuse the service.'] },
        { h: 'Content and moderation', p: ['You remain responsible for the content you post (username, bio, photos). Any user can report or block another user. We may remove content and suspend accounts for violations.'] },
        { h: 'Artificial intelligence', p: ['Some features rely on AI (Anthropic / Claude). Suggestions are provided "as is", without warranty of accuracy, and are not professional advice.'] },
        { h: 'Intellectual property', p: ['The app, brand and design are protected. You keep the rights to your photos; you grant us a limited license to process them to provide the service.'] },
        { h: 'Availability and liability', p: ['The service is provided without guarantee of continuous availability. Our liability is limited as permitted by applicable law.'] },
        { h: 'Termination', p: ['You may delete your account at any time. We may terminate in case of breach.'] },
        { h: 'Governing law', p: ['These terms are governed by French law. Contact: ' + CONTACT_EMAIL + '.'] },
      ],
    },
    cgv: {
      slug: 'cgv',
      title: 'Sales Terms',
      intro: 'These terms govern DRESSING paid subscriptions. Last updated: [DATE].',
      sections: [
        { h: 'Plans', p: ['DRESSING offers MAISON and ELITE subscriptions, monthly or yearly. Exact prices are shown in the app before purchase.'] },
        { h: 'Payment', p: ['Purchases are made via Apple’s App Store and charged to your Apple account. We do not process or store any payment data.'] },
        { h: 'Auto-renewal', p: ['Subscriptions auto-renew unless turned off at least 24h before the end of the current period, in your Apple account settings.'] },
        { h: 'Management and cancellation', p: ['Manage and cancel your subscription in your Apple account settings (App Store → Subscriptions).'] },
        { h: 'Withdrawal', p: ['For digital content supplied immediately, you waive your right of withdrawal once delivery begins. Any refunds are handled by Apple’s policy.'] },
        { h: 'Crowns', p: ['"Crowns" are an in-app currency to use AI features. They are not convertible to money, refundable or transferable.'] },
        { h: 'Contact', p: ['Questions: ' + CONTACT_EMAIL + '.'] },
      ],
    },
    'mentions-legales': {
      slug: 'mentions-legales',
      title: 'Legal Notice',
      sections: [
        { h: 'Publisher', p: ['DRESSING, published by [LEGAL ENTITY], [STATUS], registration no. [ID], [ADDRESS]. Contact: ' + CONTACT_EMAIL + '.'] },
        { h: 'Publication director', p: ['[PUBLICATION DIRECTOR NAME].'] },
        { h: 'Website host', p: ['Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA — vercel.com.'] },
        { h: 'Data hosting', p: ['App data is hosted by Supabase (Amazon Web Services), region [REGION].'] },
      ],
    },
    compte: {
      slug: 'compte',
      title: 'Manage my account and data',
      sections: [
        { h: 'Delete my account', p: ['In the app: Settings → Delete my account. Deletion permanently erases your profile, wardrobe, history, photos and social data.'] },
        { h: 'Export my data', p: ['To get a copy of your data, email ' + CONTACT_EMAIL + '.'] },
        { h: 'Manage my subscription', p: ['Subscriptions are managed in App Store → your account → Subscriptions.'] },
      ],
    },
    contact: {
      slug: 'contact',
      title: 'Contact',
      intro: 'A question, a bug, a GDPR request or a partnership? Get in touch.',
      sections: [
        { h: 'Email', p: ['Support and general inquiries: ' + CONTACT_EMAIL + '. We usually reply within a few business days.'] },
        { h: 'Privacy & data', p: ['For any request about your personal data (access, deletion, export), use the same address with "GDPR" in the subject.'] },
        { h: 'Reporting', p: ['To report inappropriate content or behavior, use the "Report" button in the app, or email us directly.'] },
      ],
    },
  },
};

export const CONTENT: Record<Lang, Dict> = { fr, en };
