"use client";

import { FadeIn } from "@/components/motion";
import { Clock } from "lucide-react";

const schedule = [
  { day: "Lundi - Vendredi", hours: "8h00 - 22h00" },
  { day: "Samedi", hours: "8h00 - 21h00" },
  { day: "Dimanche", hours: "9h00 - 20h00" },
  { day: "Jours fériés", hours: "9h00 - 18h00" },
];

export function Horaires() {
  return (
    <section className="bg-tribe-dark py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <FadeIn className="text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-tribe-gold">
            Horaires
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Horaires d&apos;ouverture
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            {schedule.map((item, i) => (
              <div
                key={item.day}
                className={`flex items-center justify-between px-8 py-5 ${
                  i < schedule.length - 1 ? "border-b border-white/5" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-tribe-gold" />
                  <span className="font-medium text-white">
                    {item.day}
                  </span>
                </div>
                <span className="text-sm font-semibold text-tribe-gold">
                  {item.hours}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
