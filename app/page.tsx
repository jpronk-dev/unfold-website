import Image from "next/image";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import FadeIn from "./components/FadeIn";

export default function Home() {
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
        <Nav transparent className="relative z-10" />

        {/* Hero content */}
        <div className="relative z-10 flex min-h-[680px] lg:min-h-[900px] items-center justify-center px-4 lg:px-16">
          <FadeIn className="flex flex-col items-center gap-8 text-center max-w-[560px]">
            <div className="flex flex-col items-center gap-6">
              <h1 className="font-[family-name:var(--font-playfair)] text-[56px] font-bold text-white leading-tight">
                Unfold
              </h1>
              <p className="font-[family-name:var(--font-roboto)] text-lg text-white leading-relaxed">
                Voor first dates, vrienden, situatieships en 3AM talks. Kies
                een vibe. Trek een kaart. See what unfolds.
              </p>
            </div>
            <a
              href="#download"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-[family-name:var(--font-inter)] text-base text-black whitespace-nowrap hover:bg-white/90 transition-colors"
            >
              Start the convo
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ─── Feature 1: Dit wordt geen standaard avond ─── */}
      <section
        className="bg-black flex justify-center px-4 py-16 lg:px-[120px] lg:py-28"
        aria-label="Feature 1"
        id="about"
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-16 lg:gap-20 w-full max-w-[1280px]">
          <FadeIn className="flex flex-col gap-6 w-full lg:flex-1">
            <h2 className="font-[family-name:var(--font-inter)] text-[36px] lg:text-[48px] font-medium text-white leading-[1.2]">
              Dit wordt geen
              <br />
              standaard avond.
            </h2>
            <div className="font-[family-name:var(--font-inter)] text-base lg:text-lg text-white leading-relaxed">
              <p>Trek een kaart.</p>
              <p>Stel de vraag.</p>
              <p>Kijk wat er gebeurt.</p>
              <p className="mt-4">Soms grappig.</p>
              <p>Soms ongemakkelijk.</p>
              <p>Altijd eerlijk.</p>
            </div>
          </FadeIn>

          <FadeIn className="self-center lg:self-auto">
            <PhoneMockup src="/images/app-screen1.png" alt="Unfold app — kaart met vraag" />
          </FadeIn>
        </div>
      </section>

      {/* ─── Feature 2: Kies je vibe ─── */}
      <section
        className="bg-[#faf0e8] flex justify-center px-4 py-16 lg:px-[120px] lg:py-28"
        aria-label="Feature 2"
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-16 lg:gap-20 w-full max-w-[1280px]">
          <FadeIn className="order-last lg:order-first self-center lg:self-auto">
            <PhoneMockup src="/images/app-screen2.png" alt="Unfold app — kies je vibe" />
          </FadeIn>

          <FadeIn className="flex flex-col gap-6 w-full lg:flex-1">
            <h2 className="font-[family-name:var(--font-inter)] text-[36px] lg:text-[48px] font-medium text-[#40341e] leading-[1.2]">
              Kies je vibe.
            </h2>
            <div className="font-[family-name:var(--font-roboto)] text-base lg:text-lg text-black leading-relaxed">
              <p>Van first date tot deep talks met je besties.</p>
              <p>Jij kiest de setting. Wij geven je de vragen.</p>
              <p className="mt-4">Geen ongemakkelijke stiltes.</p>
              <p>Geen standaard &quot;wat doe je?&quot;.</p>
              <p>Gewoon kaarten die iets losmaken.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Feature 3: Durf te kiezen ─── */}
      <section
        className="bg-white flex justify-center px-4 py-16 lg:px-[120px] lg:py-28"
        aria-label="Feature 3"
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-16 lg:gap-20 w-full max-w-[1280px]">
          <FadeIn className="flex flex-col gap-6 w-full lg:flex-1">
            <h2 className="font-[family-name:var(--font-inter)] text-[36px] lg:text-[48px] font-medium text-black leading-[1.2]">
              Durf te kiezen.
            </h2>
            <div className="font-[family-name:var(--font-inter)] text-base lg:text-lg text-black leading-relaxed">
              <p>Kies.</p>
              <p>Verdedig.</p>
              <p>Overleef de discussie.</p>
            </div>
          </FadeIn>

          <FadeIn className="self-center lg:self-auto">
            <PhoneMockup src="/images/app-screen3.png" alt="Unfold app — hot takes" />
          </FadeIn>
        </div>
      </section>

      {/* ─── Testimonial ─── */}
      <section
        className="bg-[#faf0e8] flex justify-center px-4 py-16 lg:px-16 lg:py-28"
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
            &ldquo;Ik wilde een app maken die mensen dichter bij elkaar brengt.
            Zonder ongemakkelijke stiltes. Zonder oppervlakkigheid.&rdquo;
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

      {/* ─── CTA ─── */}
      <section className="relative flex flex-col" id="download">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cta-bg.png"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/99 to-black" />
        </div>

        {/* CTA content */}
        <div
          className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-center pt-16 lg:pt-28 px-4 lg:px-16 gap-12"
          aria-label="Download CTA"
        >
          {/* Phone Mockup — only on desktop */}
          <div className="hidden lg:block shrink-0 relative w-[314px] h-[640px]">
            <Image
              src="/images/app-screen4.png"
              alt="Unfold app preview"
              fill
              className="object-contain"
            />
          </div>

          {/* Text + CTA */}
          <FadeIn className="flex flex-col gap-8 w-full lg:w-[560px] lg:shrink-0">
            <h2 className="font-[family-name:var(--font-playfair)] text-[40px] lg:text-[55px] font-bold text-white leading-[48px] lg:leading-[68px]">
              <span className="block" style={{ marginBottom: "13px" }}>Geen small talk.</span>
              <span className="block">Gewoon echte vragen.</span>
            </h2>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-[family-name:var(--font-inter)] text-base text-black w-fit hover:bg-white/90 transition-colors"
            >
              Start the convo
            </a>
          </FadeIn>
        </div>

      </section>

      <Footer />
    </main>
  );
}

/* ─── Phone Mockup Component ─── */
function PhoneMockup({
  src,
  alt,
  size = "lg",
}: {
  src: string;
  alt: string;
  size?: "sm" | "lg";
}) {
  if (size === "sm") {
    return (
      <div className="relative w-[280px] h-[570px] shrink-0">
        <Image src={src} alt={alt} fill className="object-contain" />
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-[280px] h-[570px] lg:w-[430px] lg:h-[875px] shrink-0">
      <Image src={src} alt={alt} fill className="object-contain" />
    </div>
  );
}
