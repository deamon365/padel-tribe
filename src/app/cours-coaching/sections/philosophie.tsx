"use client";

import { FadeIn } from "@/components/motion";

export function Philosophie() {
  return (
    <section className="bg-tribe-cream py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <FadeIn>
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-tribe-gold">
            Notre méthode
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-tribe-black md:text-5xl">
            Notre approche
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-tribe-black/70">
            <p>
              Chez Padel Tribe, nous croyons que tout le monde peut progresser et
              prendre du plaisir sur un terrain de padel. Notre méthode de coaching
              combine technique, tactique et jeu pour une progression rapide et
              durable.
            </p>
            <p>
              Nos coachs sont tous certifiés et formés à notre méthode. Ils
              s&apos;adaptent à votre niveau, vos objectifs et votre rythme.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
