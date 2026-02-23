"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion";
import {
  Users,
  GraduationCap,
  Lock,
  UtensilsCrossed,
  Music,
  Award,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const features = [
  { icon: Users, label: "Organisation de tournoi sur-mesure (10 à 100 personnes)" },
  { icon: GraduationCap, label: "Initiation pour les débutants" },
  { icon: Lock, label: "Terrains privatisés" },
  { icon: UtensilsCrossed, label: "Formule traiteur & bar privatisé" },
  { icon: Music, label: "Animation et DJ sur demande" },
  { icon: Award, label: "Trophées et goodies personnalisés" },
];

export function TeamBuilding() {
  return (
    <section className="bg-tribe-black py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <FadeIn direction="left">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-tribe-gold">
              Entreprises
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Team Building
              <br />
              <span className="text-tribe-gold">& Entreprises</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/60">
              Offrez à vos équipes une expérience sportive et conviviale. Le padel
              est le sport idéal pour un team building : accessible à tous, fun et
              social.
            </p>
            <div className="mt-8 rounded-xl border border-tribe-gold/20 bg-tribe-gold/10 p-4">
              <p className="text-sm font-semibold text-tribe-gold">
                À partir de 45€/personne
              </p>
              <p className="mt-1 text-xs text-white/40">Minimum 10 personnes</p>
            </div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="mt-8 inline-block">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-tribe-gold px-8 py-4 text-sm font-semibold text-tribe-black transition-shadow hover:shadow-[0_0_30px_rgba(201,169,110,0.3)]"
              >
                Demander un devis
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="space-y-4">
              {features.map((feat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-4 transition-all hover:border-white/10 hover:bg-white/10"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-tribe-green/20">
                    <feat.icon className="h-5 w-5 text-tribe-gold" />
                  </div>
                  <span className="text-sm text-white/70">{feat.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
