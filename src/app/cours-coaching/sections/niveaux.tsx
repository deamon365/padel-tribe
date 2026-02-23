"use client";

import { FadeIn, StaggerContainer, StaggerItem, AnimatedCard } from "@/components/motion";
import { Zap, TrendingUp, Target, User } from "lucide-react";

const niveaux = [
  {
    icon: Zap,
    level: "Initiation",
    tag: "Niveau 1",
    description:
      "Vous n'avez jamais joué ? Parfait. En 2 séances, vous maîtrisez les bases : service, volée, positionnement. Vous êtes prêt à jouer vos premiers matchs.",
    details: ["Durée : 1h", "Groupe de 4 joueurs max", "Raquette prêtée"],
    color: "bg-emerald-500",
  },
  {
    icon: TrendingUp,
    level: "Intermédiaire",
    tag: "Niveau 2",
    description:
      "Vous jouez régulièrement et voulez passer un cap. Travaillez les coups spéciaux, la stratégie de doubles et le jeu au filet.",
    details: ["Durée : 1h30", "Groupe de 4 joueurs max", "Analyse vidéo incluse"],
    color: "bg-tribe-gold",
  },
  {
    icon: Target,
    level: "Avancé",
    tag: "Niveau 3",
    description:
      "Vous êtes compétiteur ou vous souhaitez le devenir. Entraînement intensif, préparation physique et mentale, stratégie de match.",
    details: [
      "Durée : 1h30",
      "Groupe de 4 joueurs max",
      "Préparation tournois",
    ],
    color: "bg-tribe-green",
  },
  {
    icon: User,
    level: "Cours particulier",
    tag: "Sur mesure",
    description:
      "Un coaching 100% personnalisé pour travailler vos points faibles et exploser vos limites. Seul ou en duo.",
    details: ["Durée : 1h", "1 ou 2 joueurs"],
    color: "bg-tribe-black",
  },
];

export function Niveaux() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-tribe-gold">
            Programmes
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-tribe-black md:text-5xl">
            Un programme pour
            <br />
            <span className="text-tribe-green">chaque niveau</span>
          </h2>
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2">
          {niveaux.map((item) => (
            <StaggerItem key={item.level}>
              <AnimatedCard className="group flex h-full flex-col rounded-2xl border border-tribe-black/5 bg-tribe-cream/30 p-8 transition-colors duration-300 hover:border-tribe-green/20 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.color}`}
                  >
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wider text-tribe-gold">
                      {item.tag}
                    </span>
                    <h3 className="mt-1 text-xl font-bold text-tribe-black">
                      {item.level}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-tribe-black/60">
                  {item.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.details.map((detail) => (
                    <span
                      key={detail}
                      className="rounded-full bg-tribe-black/5 px-3 py-1 text-xs font-medium text-tribe-black/60"
                    >
                      {detail}
                    </span>
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
