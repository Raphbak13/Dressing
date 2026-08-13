import Link from 'next/link';

/**
 * 404 MAISON.
 *
 * Une 404 par défaut donne l'impression que le site est cassé. Celle-ci dit ce
 * qui s'est passé et propose les trois routes qui servent vraiment, plutôt
 * qu'un simple « retour à l'accueil » qui oblige à tout recommencer.
 */
export const metadata = {
  title: 'Page introuvable · DRESSING',
  description: 'Cette page n’existe pas ou plus.',
};

export default function NotFound() {
  return (
    <section className="nf">
      <div className="container narrow">
        <p className="kicker">ERREUR 404</p>
        <h1 className="nf-h">Cette page a quitté le dressing.</h1>
        <p className="sub">
          Le lien est peut-être ancien, ou l’adresse comporte une faute. Voilà où aller.
        </p>
        <div className="nf-links">
          <Link className="btn" href="/fr/">
            Accueil
          </Link>
          <Link className="btn secondary" href="/fr/rejoindre/">
            Rejoindre
          </Link>
          <Link className="btn secondary" href="/fr/faq/">
            FAQ &amp; aide
          </Link>
        </div>
      </div>
    </section>
  );
}
