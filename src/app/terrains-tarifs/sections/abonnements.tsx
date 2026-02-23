"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Découverte",
    price: "29€",
    period: "/mois",
    features: ["1 créneau/semaine hors peak", "Accès communauté"],
    highlighted: false,
  },
  {
    name: "Tribu",
    price: "59€",
    period: "/mois",
    features: [
      "2 créneaux/semaine tous horaires",
      "1 cours collectif/mois",
      "Accès communauté",
    ],
    highlighted: true,
  },
  {
    name: "Tribu Premium",
    price: "99€",
    period: "/mois",
    features: [
      "Créneaux illimités",
      "4 cours collectifs/mois",
      "Accès pro shop -15%",
      "Accès communauté",
    ],
    highlighted: false,
  },
  {
    name: "Entreprise",
    price: "Sur devis",
    period: "",
    features: [
      "Formule sur-mesure pour vos équipes",
      "Terrains privatisés",
      "Coaching dédié",
    ],
    highlighted: false,
  },
];

export function Abonnements() {
  return (
    <section className="bg-tribe-black py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-tribe-gold">
            Abonnements
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Choisissez votre formule
          </h2>
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4" staggerDelay={0.12}>
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <motion.div
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className={`relative flex h-full flex-col rounded-2xl p-8 transition-colors duration-300 ${
                  plan.highlighted
                    ? "border-2 border-tribe-gold bg-white/10 hover:bg-white/15"
                    : "border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-tribe-gold px-4 py-1 text-xs font-semibold text-tribe-black">
                    Populaire
                  </span>
                )}

                <h3 className="text-lg font-semibold text-white">
                  {plan.name}
                </h3>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-tribe-gold">
                    {plan.price}
                  </span>
                  <span className="text-sm text-white/40">{plan.period}</span>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-white/60"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-tribe-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/contact"
                    className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition-all ${
                      plan.highlighted
                        ? "bg-tribe-gold text-tribe-black hover:bg-tribe-gold-light hover:shadow-[0_0_20px_rgba(201,169,110,0.3)]"
                        : "border border-white/20 text-white hover:border-white/40 hover:bg-white/5"
                    }`}
                  >
                    {plan.name === "Entreprise" ? "Demander un devis" : "Choisir"}
                  </Link>
                </motion.div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
