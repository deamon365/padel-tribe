"use client";

import { FadeIn } from "@/components/motion";
import {
  Layers,
  Lightbulb,
  Wind,
  Eye,
  ShowerHead,
  Lock,
  ShoppingBag,
  Car,
} from "lucide-react";

const terrainFeatures = [
  { icon: Layers, label: "Surface homologuée World Padel Tour" },
  { icon: Lightbulb, label: "Éclairage LED professionnel réglable" },
  { icon: Eye, label: "Vitrage panoramique" },
  { icon: Wind, label: "Climatisation / chauffage" },
];

const equipements = [
  { icon: ShowerHead, label: "Vestiaires hommes & femmes avec douches" },
  { icon: Lock, label: "Casiers sécurisés" },
  { icon: ShoppingBag, label: "Location de raquettes et balles" },
  { icon: ShoppingBag, label: "Pro shop" },
  { icon: Car, label: "Parking gratuit (30 places)" },
];

export function Installations() {
  return (
    <section className="bg-tribe-dark py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-tribe-gold">
            Nos installations
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            6 terrains indoor
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Terrains */}
          <FadeIn>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-lg font-semibold text-white">
                Terrains
              </h3>
              <div className="mt-6 space-y-4">
                {terrainFeatures.map((feat) => (
                  <div key={feat.label} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-tribe-green/20">
                      <feat.icon className="h-5 w-5 text-tribe-gold" />
                    </div>
                    <span className="text-sm text-white/60">
                      {feat.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-xl bg-white/5 p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-tribe-gold">
                  Tribunes spectateurs
                </p>
                <p className="mt-1 text-sm text-white/50">
                  Disponibles sur les courts 1 et 2
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Équipements */}
          <FadeIn delay={0.15}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-lg font-semibold text-white">
                Équipements
              </h3>
              <div className="mt-6 space-y-4">
                {equipements.map((equip, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-tribe-gold/10">
                      <equip.icon className="h-5 w-5 text-tribe-gold" />
                    </div>
                    <span className="text-sm text-white/60">
                      {equip.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
