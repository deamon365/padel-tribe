"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const pricingRows = [
  {
    slot: "Matin (8h - 12h)",
    weekday: "40€",
    weekend: "48€",
  },
  {
    slot: "Midi (12h - 14h)",
    weekday: "36€",
    weekend: "48€",
  },
  {
    slot: "Après-midi (14h - 18h)",
    weekday: "44€",
    weekend: "52€",
  },
  {
    slot: "Soirée (18h - 22h)",
    weekday: "52€",
    weekend: "52€",
  },
];

export function Tarifs() {
  return (
    <section id="tarifs" className="bg-tribe-dark-light py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-tribe-gold">
            Tarification
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Nos tarifs
          </h2>
          <p className="mt-4 text-base text-white/40">
            Location de terrain — 1h30
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-white/10">
            {/* Header */}
            <div className="grid grid-cols-[1fr_auto_auto] gap-x-3 bg-tribe-green px-4 py-4 text-xs font-semibold text-white sm:grid-cols-3 sm:gap-x-0 sm:px-6 sm:text-sm">
              <div>Créneau</div>
              <div className="w-16 text-center sm:w-auto">Lun-Ven</div>
              <div className="w-16 text-center sm:w-auto">Week-end</div>
            </div>

            {/* Rows */}
            {pricingRows.map((row, i) => (
              <div
                key={row.slot}
                className={`grid grid-cols-[1fr_auto_auto] gap-x-3 px-4 py-3 text-xs sm:grid-cols-3 sm:gap-x-0 sm:px-6 sm:py-4 sm:text-sm ${
                  i % 2 === 0 ? "bg-white/5" : "bg-white/[0.02]"
                }`}
              >
                <div className="font-medium text-white">{row.slot}</div>
                <div className="w-16 text-center text-white/60 sm:w-auto">
                  {row.weekday}
                </div>
                <div className="w-16 text-center text-white/60 sm:w-auto">
                  {row.weekend}
                </div>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-white/30">
            Tarifs par terrain pour 4 joueurs. Location de raquettes : 5€/raquette.
            Balles fournies.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-10 text-center">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-tribe-gold px-8 py-4 text-sm font-semibold text-tribe-black transition-shadow hover:shadow-[0_0_30px_rgba(201,169,110,0.3)]"
            >
              Réserver un terrain
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
