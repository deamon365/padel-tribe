"use client";

import { motion } from "framer-motion";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  AnimatedCard,
  CountUp,
} from "@/components/motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const courts = [
  {
    name: "Courts Central",
    count: "Terrains 1-2",
    description:
      "Surface homologuée World Padel Tour avec tribunes spectateurs. L'arène de nos tournois et compétitions.",
    gradient: "from-tribe-green to-tribe-green-light",
  },
  {
    name: "Courts Premium",
    count: "Terrains 3-4",
    description:
      "Surface WPT et éclairage LED réglable. Des conditions de jeu professionnelles pour vos matchs.",
    gradient: "from-tribe-gold to-tribe-gold-light",
  },
  {
    name: "Courts Training",
    count: "Terrains 5-6",
    description:
      "Idéal pour les cours et l'initiation. L'espace parfait pour apprendre et progresser sereinement.",
    gradient: "from-tribe-black to-tribe-green",
  },
];

const stats = [
  { value: 6, suffix: "", label: "Terrains indoor" },
  { value: 2000, prefix: "+", label: "Membres actifs" },
  { value: 12, suffix: "", label: "Coachs certifiés" },
  { value: 500, prefix: "+", label: "Matchs / semaine" },
];

export function Courts() {
  return (
    <section className="relative bg-tribe-black py-24 lg:py-32">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,#1a472a,transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-tribe-gold">
              Nos terrains
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              6 terrains indoor
              <br />
              <span className="text-tribe-gold">panoramiques</span>
            </h2>
            <p className="mt-4 max-w-lg text-base text-white/50">
              Conçus pour une expérience de jeu incomparable.
            </p>
          </div>
          <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
            <Link
              href="/terrains-tarifs"
              className="group flex items-center gap-2 text-sm font-medium text-tribe-gold transition-colors hover:text-tribe-gold-light"
            >
              Voir les disponibilités
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-3" staggerDelay={0.15}>
          {courts.map((court) => (
            <StaggerItem key={court.name}>
              <AnimatedCard className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors duration-500 hover:border-tribe-gold/30 hover:bg-white/10">
                {/* Gradient accent */}
                <div
                  className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${court.gradient} opacity-10 transition-opacity duration-500 group-hover:opacity-25`}
                />

                <div className="relative">
                  <span className="text-xs font-medium uppercase tracking-wider text-tribe-gold">
                    {court.count}
                  </span>
                  <h3 className="mt-3 text-2xl font-bold text-white">
                    {court.name}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/50">
                    {court.description}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-sm font-medium text-tribe-gold opacity-0 transition-all duration-300 group-hover:opacity-100">
                    En savoir plus
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Stats bar with CountUp */}
        <FadeIn delay={0.3}>
          <div className="mt-16 grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm sm:gap-8 sm:p-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-tribe-gold sm:text-3xl md:text-4xl">
                  <CountUp
                    target={stat.value}
                    prefix={stat.prefix || ""}
                    suffix={stat.suffix || ""}
                  />
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-white/40">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
