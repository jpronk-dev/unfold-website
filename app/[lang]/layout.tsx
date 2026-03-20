import type { Metadata } from 'next'
import { translations, type Lang } from '../i18n/translations'

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'nl' }]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const l = (lang === 'nl' ? 'nl' : 'en') as Lang
  const t = translations.home.meta

  return {
    title: t.title[l],
    description: t.description[l],
    openGraph: {
      title: t.title[l],
      description: t.description[l],
      locale: l === 'nl' ? 'nl_NL' : 'en_US',
    },
    twitter: {
      title: t.title[l],
      description: t.description[l],
    },
  }
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  await params
  return <>{children}</>
}
