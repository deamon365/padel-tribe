"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-tribe-black">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-tribe-black/60 via-tribe-black/40 to-tribe-black" />

      {/* Animated background blobs */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,#1a472a_0%,transparent_50%)]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,#c9a96e_0%,transparent_40%)]"
        />
      </div>

      {/* Court lines decorative element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.04 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="h-[80vh] w-[60vw] border-2 border-white">
          <div className="flex h-full">
            <div className="w-1/2 border-r border-white" />
            <div className="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block rounded-full border border-tribe-gold/30 bg-tribe-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-tribe-gold">
            Club Premium de Padel
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-7xl lg:text-8xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-block"
          >
            Rejoins la
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="inline-block bg-gradient-to-r from-tribe-gold to-tribe-gold-light bg-clip-text text-transparent"
          >
            Tribu du Padel
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-white/60 md:text-xl"
        >
          Le premier club de padel pensé pour créer des liens. Terrains
          premium, coaching d&apos;excellence et une communauté passionnée.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/terrains-tarifs#reservation"
              className="group relative inline-block overflow-hidden rounded-full bg-tribe-gold px-8 py-4 text-sm font-semibold text-tribe-black transition-shadow hover:shadow-[0_0_40px_rgba(201,169,110,0.4)]"
            >
              <span className="relative z-10">Réserver un terrain</span>
              <div className="absolute inset-0 -translate-x-full bg-tribe-gold-light transition-transform duration-300 group-hover:translate-x-0" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/le-club"
              className="inline-block rounded-full border border-white/20 px-8 py-4 text-sm font-medium text-white transition-all hover:border-white/40 hover:bg-white/5"
            >
              Découvrir le club
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
