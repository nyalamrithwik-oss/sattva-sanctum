"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RevealSection from "@/components/RevealSection";
import { WA_URL, BLUR_PLACEHOLDER } from "@/lib/config";

const CHARDHAM_HERO_BG =
  "https://images.unsplash.com/photo-1609947017136-9daf32a5f9d0?w=1400&q=80&fit=crop";
const CHARDHAM_INTRO_IMG =
  "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80&fit=crop";

const itineraryPhases = [
  {
    id: "yamunotri",
    title: "Phase 1 — Delhi to Yamunotri",
    days: "Days 1–4",
    items: [
      "Day 1: Arrive Delhi — orientation, permits check, evening briefing on yatra etiquette.",
      "Day 2: Drive to Haridwar / Barkot — evening Ganga aarti option, rest and acclimatise.",
      "Day 3: Janki Chatti base — 6 km trek to Yamunotri shrine; Divya Shila darshan; hot spring dip.",
      "Day 4: Descend and rest — local village walk, prepare for Gangotri leg.",
    ],
  },
  {
    id: "gangotri",
    title: "Phase 2 — Gangotri",
    days: "Days 5–7",
    items: [
      "Day 5: Scenic drive along Yamuna and Bhagirathi valleys to Gangotri.",
      "Day 6: Gangotri temple darshan — optional day hike toward Gaumukh glacier (19 km total to glacier; partial walks available).",
      "Day 7: Rest / acclimatisation — storytelling on King Bhagirath legend and Ganga's descent.",
    ],
  },
  {
    id: "kedarnath",
    title: "Phase 3 — Kedarnath",
    days: "Days 8–11",
    items: [
      "Day 8: Drive toward Sonprayag / Gaurikund — prepare for Kedarnath trek.",
      "Day 9: 16 km trek from Gaurikund to Kedarnath — paced ascents, tea stops, medical checkpoints.",
      "Day 10: Morning abhishek and darshan at Kedarnath Jyotirlinga — afternoon rest at altitude.",
      "Day 11: Descent to lower hills — recovery evening before Badrinath sector.",
    ],
  },
  {
    id: "badrinath",
    title: "Phase 4 — Badrinath to Delhi",
    days: "Days 12–14",
    items: [
      "Day 12: Drive to Badrinath — Tapt Kund dip, Badrinath temple darshan (Lord Vishnu).",
      "Day 13: Mana village (last Indian village), Vyas Gufa, scenic stops — begin return.",
      "Day 14: Transfer to Delhi / onward — closing circle and gratitude ritual.",
    ],
  },
];

const dhams = [
  {
    n: "1",
    name: "Yamunotri",
    deity: "Goddess Yamuna",
    altitude: "3,293 m",
    location: "Western Garhwal",
    history:
      "Yamunotri is the source shrine of the Yamuna river, sister of Yama. Pilgrims seek purification and protection on the arduous trail from Janki Chatti. The main deity is Goddess Yamuna; the sacred thermal spring cooks rice as prasad. The dham traditionally opens on Akshaya Tritiya, marking the start of the Char Dham season for countless devotees.",
    facts: [
      { k: "Trek", v: "≈ 6 km from Janki Chatti" },
      { k: "Opening", v: "Akshaya Tritiya" },
      { k: "River", v: "Yamuna" },
      { k: "Terrain", v: "Forest & rocky ascent" },
    ],
    panelImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80&fit=crop",
    alt: "Snow-dusted mountain path leading to Yamunotri shrine",
  },
  {
    n: "2",
    name: "Gangotri",
    deity: "Goddess Ganga",
    altitude: "3,048 m",
    location: "Uttarkashi district",
    history:
      "Gangotri temple marks where King Bhagirath is said to have prayed for Ganga's descent to liberate his ancestors. From here, the Bhagirathi begins its journey, later joining the Alaknanda to become the Ganga. Pilgrims feel the chill of high Himalaya and the warmth of centuries of hymn and hope. The glacier approach (around 19 km) is a profound add-on for fit trekkers.",
    facts: [
      { k: "Glacier trail", v: "≈ 19 km to Gaumukh" },
      { k: "Legend", v: "King Bhagirath" },
      { k: "Altitude", v: "3,048 m" },
      { k: "Season", v: "Late spring to autumn" },
    ],
    panelImage:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80&fit=crop",
    alt: "Gangotri temple nestled in the Himalayan valley",
  },
  {
    n: "3",
    name: "Kedarnath",
    deity: "Lord Shiva",
    altitude: "3,583 m",
    location: "Rudraprayag district",
    history:
      "Kedarnath is among the twelve Jyotirlingas, seated in a dramatic amphitheatre of peaks. The Pandavas are linked to its origin myth — seeking Shiva's forgiveness. The 16 km trek from Gaurikund tests body and devotion alike; the rebuilt temple continues an unbroken lineage of worship despite Himalayan weather. Clouds, bells, and the Mandakini river frame one of Hinduism's most intense sanctuaries.",
    facts: [
      { k: "Trek", v: "16 km from Gaurikund" },
      { k: "Jyotirlinga", v: "1 of 12" },
      { k: "Altitude", v: "3,583 m" },
      { k: "River", v: "Mandakini" },
    ],
    panelImage:
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=600&q=80&fit=crop",
    alt: "Kedarnath temple surrounded by snow-covered peaks",
  },
  {
    n: "4",
    name: "Badrinath",
    deity: "Lord Vishnu",
    altitude: "3,133 m",
    location: "Chamoli district",
    history:
      "Badrinath is part of Adi Shankaracharya's chaturamnaya — a cardinal dham of Vaishnav bhakti. The black stone idol of Badri-Narayan sits between Nar and Narayan peaks. Tapt Kund's hot springs welcome pilgrims before darshan. The town bridges alpine grandeur with continuous ritual, chants, and almsgiving along the Alaknanda.",
    facts: [
      { k: "Hot spring", v: "Tapt Kund" },
      { k: "Altitude", v: "3,133 m" },
      { k: "Shankaracharya", v: "One of 4 dhams" },
      { k: "River", v: "Alaknanda" },
    ],
    panelImage:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80&fit=crop",
    alt: "Badrinath temple with dramatic mountain backdrop at dusk",
  },
];

const seasons = [
  { title: "May – June", note: "Best", desc: "Clear skies, open routes, comfortable days for trekking and driving." },
  { title: "Sept – Oct", note: "Great", desc: "Post-monsoon clarity; crisp air and stable weather windows." },
  { title: "July – Aug", note: "Monsoon — avoid", desc: "Landslide risk and volatile weather; not recommended for first-timers." },
  { title: "Nov – April", note: "Closed / snow", desc: "High passes and shrines largely inaccessible; plan alternate circuits." },
];

export default function CharDhamPage() {
  const [tab, setTab] = useState(0);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-950 to-green-deep py-20 text-cream md:py-28">
        <div
          className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-green-deep"
          aria-hidden
        />
        <div
          className="absolute inset-0 z-[1] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${CHARDHAM_HERO_BG}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label="Snow-capped Himalayan mountain peaks under dramatic sky"
        />
        <div className="absolute inset-0 z-[2] bg-gradient-to-br from-indigo-950/85 via-purple-950/80 to-green-deep/85" aria-hidden />
        <div className="absolute inset-0 z-[3] opacity-20">
          <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-gold blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <RevealSection>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-soft">Garhwal Himalaya</p>
            <h1 className="mt-4 font-serif text-4xl font-semibold md:text-5xl lg:text-6xl">Char Dham Sacred Circuit</h1>
            <p className="mt-6 max-w-2xl text-lg text-gold-soft/90">
              Yamunotri, Gangotri, Kedarnath, Badrinath — a curated pilgrimage with safety, story, and soul.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Badrinath", "Kedarnath", "Gangotri", "Yamunotri"].map((d) => (
                <span
                  key={d}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm"
                >
                  {d}
                </span>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/journey-builder"
                className="inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-green-deep transition hover:bg-gold-soft"
              >
                Build My Journey
              </Link>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border-2 border-cream px-6 py-3 text-sm font-semibold text-cream transition hover:bg-cream hover:text-green-deep"
              >
                WhatsApp Planner
              </a>
            </div>
          </RevealSection>
        </div>
      </section>

      <div className="border-b border-border-soft bg-cream py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-6 px-4 text-center text-sm font-semibold text-green-deep md:gap-10 md:px-6">
          <span>4 Dhams</span>
          <span className="hidden text-border-soft md:inline">|</span>
          <span>10–21 Days</span>
          <span className="hidden text-border-soft md:inline">|</span>
          <span>3500+ metres</span>
          <span className="hidden text-border-soft md:inline">|</span>
          <span>4.9★</span>
          <span className="hidden text-border-soft md:inline">|</span>
          <span>100% Curated</span>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <RevealSection>
            <h2 className="font-serif text-3xl font-semibold text-green-deep">The pilgrimage that remaps the heart</h2>
            <div className="mt-6 space-y-4 text-text-soft">
              <p>
                Char Dham yatra is more than altitude and miles — it is a sequence of river, rock, and revelation. From
                Yamuna&apos;s gentle ascent to the thunder of Mandakini at Kedarnath, each shrine asks something
                different of the body and mind.
              </p>
              <p>
                Sattva Sanctum handles permits-aware routing, rest ratios, and ethical local partners so families,
                first-timers, and seasoned seekers can focus on darshan — not last-minute chaos.
              </p>
            </div>
          </RevealSection>
          <RevealSection>
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900 via-green-deep to-gold/30">
              <Image
                src={CHARDHAM_INTRO_IMG}
                alt="Himalayan valley with river flowing between green mountain slopes"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                placeholder="blur"
                blurDataURL={BLUR_PLACEHOLDER}
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-green-deep/45 via-transparent to-black/10"
                aria-hidden
              />
            </div>
          </RevealSection>
        </div>
      </section>

      <section className="border-y border-border-soft bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <RevealSection>
            <h2 className="text-center font-serif text-3xl font-semibold text-green-deep">The Four Dhams</h2>
          </RevealSection>
          <div className="mt-12 grid gap-10">
            {dhams.map((d) => (
              <RevealSection key={d.name}>
                <article className="overflow-hidden rounded-3xl border border-border-soft bg-cream shadow-sm">
                  <div className="grid gap-0 lg:grid-cols-3">
                    <div className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-br from-green-deep to-purple-900 p-8 text-cream lg:col-span-1">
                      <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                          backgroundImage: `url('${d.panelImage}')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                        aria-hidden
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/55 to-black/40" aria-hidden />
                      <span className="relative z-[1] text-5xl font-bold text-gold-soft">{d.n}</span>
                      <h3 className="relative z-[1] mt-4 font-serif text-3xl font-semibold">{d.name}</h3>
                      <p className="relative z-[1] mt-2 text-gold-soft/90">{d.deity}</p>
                      <dl className="relative z-[1] mt-6 space-y-2 text-sm">
                        <div className="flex justify-between gap-4 border-b border-white/10 py-2">
                          <dt>Altitude</dt>
                          <dd className="font-semibold">{d.altitude}</dd>
                        </div>
                        <div className="flex justify-between gap-4 py-2">
                          <dt>Region</dt>
                          <dd className="font-semibold">{d.location}</dd>
                        </div>
                      </dl>
                    </div>
                    <div className="p-8 lg:col-span-2">
                      <p className="text-text-soft">{d.history}</p>
                      <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        {d.facts.map((f) => (
                          <div key={f.k} className="rounded-xl border border-border-soft bg-white p-4">
                            <p className="text-xs font-semibold uppercase tracking-wide text-green-soft">{f.k}</p>
                            <p className="mt-1 font-medium text-text-main">{f.v}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        <RevealSection>
          <h2 className="font-serif text-3xl font-semibold text-green-deep">14-Day Sample Itinerary</h2>
          <p className="mt-2 text-text-soft">Tabbed by phase — customise duration and pace with your planner.</p>
        </RevealSection>
        <div className="mt-8 flex flex-wrap gap-2 border-b border-border-soft pb-4">
          {itineraryPhases.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setTab(i)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                tab === i ? "bg-green-deep text-cream" : "bg-white text-text-main ring-1 ring-border-soft hover:ring-green-soft"
              }`}
            >
              {p.days}
            </button>
          ))}
        </div>
        {/* Removed RevealSection to prevent re-mount animation on every tab switch */}
        <div className="mt-8">
          <div className="rounded-2xl border border-border-soft bg-white p-6 shadow-sm md:p-8">
            <h3 className="font-serif text-2xl font-semibold text-green-deep">{itineraryPhases[tab].title}</h3>
            <ul className="mt-6 space-y-4">
              {itineraryPhases[tab].items.map((line) => (
                <li key={line} className="flex gap-3 text-text-soft">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gold-soft/40 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <RevealSection>
            <h2 className="text-center font-serif text-3xl font-semibold text-green-deep">Best Time to Travel</h2>
          </RevealSection>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {seasons.map((s) => (
              <RevealSection key={s.title}>
                <div className="flex h-full flex-col rounded-2xl border border-border-soft bg-white p-6 shadow-sm">
                  <span
                    className={`w-fit rounded-full px-3 py-1 text-xs font-bold ${
                      s.note.includes("Best")
                        ? "bg-green-deep text-cream"
                        : s.note.includes("Great")
                          ? "bg-green-soft text-cream"
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    {s.note}
                  </span>
                  <h3 className="mt-4 font-serif text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm text-text-soft">{s.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        <RevealSection>
          <h2 className="text-center font-serif text-3xl font-semibold text-green-deep">Packages</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-text-soft">Indicative per-person from Delhi loop — confirm on WhatsApp.</p>
        </RevealSection>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <RevealSection>
            <div className="flex h-full flex-col rounded-2xl border border-border-soft bg-white p-8 shadow-sm">
              <h3 className="font-serif text-2xl font-semibold text-green-deep">Bhakti</h3>
              <p className="mt-4 font-serif text-4xl font-bold text-gold">₹35,000</p>
              <p className="mt-4 flex-1 text-sm text-text-soft">Shared transport, clean dharamshalas / budget hotels, group coordinator.</p>
              <a
                href={`${WA_URL}?text=${encodeURIComponent("Interested in Char Dham Bhakti package")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex justify-center rounded-full border-2 border-green-deep py-3 text-sm font-semibold text-green-deep hover:bg-green-deep hover:text-cream"
              >
                Enquire
              </a>
            </div>
          </RevealSection>
          <RevealSection>
            <div className="relative flex h-full flex-col rounded-2xl border-2 border-gold bg-green-deep p-8 text-cream shadow-xl md:-translate-y-2">
              <span className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-bold text-green-deep">
                Featured
              </span>
              <h3 className="font-serif text-2xl font-semibold">Shakti</h3>
              <p className="mt-4 font-serif text-4xl font-bold text-gold-soft">₹65,000</p>
              <p className="mt-4 flex-1 text-sm text-gold-soft/90">
                Private cab segments, mid hotels, priority darshan assistance where permitted, trek support.
              </p>
              <a
                href={`${WA_URL}?text=${encodeURIComponent("Interested in Char Dham Shakti package")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex justify-center rounded-full bg-gold py-3 text-sm font-semibold text-green-deep hover:bg-gold-soft"
              >
                Enquire
              </a>
            </div>
          </RevealSection>
          <RevealSection>
            <div className="flex h-full flex-col rounded-2xl border border-border-soft bg-white p-8 shadow-sm">
              <h3 className="font-serif text-2xl font-semibold text-green-deep">Moksha</h3>
              <p className="mt-4 font-serif text-4xl font-bold text-gold">₹1,20,000</p>
              <p className="mt-4 flex-1 text-sm text-text-soft">Premium stays, helicopter options where available, private guide, flexible rest days.</p>
              <a
                href={`${WA_URL}?text=${encodeURIComponent("Interested in Char Dham Moksha package")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex justify-center rounded-full border-2 border-green-deep py-3 text-sm font-semibold text-green-deep hover:bg-green-deep hover:text-cream"
              >
                Enquire
              </a>
            </div>
          </RevealSection>
        </div>
      </section>

      <section className="border-t border-border-soft bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <RevealSection>
            <h2 className="text-center font-serif text-3xl font-semibold text-green-deep">Essentials</h2>
          </RevealSection>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "What to Pack",
                items: ["Layered thermal + rain shell", "Sturdy trekking shoes", "Headlamp, walking pole", "Personal meds + ORS"],
              },
              {
                title: "Health & Safety",
                items: ["Gradual ascent, hydrate often", "Carry altitude meds only as prescribed", "Travel insurance with evacuation", "Listen to local weather advisories"],
              },
              {
                title: "Documents & Permits",
                items: ["Valid government ID", "Medical fitness if required", "Inner line / permits where applicable", "Emergency contacts on phone + paper"],
              },
            ].map((block) => (
              <RevealSection key={block.title}>
                <div className="h-full rounded-2xl border border-border-soft bg-cream p-6">
                  <h3 className="font-serif text-xl font-semibold text-green-deep">{block.title}</h3>
                  <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-text-soft">
                    {block.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green-deep py-16 text-cream md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <RevealSection>
            <h2 className="text-center font-serif text-3xl text-gold-soft">Yatra Voices</h2>
          </RevealSection>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                q: "Kedarnath trek was tough — but every halt was planned. I felt safe and spiritually held.",
                n: "Priya S.",
              },
              {
                q: "Badrinath darshan after Tapt Kund — seamless. Drivers knew exactly when to rest.",
                n: "Arjun T.",
              },
              {
                q: "We did the full circuit as a family. Sattva balanced elders' pace with our curiosity.",
                n: "The Reddy Family",
              },
            ].map((t) => (
              <RevealSection key={t.n}>
                <blockquote className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="italic text-gold-soft/95">&ldquo;{t.q}&rdquo;</p>
                  <footer className="mt-4 text-sm font-semibold text-cream">{t.n}</footer>
                </blockquote>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-green-deep py-20 text-center text-cream">
        <div className="relative mx-auto max-w-3xl px-4">
          <RevealSection>
            <h2 className="font-serif text-3xl font-semibold md:text-4xl">Begin your sacred journey</h2>
            <p className="mt-4 text-gold-soft/90">Char Dham with curated logistics, honest pricing, and planners who care.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-gold px-8 py-3 text-sm font-semibold text-green-deep hover:bg-gold-soft"
              >
                Plan with Us
              </Link>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border-2 border-cream px-8 py-3 text-sm font-semibold text-cream hover:bg-cream hover:text-green-deep"
              >
                WhatsApp
              </a>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
