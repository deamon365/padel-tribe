"use client";

import { FadeIn, StaggerContainer, StaggerItem, AnimatedCard } from "@/components/motion";
import { Target, Users, Gem, Wine } from "lucide-react";

const advantages = [
  {
    icon: Gem,
    title: "Terrains d'exception",
    description:
      "6 terrains indoor dernière génération, éclairage LED professionnel et surface World Padel Tour. Des conditions de jeu optimales, toute l'année.",
  },
  {
    icon: Target,
    title: "Coachs certifiés",
    description:
      "Notre équipe de coachs diplômés vous accompagne quel que soit votre niveau. Du débutant curieux au compétiteur exigeant, progressez à votre rythme.",
  },
  {
    icon: Users,
    title: "Plus qu'un club, une tribu",
    description:
      "Tournois hebdomadaires, soirées padel afterwork, matchmaking entre joueurs… Ici, chaque partie est une occasion de rencontrer de nouveaux partenaires.",
  },
  {
    icon: Wine,
    title: "Détente & Convivialité",
    description:
      "Prolongez l'expérience dans notre espace bar et lounge. Smoothies, snacks healthy et bières artisanales dans une ambiance décontractée.",
  },
];

export function Advantages() {
  return (
    <section className="relative bg-tribe-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-tribe-gold">
            Pourquoi Padel Tribe
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-tribe-black md:text-5xl">
            Une expérience
            <br />
            <span className="text-tribe-green">unique</span>
          </h2>
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item) => (
            <StaggerItem key={item.title}>
              <AnimatedCard className="group h-full rounded-2xl bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-tribe-green/10 transition-colors duration-300 group-hover:bg-tribe-green">
                  <item.icon className="h-6 w-6 text-tribe-green transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-tribe-black">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-tribe-black/60">
                  {item.description}
                </p>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
