"use client";

import { motion } from "framer-motion";

export function TerrainsHero() {
  return (
    <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-tribe-black pb-16 pt-32 sm:min-h-[60vh] sm:pb-20 sm:pt-20">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a472a_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block rounded-full border border-tribe-gold/30 bg-tribe-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-tribe-gold"
        >
          Terrains & Tarifs
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl"
        >
          Terrains & Tarifs
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-6 max-w-lg text-lg font-light text-white/60"
        >
          Des conditions de jeu premium à des prix accessibles.
        </motion.p>
      </div>
    </section>
  );
}
