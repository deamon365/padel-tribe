import type { Metadata } from "next";
import { ClubHero } from "./sections/club-hero";
import { Histoire } from "./sections/histoire";
import { Valeurs } from "./sections/valeurs";
import { ChiffresCles } from "./sections/chiffres-cles";
import { Equipe } from "./sections/equipe";
import { Galerie } from "./sections/galerie";

export const metadata: Metadata = {
  title: "Notre club de padel — Histoire, équipe & valeurs | Padel Tribe",
  description:
    "Découvrez l'histoire de Padel Tribe, nos valeurs et l'équipe passionnée qui fait vivre le club au quotidien.",
};

export default function LeClub() {
  return (
    <>
      <ClubHero />
      <Histoire />
      <Valeurs />
      <ChiffresCles />
      <Equipe />
      <Galerie />
    </>
  );
}
