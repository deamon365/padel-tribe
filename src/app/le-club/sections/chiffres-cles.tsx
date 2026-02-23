"use client";

import { FadeIn, StaggerContainer, StaggerItem, CountUp } from "@/components/motion";

const stats = [
  { value: 6, prefix: "", suffix: "", label: "Terrains indoor premium" },
  { value: 12, prefix: "", suffix: "", label: "Coachs certifiés" },
  { value: 2000, prefix: "+", suffix: "", label: "Membres actifs" },
  { value: 500, prefix: "+", suffix: "", label: "Matchs par semaine" },
  { value: 52, prefix: "", suffix: "", label: "Tournois par an" },
];

export function ChiffresCles() {
  return (
    <section className="bg-tribe-black py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-tribe-gold">
            En chiffres
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Padel Tribe aujourd&apos;hui
          </h2>
        </FadeIn>

        <StaggerContainer className="mt-16 grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-5" staggerDelay={0.12}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="text-center">
                <div className="text-3xl font-bold text-tribe-gold sm:text-4xl md:text-5xl">
                  <CountUp
                    target={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </div>
                <div className="mt-2 text-sm font-medium text-white/50">
                  {stat.label}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
