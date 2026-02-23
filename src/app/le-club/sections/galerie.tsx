"use client";

import { FadeIn } from "@/components/motion";

const galleryItems = [
  { label: "Terrain panoramique", span: "md:col-span-2" },
  { label: "Le bar & lounge", span: "" },
  { label: "Tournoi en cours", span: "" },
  { label: "Coaching collectif", span: "" },
  { label: "Soirée afterwork", span: "" },
  { label: "L'accueil", span: "md:col-span-2" },
];

export function Galerie() {
  return (
    <section className="bg-tribe-dark-light py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-tribe-gold">
            Galerie
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Le club en images
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {galleryItems.map((item, i) => (
            <FadeIn
              key={item.label}
              delay={i * 0.08}
              className={item.span}
            >
              <div className="group relative flex h-48 items-end overflow-hidden rounded-2xl bg-gradient-to-br from-tribe-green/80 to-tribe-black sm:h-64 md:h-72">
                {/* Placeholder for actual photos */}
                <div className="absolute inset-0 bg-tribe-black/20 transition-all group-hover:bg-tribe-black/10" />
                <div className="relative p-6">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {item.label}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <p className="mt-8 text-center text-sm text-white/30">
            Photos à venir — ces emplacements accueilleront les photos du club.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
