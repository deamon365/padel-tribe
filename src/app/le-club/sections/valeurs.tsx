"use client";

import { FadeIn, StaggerContainer, StaggerItem, AnimatedCard } from "@/components/motion";
import { Award, Heart, Users, Smile } from "lucide-react";

const valeurs = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "Nous ne faisons aucun compromis sur la qualité. Terrains, équipements, coaching — tout est pensé pour offrir le meilleur à nos membres.",
  },
  {
    icon: Heart,
    title: "Communauté",
    description:
      "Le padel est un sport social par nature. Nous cultivons cette dimension en créant des moments de partage, sur et en dehors du terrain.",
  },
  {
    icon: Users,
    title: "Accessibilité",
    description:
      "Débutant ou expert, jeune ou moins jeune, tout le monde a sa place chez Padel Tribe. Nous adaptons nos offres pour que chacun puisse jouer.",
  },
  {
    icon: Smile,
    title: "Fun",
    description:
      "Le plaisir est au cœur de tout ce que nous faisons. Parce qu'un bon match, c'est avant tout un bon moment.",
  },
];

export function Valeurs() {
  return (
    <section id="valeurs" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-tribe-gold">
            Ce qui nous anime
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-tribe-black md:text-5xl">
            Nos valeurs
          </h2>
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2">
          {valeurs.map((v) => (
            <StaggerItem key={v.title}>
              <AnimatedCard className="flex gap-6 rounded-2xl border border-tribe-black/5 bg-tribe-cream/50 p-8 transition-colors duration-300 hover:border-tribe-green/20 hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-tribe-green">
                  <v.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-tribe-black">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-tribe-black/60">
                    {v.description}
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
