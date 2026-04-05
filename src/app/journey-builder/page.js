"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import RevealSection from "@/components/RevealSection";
import { WA_URL } from "@/lib/config";

const categories = [
  { id: "spiritual", label: "Spiritual", emoji: "🕉️", factor: 1.05 },
  { id: "forest", label: "Forest & Community", emoji: "🌲", factor: 1.12 },
  { id: "adventure", label: "Trekking & Adventure", emoji: "⛰️", factor: 1.1 },
  { id: "water", label: "Water & Boating", emoji: "🛶", factor: 1.04 },
  { id: "cultural", label: "Cultural", emoji: "🎭", factor: 1.03 },
  { id: "world", label: "World Soul Retreats", emoji: "🌍", factor: 1.18 },
];

const destinations = [
  { id: "varanasi", label: "Varanasi", factor: 1 },
  { id: "uttarakhand", label: "Uttarakhand", factor: 1.08 },
  { id: "rishikesh", label: "Rishikesh", factor: 1.02 },
  { id: "kerala", label: "Kerala", factor: 1.06 },
  { id: "bali", label: "Bali", factor: 1.2 },
  { id: "custom", label: "Custom / Multi-city", factor: 1.15 },
];

const durations = [
  { id: "short", label: "3–5 days", days: 4 },
  { id: "mid", label: "6–8 days", days: 7 },
  { id: "long", label: "9–14 days", days: 12 },
  { id: "xlong", label: "15+ days", days: 18 },
];

const styles = [
  { id: "essential", label: "Essential", perDay: 5000 },
  { id: "comfort", label: "Comfort", perDay: 12000 },
  { id: "luxury", label: "Luxury", perDay: 25000 },
  { id: "bespoke", label: "Bespoke", perDay: 28000 },
];

const modulesList = [
  { id: "stay", label: "Stay", extra: 800 },
  { id: "transport", label: "Transport", extra: 1500 },
  { id: "guide", label: "Local Guide", extra: 2000 },
  { id: "experiences", label: "Experiences", extra: 2500 },
  { id: "volunteering", label: "Volunteering", extra: 500 },
  { id: "meals", label: "Meals", extra: 1200 },
];

function formatInr(n) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
}

function buildJourneyMessage(payload) {
  const lines = [
    "*Sattva Sanctum — Journey Builder*",
    "",
    `Category: ${payload.category}`,
    `Destination: ${payload.destination}`,
    `Duration: ${payload.duration}`,
    `Travel style: ${payload.style}`,
    `Modules: ${payload.modules}`,
    `Estimate (indicative): ${payload.estimate}`,
    "",
    `Name: ${payload.name}`,
    `Phone: ${payload.phone}`,
    `Email: ${payload.email || "—"}`,
    `Dates: ${payload.dates || "—"}`,
    "",
    "Special requests:",
    payload.requests || "—",
  ];
  return encodeURIComponent(lines.join("\n"));
}

const STEP_LABELS = ["Category", "Destination", "Duration & Style", "Modules", "Your details"];

export default function JourneyBuilderPage() {
  const [step, setStep] = useState(0);
  const [category, setCategory] = useState(categories[0].id);
  const [destination, setDestination] = useState(destinations[0].id);
  const [duration, setDuration] = useState(durations[1].id);
  const [travelStyle, setTravelStyle] = useState(styles[1].id);
  const [modules, setModules] = useState(() =>
    Object.fromEntries(modulesList.map((m) => [m.id, true]))
  );
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dates, setDates] = useState("");
  const [requests, setRequests] = useState("");
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const catObj = categories.find((c) => c.id === category) || categories[0];
  const destObj = destinations.find((d) => d.id === destination) || destinations[0];
  const durObj = durations.find((d) => d.id === duration) || durations[0];
  const styleObj = styles.find((s) => s.id === travelStyle) || styles[0];

  const estimate = useMemo(() => {
    const moduleExtra = modulesList.filter((m) => modules[m.id]).reduce((s, m) => s + m.extra, 0);
    const perDay = styleObj.perDay + moduleExtra;
    const raw = durObj.days * perDay * catObj.factor * destObj.factor;
    const low = Math.round(raw * 0.92);
    const high = Math.round(raw * 1.08);
    return { low, high, mid: Math.round(raw) };
  }, [catObj.factor, destObj.factor, durObj.days, modules, styleObj.perDay]);

  const summaryModules = modulesList.filter((m) => modules[m.id]).map((m) => m.label);
  const modulesLabel = summaryModules.length ? summaryModules.join(", ") : "None selected";

  function toggleModule(id) {
    setModules((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert("Please enter your name and phone number to receive your plan on WhatsApp.");
      return;
    }
    setSubmitting(true);
    const url = `${WA_URL}?text=${buildJourneyMessage({
      category: catObj.label,
      destination: destObj.label,
      duration: durObj.label,
      style: styleObj.label,
      modules: modulesLabel,
      estimate: `${formatInr(estimate.low)} – ${formatInr(estimate.high)} (indicative)`,
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      dates: dates.trim(),
      requests: requests.trim(),
    })}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
    }, 600);
  }

  // Progress percentage for progress bar
  const progress = ((step + 1) / STEP_LABELS.length) * 100;

  if (done) {
    return (
      <section className="mx-auto min-h-[60vh] max-w-2xl px-4 py-24 md:px-6">
        <RevealSection>
          <div className="rounded-3xl border border-green-soft/30 bg-white p-10 text-center shadow-sm">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-deep/10 text-4xl">✓</div>
            <h1 className="mt-8 font-serif text-3xl font-semibold text-green-deep">Your journey is on its way</h1>
            <p className="mt-4 text-text-soft">
              We opened WhatsApp with your full summary. A Sattva planner will refine dates, inclusions, and final
              pricing with you.
            </p>
            <Link
              href="/"
              className="mt-10 inline-flex rounded-full bg-green-deep px-8 py-3 text-sm font-semibold text-cream hover:bg-green-soft"
            >
              Back to Home
            </Link>
          </div>
        </RevealSection>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
      <RevealSection>
        <h1 className="font-serif text-4xl font-semibold text-green-deep md:text-5xl">Journey Builder</h1>
        <p className="mt-4 max-w-2xl text-text-soft">
          Five quick steps — your selections update a live estimate. Submit to WhatsApp when you&apos;re ready.
        </p>
      </RevealSection>

      {/* ── Progress Bar ── */}
      <div className="mt-8">
        <div className="flex items-center justify-between text-xs font-semibold text-text-soft">
          <span>Step {step + 1} of {STEP_LABELS.length}</span>
          <span>{STEP_LABELS[step]}</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-border-soft">
          <div
            className="h-full rounded-full bg-gradient-to-r from-green-deep to-gold transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px] lg:items-start">
        <div>
          <div className="mb-8 flex flex-wrap gap-2">
            {STEP_LABELS.map((label, i) => (
              <button
                key={label}
                type="button"
                onClick={() => setStep(i)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold md:text-sm ${
                  step === i
                    ? "bg-green-deep text-cream"
                    : i < step
                      ? "bg-green-deep/10 text-green-deep ring-1 ring-green-deep/30"
                      : "bg-white text-text-soft ring-1 ring-border-soft hover:text-green-deep"
                }`}
              >
                {i + 1}. {label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {step === 0 && (
              <RevealSection>
                <h2 className="font-serif text-2xl font-semibold text-green-deep">Choose category</h2>
                <p className="mt-2 text-sm text-text-soft">What kind of transformation are you seeking?</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {categories.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setCategory(c.id)}
                      className={`flex items-center gap-4 rounded-2xl border p-5 text-left transition ${
                        category === c.id ? "border-green-deep bg-green-deep/5 ring-2 ring-green-deep" : "border-border-soft bg-white hover:border-green-soft"
                      }`}
                    >
                      <span className="text-4xl">{c.emoji}</span>
                      <span className="font-semibold text-text-main">{c.label}</span>
                    </button>
                  ))}
                </div>
              </RevealSection>
            )}

            {step === 1 && (
              <RevealSection>
                <h2 className="font-serif text-2xl font-semibold text-green-deep">Choose destination</h2>
                <p className="mt-2 text-sm text-text-soft">Where should the story unfold?</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {destinations.map((d) => (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => setDestination(d.id)}
                      className={`rounded-2xl border p-5 text-left font-semibold transition ${
                        destination === d.id ? "border-green-deep bg-green-deep/5 ring-2 ring-green-deep" : "border-border-soft bg-white hover:border-green-soft"
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </RevealSection>
            )}

            {step === 2 && (
              <RevealSection>
                <h2 className="font-serif text-2xl font-semibold text-green-deep">Duration & travel style</h2>
                <p className="mt-2 text-sm text-text-soft">Pace and comfort shape your per-day estimate.</p>
                <div className="mt-8">
                  <p className="text-sm font-semibold text-text-main">Duration</p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {durations.map((d) => (
                      <button
                        key={d.id}
                        type="button"
                        onClick={() => setDuration(d.id)}
                        className={`rounded-xl border px-4 py-3 text-left text-sm font-semibold ${
                          duration === d.id ? "border-green-deep bg-green-deep text-cream" : "border-border-soft bg-white"
                        }`}
                      >
                        {d.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mt-10">
                  <p className="text-sm font-semibold text-text-main">Travel style</p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {styles.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setTravelStyle(s.id)}
                        className={`rounded-xl border px-4 py-3 text-left text-sm font-semibold ${
                          travelStyle === s.id ? "border-gold bg-gold/20 text-green-deep" : "border-border-soft bg-white"
                        }`}
                      >
                        {s.label}
                        <span className="mt-1 block text-xs font-normal text-text-soft">{formatInr(s.perDay)}/day base</span>
                      </button>
                    ))}
                  </div>
                </div>
              </RevealSection>
            )}

            {step === 3 && (
              <RevealSection>
                <h2 className="font-serif text-2xl font-semibold text-green-deep">Add modules</h2>
                <p className="mt-2 text-sm text-text-soft">Toggle what you want included — each adjusts your estimate.</p>
                <div className="mt-8 space-y-3">
                  {modulesList.map((m) => (
                    <label
                      key={m.id}
                      className="flex cursor-pointer items-center justify-between rounded-xl border border-border-soft bg-white px-4 py-4"
                    >
                      <span className="font-medium text-text-main">{m.label}</span>
                      <input
                        type="checkbox"
                        checked={!!modules[m.id]}
                        onChange={() => toggleModule(m.id)}
                        className="h-5 w-5 rounded border-border-soft text-green-deep focus:ring-green-deep"
                      />
                    </label>
                  ))}
                </div>
              </RevealSection>
            )}

            {step === 4 && (
              <RevealSection>
                <h2 className="font-serif text-2xl font-semibold text-green-deep">Personal details</h2>
                <p className="mt-2 text-sm text-text-soft">We&apos;ll attach this to your WhatsApp message.</p>
                <div className="mt-8 space-y-5">
                  <div>
                    <label className="block text-sm font-medium">Name *</label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-border-soft bg-cream px-4 py-3 outline-none focus:ring-2 focus:ring-green-soft/40"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Phone *</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-border-soft bg-cream px-4 py-3 outline-none focus:ring-2 focus:ring-green-soft/40"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-border-soft bg-cream px-4 py-3 outline-none focus:ring-2 focus:ring-green-soft/40"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Preferred dates</label>
                    <input
                      value={dates}
                      onChange={(e) => setDates(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-border-soft bg-cream px-4 py-3 outline-none focus:ring-2 focus:ring-green-soft/40"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Special requests</label>
                    <textarea
                      rows={4}
                      value={requests}
                      onChange={(e) => setRequests(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-border-soft bg-cream px-4 py-3 outline-none focus:ring-2 focus:ring-green-soft/40"
                    />
                  </div>
                </div>
              </RevealSection>
            )}

            <div className="mt-10 flex flex-wrap gap-4">
              {step > 0 && (
                <button
                  type="button"
                  onClick={() => setStep((s) => s - 1)}
                  className="rounded-full border-2 border-green-deep px-6 py-3 text-sm font-semibold text-green-deep hover:bg-green-deep hover:text-cream"
                >
                  Back
                </button>
              )}
              {step < 4 && (
                <button
                  type="button"
                  onClick={() => setStep((s) => s + 1)}
                  className="rounded-full bg-green-deep px-6 py-3 text-sm font-semibold text-cream hover:bg-green-soft"
                >
                  Next
                </button>
              )}
              {step === 4 && (
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-full bg-gold px-8 py-3 text-sm font-semibold text-green-deep hover:bg-gold-soft disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <span className="inline-flex items-center gap-2">
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Opening WhatsApp…
                    </span>
                  ) : (
                    "Submit via WhatsApp"
                  )}
                </button>
              )}
            </div>
          </form>
        </div>

        <aside className="lg:sticky lg:top-28">
          <RevealSection>
            <div className="rounded-2xl border border-border-soft bg-green-deep p-6 text-cream shadow-lg">
              <h2 className="font-serif text-xl font-semibold text-gold-soft">Live summary</h2>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                  <dt className="text-gold-soft/80">Category</dt>
                  <dd className="font-medium text-right">{catObj.label}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                  <dt className="text-gold-soft/80">Destination</dt>
                  <dd className="font-medium text-right">{destObj.label}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                  <dt className="text-gold-soft/80">Duration</dt>
                  <dd className="font-medium text-right">{durObj.label}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                  <dt className="text-gold-soft/80">Style</dt>
                  <dd className="font-medium text-right">{styleObj.label}</dd>
                </div>
                <div className="border-b border-white/10 pb-3">
                  <dt className="text-gold-soft/80">Modules</dt>
                  <dd className="mt-2 font-medium">{modulesLabel}</dd>
                </div>
              </dl>
              <div className="mt-8 rounded-xl bg-white/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-gold-soft">Indicative estimate</p>
                <p className="mt-2 font-serif text-2xl font-bold text-cream">
                  {formatInr(estimate.low)} – {formatInr(estimate.high)}
                </p>
                <p className="mt-2 text-xs text-gold-soft/75">Midpoint ≈ {formatInr(estimate.mid)} · varies by season & group</p>
              </div>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block text-center text-sm text-gold-soft underline hover:text-cream"
              >
                Prefer to talk first? Message us
              </a>
            </div>
          </RevealSection>
        </aside>
      </div>
    </section>
  );
}
