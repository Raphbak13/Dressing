import { notFound } from 'next/navigation';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { LANGS, type Lang } from '@/lib/content';

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  if (!(LANGS as string[]).includes(params.lang)) notFound();
  const lang = params.lang as Lang;
  return (
    <>
      <Header lang={lang} />
      <main>{children}</main>
      <Footer lang={lang} />
    </>
  );
}
