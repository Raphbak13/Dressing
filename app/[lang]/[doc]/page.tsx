import { notFound } from 'next/navigation';

import { CONTENT, DOC_SLUGS, LANGS, type DocSlug, type Lang } from '@/lib/content';

export function generateStaticParams() {
  return LANGS.flatMap((lang) => DOC_SLUGS.map((doc) => ({ lang, doc })));
}

export function generateMetadata({ params }: { params: { lang: string; doc: string } }) {
  if (!(LANGS as string[]).includes(params.lang) || !(DOC_SLUGS as readonly string[]).includes(params.doc)) {
    return {};
  }
  const doc = CONTENT[params.lang as Lang].docs[params.doc as DocSlug];
  return { title: `DRESSING — ${doc.title}` };
}

export default function DocPage({ params }: { params: { lang: string; doc: string } }) {
  if (!(LANGS as string[]).includes(params.lang) || !(DOC_SLUGS as readonly string[]).includes(params.doc)) {
    notFound();
  }
  const lang = params.lang as Lang;
  const doc = CONTENT[lang].docs[params.doc as DocSlug];

  return (
    <div className="container doc">
      <h1>{doc.title}</h1>
      {doc.intro ? <p className="intro">{doc.intro}</p> : null}
      {doc.sections.map((s, i) => (
        <section key={i}>
          <h2>{s.h}</h2>
          {s.p.map((para, j) => (
            <p key={j}>{para}</p>
          ))}
        </section>
      ))}
      {doc.slug === 'telecharger' ? (
        <p style={{ marginTop: 24 }}>
          <span className="btn disabled">{CONTENT[lang].home.ctaDownload}</span>
        </p>
      ) : null}
    </div>
  );
}
