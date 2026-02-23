"use client";

import { FadeIn, StaggerContainer, StaggerItem, AnimatedCard } from "@/components/motion";

const team = [
  {
    name: "[Nom du fondateur]",
    role: "Fondateur & CEO",
    description:
      "Passionné de padel depuis 2019, il a créé Padel Tribe pour partager sa passion et bâtir un lieu de vie autour du sport.",
    badge: "À personnaliser",
  },
  {
    name: "[Nom du head coach]",
    role: "Head Coach",
    description:
      "Ancien joueur professionnel, il dirige notre équipe de coaching avec exigence et bienveillance. Sa philosophie : progresser en s'amusant.",
    badge: "À personnaliser",
  },
  {
    name: "[Nom du community manager]",
    role: "Responsable Communauté",
    description:
      "Le cœur battant de la Tribu. Organisation des événements, animation de la communauté, accueil des nouveaux membres — rien ne lui échappe.",
    badge: "À personnaliser",
  },
];

export function Equipe() {
  return (
    <section id="equipe" className="bg-tribe-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-tribe-gold">
            Les visages de la Tribu
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-tribe-black md:text-5xl">
            L&apos;équipe Padel Tribe
          </h2>
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-3" staggerDelay={0.15}>
          {team.map((member) => (
            <StaggerItem key={member.role}>
              <AnimatedCard className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg">
                {/* Photo placeholder */}
                <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-tribe-green to-tribe-green-light">
                  <span className="text-6xl font-bold text-white/30 transition-transform duration-500 group-hover:scale-110">
                    {member.name.charAt(1)?.toUpperCase() || "?"}
                  </span>
                </div>
                <div className="p-6">
                  {member.badge && (
                    <span className="inline-block rounded-full bg-tribe-gold/10 px-3 py-1 text-xs font-medium text-tribe-gold">
                      {member.badge}
                    </span>
                  )}
                  <h3 className="mt-3 text-lg font-semibold text-tribe-black">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-tribe-green">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-tribe-black/60">
                    {member.description}
                  </p>
                </div>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
