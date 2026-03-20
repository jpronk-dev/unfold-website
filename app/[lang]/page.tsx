import Image from 'next/image'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import FadeIn from '../components/FadeIn'
import { translations, type Lang } from '../i18n/translations'

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang: rawLang } = await params
  const lang = (rawLang === 'nl' ? 'nl' : 'en') as Lang
  const t = translations.home

  return (
    <main className="w-full overflow-x-hidden">
      {/* ─── Hero ─── */}
      <section className="relative flex flex-col" aria-label="Hero">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Nav */}
        <Nav lang={lang} transparent className="relative z-10" />

        {/* Hero content */}
        <div className="relative z-10 flex min-h-[680px] lg:min-h-[900px] items-center justify-center px-4 lg:px-16">
          <FadeIn className="flex flex-col items-center gap-8 text-center max-w-[560px]">
            <div className="flex flex-col items-center gap-6">
              <h1 className="font-[family-name:var(--font-playfair)] text-[56px] font-bold text-white leading-tight">
                Unfold
              </h1>
              <p className="font-[family-name:var(--font-roboto)] text-lg text-white leading-relaxed">
                {t.hero.description[lang]}
              </p>
            </div>
            <a
              href="https://apps.apple.com/app/unfold-conversations/id6759963055"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-[family-name:var(--font-inter)] text-base text-black whitespace-nowrap hover:bg-white/90 transition-colors"
            >
              {t.hero.cta}
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ─── Feature 1 ─── */}
      <section
        className="bg-black flex justify-center px-4 pt-10 pb-20 lg:px-[120px] lg:py-28"
        aria-label="Feature 1"
        id="about"
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-20 lg:gap-20 w-full max-w-[1280px]">
          <FadeIn className="flex flex-col gap-6 w-full lg:flex-1">
            <h2 className="font-[family-name:var(--font-inter)] text-[36px] lg:text-[48px] font-medium text-white leading-[1.2]">
              {t.section1.title[lang].split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < t.section1.title[lang].split('\n').length - 1 && <br />}
                </span>
              ))}
            </h2>
            <div className="font-[family-name:var(--font-inter)] text-base lg:text-lg text-white leading-relaxed">
              {t.section1.lines1[lang].map((line, i) => (
                <p key={i}>{line}</p>
              ))}
              <p className="mt-4">{t.section1.lines2[lang][0]}</p>
              {t.section1.lines2[lang].slice(1).map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </FadeIn>

          <FadeIn className="self-center lg:self-auto">
            <PhoneMockup src={`/images/app-screen1-${lang}.png`} alt="Unfold app — question card" />
          </FadeIn>
        </div>
      </section>

      {/* ─── Feature 2 ─── */}
      <section
        className="bg-[#faf0e8] flex justify-center px-4 pt-10 pb-20 lg:px-[120px] lg:py-28"
        aria-label="Feature 2"
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-20 lg:gap-20 w-full max-w-[1280px]">
          <FadeIn className="order-last lg:order-first self-center lg:self-auto">
            <PhoneMockup src={`/images/app-screen2-${lang}.png`} alt="Unfold app — choose your vibe" />
          </FadeIn>

          <FadeIn className="flex flex-col gap-6 w-full lg:flex-1">
            <h2 className="font-[family-name:var(--font-inter)] text-[36px] lg:text-[48px] font-medium text-[#40341e] leading-[1.2]">
              {t.section2.title[lang]}
            </h2>
            <div className="font-[family-name:var(--font-roboto)] text-base lg:text-lg text-black leading-relaxed">
              {t.section2.lines1[lang].map((line, i) => (
                <p key={i}>{line}</p>
              ))}
              <p className="mt-4">{t.section2.lines2[lang][0]}</p>
              {lang === 'nl' ? (
                <>
                  <p>Geen standaard &quot;wat doe je?&quot;.</p>
                  <p>{t.section2.lines2[lang][2]}</p>
                </>
              ) : (
                <>
                  <p>No standard &apos;what do you do?&apos;.</p>
                  <p>{t.section2.lines2[lang][2]}</p>
                </>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Feature 3 ─── */}
      <section
        className="bg-white flex justify-center px-4 pt-10 pb-20 lg:px-[120px] lg:py-28"
        aria-label="Feature 3"
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-20 lg:gap-20 w-full max-w-[1280px]">
          <FadeIn className="flex flex-col gap-6 w-full lg:flex-1">
            <h2 className="font-[family-name:var(--font-inter)] text-[36px] lg:text-[48px] font-medium text-black leading-[1.2]">
              {t.section3.title[lang]}
            </h2>
            <div className="font-[family-name:var(--font-inter)] text-base lg:text-lg text-black leading-relaxed">
              {t.section3.lines[lang].map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </FadeIn>

          <FadeIn className="self-center lg:self-auto">
            <PhoneMockup src={`/images/app-screen3-${lang}.png`} alt="Unfold app — hot takes" />
          </FadeIn>
        </div>
      </section>

      {/* ─── Testimonial ─── */}
      <section
        className="bg-[#faf0e8] flex justify-center px-4 pt-10 pb-20 lg:px-16 lg:py-28"
        aria-label="Founder quote"
      >
        <FadeIn className="flex flex-col items-center gap-8 max-w-[768px] w-full text-center">
          {/* Logo */}
          <div className="flex items-center gap-3 justify-center">
            <Image
              src="/images/logo-icon.svg"
              alt=""
              width={25}
              height={21}
              className="lg:w-[35px] lg:h-[29px]"
              aria-hidden="true"
            />
            <span className="font-[family-name:var(--font-playfair)] text-[33px] lg:text-[45px] font-bold text-[#40341e]">
              Unfold
            </span>
          </div>

          {/* Quote */}
          <blockquote className="font-[family-name:var(--font-inter)] text-xl lg:text-2xl font-medium text-[#40341e] leading-[1.4]">
            &ldquo;{t.quote[lang]}&rdquo;
          </blockquote>

          {/* Avatar */}
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/images/avatar.png"
              alt="Joppe, Founder van Unfold"
              width={64}
              height={64}
              className="rounded-full"
            />
            <div className="text-center">
              <p className="font-[family-name:var(--font-inter)] text-lg font-semibold text-black">
                Joppe
              </p>
              <p className="font-[family-name:var(--font-inter)] text-base text-black">
                Founder
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ─── CTA + Footer (shared background) ─── */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cta-bg.png"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black" />
        </div>

        <section className="relative z-10 flex flex-col" id="download">
          <div
            className="flex flex-col lg:flex-row items-start lg:items-center justify-center pt-16 lg:pt-28 px-4 lg:px-16 gap-12"
            aria-label="Download CTA"
          >
            {/* Phone Mockup — only on desktop */}
            <div className="hidden lg:block shrink-0 relative w-[680px] h-[1385px]">
              <Image
                src={`/images/app-screen4-${lang}.png`}
                alt="Unfold app preview"
                fill
                className="object-contain"
              />
            </div>

            {/* Text + CTA */}
            <FadeIn className="flex flex-col gap-8 w-full lg:w-[560px] lg:shrink-0">
              <h2 className="font-[family-name:var(--font-playfair)] text-[40px] lg:text-[55px] font-bold text-white leading-[48px] lg:leading-[68px]">
                <span className="block" style={{ marginBottom: '13px' }}>{t.cta.line1[lang]}</span>
                <span className="block">{t.cta.line2[lang]}</span>
              </h2>
              <a
                href="https://apps.apple.com/app/unfold-conversations/id6759963055"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-[family-name:var(--font-inter)] text-base text-black w-fit hover:bg-white/90 transition-colors"
              >
                {t.cta.button}
              </a>
            </FadeIn>
          </div>
        </section>

        <Footer lang={lang} noBackground />
      </div>
    </main>
  )
}

/* ─── Phone Mockup Component ─── */
function PhoneMockup({
  src,
  alt,
  size = 'lg',
}: {
  src: string
  alt: string
  size?: 'sm' | 'lg'
}) {
  if (size === 'sm') {
    return (
      <div className="relative w-[280px] h-[570px] shrink-0">
        <Image src={src} alt={alt} fill className="object-contain" />
      </div>
    )
  }

  return (
    <div className="w-full max-w-[420px] lg:max-w-[780px] mx-auto shrink-0">
      <Image src={src} alt={alt} width={420} height={855} className="w-full h-auto" />
    </div>
  )
}
