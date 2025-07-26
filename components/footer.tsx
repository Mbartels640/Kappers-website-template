import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/over", label: "Over Bo" },
    { href: "/behandelingen", label: "Behandelingen" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <footer className="bg-charcoal-gray text-cream-white">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/hair by bo.jpg"
                alt="Hair by Bo Logo"
                width={48}
                height={48}
                className="rounded-full mx-auto md:mx-0"
              />
            </Link>
            <p className="text-cream-white/70">
              Jouw moment van luxe en persoonlijke aandacht in Maastricht.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-heritage-gold mb-4">
              Snelle Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-dutch-orange transition-colors text-cream-white/70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-heritage-gold mb-4">
              Volg Mij
            </h3>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="#"
                className="text-cream-white/70 hover:text-dutch-orange"
              >
                <Instagram />
              </a>
              <a
                href="#"
                className="text-cream-white/70 hover:text-dutch-orange"
              >
                <Facebook />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/20 pt-8 text-center text-sm text-cream-white/50">
          <p>
            &copy; {new Date().getFullYear()} Hair by Bo. Alle rechten
            voorbehouden.
          </p>
          <div className="mt-2">
            <a
              href="https://www.mosaewebsolutions.nl/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-dutch-orange transition-colors"
            >
              <Image
                src="/Mosae_icon.svg"
                alt="Mosae Web Solutions Icon"
                width={14}
                height={14}
              />
              <span>Website by Mosae Web Solutions</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
