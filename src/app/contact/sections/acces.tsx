"use client";

import { FadeIn } from "@/components/motion";
import { Car, Train, Bike } from "lucide-react";

const accessModes = [
  {
    icon: Car,
    label: "En voiture",
    description: "Parking gratuit de 30 places sur site.",
  },
  {
    icon: Train,
    label: "En transports",
    description: "[À personnaliser — station de métro/bus la plus proche]",
    note: "À personnaliser",
  },
  {
    icon: Bike,
    label: "À vélo",
    description: "Rack à vélos sécurisé devant le club.",
  },
];

export function Acces() {
  return (
    <section className="bg-tribe-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-tribe-gold">
            Accès
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-tribe-black md:text-5xl">
            Comment venir
          </h2>
        </FadeIn>

        {/* Google Maps */}
        <FadeIn delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2904.237!2d5.3937!3d43.2891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c1234567890%3A0x0!2s91+Rue+Abb%C3%A9+de+l%27%C3%89p%C3%A9e%2C+13005+Marseille!5e0!3m2!1sfr!2sfr!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Padel Tribe — 91 rue Abbé de l'Épée, 13005 Marseille"
              className="h-60 w-full sm:h-80 md:h-[400px]"
            />
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {accessModes.map((mode, i) => (
            <FadeIn key={mode.label} delay={0.15 + i * 0.1}>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-tribe-green/10">
                    <mode.icon className="h-5 w-5 text-tribe-green" />
                  </div>
                  <h3 className="font-semibold text-tribe-black">
                    {mode.label}
                  </h3>
                </div>
                <p className="mt-3 text-sm text-tribe-black/60">
                  {mode.description}
                </p>
                {mode.note && (
                  <span className="mt-2 inline-block rounded-full bg-tribe-gold/10 px-2 py-0.5 text-[10px] font-medium text-tribe-gold">
                    {mode.note}
                  </span>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
