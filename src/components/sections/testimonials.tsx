"use client";

import { FadeIn, StaggerContainer, StaggerItem, AnimatedCard } from "@/components/motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sophie M.",
    role: "Membre depuis 2025",
    text: "J'ai découvert le padel ici il y a 6 mois. Aujourd'hui je joue 3 fois par semaine et j'ai rencontré des amis incroyables. L'ambiance est vraiment unique.",
    rating: 5,
  },
  {
    name: "Thomas R.",
    role: "Compétiteur",
    text: "Les terrains sont au top, les coachs passionnés et le bar est l'endroit parfait pour débriefer après un match. Padel Tribe c'est bien plus qu'un club.",
    rating: 5,
  },
  {
    name: "Julie D.",
    role: "Entreprise cliente",
    text: "On y a organisé notre team building d'entreprise. 30 personnes, un tournoi, un barbecue… Tout était parfait. On revient l'année prochaine !",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="bg-tribe-dark py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-tribe-gold">
            Témoignages
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Ce que dit
            <br />
            <span className="text-tribe-gold">la Tribu</span>
          </h2>
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-3" staggerDelay={0.15}>
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.name}>
              <AnimatedCard className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-tribe-gold/30 hover:bg-white/10">
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-tribe-gold text-tribe-gold"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="mt-6 flex-1 text-sm leading-relaxed text-white/60">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-8 border-t border-white/10 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-tribe-green text-sm font-bold text-white">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-white/40">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
