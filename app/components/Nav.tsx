import Link from 'next/link'

export default function Nav({
  lang,
  transparent = false,
  className = '',
}: {
  lang: string
  transparent?: boolean
  className?: string
}) {
  return (
    <nav
      className={`${transparent ? '' : 'bg-black '}flex h-[72px] items-center justify-center px-4 lg:px-16 ${className}`}
      aria-label="Hoofdnavigatie"
    >
      <div className="flex w-full max-w-5xl items-center justify-center gap-12 lg:gap-24">
        <Link
          href={`/${lang}/#about`}
          className="font-[family-name:var(--font-inter)] text-base text-white hover:opacity-80 transition-opacity"
        >
          About
        </Link>
        <Link
          href={`/${lang}`}
          className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white"
        >
          Unfold
        </Link>
        <Link
          href={`/${lang}/privacy`}
          className="font-[family-name:var(--font-inter)] text-base text-white hover:opacity-80 transition-opacity"
        >
          Privacy
        </Link>
      </div>
    </nav>
  )
}
