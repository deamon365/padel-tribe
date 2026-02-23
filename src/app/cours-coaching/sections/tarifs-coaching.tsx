"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const tarifs = [
  { formule: "Cours collectif (1h)", prix: "25€/personne" },
  { formule: "Cours collectif (1h30)", prix: "35€/personne" },
  { formule: "Cours particulier (1h)", prix: "60€" },
  { formule: "Cours duo (1h)", prix: "40€/personne" },
  { formule: "Stage intensif (5 sessions)", prix: "150€/personne" },
  {
    formule: "Pack 10 cours collectifs",
    prix: "200€",
    note: "au lieu de 250€",
  },
];

export function TarifsCoaching() {
  return (
    <section className="bg-tribe-black py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <FadeIn className="text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-tribe-gold">
            Investissez dans votre jeu
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Tarifs des cours
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-white/10">
            {tarifs.map((item, i) => (
              <div
                key={item.formule}
                className={`flex items-center justify-between px-6 py-5 ${
                  i < tarifs.length - 1 ? "border-b border-white/5" : ""
                } ${i % 2 === 0 ? "bg-white/5" : "bg-transparent"}`}
              >
                <span className="text-sm font-medium text-white/80">
                  {item.formule}
                </span>
                <div className="text-right">
                  <span className="text-sm font-bold text-tribe-gold">
                    {item.prix}
                  </span>
                  {item.note && (
                    <span className="ml-2 text-xs text-white/40">
                      {item.note}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-10 text-center">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-tribe-gold px-8 py-4 text-sm font-semibold text-tribe-black transition-shadow hover:shadow-[0_0_30px_rgba(201,169,110,0.3)]"
            >
              Réserver un cours
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
