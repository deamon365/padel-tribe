import type { Metadata } from "next";
import { CoachingHero } from "./sections/coaching-hero";
import { Philosophie } from "./sections/philosophie";
import { Niveaux } from "./sections/niveaux";
import { TarifsCoaching } from "./sections/tarifs-coaching";
import { Coachs } from "./sections/coachs";

export const metadata: Metadata = {
  title: "Cours de padel & coaching — Tous niveaux | Padel Tribe",
  description:
    "Cours de padel pour débutants à confirmés. Coachs certifiés, cours collectifs et particuliers. Stages intensifs disponibles.",
};

export default function CoursCoaching() {
  return (
    <>
      <CoachingHero />
      <Philosophie />
      <Niveaux />
      <TarifsCoaching />
      <Coachs />
    </>
  );
}
