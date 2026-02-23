"use client";

import { FadeIn } from "@/components/motion";

export function Histoire() {
  return (
    <section className="bg-tribe-dark py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-tribe-gold">
              Nos origines
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Comment tout
              <br />
              <span className="text-tribe-gold">a commencé</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-10 space-y-6 text-base leading-relaxed text-white/60">
              <p>
                Padel Tribe est né d&apos;une conviction simple : le padel est
                bien plus qu&apos;un sport. C&apos;est un catalyseur de
                rencontres, d&apos;énergie et de bons moments.
              </p>
              <p>
                Fondé en 2024 par une équipe de passionnés de sport et
                d&apos;entrepreneuriat, notre club a été pensé dès le départ pour
                offrir une expérience complète — des terrains de compétition au
                bar convivial, en passant par un coaching accessible à tous les
                niveaux.
              </p>
              <p className="text-lg font-medium text-white">
                Notre mission ? Démocratiser le padel et créer la plus belle
                communauté de joueurs de la région.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
