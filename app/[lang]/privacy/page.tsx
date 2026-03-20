import type { Metadata } from 'next'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { translations, type Lang } from '../../i18n/translations'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const l = (lang === 'nl' ? 'nl' : 'en') as Lang
  const t = translations.privacy.meta

  return {
    title: t.title[l],
    description: t.description[l],
  }
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang: rawLang } = await params
  const lang = (rawLang === 'nl' ? 'nl' : 'en') as Lang
  const t = translations.privacy
  const sections = t.sections

  return (
    <main className="w-full overflow-x-hidden bg-white">
      <Nav lang={lang} />

      {/* Content */}
      <section className="bg-white flex justify-center px-4 py-16 lg:px-[120px] lg:py-28">
        <div className="flex flex-col gap-16 w-full max-w-[500px] lg:gap-20">

          {/* Intro */}
          <div className="flex flex-col gap-6">
            <h1 className="font-[family-name:var(--font-inter)] text-[36px] lg:text-[48px] font-medium text-black leading-[1.2]">
              {t.title[lang].split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < t.title[lang].split('\n').length - 1 && <br />}
                </span>
              ))}
            </h1>
            <p className="font-[family-name:var(--font-inter)] text-base lg:text-lg italic text-[#575757] leading-relaxed">
              {t.updated[lang]}
            </p>
            <p className="font-[family-name:var(--font-inter)] text-base lg:text-lg text-black leading-relaxed">
              {t.intro[lang]}
            </p>
            <div className="font-[family-name:var(--font-inter)] text-base lg:text-lg text-black leading-relaxed">
              <p>{t.developer[lang]}</p>
              <br />
              <p>Joppe Design</p>
              <p>Van der Woudenstraat 160</p>
              <p>1815 VZ</p>
              <p>Nederland</p>
              <p>Unfold.nl</p>
            </div>
          </div>

          {/* Section 1 */}
          <PrivacySection title={(sections[0].title as Record<Lang, string>)[lang]}>
            <p>{(sections[0].intro as Record<Lang, string>)[lang]}</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              {((sections[0].list as Record<Lang, readonly string[]>)[lang]).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="mt-4">{(sections[0].outro as Record<Lang, string>)[lang]}</p>
          </PrivacySection>

          {/* Section 2 */}
          <PrivacySection title={(sections[1].title as Record<Lang, string>)[lang]}>
            <p>{(sections[1].intro as Record<Lang, string>)[lang]}</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              {((sections[1].list as Record<Lang, readonly string[]>)[lang]).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="mt-4">{(sections[1].outro as Record<Lang, string>)[lang]}</p>
          </PrivacySection>

          {/* Section 3 */}
          <PrivacySection title={(sections[2].title as Record<Lang, string>)[lang]}>
            <p>{(sections[2].intro as Record<Lang, string>)[lang]}</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              {((sections[2].list as Record<Lang, readonly string[]>)[lang]).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="mt-4">{(sections[2].outro as Record<Lang, string>)[lang]}</p>
          </PrivacySection>

          {/* Section 4 */}
          <PrivacySection title={(sections[3].title as Record<Lang, string>)[lang]}>
            <p>{(sections[3].body as Record<Lang, string>)[lang]}</p>
          </PrivacySection>

          {/* Section 5 */}
          <PrivacySection title={(sections[4].title as Record<Lang, string>)[lang]}>
            <p>{(sections[4].body1 as Record<Lang, string>)[lang]}</p>
            <p className="mt-4">{(sections[4].body2 as Record<Lang, string>)[lang]}</p>
          </PrivacySection>

          {/* Section 6 */}
          <PrivacySection title={(sections[5].title as Record<Lang, string>)[lang]}>
            <p>{(sections[5].body1 as Record<Lang, string>)[lang]}</p>
            <p className="mt-4">{(sections[5].body2 as Record<Lang, string>)[lang]}</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              {((sections[5].list as Record<Lang, readonly string[]>)[lang]).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="mt-4">{(sections[5].body3 as Record<Lang, string>)[lang]}</p>
          </PrivacySection>

          {/* Section 7 */}
          <PrivacySection title={(sections[6].title as Record<Lang, string>)[lang]}>
            <p>{(sections[6].body1 as Record<Lang, string>)[lang]}</p>
            <p className="mt-4">
              {lang === 'en' ? (
                <>
                  On our website (unfoldapp.org) we use{' '}
                  <strong>Vercel Analytics</strong>. This is a privacy-friendly analytics tool that tracks anonymous visitor statistics such as page views. No personal data is collected and no cookies are placed.
                </>
              ) : (
                <>
                  Op onze website (unfoldapp.org) maken wij gebruik van{' '}
                  <strong>Vercel Analytics</strong>. Dit is een privacyvriendelijke analysetool die anonieme bezoekersstatistieken bijhoudt, zoals het aantal paginaweergaven. Er worden geen persoonlijke gegevens verzameld en er worden geen cookies geplaatst.
                </>
              )}
            </p>
          </PrivacySection>

          {/* Section 8 */}
          <PrivacySection title={(sections[7].title as Record<Lang, string>)[lang]}>
            <p>{(sections[7].intro as Record<Lang, string>)[lang]}</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              {((sections[7].list as Record<Lang, readonly string[]>)[lang]).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="mt-4">
              {(sections[7].contact1 as Record<Lang, string>)[lang]}
              <br />
              {(sections[7].contact2 as Record<Lang, string>)[lang]}{' '}
              <a
                href="mailto:support@unfoldapp.org"
                className="underline hover:opacity-80 transition-opacity"
              >
                support@unfoldapp.org
              </a>
            </p>
            <p className="mt-4">{(sections[7].response as Record<Lang, string>)[lang]}</p>
            <p className="mt-4">{(sections[7].authority as Record<Lang, string>)[lang]}</p>
          </PrivacySection>

          {/* Section 9 */}
          <PrivacySection title={(sections[8].title as Record<Lang, string>)[lang]}>
            <p>{(sections[8].body as Record<Lang, string>)[lang]}</p>
          </PrivacySection>

          {/* Section 10 */}
          <PrivacySection title={(sections[9].title as Record<Lang, string>)[lang]}>
            <p>{(sections[9].body1 as Record<Lang, string>)[lang]}</p>
            <p className="mt-4">{(sections[9].body2 as Record<Lang, string>)[lang]}</p>
          </PrivacySection>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  )
}

function PrivacySection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-[family-name:var(--font-inter)] text-[28px] lg:text-[32px] font-medium text-black leading-[1.2]">
        {title}
      </h2>
      <div className="font-[family-name:var(--font-inter)] text-base lg:text-lg text-black leading-relaxed">
        {children}
      </div>
    </div>
  )
}
