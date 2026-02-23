import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Advantages } from "@/components/sections/advantages";
import { Courts } from "@/components/sections/courts";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Padel Tribe — Le club de padel premium | Réservation en ligne",
  description:
    "Découvrez Padel Tribe, le club de padel premium avec 6 terrains indoor, coaching expert et une communauté passionnée. Réservez votre terrain en ligne.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Advantages />
      <Courts />
      <Testimonials />
      <CTA />
    </>
  );
}
