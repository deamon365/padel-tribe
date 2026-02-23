"use client";

import { FadeIn } from "@/components/motion";
import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from "lucide-react";

const infos = [
  {
    icon: MapPin,
    label: "Adresse",
    value: "91 rue Abbé de l'Épée, 13005 Marseille",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "[+33 X XX XX XX XX]",
    note: "À personnaliser",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@padel-tribe.com",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@padeltribe",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "Padel Tribe",
  },
];

const schedule = [
  { day: "Lundi - Vendredi", hours: "8h00 - 22h00" },
  { day: "Samedi", hours: "8h00 - 21h00" },
  { day: "Dimanche", hours: "9h00 - 20h00" },
  { day: "Jours fériés", hours: "9h00 - 18h00" },
];

export function ContactInfo() {
  return (
    <section className="bg-tribe-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact details */}
          <FadeIn>
            <h2 className="text-2xl font-bold text-tribe-black">
              Informations de contact
            </h2>
            <div className="mt-8 space-y-6">
              {infos.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-tribe-green/10">
                    <info.icon className="h-5 w-5 text-tribe-green" />
                  </div>
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wider text-tribe-black/40">
                      {info.label}
                    </span>
                    <p className="text-sm font-medium text-tribe-black">
                      {info.value}
                    </p>
                    {info.note && (
                      <span className="mt-1 inline-block rounded-full bg-tribe-gold/10 px-2 py-0.5 text-[10px] font-medium text-tribe-gold">
                        {info.note}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Horaires */}
          <FadeIn delay={0.15}>
            <h2 className="text-2xl font-bold text-tribe-black">
              Horaires d&apos;ouverture
            </h2>
            <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm">
              {schedule.map((item, i) => (
                <div
                  key={item.day}
                  className={`flex items-center justify-between px-6 py-4 ${
                    i < schedule.length - 1
                      ? "border-b border-tribe-black/5"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-tribe-green" />
                    <span className="text-sm font-medium text-tribe-black">
                      {item.day}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-tribe-green">
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
