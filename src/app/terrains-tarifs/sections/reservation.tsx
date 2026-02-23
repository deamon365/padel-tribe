"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/motion";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  User,
  Mail,
  Phone,
  CheckCircle,
  Loader2,
  ArrowLeft,
} from "lucide-react";

/* ────────── Constants ────────── */

const COURTS = [1, 2, 3, 4, 5, 6] as const;

const TIME_SLOTS = [
  { start: "08:00", end: "09:30" },
  { start: "09:30", end: "11:00" },
  { start: "11:00", end: "12:30" },
  { start: "12:30", end: "14:00" },
  { start: "14:00", end: "15:30" },
  { start: "15:30", end: "17:00" },
  { start: "17:00", end: "18:30" },
  { start: "18:30", end: "20:00" },
  { start: "20:00", end: "21:30" },
];

const COURT_NAMES: Record<number, string> = {
  1: "Central 1",
  2: "Central 2",
  3: "Premium 3",
  4: "Premium 4",
  5: "Training 5",
  6: "Training 6",
};

const DAYS_FR = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
const MONTHS_FR = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
];

type Step = "date" | "slot" | "form" | "success";

/* ────────── Mock busy slots (to be replaced by Google Calendar API) ────────── */

function getMockBusySlots(date: Date): Set<string> {
  const seed = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
  const busy = new Set<string>();
  for (let court = 1; court <= 6; court++) {
    for (let s = 0; s < TIME_SLOTS.length; s++) {
      const hash = (seed * 31 + court * 17 + s * 13) % 100;
      if (hash < 25) {
        busy.add(`${court}-${s}`);
      }
    }
  }
  return busy;
}

/* ────────── Calendar helpers ────────── */

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1; // Monday = 0
}

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function isBeforeToday(date: Date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date < today;
}

/* ────────── Component ────────── */

export function Reservation() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedCourt, setSelectedCourt] = useState<number | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [step, setStep] = useState<Step>("date");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [submitting, setSubmitting] = useState(false);

  const busySlots = useMemo(
    () => (selectedDate ? getMockBusySlots(selectedDate) : new Set<string>()),
    [selectedDate]
  );

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  /* ── Navigation ── */

  function prevMonth() {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  }

  function nextMonth() {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  }

  function handleDateSelect(day: number) {
    const date = new Date(currentYear, currentMonth, day);
    if (isBeforeToday(date)) return;
    setSelectedDate(date);
    setSelectedCourt(null);
    setSelectedSlot(null);
    setStep("slot");
  }

  function handleSlotSelect(court: number, slotIndex: number) {
    if (busySlots.has(`${court}-${slotIndex}`)) return;
    setSelectedCourt(court);
    setSelectedSlot(slotIndex);
    setStep("form");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    // TODO: Replace with Google Calendar API call
    await new Promise((r) => setTimeout(r, 1500));

    setSubmitting(false);
    setStep("success");
  }

  function reset() {
    setSelectedDate(null);
    setSelectedCourt(null);
    setSelectedSlot(null);
    setFormData({ name: "", email: "", phone: "" });
    setStep("date");
  }

  const inputClasses =
    "mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all focus:border-tribe-gold focus:ring-2 focus:ring-tribe-gold/20";

  return (
    <section id="reservation" className="bg-tribe-dark-light py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <FadeIn className="text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-tribe-gold">
            Réservation
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Réservez votre terrain
          </h2>
          <p className="mt-4 text-base text-white/40">
            Choisissez une date, un créneau et un terrain en quelques clics.
          </p>
        </FadeIn>

        {/* Steps indicator */}
        <FadeIn delay={0.1}>
          <div className="mx-auto mt-12 flex max-w-md items-center justify-center gap-2">
            {(["date", "slot", "form"] as const).map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all ${
                    step === s
                      ? "bg-tribe-gold text-tribe-black"
                      : step === "success" || (["date", "slot", "form"].indexOf(step) > i)
                        ? "bg-tribe-green text-white"
                        : "bg-white/10 text-white/30"
                  }`}
                >
                  {step === "success" || (["date", "slot", "form"].indexOf(step) > i) ? "✓" : i + 1}
                </div>
                {i < 2 && (
                  <div
                    className={`h-px w-8 sm:w-12 ${
                      ["date", "slot", "form"].indexOf(step) > i || step === "success"
                        ? "bg-tribe-green"
                        : "bg-white/10"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="mx-auto mt-3 flex max-w-md justify-between px-1 text-[11px] text-white/30">
            <span>Date</span>
            <span>Créneau</span>
            <span>Coordonnées</span>
          </div>
        </FadeIn>

        {/* Content */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            {/* ── Step 1: Calendar ── */}
            {step === "date" && (
              <motion.div
                key="date"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mx-auto max-w-md"
              >
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  {/* Month navigation */}
                  <div className="flex items-center justify-between">
                    <button
                      onClick={prevMonth}
                      className="flex h-9 w-9 items-center justify-center rounded-lg text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <span className="text-sm font-semibold text-white">
                      {MONTHS_FR[currentMonth]} {currentYear}
                    </span>
                    <button
                      onClick={nextMonth}
                      className="flex h-9 w-9 items-center justify-center rounded-lg text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Day headers */}
                  <div className="mt-4 grid grid-cols-7 text-center text-xs font-medium text-white/30">
                    {DAYS_FR.map((d) => (
                      <div key={d} className="py-2">{d}</div>
                    ))}
                  </div>

                  {/* Days grid */}
                  <div className="grid grid-cols-7 gap-1">
                    {/* Empty cells for offset */}
                    {Array.from({ length: firstDay }).map((_, i) => (
                      <div key={`empty-${i}`} />
                    ))}

                    {/* Day cells */}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                      const day = i + 1;
                      const date = new Date(currentYear, currentMonth, day);
                      const isPast = isBeforeToday(date);
                      const isToday = isSameDay(date, today);
                      const isSelected = selectedDate && isSameDay(date, selectedDate);

                      return (
                        <button
                          key={day}
                          disabled={isPast}
                          onClick={() => handleDateSelect(day)}
                          className={`relative flex h-10 items-center justify-center rounded-lg text-sm font-medium transition-all ${
                            isPast
                              ? "cursor-not-allowed text-white/10"
                              : isSelected
                                ? "bg-tribe-gold text-tribe-black"
                                : isToday
                                  ? "bg-tribe-green/20 text-tribe-gold hover:bg-tribe-gold/20"
                                  : "text-white/70 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          {day}
                          {isToday && !isSelected && (
                            <span className="absolute bottom-1 h-1 w-1 rounded-full bg-tribe-gold" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── Step 2: Court & Slot selection ── */}
            {step === "slot" && selectedDate && (
              <motion.div
                key="slot"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6 flex items-center justify-between">
                  <button
                    onClick={() => setStep("date")}
                    className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Changer de date
                  </button>
                  <span className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
                    {selectedDate.toLocaleDateString("fr-FR", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                    })}
                  </span>
                </div>

                {/* Slot grid */}
                <div className="overflow-x-auto">
                  <div className="min-w-[640px]">
                    {/* Header: courts */}
                    <div className="grid grid-cols-[100px_repeat(6,1fr)] gap-2">
                      <div className="flex items-center text-xs font-medium text-white/30">
                        <Clock className="mr-1.5 h-3.5 w-3.5" />
                        Créneau
                      </div>
                      {COURTS.map((c) => (
                        <div
                          key={c}
                          className="rounded-lg bg-white/5 py-2 text-center text-xs font-semibold text-white/70"
                        >
                          <MapPin className="mx-auto mb-0.5 h-3 w-3 text-tribe-gold" />
                          {COURT_NAMES[c]}
                        </div>
                      ))}
                    </div>

                    {/* Rows: time slots */}
                    <div className="mt-2 space-y-1.5">
                      {TIME_SLOTS.map((slot, si) => (
                        <div key={si} className="grid grid-cols-[100px_repeat(6,1fr)] gap-2">
                          <div className="flex items-center text-xs font-medium text-white/40">
                            {slot.start}
                            <span className="mx-1 text-white/20">→</span>
                            {slot.end}
                          </div>
                          {COURTS.map((court) => {
                            const isBusy = busySlots.has(`${court}-${si}`);
                            const isSelected = selectedCourt === court && selectedSlot === si;

                            return (
                              <button
                                key={court}
                                disabled={isBusy}
                                onClick={() => handleSlotSelect(court, si)}
                                className={`rounded-lg py-2.5 text-xs font-medium transition-all ${
                                  isBusy
                                    ? "cursor-not-allowed bg-red-500/10 text-red-400/50 line-through"
                                    : isSelected
                                      ? "bg-tribe-gold text-tribe-black ring-2 ring-tribe-gold/50"
                                      : "bg-white/5 text-tribe-green-light hover:bg-tribe-green/20 hover:text-white"
                                }`}
                              >
                                {isBusy ? "Réservé" : "Dispo"}
                              </button>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Legend */}
                <div className="mt-6 flex items-center justify-center gap-6 text-xs text-white/30">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded bg-white/5 ring-1 ring-white/10" />
                    Disponible
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded bg-red-500/10 ring-1 ring-red-500/20" />
                    Réservé
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded bg-tribe-gold" />
                    Sélectionné
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── Step 3: Booking form ── */}
            {step === "form" && selectedDate && selectedCourt && selectedSlot !== null && (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mx-auto max-w-lg"
              >
                <button
                  onClick={() => setStep("slot")}
                  className="mb-6 flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Changer de créneau
                </button>

                {/* Recap */}
                <div className="mb-8 rounded-xl border border-tribe-gold/20 bg-tribe-gold/5 p-5">
                  <h3 className="text-sm font-semibold text-tribe-gold">
                    Récapitulatif
                  </h3>
                  <div className="mt-3 space-y-2 text-sm text-white/60">
                    <div className="flex justify-between">
                      <span>Date</span>
                      <span className="font-medium text-white">
                        {selectedDate.toLocaleDateString("fr-FR", {
                          weekday: "long",
                          day: "numeric",
                          month: "long",
                        })}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Créneau</span>
                      <span className="font-medium text-white">
                        {TIME_SLOTS[selectedSlot].start} → {TIME_SLOTS[selectedSlot].end}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Terrain</span>
                      <span className="font-medium text-white">
                        {COURT_NAMES[selectedCourt]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="book-name" className="flex items-center gap-2 text-sm font-medium text-white">
                      <User className="h-4 w-4 text-white/40" />
                      Nom complet <span className="text-tribe-gold">*</span>
                    </label>
                    <input
                      type="text"
                      id="book-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={inputClasses}
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="book-email" className="flex items-center gap-2 text-sm font-medium text-white">
                      <Mail className="h-4 w-4 text-white/40" />
                      Email <span className="text-tribe-gold">*</span>
                    </label>
                    <input
                      type="email"
                      id="book-email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputClasses}
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="book-phone" className="flex items-center gap-2 text-sm font-medium text-white">
                      <Phone className="h-4 w-4 text-white/40" />
                      Téléphone <span className="text-tribe-gold">*</span>
                    </label>
                    <input
                      type="tel"
                      id="book-phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={inputClasses}
                      placeholder="06 XX XX XX XX"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={!submitting ? { scale: 1.03 } : {}}
                    whileTap={!submitting ? { scale: 0.97 } : {}}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-tribe-gold px-8 py-4 text-sm font-semibold text-tribe-black transition-shadow hover:shadow-[0_0_20px_rgba(201,169,110,0.3)] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {submitting ? (
                      <>
                        Réservation en cours...
                        <Loader2 className="h-4 w-4 animate-spin" />
                      </>
                    ) : (
                      "Confirmer la réservation"
                    )}
                  </motion.button>
                </form>
              </motion.div>
            )}

            {/* ── Step 4: Success ── */}
            {step === "success" && selectedDate && selectedCourt && selectedSlot !== null && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="mx-auto max-w-md text-center"
              >
                <div className="rounded-2xl border border-tribe-green/20 bg-tribe-green/5 p-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle className="mx-auto h-16 w-16 text-tribe-green-light" />
                  </motion.div>

                  <h3 className="mt-6 text-2xl font-bold text-white">
                    Réservation confirmée !
                  </h3>
                  <p className="mt-3 text-sm text-white/50">
                    Un email de confirmation a été envoyé à{" "}
                    <span className="font-medium text-white">{formData.email}</span>
                  </p>

                  <div className="mt-6 rounded-xl bg-white/5 p-4 text-left text-sm">
                    <div className="flex justify-between text-white/50">
                      <span>Date</span>
                      <span className="font-medium text-white">
                        {selectedDate.toLocaleDateString("fr-FR", {
                          weekday: "long",
                          day: "numeric",
                          month: "long",
                        })}
                      </span>
                    </div>
                    <div className="mt-2 flex justify-between text-white/50">
                      <span>Créneau</span>
                      <span className="font-medium text-white">
                        {TIME_SLOTS[selectedSlot].start} → {TIME_SLOTS[selectedSlot].end}
                      </span>
                    </div>
                    <div className="mt-2 flex justify-between text-white/50">
                      <span>Terrain</span>
                      <span className="font-medium text-white">
                        {COURT_NAMES[selectedCourt]}
                      </span>
                    </div>
                  </div>

                  <motion.button
                    onClick={reset}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all hover:border-white/40 hover:bg-white/5"
                  >
                    Nouvelle réservation
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
