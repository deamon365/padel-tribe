"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

const subjects = [
  "Réservation",
  "Cours & Coaching",
  "Événement",
  "Team Building",
  "Partenariat",
  "Autre",
];

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputClasses =
    "mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all focus:border-tribe-gold focus:ring-2 focus:ring-tribe-gold/20";

  return (
    <section className="bg-tribe-dark-light py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <FadeIn className="text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-tribe-gold">
            Formulaire
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Envoyez-nous un message
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Nom */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white"
                >
                  Nom complet <span className="text-tribe-gold">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  required
                  className={inputClasses}
                  placeholder="Votre nom"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Email <span className="text-tribe-gold">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="reply_to"
                  required
                  className={inputClasses}
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Téléphone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-white"
                >
                  Téléphone{" "}
                  <span className="text-white/30">(optionnel)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={inputClasses}
                  placeholder="06 XX XX XX XX"
                />
              </div>

              {/* Sujet */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-white"
                >
                  Sujet <span className="text-tribe-gold">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className={inputClasses}
                >
                  <option value="">Choisir un sujet</option>
                  {subjects.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white"
              >
                Message <span className="text-tribe-gold">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className={`${inputClasses} resize-none`}
                placeholder="Votre message..."
              />
            </div>

            {/* Submit button */}
            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={status === "idle" ? { scale: 1.03 } : {}}
              whileTap={status === "idle" ? { scale: 0.97 } : {}}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-tribe-gold px-8 py-4 text-sm font-semibold text-tribe-black transition-shadow hover:shadow-[0_0_20px_rgba(201,169,110,0.3)] disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
            >
              {status === "sending" ? (
                <>
                  Envoi en cours...
                  <Loader2 className="h-4 w-4 animate-spin" />
                </>
              ) : (
                <>
                  Envoyer
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </motion.button>

            {/* Status messages */}
            <AnimatePresence mode="wait">
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-3 rounded-xl border border-tribe-green/30 bg-tribe-green/10 px-5 py-4"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-tribe-green-light" />
                  <p className="text-sm font-medium text-tribe-green-light">
                    Message envoyé avec succès ! Nous vous répondrons rapidement.
                  </p>
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-5 py-4"
                >
                  <AlertCircle className="h-5 w-5 shrink-0 text-red-400" />
                  <p className="text-sm font-medium text-red-400">
                    Une erreur est survenue. Veuillez réessayer ou nous contacter
                    directement par email.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
