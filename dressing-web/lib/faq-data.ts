// FAQ DRESSING, français uniquement (choix produit). Chaque réponse doit se
// suffire à elle-même : précise, actionnable, jamais « contactez le support »
// sans avoir d'abord donné les vraies pistes.

export type FaqItem = { q: string; a: string };
export type FaqCategory = { key: string; label: string; items: FaqItem[] };

export const FAQ: FaqCategory[] = [
  {
    key: 'prise-en-main',
    label: 'Prise en main',
    items: [
      {
        q: 'Comment créer un compte ?',
        a: "Télécharge l'app, laisse-toi guider : tu configures d'abord tout ton profil (genre, ambiance, couleurs, mensurations, style), puis le compte se crée en dernier, email + mot de passe. Un email de confirmation t'est envoyé : ouvre-le depuis ton téléphone, le lien rouvre directement l'app, confirmée et connectée. Rien n'est perdu si tu fermes l'app avant la fin : tu reprends exactement où tu t'étais arrêté.",
      },
      {
        q: "En quoi consiste l'onboarding ?",
        a: "Sept étapes rapides : tu indiques qui tu es (homme/femme), tu choisis ton ambiance visuelle (l'app se reskinne sous tes yeux), tes couleurs aimées et évitées, une photo de profil (optionnelle), tes mensurations, tes styles préférés, puis tu swipes des tenues façon Tinder pour calibrer l'œil de Léon, ton styliste. À la première entrée, Léon te fait visiter l'app écran par écran.",
      },
      {
        q: 'Comment ajouter ma première pièce ?',
        a: "Onglet Garde-robe → bouton « + Ajouter ». Trois options : la Rafale (tu shootes tes vêtements à la chaîne, l'IA analyse tout en arrière-plan, la garde-robe complète en 2 minutes), l'ajout avec photo et analyse IA (catégorie, couleurs, matière détectées automatiquement), ou l'ajout manuel gratuit (tu remplis toi-même, photo optionnelle).",
      },
      {
        q: "C'est quoi le mannequin virtuel ?",
        a: "Une silhouette (homme ou femme selon ton profil) sur laquelle tes vêtements détourés sont posés pour visualiser la tenue proposée. Ta photo de profil apparaît en médaillon à la tête. Le mannequin habillé est réservé aux abonnés ; en gratuit, la tenue s'affiche en « flat-lay » (pièces posées à plat). Le placement intelligent des pièces (ajusté par l'IA selon ta morphologie) est inclus pour les abonnés.",
      },
      {
        q: 'Comment configurer mon profil de style ?',
        a: "L'essentiel se fait à l'onboarding (styles, couleurs, swipes). Ensuite, tout est modifiable dans Paramètres : couleurs aimées/évitées, marques et inspirations, lois de style (« jamais de bleu avec du noir ») que Léon respecte à chaque génération. Les abonnés ELITE peuvent aussi générer un Profil de style complet analysé par l'IA dans le Studio de Léon.",
      },
      {
        q: "L'app est-elle gratuite ?",
        a: "Oui, l'app se télécharge gratuitement et le plan gratuit permet d'utiliser la garde-robe (ajout manuel illimité), la composition manuelle de tenues, la colorimétrie, le journal, les amis et DRESSING Real. Les fonctions qui font appel à l'IA (tenue du jour générée, analyse photo, chat avec Léon…) nécessitent un abonnement ESSENTIAL (3,99 €/mois) ou ELITE (7,99 €/mois), qui rechargent tes Crowns chaque mois.",
      },
    ],
  },
  {
    key: 'garde-robe',
    label: 'Garde-robe',
    items: [
      {
        q: 'Comment ajouter, modifier ou supprimer une pièce ?',
        a: "Ajouter : bouton « + Ajouter » (Rafale, photo IA ou manuel). Modifier : touche la pièce dans la grille, le formulaire s'ouvre pré-rempli, la modification est gratuite, aucune ré-analyse. Supprimer : appui long sur la pièce ou le ✕ en haut de sa carte ; tu as 10 secondes pour annuler via le bandeau en bas d'écran.",
      },
      {
        q: "La Rafale, c'est quoi exactement ?",
        a: "Le mode « garde-robe en 2 minutes » : tu prends tes vêtements en photo à la chaîne (ou tu importes jusqu'à 15 photos d'un coup depuis ta galerie, y compris des captures de commandes en ligne), et Léon les analyse en arrière-plan pendant que tu continues à shooter. Tu revois chaque fiche à la fin et tout s'enregistre en lot. Chaque analyse coûte 5 Crowns.",
      },
      {
        q: 'Comment marche la suppression de fond automatique ?',
        a: "À l'ajout d'une pièce, l'app détoure automatiquement le vêtement (le fond disparaît) pour l'afficher proprement dans la grille et sur le mannequin. Ça se passe entièrement sur ton téléphone, la photo ne quitte pas l'appareil pour cette étape. Prérequis : un iPhone sous iOS 17 ou plus récent. Astuce : pose le vêtement bien à plat, sur un fond contrasté.",
      },
      {
        q: "Que détecte l'analyse photo par IA ?",
        a: "La catégorie (t-shirt, jean, veste…), la couleur principale et secondaire avec leur teinte exacte, le motif, la matière, la coupe, la marque si un logo est visible, les styles (casual, formel…) et les saisons adaptées. Tout est modifiable avant validation si l'IA s'est trompée. Coût : 5 Crowns par pièce.",
      },
      {
        q: 'Que puis-je faire avec le plan gratuit ?',
        a: "Ajouter autant de pièces que tu veux en manuel (photo optionnelle), composer tes tenues toi-même avec l'aperçu à plat, consulter ta colorimétrie (calculée, sans IA), tenir ton Journal de Style, gagner des Carats et des badges, ajouter des amis et participer à DRESSING Real. Ce qui nécessite un abonnement : tout ce qui appelle l'IA (génération de tenue, analyses photo, chat Léon, Scan Street…).",
      },
      {
        q: 'Pourquoi ma photo a-t-elle été refusée ?',
        a: "Deux cas : soit l'image n'est pas un vêtement ou un accessoire de mode (l'analyse ne sert que pour ça), soit elle contient un contenu inapproprié, notre modération automatique bloque nudité, violence et contenus choquants avant tout envoi. Reprends une photo du vêtement seul, bien cadré, et ça passera.",
      },
      {
        q: 'Les pièces apparaissent en photo entière au lieu de détourées, pourquoi ?',
        a: "La grille affiche la version détourée dès qu'elle existe. Si une pièce reste en photo entière : elle a probablement été ajoutée avant la fonctionnalité de détourage, depuis un appareil non compatible (iOS 16 ou moins), ou l'algorithme n'a pas réussi à isoler le vêtement. Solution : rouvre la pièce et remplace sa photo, le détourage sera retenté.",
      },
    ],
  },
  {
    key: 'leon',
    label: 'Léon, ton styliste',
    items: [
      {
        q: 'Qui est Léon ?',
        a: "Ton styliste personnel, propulsé par l'IA. Il connaît ta garde-robe, tes goûts, tes mensurations et la météo du jour. Il compose ta tenue chaque matin, répond à tes questions mode dans le chat, analyse des looks croisés dans la rue, et retient ce que tu lui confies pour s'améliorer à chaque échange.",
      },
      {
        q: 'Comment fonctionne le chat avec Léon ?',
        a: "Onglet Léon → écris-lui comme à un ami. Il répond en tenant compte de ton profil complet et de ta garde-robe réelle (« qu'est-ce que je mets avec mon jean brut ? »). Chaque message coûte 1 Crown. Tes conversations sont sauvegardées : bouton historique en bas à gauche pour les retrouver ou en démarrer une nouvelle. Si tu changes d'onglet pendant qu'il réfléchit, sa réponse t'attendra.",
      },
      {
        q: 'Comment marche la mémoire de Léon ?',
        a: "Quand tu lui apprends quelque chose d'utile (« je ne porte jamais de jaune »), Léon le retient automatiquement, une pastille « Léon s'en souviendra » apparaît. Ces souvenirs influencent ensuite tes tenues générées. Pour gérer sa mémoire : bouton 💭 à côté du chat → tu vois tout ce qu'il sait, tu peux supprimer un souvenir ou lui en apprendre un directement.",
      },
      {
        q: 'À quoi sert le bouton « Tendances » ?',
        a: "Il autorise Léon à chercher sur le web en temps réel avant de répondre : tendances du moment, pièces vues aux fashion weeks, actualité d'une marque. Une réponse avec Tendances activé coûte 3 Crowns (au lieu de 1) car elle mobilise la recherche web.",
      },
      {
        q: "C'est quoi le Scan Street ?",
        a: "Tu croises un look qui te plaît ? Bouton 📷 dans l'onglet Léon : photographie la tenue, Léon l'analyse pièce par pièce et te dit ce que tu possèdes déjà pour la reproduire et ce qui te manque. Coût : 5 Crowns par scan.",
      },
      {
        q: "Qu'y a-t-il dans le Studio de Léon ?",
        a: "Touche l'avatar de Léon en haut de l'onglet : son Studio regroupe ton Profil de style IA, ta Wishlist intelligente (les pièces qui manquent à ta garde-robe), ses Enseignements (ce qu'il a appris de tes habitudes), tes Rapports hebdo et mensuels, et les exclusivités ELITE, le Passeport voyage (capsule de valise pour une destination) et la Semaine de Léon (7 tenues planifiées d'un coup).",
      },
      {
        q: 'Léon a-t-il une voix ?',
        a: "Pas encore : la dictée vocale et la voix de Léon sont prévues dans une prochaine mise à jour. Aujourd'hui, il s'exprime par écrit (et il écrit bien).",
      },
    ],
  },
  {
    key: 'tenue-du-jour',
    label: 'Tenue du jour',
    items: [
      {
        q: 'Comment la génération de tenue fonctionne-t-elle ?',
        a: "Sur l'accueil, touche « Générer ma tenue du jour » : Léon croise ta garde-robe réelle, la météo de ta ville, ton occasion du jour (casual, business, sport…), tes couleurs envies, tes lois de style et ses souvenirs, et te propose 3 tenues complètes, navigables avec les flèches. Coût : 3 Crowns. Valide celle que tu portes avec « Je porte ça » : elle entre dans ton Journal et te rapporte des Carats.",
      },
      {
        q: 'Pourquoi la tenue ne se régénère pas toute seule ?',
        a: "C'est voulu : ta tenue du jour est générée sur ta demande, puis conservée, rouvrir l'app ne la change jamais et ne consomme jamais de Crowns en douce. Une tenue par jour et par occasion est mémorisée ; si tu veux autre chose, c'est toi qui décides avec « Pas convaincu ».",
      },
      {
        q: 'À quoi sert « Pas convaincu » ?',
        a: "Il relance une génération complète (3 nouvelles propositions) qui remplace la précédente pour ce jour et cette occasion. Chaque relance coûte 3 Crowns, comme une génération normale, c'est la seule limite, il n'y a pas de quota caché.",
      },
      {
        q: 'Météo automatique ou manuelle ?',
        a: "Par défaut, la météo de ta ville (modifiable dans Paramètres) est récupérée automatiquement, aujourd'hui à l'instant, demain en min/max. Le bouton « Manuel » sur la carte météo te laisse forcer une température et un ciel, pratique si tu pars ailleurs. Léon compose toujours avec la météo affichée.",
      },
      {
        q: 'Comment marchent les occasions ?',
        a: "Dans « Affiner ma tenue » : Sport, Casual, Rendez-vous, Business, Chic… et « + Autre » pour créer les tiennes (elles sont mémorisées). Chaque occasion a SA tenue du jour : tu peux avoir une tenue Business et une tenue Sport le même jour, chacune conservée séparément.",
      },
      {
        q: 'Puis-je préparer la tenue de demain ?',
        a: "Oui : bascule « Aujourd'hui / Demain » dans « Affiner ma tenue ». Léon utilise alors la météo prévue de demain (du minimum au maximum). Tu peux aussi imposer jusqu'à 3 couleurs envies tirées de ta garde-robe. Petit secret : préparer sa tenue du lendemain après 22h, plusieurs soirs, débloque le badge Nocturne 🌙.",
      },
    ],
  },
  {
    key: 'facturation',
    label: 'Abonnements & Crowns',
    items: [
      {
        q: 'Quels sont les paliers et leurs prix ?',
        a: "Trois niveaux. Gratuit : garde-robe manuelle, composition de tenues, journal, social, sans IA. ESSENTIAL (3,99 €/mois) : toutes les fonctions IA, tenue du jour, analyses photo, chat Léon, Scan Street, mannequin habillé, avec 150 Crowns rechargés chaque mois et Carats ×2. ELITE (7,99 €/mois) : tout ESSENTIAL + 500 Crowns/mois, les exclusivités du Studio (Passeport voyage, Semaine de Léon) et Carats ×3. En annuel, -20 % : ESSENTIAL 38,30 €/an, ELITE 76,70 €/an.",
      },
      {
        q: 'Comment fonctionnent les Crowns 👑 ?',
        a: "C'est la monnaie des actions IA, rechargée intégralement chaque mois avec ton abonnement (150 en ESSENTIAL, 500 en ELITE). Les coûts principaux : message à Léon 1 👑, génération ou régénération de tenue 3 👑, analyse d'une pièce 5 👑, Scan Street 5 👑, Tendances 3 👑, Wishlist 8 👑, Profil de style 10 👑, Passeport 12 👑, Semaine de Léon 15 👑. Le solde est visible en haut des écrans.",
      },
      {
        q: "Que se passe-t-il si je n'ai plus de Crowns ?",
        a: "Les actions IA sont mises en pause jusqu'à la recharge mensuelle (à ta date anniversaire d'abonnement), l'app te propose alors de passer au palier supérieur si tu veux continuer tout de suite. Tout le reste (garde-robe, composition manuelle, journal, amis, DRESSING Real) continue de fonctionner normalement. Les Crowns non utilisés ne se reportent pas d'un mois sur l'autre.",
      },
      {
        q: 'Comment changer de palier ?',
        a: "Dans l'app : Paramètres → Abonnement → « Voir les abonnements », ou directement dans Réglages iOS → ton nom → Abonnements → DRESSING. Le passage à ELITE est immédiat ; le retour à un palier inférieur prend effet à la prochaine échéance.",
      },
      {
        q: 'Comment annuler mon abonnement ?',
        a: "Les abonnements passent par l'App Store : Réglages iOS → ton nom → Abonnements → DRESSING → Résilier. Tu gardes tous les avantages jusqu'à la fin de la période déjà payée, puis tu repasses automatiquement au plan gratuit, ta garde-robe et ton journal restent intacts.",
      },
      {
        q: 'Puis-je me faire rembourser ?',
        a: "Les paiements étant gérés par Apple, les remboursements aussi : rends-toi sur reportaproblem.apple.com, connecte-toi avec ton identifiant Apple, trouve l'achat DRESSING et choisis « Demander un remboursement ». Apple statue généralement sous 48 h.",
      },
      {
        q: 'Annuel ou mensuel, que choisir ?',
        a: "L'annuel coûte 20 % de moins : ESSENTIAL revient à 3,19 €/mois (38,30 €/an) et ELITE à 6,39 €/mois (76,70 €/an). Les Crowns se rechargent chaque mois dans les deux cas. Si tu utilises l'app tous les jours, l'annuel est vite rentabilisé.",
      },
      {
        q: 'Comment restaurer mes achats ?',
        a: "Nouveau téléphone ou app réinstallée : Paramètres → Abonnement → « Restaurer mes achats ». Ton palier est retrouvé via ton compte App Store en quelques secondes. Si ça ne marche pas, vérifie que tu es connecté au même identifiant Apple que lors de l'achat.",
      },
    ],
  },
  {
    key: 'compte-donnees',
    label: 'Compte & données',
    items: [
      {
        q: 'Comment modifier mon email ou mon mot de passe ?',
        a: "Le changement d'email et de mot de passe en libre-service arrive dans une prochaine mise à jour. En attendant, écris-nous via le formulaire de contact (catégorie « Compte & données ») depuis l'adresse email de ton compte : on s'en occupe rapidement et en sécurité.",
      },
      {
        q: 'Comment supprimer mon compte ?',
        a: "Paramètres → tout en bas, sur l'étiquette : « Découdre l'étiquette, supprimer mon compte ». Après double confirmation, TOUT est effacé définitivement : profil, garde-robe, photos, tenues, journal, conversations avec Léon, amis. C'est irréversible, pense à résilier ton abonnement dans les Réglages iOS, la suppression du compte n'arrête pas la facturation Apple.",
      },
      {
        q: 'Où sont stockées mes données ?',
        a: "Sur une infrastructure sécurisée (Supabase), chiffrées en transit. Tes photos de vêtements et ta photo de profil sont privées : personne d'autre que toi ne peut y accéder, et elles ne sont jamais utilisées en dehors des fonctions de l'app. Détails complets dans notre Politique de confidentialité.",
      },
      {
        q: "L'IA voit-elle mes photos ? Sont-elles utilisées pour l'entraîner ?",
        a: "Quand tu utilises une fonction IA (analyse de pièce, génération de tenue), les informations nécessaires transitent par nos serveurs vers Claude, le modèle d'Anthropic : jamais directement depuis ton téléphone, et uniquement à ta demande explicite. Ces échanges servent à te répondre, pas à entraîner le modèle. Le détourage des photos, lui, se fait entièrement sur ton appareil.",
      },
      {
        q: 'Puis-je exporter mes données ?',
        a: "Oui : conformément au RGPD, tu peux demander une copie complète de tes données (profil, garde-robe, journal) via le formulaire de contact, catégorie « Compte & données ». On te l'envoie dans un format lisible sous 30 jours maximum, généralement bien plus vite.",
      },
      {
        q: 'Qui voit mon profil ?',
        a: "Par défaut, presque rien : tes amis acceptés voient ton pseudo, ta bio et ta carte de membre. Chaque statistique supplémentaire (nombre de pièces, DRESSING Score, tenue la plus portée, couleur favorite, badges) est un interrupteur individuel dans Paramètres → Confidentialité, tout est désactivé tant que TU ne l'actives pas. Tes mensurations ne sont jamais visibles.",
      },
      {
        q: "Je n'ai pas reçu l'email de confirmation, que faire ?",
        a: "1. Vérifie tes spams et l'onglet Promotions. 2. Vérifie que l'adresse saisie est la bonne. 3. Touche « Renvoyer l'email » sur l'écran d'attente. 4. Le lien s'ouvre depuis le téléphone où l'app est installée, il rouvre l'app automatiquement. Toujours rien après 10 minutes ? Contacte le support, on confirmera ton compte manuellement.",
      },
    ],
  },
  {
    key: 'social',
    label: 'Amis & social',
    items: [
      {
        q: 'Comment ajouter des amis ?',
        a: "Trois façons dans l'onglet Amis : entre son @pseudo directement, scanne son QR code (bouton QR en haut, chacun a le sien sur sa carte de membre), ou envoie ton lien d'invitation (bouton Partager). L'autre reçoit une demande à accepter, vous devenez amis dès qu'il confirme.",
      },
      {
        q: "DRESSING Real, c'est quoi ?",
        a: "Le rituel quotidien entre amis : chaque jour à 15h00 pile, capture ta tenue (photo dos puis selfie enchaînés, caméra uniquement, pas de galerie, une seule prise par jour). Tu ne vois les tenues de tes amis qu'après avoir posté la tienne. Réactions par emoji, série de jours consécutifs, et des Carats à la clé : +3 à l'heure, +1 en retard.",
      },
      {
        q: 'Comment marchent les défis ?',
        a: "Dans l'onglet Tenues, section Défis : 3 défis tirés au sort chaque semaine (porter X tenues, ajouter des pièces, poster des DRESSING Real…), classés facile/moyen/dur (+2/+3/+5 Carats), plus un défi mensuel signature (+10). Quand la barre est pleine, touche « Réclamer » pour encaisser tes Carats.",
      },
      {
        q: 'Comment fonctionne le classement ?',
        a: "Le classement de la semaine (onglet Amis) compare les Carats gagnés par toi et tes amis du lundi au dimanche, tout repart de zéro chaque lundi. Porter sa tenue, poster son Real et compléter des défis font grimper. Les abonnés gagnent plus vite (Carats ×2 en ESSENTIAL, ×3 en ELITE).",
      },
      {
        q: 'Comment signaler ou bloquer quelqu\u2019un ?',
        a: "Ouvre son profil (touche son nom dans Amis) : « Signaler » envoie un rapport avec motif à notre équipe ; « Bloquer » coupe immédiatement tout lien, l'amitié est supprimée dans les deux sens, il ne peut plus t'envoyer de demande ni voir quoi que ce soit. Débloquer se fait au même endroit.",
      },
      {
        q: 'Puis-je partager une pièce avec un ami ?',
        a: "Oui (fonction abonnés) : ouvre la pièce → « Partager cette pièce par QR ». Ton ami scanne le code depuis « + Ajouter → Importer par QR » : la fiche complète (catégorie, couleurs, matière…) se recrée dans sa garde-robe, prête à valider. La photo n'est pas transférée, chacun met la sienne.",
      },
    ],
  },
  {
    key: 'technique',
    label: 'Problèmes techniques',
    items: [
      {
        q: "L'app plante ou se fige, que faire ?",
        a: "1. Ferme complètement l'app (balaye-la vers le haut dans le sélecteur) et rouvre-la. 2. Vérifie sur l'App Store qu'une mise à jour n'est pas disponible. 3. Redémarre ton téléphone. 4. Si le plantage se répète au même endroit, écris-nous via le formulaire de contact en décrivant l'écran concerné et ton modèle d'iPhone, une capture aide énormément.",
      },
      {
        q: "Ma photo ne s'upload pas.",
        a: "1. Vérifie ta connexion (le Wi-Fi public bloque parfois les envois). 2. Vérifie que DRESSING a accès à l'appareil photo et aux photos : Réglages iOS → DRESSING. 3. Les photos très lourdes (>5 Mo) sont refusées, reprends la photo directement dans l'app plutôt qu'un import. 4. Réessaie après avoir fermé/rouvert l'app. Si le blocage persiste, contacte le support avec l'heure exacte de l'essai.",
      },
      {
        q: 'La génération de tenue échoue.',
        a: "Causes possibles, dans l'ordre : 1. Plus assez de Crowns (il en faut 3), le paywall s'affiche alors. 2. Garde-robe insuffisante : il faut au minimum un haut et un bas. 3. Limite d'usage atteinte (l'IA est plafonnée à 20 actions par heure et 60 par 6 heures pour protéger le service), attends un peu. 4. Réseau instable : un bouton « Réessayer » apparaît avec un compte à rebours. Si rien de tout ça ne correspond, contacte le support.",
      },
      {
        q: "Je ne reçois pas les notifications.",
        a: "Aujourd'hui, les notifications DRESSING vivent DANS l'app : la cloche en haut des Paramètres regroupe demandes d'amis, défis à réclamer et activité de tes amis. Les notifications push (hors app, écran verrouillé) arrivent dans une prochaine mise à jour, pas de réglage à changer en attendant.",
      },
      {
        q: 'Je n\u2019arrive pas à me connecter.',
        a: "1. Vérifie l'email et le mot de passe (l'œil 👁 affiche ce que tu tapes). 2. Si le compte vient d'être créé, confirme d'abord ton email (le lien rouvre l'app). 3. « Recevoir un lien de connexion par email » te connecte sans mot de passe. 4. Une session d'un autre compte est peut-être encore ouverte : l'écran te propose alors « Changer de compte ». En dernier recours, contacte le support depuis l'email du compte.",
      },
      {
        q: "L'app est lente.",
        a: "L'app garde tes données en cache pour s'ouvrir vite même hors ligne, une lenteur ponctuelle vient généralement du réseau. 1. Vérifie ta connexion. 2. Ferme et rouvre l'app. 3. Vérifie l'espace libre de ton téléphone (moins de 1 Go libre ralentit tout). 4. Mets à jour l'app. Si un écran précis reste lent, signale-le nous : on optimise en continu.",
      },
      {
        q: "Je n'entends aucun son dans l'app.",
        a: "1. Vérifie que ton téléphone n'est pas en mode silencieux (l'interrupteur latéral), les sons de l'app le respectent. 2. Monte le volume médias. 3. Les sons arrivent avec les dernières versions : vérifie tes mises à jour App Store. Les vibrations (haptique), elles, se règlent dans Réglages iOS → Sons et vibrations.",
      },
    ],
  },
  {
    key: 'carats-badges',
    label: 'Carats & badges',
    items: [
      {
        q: 'Crowns et Carats, quelle différence ?',
        a: "Les Crowns 👑 sont la monnaie des actions IA, fournis par l'abonnement, dépensés quand Léon travaille, rechargés chaque mois. Les Carats 💎 sont ta progression, gagnés en VIVANT l'app (porter ta tenue, poster ton Real, compléter des défis), jamais dépensés : ils s'accumulent à vie, débloquent des récompenses et alimentent le classement entre amis.",
      },
      {
        q: 'Comment gagner des Carats ?',
        a: "Porter ta tenue du jour : +2 (avec parfois un bonus surprise ×2 ou ×3). Poster ton DRESSING Real : +3 à l'heure, +1 en retard. Compléter un défi : +2 à +5 selon la difficulté, +10 le mensuel. Gagner un Style Clash : +5. Et les abonnés multiplient tout : ×2 en ESSENTIAL, ×3 en ELITE.",
      },
      {
        q: 'Quelles récompenses avec mes Carats ?',
        a: "Des paliers à vie, visibles en touchant ton compteur 💎 : 500 → icônes d'app alternatives · 1000 → thème exclusif Platine · 1500 → cadre de profil animé · 2000 → thème Or Blanc · 2500 → fond studio du mannequin · 3000 → badge Légende · 4000 → la Black Card, finition ultime de ta carte de membre.",
      },
      {
        q: 'À quoi correspondent les grades ?',
        a: "Ton rang selon tes Carats à vie : Débutant (0), Amateur (50), Stylé (200), Confirmé (500), Icône (1000), Légende (3000). Le grade s'affiche sur ta carte de membre et dans le classement, chaque montée de grade se célèbre en grand dans l'app.",
      },
      {
        q: 'Où voir tous les badges et leurs conditions ?',
        a: "Touche ton compteur de Carats 💎 → la section Badges liste les 19 badges en 5 familles avec leur progression en temps réel : Usage quotidien (séries de 7/30/100/365 jours, Matinal, Nocturne), Garde-robe (Collectionneur, Coloriste…), Social (fidèle du Real, Influenceur), Léon (dialogues, mémoire, tendances) et Prestige (Fondateur, Légende…).",
      },
      {
        q: "C'est quoi le DRESSING Score ?",
        a: "Une note sur 100 (onglet Tenues) qui mesure la santé de ta garde-robe sur 30 jours : 40 % régularité (tu valides tes tenues), 30 % variété (tu portes toutes tes catégories), 30 % découverte (tu fais tourner tes pièces au lieu des 3 mêmes). Il vit sur ta carte de membre, et il monte vite quand tu joues le jeu.",
      },
    ],
  },
];

export const FAQ_TOTAL = FAQ.reduce((n, c) => n + c.items.length, 0);
