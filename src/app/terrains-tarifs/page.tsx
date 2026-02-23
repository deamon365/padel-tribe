import type { Metadata } from "next";
import { TerrainsHero } from "./sections/terrains-hero";
import { Installations } from "./sections/installations";
import { Tarifs } from "./sections/tarifs";
import { Abonnements } from "./sections/abonnements";
import { Horaires } from "./sections/horaires";

export const metadata: Metadata = {
  title: "Terrains & Tarifs — 6 terrains indoor premium | Padel Tribe",
  description:
    "6 terrains de padel indoor premium, tarifs à partir de 36€/session. Abonnements dès 29€/mois. Réservez en ligne.",
};

export default function TerrainsTarifs() {
  return (
    <>
      <TerrainsHero />
      <Installations />
      <Tarifs />
      <Abonnements />
      <Horaires />
    </>
  );
}
