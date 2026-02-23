import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";
import { Logo } from "@/components/logo";

const footerLinks = {
  "Le Club": [
    { href: "/terrains-tarifs", label: "Nos terrains" },
    { href: "/terrains-tarifs#tarifs", label: "Tarifs" },
    { href: "/terrains-tarifs", label: "Horaires" },
    { href: "/contact", label: "Accès" },
  ],
  Jouer: [
    { href: "/terrains-tarifs#reservation", label: "Réserver un terrain" },
    { href: "/cours-coaching", label: "Cours & Coaching" },
    { href: "/evenements", label: "Événements" },
    { href: "/evenements", label: "Team Building" },
  ],
  Infos: [
    { href: "/contact", label: "Contact" },
    { href: "#", label: "FAQ" },
    { href: "#", label: "Mentions légales" },
    { href: "#", label: "Politique de confidentialité" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-tribe-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Logo className="h-8 w-8" />
              <span className="text-2xl font-bold tracking-tight">PADEL</span>
              <span className="text-2xl font-light tracking-tight text-tribe-gold">
                TRIBE
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Rejoins la Tribu du Padel
            </p>
            {/* Social */}
            <div className="mt-6 flex gap-4">
              <a
                href="https://instagram.com/padeltribe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all hover:border-tribe-gold/50 hover:text-tribe-gold"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com/padeltribe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all hover:border-tribe-gold/50 hover:text-tribe-gold"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-tribe-gold">
                {title}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/40">
            &copy; 2025 Padel Tribe. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-white/40 transition-colors hover:text-white/60"
            >
              Mentions légales
            </Link>
            <Link
              href="#"
              className="text-xs text-white/40 transition-colors hover:text-white/60"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
