"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-tribe-green py-24 lg:py-32">
      {/* Animated decorative elements */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-tribe-gold opacity-10"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], rotate: [0, -5, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-white opacity-10"
      />

      <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Prêt à rejoindre
            <br />
            <span className="text-tribe-gold">la Tribu ?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg font-light text-white/70">
            Que tu sois débutant ou confirmé, ta place est ici. Réserve ton
            premier créneau et découvre le padel comme tu ne l&apos;as jamais vécu.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/terrains-tarifs#reservation"
                className="group inline-flex items-center gap-2 rounded-full bg-tribe-gold px-8 py-4 text-sm font-semibold text-tribe-black transition-shadow hover:shadow-[0_0_40px_rgba(201,169,110,0.4)]"
              >
                Réserver maintenant
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="inline-block rounded-full border border-white/30 px-8 py-4 text-sm font-medium text-white transition-all hover:border-white/50 hover:bg-white/10"
              >
                Nous contacter
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
