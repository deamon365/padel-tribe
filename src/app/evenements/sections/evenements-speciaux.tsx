"use client";

import { FadeIn, StaggerContainer, StaggerItem, AnimatedCard } from "@/components/motion";
import { Calendar } from "lucide-react";

const specials = [
  {
    title: "Padel Tribe Open",
    subtitle: "Le grand tournoi annuel",
    description:
      "Notre compétition phare. 64 équipes, 2 jours de matchs, ambiance de folie. Catégories hommes, femmes et mixte.",
    date: "Date à venir",
  },
  {
    title: "Soirée de Noël",
    subtitle: "L'incontournable de fin d'année",
    description:
      "Tournoi de Noël + repas + DJ. L'événement incontournable de fin d'année.",
    date: "Date à venir",
  },
  {
    title: "Summer Padel Fest",
    subtitle: "3 jours de folie",
    description:
      "3 jours de padel, musique et bonne humeur pour fêter l'été.",
    date: "Date à venir",
  },
];

export function EvenementsSpeciaux() {
  return (
    <section id="tournois" className="bg-tribe-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-tribe-gold">
            À ne pas manquer
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-tribe-black md:text-5xl">
            Événements spéciaux
          </h2>
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-3" staggerDelay={0.15}>
          {specials.map((event) => (
            <StaggerItem key={event.title}>
              <AnimatedCard className="group relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-tribe-green to-tribe-black p-8 text-white transition-shadow duration-300 hover:shadow-xl">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-tribe-gold/10 transition-transform duration-500 group-hover:scale-150" />
                <div className="relative">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-tribe-gold" />
                    <span className="rounded-full bg-tribe-gold/20 px-3 py-1 text-xs font-medium text-tribe-gold">
                      {event.date}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold">{event.title}</h3>
                  <p className="mt-1 text-sm font-medium text-tribe-gold">
                    {event.subtitle}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-white/60">
                    {event.description}
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
