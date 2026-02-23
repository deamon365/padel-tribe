import type { Metadata } from "next";
import { EvenementsHero } from "./sections/evenements-hero";
import { EvenementsRecurrents } from "./sections/evenements-recurrents";
import { TeamBuilding } from "./sections/team-building";
import { EvenementsSpeciaux } from "./sections/evenements-speciaux";

export const metadata: Metadata = {
  title: "Événements padel — Tournois, afterwork & team building | Padel Tribe",
  description:
    "Tournois hebdomadaires, soirées afterwork, team building entreprise. Découvrez tous les événements Padel Tribe.",
};

export default function Evenements() {
  return (
    <>
      <EvenementsHero />
      <EvenementsRecurrents />
      <TeamBuilding />
      <EvenementsSpeciaux />
    </>
  );
}
