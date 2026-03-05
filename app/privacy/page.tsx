import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacyverklaring — Unfold",
  description:
    "Lees hoe Unfold omgaat met jouw persoonsgegevens, welke gegevens we verzamelen en welke rechten jij hebt.",
};

export default function PrivacyPage() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      <Nav />

      {/* Content */}
      <section className="bg-white flex justify-center px-4 py-16 lg:px-[120px] lg:py-28">
        <div className="flex flex-col gap-16 w-full max-w-[500px] lg:gap-20">

          {/* Intro */}
          <div className="flex flex-col gap-6">
            <h1 className="font-[family-name:var(--font-inter)] text-[36px] lg:text-[48px] font-medium text-black leading-[1.2]">
              Privacyverklaring
              <br />
              Unfold
            </h1>
            <p className="font-[family-name:var(--font-inter)] text-base lg:text-lg italic text-[#575757] leading-relaxed">
              Laatst bijgewerkt: maart 2026
            </p>
            <p className="font-[family-name:var(--font-inter)] text-base lg:text-lg text-black leading-relaxed">
              Bij Unfold vinden we jouw privacy belangrijk. In deze verklaring
              leggen we uit welke persoonsgegevens we verzamelen, waarom we dat
              doen en welke rechten jij hebt.
            </p>
            <div className="font-[family-name:var(--font-inter)] text-base lg:text-lg text-black leading-relaxed">
              <p>Unfold is een app ontwikkeld door:</p>
              <br />
              <p>Joppe Design</p>
              <p>Van der Woudenstraat 160</p>
              <p>1815 VZ</p>
              <p>Nederland</p>
              <p>Unfold.nl</p>
            </div>
          </div>

          {/* Section 1 */}
          <PrivacySection title="1. Wanneer verzamelen we gegevens?">
            <p>Wij verwerken persoonsgegevens wanneer je:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>De Unfold app gebruikt</li>
              <li>Contact met ons opneemt via e-mail</li>
              <li>Technische ondersteuning aanvraagt</li>
            </ul>
            <p className="mt-4">
              We verzamelen geen persoonsgegevens van kinderen onder de 16 jaar
              zonder toestemming van een ouder of verzorger. Denk je dat we per
              ongeluk gegevens hebben verzameld van iemand onder de 16? Neem dan
              contact met ons op, dan verwijderen we deze direct.
            </p>
          </PrivacySection>

          {/* Section 2 */}
          <PrivacySection title="2. Welke gegevens verzamelen we?">
            <p>
              We verzamelen alleen gegevens die nodig zijn om de app goed te
              laten functioneren en te verbeteren, zoals:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>
                Apparaatgegevens (bijvoorbeeld type toestel en
                besturingssysteem)
              </li>
              <li>Gebruiksgegevens (zoals welke functies worden gebruikt)</li>
              <li>
                Eventuele locatiegegevens (alleen als jij hiervoor toestemming
                geeft)
              </li>
              <li>Gegevens die je zelf verstrekt via e-mail of support</li>
            </ul>
            <p className="mt-4">
              We verzamelen geen gevoelige persoonsgegevens.
            </p>
          </PrivacySection>

          {/* Section 3 */}
          <PrivacySection title="3. Waarom verzamelen we deze gegevens?">
            <p>Wij gebruiken jouw gegevens om:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>De app goed te laten werken</li>
              <li>De gebruikerservaring te verbeteren</li>
              <li>Technische problemen op te lossen</li>
              <li>De veiligheid van de app te waarborgen</li>
            </ul>
            <p className="mt-4">
              Wij verwerken persoonsgegevens alleen wanneer dit noodzakelijk is
              voor het functioneren van de app of op basis van een
              gerechtvaardigd belang.
            </p>
          </PrivacySection>

          {/* Section 4 */}
          <PrivacySection title="4. Geautomatiseerde besluitvorming">
            <p>
              Unfold neemt geen besluiten op basis van volledig geautomatiseerde
              verwerking die rechtsgevolgen voor jou hebben of je op een
              vergelijkbare manier significant beïnvloeden.
            </p>
          </PrivacySection>

          {/* Section 5 */}
          <PrivacySection title="5. Hoe lang bewaren we gegevens?">
            <p>
              We bewaren jouw persoonsgegevens niet langer dan nodig is voor het
              doel waarvoor ze zijn verzameld.
            </p>
            <p className="mt-4">
              In principe bewaren we gegevens maximaal 26 maanden, tenzij een
              langere bewaartermijn wettelijk verplicht is.
            </p>
          </PrivacySection>

          {/* Section 6 */}
          <PrivacySection title="6. Delen wij gegevens met derden?">
            <p>Wij verkopen jouw gegevens niet.</p>
            <p className="mt-4">
              We kunnen gebruikmaken van externe partijen voor bijvoorbeeld
              hosting, analytics of technische ondersteuning. Deze partijen:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Verwerken gegevens uitsluitend namens ons</li>
              <li>Zijn gebonden aan een verwerkersovereenkomst</li>
              <li>
                Zijn gevestigd binnen de Europese Economische Ruimte (EER),
                tenzij passende waarborgen zijn getroffen
              </li>
            </ul>
            <p className="mt-4">
              Wij delen alleen gegevens als dit noodzakelijk is voor de werking
              van de app of wanneer we daartoe wettelijk verplicht zijn.
            </p>
          </PrivacySection>

          {/* Section 7 */}
          <PrivacySection title="7. Cookies en tracking">
            <p>
              Unfold maakt geen gebruik van trackingcookies binnen de app.
            </p>
            <p className="mt-4">
              Op onze website (unfoldapp.org) maken wij gebruik van{" "}
              <strong>Vercel Analytics</strong>. Dit is een privacyvriendelijke
              analysetool die anonieme bezoekersstatistieken bijhoudt, zoals het
              aantal paginaweergaven. Er worden geen persoonlijke gegevens
              verzameld en er worden geen cookies geplaatst.
            </p>
          </PrivacySection>

          {/* Section 8 */}
          <PrivacySection title="8. Jouw rechten">
            <p>Je hebt het recht om:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Inzage te krijgen in jouw persoonsgegevens</li>
              <li>Onjuiste gegevens te laten corrigeren</li>
              <li>Gegevens te laten verwijderen</li>
              <li>Je toestemming in te trekken</li>
              <li>Bezwaar te maken tegen verwerking</li>
              <li>
                Jouw gegevens over te dragen aan een andere partij
                (dataportabiliteit)
              </li>
            </ul>
            <p className="mt-4">
              Wil je gebruikmaken van één van deze rechten?
              <br />
              Stuur dan een e-mail naar:{" "}
              <a
                href="mailto:support@unfoldapp.org"
                className="underline hover:opacity-80 transition-opacity"
              >
                support@unfoldapp.org
              </a>
            </p>
            <p className="mt-4">We reageren binnen vier weken.</p>
            <p className="mt-4">
              Daarnaast heb je het recht om een klacht in te dienen bij de
              Autoriteit Persoonsgegevens.
            </p>
          </PrivacySection>

          {/* Section 9 */}
          <PrivacySection title="9. Beveiliging">
            <p>
              Wij nemen passende technische en organisatorische maatregelen om
              jouw persoonsgegevens te beschermen tegen verlies, misbruik en
              onbevoegde toegang.
            </p>
          </PrivacySection>

          {/* Section 10 */}
          <PrivacySection title="10. Wijzigingen">
            <p>
              Deze privacyverklaring kan worden aangepast. Bij belangrijke
              wijzigingen informeren wij gebruikers via de app of website.
            </p>
            <p className="mt-4">
              De meest recente versie is altijd beschikbaar via onze website.
            </p>
          </PrivacySection>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function PrivacySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
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
  );
}
