"use client";

import { FadeIn } from "@/components/motion";
import { Quote } from "lucide-react";

const coachs = [
  {
    name: "[Prénom Nom]",
    specialty: "Initiation & Intermédiaire",
    quote:
      "Mon objectif : que chaque élève reparte avec le sourire et un nouveau coup dans sa raquette.",
    badge: "À personnaliser",
  },
  {
    name: "[Prénom Nom]",
    specialty: "Avancé & Compétition",
    quote:
      "Le padel de haut niveau, c'est 50% technique et 50% mental. Je travaille les deux.",
    badge: "À personnaliser",
  },
  {
    name: "[Prénom Nom]",
    specialty: "Enfants & Ados",
    quote:
      "Transmettre la passion du padel aux plus jeunes, c'est ce qui me motive chaque jour.",
    badge: "À personnaliser",
  },
];

export function Coachs() {
  return (
    <section className="bg-tribe-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-tribe-gold">
            L&apos;équipe
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-tribe-black md:text-5xl">
            Nos coachs
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {coachs.map((coach, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-lg">
                {/* Photo placeholder */}
                <div className="flex h-56 items-center justify-center bg-gradient-to-br from-tribe-green to-tribe-green-light">
                  <span className="text-5xl font-bold text-white/30">
                    C{i + 1}
                  </span>
                </div>
                <div className="p-6">
                  {coach.badge && (
                    <span className="inline-block rounded-full bg-tribe-gold/10 px-3 py-1 text-xs font-medium text-tribe-gold">
                      {coach.badge}
                    </span>
                  )}
                  <h3 className="mt-3 text-lg font-semibold text-tribe-black">
                    {coach.name}
                  </h3>
                  <p className="text-sm font-medium text-tribe-green">
                    {coach.specialty}
                  </p>

                  <div className="mt-4 flex gap-2">
                    <Quote className="h-4 w-4 shrink-0 text-tribe-gold/50" />
                    <p className="text-sm italic leading-relaxed text-tribe-black/50">
                      {coach.quote}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
