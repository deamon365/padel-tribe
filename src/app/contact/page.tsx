import type { Metadata } from "next";
import { ContactHero } from "./sections/contact-hero";
import { ContactInfo } from "./sections/contact-info";
import { ContactForm } from "./sections/contact-form";
import { Acces } from "./sections/acces";

export const metadata: Metadata = {
  title: "Contact — Padel Tribe | Réservation & informations",
  description:
    "Contactez Padel Tribe pour toute question, réservation ou demande de devis team building. Réponse sous 24h.",
};

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <Acces />
    </>
  );
}
