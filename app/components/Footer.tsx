import Image from "next/image";

export default function Footer({ noBackground = false }: { noBackground?: boolean }) {
  return (
    <footer
      className="relative flex justify-center px-4 py-16 lg:px-16 lg:py-20"
      aria-label="Footer"
    >
      {!noBackground && (
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cta-bg.png"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black" />
        </div>
      )}

      <div className="relative z-10 flex flex-col gap-10 w-full max-w-[1280px]">
        {/* Top */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-16 lg:items-start w-full">
          {/* Logo */}
          <div className="flex-1">
            <span className="font-[family-name:var(--font-playfair)] text-[56px] font-bold text-white">
              Unfold
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-6 lg:items-start lg:max-w-[400px] lg:flex-1">
            {/* Contact */}
            <div className="flex flex-col">
              <p className="font-[family-name:var(--font-inter)] text-base font-semibold text-white py-2">
                Contact
              </p>
              <a
                href="mailto:support@unfoldapp.org"
                className="font-[family-name:var(--font-inter)] text-base text-white hover:opacity-80 transition-opacity py-2"
              >
                support@unfoldapp.org
              </a>
            </div>

            {/* Social */}
            <div className="flex flex-col gap-4">
              <p className="font-[family-name:var(--font-inter)] text-base font-semibold text-white">
                Follow Us
              </p>
              <div className="flex flex-col">
                <a
                  href="https://www.instagram.com/the_unfold_app?igsh=c25nbm90cHd6bzdz&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 group"
                  aria-label="Volg Unfold op Instagram"
                >
                  <Image
                    src="/images/instagram.svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                    className="group-hover:opacity-80 transition-opacity"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/joppe-pronk-3a8b88232/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 group"
                  aria-label="Volg Unfold op LinkedIn"
                >
                  <Image
                    src="/images/linkedin.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="group-hover:opacity-80 transition-opacity"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider + credits */}
        <div className="flex flex-col gap-8">
          <div className="border-t border-white/30 w-full" />
          <div className="flex flex-col-reverse gap-8 lg:flex-row lg:gap-0 items-start lg:justify-between w-full">
            <p className="font-[family-name:var(--font-roboto)] text-sm text-white">
              © 2026 Unfold. All rights reserved.
            </p>
            <a
              href="/privacy"
              className="font-[family-name:var(--font-roboto)] text-sm text-white underline hover:opacity-80 transition-opacity"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
