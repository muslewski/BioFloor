import { CompanyBrand } from "@/components/layout/company-brand";
import { ExternalLink } from "@/components/layout/footer/external-link";
import { FooterTitle } from "@/components/layout/footer/footer-title";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/i18n/navigation";
import { LinkIcon, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#F2E9DC] to-background relative mt-12 lg:mt-28">
      {/* Absolute footer top object */}
      <div className="absolute -top-[3%] lg:-top-[12%] w-full h-32">
        <Image
          src="/images/footer/footer-spacer.png"
          alt="Footer Spacer"
          fill
          className="object-cover object-top"
          unoptimized={true}
        />
      </div>

      <div className="py-16 px-6 sm:px-24 3xl:px-44 flex flex-col gap-16 z-10 relative">
        <CompanyBrand />
        <Separator className="bg-gradient-to-r from-foreground to-foreground/25 py-[0.8px] rounded-full" />

        <div className="w-full flex justify-between gap-16 flex-col lg:flex-row">
          <div className="flex flex-col gap-6">
            <FooterTitle text="Dane Kontaktowe:" icon={Phone} />
            <ul className="flex flex-col gap-4">
              <li>tel. +48 786 866 690</li>
              <li>tel. +48 537 144 288</li>
              <li>email: biuro@biofloor.pl</li>
            </ul>
          </div>

          <div className="flex gap-x-16 gap-y-8 flex-col lg:flex-row">
            <div className="flex flex-col gap-6">
              <FooterTitle text="Lokalizacja:" icon={MapPin} />

              <ul className="flex flex-col gap-4">
                <li>ul. Szubińska 67</li>
                <li>Białe Błota, 86-005</li>
                <li>Polska 🇵🇱</li>
              </ul>
            </div>

            <ExternalLink
              href="https://maps.app.goo.gl/Ru66tZYWadQ6fX2S6"
              className="relative rounded-lg border-2 border-foreground/50 w-52 h-36 hover:scale-102 active:scale-98 transition-transform"
            >
              <Image
                src="/images/footer/localization.png"
                alt="Lokalizacja"
                className="object-cover"
                fill
              />
            </ExternalLink>
          </div>
        </div>

        <Separator className="bg-gradient-to-l from-foreground to-foreground/25 py-[0.8px] rounded-full" />

        <div className="w-full flex justify-between gap-16 flex-col lg:flex-row">
          <div className="flex flex-col gap-6">
            <FooterTitle text="Adnotacje:" icon={LinkIcon} />
            <ul className="flex flex-wrap flex-col lg:flex-row gap-x-12 gap-y-4 max-w-2xl">
              <li>
                <Link href="/jak-stosowac">Zobacz jak stosować</Link>
              </li>
              <li>
                <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
              </li>
              <li>
                <Link href="/kontakt">Kontakt</Link>
              </li>
              <li>
                <Link href="/logistyka-calosamochodowa">
                  Logistyka całosamochodowa
                </Link>
              </li>
              <li>
                <Link href="/prawa-autorskie">Prawa autorskie</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <FooterTitle text="Znajdź nas na:" />
            <ul className="flex gap-12 xl:justify-end">
              <ExternalLink href="https://www.facebook.com/">
                <FaFacebook className="size-8" />
              </ExternalLink>
              <ExternalLink href="https://www.instagram.com/">
                <FaInstagram className="size-8" />
              </ExternalLink>
              <ExternalLink href="https://www.youtube.com/">
                <FaYoutube className="size-8" />
              </ExternalLink>
            </ul>
          </div>
        </div>

        <Separator className="bg-gradient-to-r from-foreground to-foreground/25 py-[0.8px] rounded-full" />

        <p>
          &copy; {new Date().getFullYear()} <b>BioFloor</b>
        </p>
      </div>
    </footer>
  );
}
