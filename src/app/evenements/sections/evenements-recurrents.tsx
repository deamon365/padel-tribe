"use client";

import { FadeIn, StaggerContainer, StaggerItem, AnimatedCard } from "@/components/motion";
import { Trophy, Martini, Coffee, Heart } from "lucide-react";

const events = [
  {
    icon: Trophy,
    title: "Tournoi du jeudi soir",
    description:
      "Chaque jeudi à 19h, participez à notre tournoi hebdomadaire. Format américain, 3 matchs garantis, tous niveaux mélangés. Ambiance garantie et bière offerte au vainqueur !",
    details: [
      { label: "Inscription", value: "15€" },
      { label: "Niveau", value: "Tous niveaux" },
      { label: "Horaires", value: "Jeudi 19h-22h" },
    ],
  },
  {
    icon: Martini,
    title: "Afterwork Padel",
    description:
      "Le vendredi c'est afterwork ! Venez décompresser après la semaine avec un match entre collègues ou entre amis, suivi d'un verre au bar.",
    details: [
      { label: "Accès", value: "Réservation terrain" },
      { label: "Horaires", value: "Vendredi 18h-21h" },
      { label: "Bonus", value: "Happy hour au bar" },
    ],
  },
  {
    icon: Coffee,
    title: "Padel & Brunch du dimanche",
    description:
      "Le dimanche matin, on joue, puis on brunch. Match de 10h à 11h30, suivi d'un brunch au club. Le combo parfait pour bien commencer la semaine.",
    details: [
      { label: "Formule", value: "35€ (match + brunch)" },
      { label: "Horaires", value: "Dimanche 10h-13h" },
    ],
  },
  {
    icon: Heart,
    title: "Ladies Night",
    description:
      "Une soirée 100% féminine chaque premier mercredi du mois. Cours, matchs et convivialité dans une ambiance bienveillante.",
    details: [
      { label: "Inscription", value: "20€" },
      { label: "Horaires", value: "1er mercredi du mois, 19h-22h" },
    ],
  },
];

export function EvenementsRecurrents() {
  return (
    <section className="bg-tribe-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-tribe-gold">
            Chaque semaine
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-tribe-black md:text-5xl">
            Nos événements
          </h2>
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2">
          {events.map((event) => (
            <StaggerItem key={event.title}>
              <AnimatedCard className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-tribe-green">
                    <event.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-tribe-black">
                    {event.title}
                  </h3>
                </div>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-tribe-black/60">
                  {event.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {event.details.map((detail) => (
                    <div
                      key={detail.label}
                      className="rounded-lg bg-tribe-cream px-3 py-2"
                    >
                      <span className="block text-[10px] font-medium uppercase tracking-wider text-tribe-black/40">
                        {detail.label}
                      </span>
                      <span className="text-sm font-semibold text-tribe-black">
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
