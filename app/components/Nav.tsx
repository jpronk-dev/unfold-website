import Link from "next/link";

export default function Nav({
  transparent = false,
  className = "",
}: {
  transparent?: boolean;
  className?: string;
}) {
  return (
    <nav
      className={`${transparent ? "" : "bg-black "}flex h-[72px] items-center justify-center px-4 lg:px-16 ${className}`}
      aria-label="Hoofdnavigatie"
    >
      <div className="flex w-full max-w-5xl items-center justify-center gap-12 lg:gap-24">
        <Link
          href="/#about"
          className="font-[family-name:var(--font-inter)] text-base text-white hover:opacity-80 transition-opacity"
        >
          About
        </Link>
        <Link
          href="/"
          className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white"
        >
          Unfold
        </Link>
        <Link
          href="/privacy"
          className="font-[family-name:var(--font-inter)] text-base text-white hover:opacity-80 transition-opacity"
        >
          Privacy
        </Link>
      </div>
    </nav>
  );
}
