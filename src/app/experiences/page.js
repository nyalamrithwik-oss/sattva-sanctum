"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RevealSection from "@/components/RevealSection";
import { BLUR_PLACEHOLDER } from "@/lib/config";

const EXP_HERO_BG =
  "https://images.unsplash.com/photo-1726266140487-39c194e3af48?w=1400&q=80&fit=crop";
const IMG_KASHI =
  "https://images.unsplash.com/photo-1726266140487-39c194e3af48?w=800&q=80&fit=crop";
const IMG_FOREST =
  "https://images.unsplash.com/photo-1629184950099-3eb7993b5f48?w=800&q=80&fit=crop";
const IMG_GHAT_HERITAGE =
  "https://plus.unsplash.com/premium_photo-1769893416672-c67327cdadac?w=600&q=80&fit=crop";
const IMG_RISHIKESH_YOGA =
  "https://images.unsplash.com/photo-1725083505564-4b47c37c6ded?w=600&q=80&fit=crop";
const IMG_VILLAGE =
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop";
const IMG_FARM =
  "https://images.unsplash.com/photo-1764428950555-6c958aff2ba1?w=600&q=80&fit=crop";
const IMG_WILDLIFE =
  "https://images.unsplash.com/photo-1769845925398-9324ddb82b53?w=600&q=80&fit=crop";
const IMG_TREK_RIDGE =
  "https://images.unsplash.com/photo-1629184950099-3eb7993b5f48?w=600&q=80&fit=crop";
const IMG_VALLEY_FLOWERS =
  "https://images.unsplash.com/photo-1740116887029-511f9113a782?w=600&q=80&fit=crop";
const IMG_RAFTING =
  "https://images.unsplash.com/photo-1641584495061-89b9025f563b?w=600&q=80&fit=crop";
const IMG_WATER =
  "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80&fit=crop";
const IMG_CULTURAL =
  "https://images.unsplash.com/photo-1583309219338-a582f1f9ca6b?w=600&q=80&fit=crop";
const IMG_TEMPLE_DECCAN =
  "https://images.unsplash.com/photo-1665003725647-3ae0f01140b1?w=600&q=80&fit=crop";
const IMG_BODH_GAYA =
  "https://images.unsplash.com/photo-1663026334663-5026b4f43ac6?w=600&q=80&fit=crop";

const filters = [
  { id: "all", label: "All" },
  { id: "spiritual", label: "Spiritual" },
  { id: "forest", label: "Forest & Community" },
  { id: "adventure", label: "Adventure" },
  { id: "water", label: "Water & Boating" },
  { id: "cultural", label: "Cultural" },
];

const spiritualFeatured = {
  title: "Kashi Inner Journey",
  desc: "Ghats at dawn, labyrinth lanes, evening Ganga Aarti, and guided contemplation in the eternal city.",
  tags: ["5–7 days", "Varanasi", "Small groups"],
};

const spiritualSmall = [
  {
    title: "Rishikesh Sadhana Week",
    desc: "Yoga, Ganga dips, and satsang with vetted teachers.",
    image: IMG_RISHIKESH_YOGA,
    alt: "Rishikesh riverside yoga session at sunrise",
  },
  {
    title: "Temple Circuit Deccan",
    desc: "Heritage temples with storytelling and local cuisine.",
    image: IMG_TEMPLE_DECCAN,
    alt: "Ornate Deccan temple with intricately carved pillars",
  },
  {
    title: "Bodh Gaya Retreat",
    desc: "Meditation under the Bodhi tree with mindful pacing.",
    image: IMG_BODH_GAYA,
    alt: "Bodh Gaya Mahabodhi temple with meditation garden",
  },
];

const forestFeatured = {
  title: "Sattva Forest Life",
  desc: "Community living, forest walks, farm meals, and digital detox — our signature USP experience.",
  tags: ["4–10 days", "Uttarakhand / Kerala", "USP"],
};

const forestSmall = [
  {
    title: "Village Homestay Immersion",
    desc: "Live with hosts, learn crafts, share kitchens.",
    image: IMG_VILLAGE,
    alt: "Traditional Indian village with terraced farmland",
  },
  {
    title: "Organic Farm Residency",
    desc: "Seasonal work, silence hours, star-filled nights.",
    image: IMG_FARM,
    alt: "Lush organic farm with rows of green crops",
  },
  {
    title: "Wildlife Buffer Zone Walks",
    desc: "Ethical safaris and conservation conversations.",
    image: IMG_WILDLIFE,
    alt: "Forest trail in a wildlife sanctuary at dawn",
  },
];

const adventureCards = [
  {
    title: "Himalayan Ridge Trek",
    desc: "Acclimatised ascents with certified mountain guides.",
    image: IMG_TREK_RIDGE,
    alt: "Trekkers on a Himalayan ridge trail with mountain panorama",
  },
  {
    title: "Valley of Flowers Trail",
    desc: "Alpine blooms, photography, and mindful trekking.",
    image: IMG_VALLEY_FLOWERS,
    alt: "Colourful wildflowers blooming in an alpine valley",
  },
  {
    title: "Rishikesh Adventure Mix",
    desc: "Rafting, cliff jumps (optional), and riverside camps.",
    image: IMG_RAFTING,
    alt: "White-water rafting on the Ganges near Rishikesh",
  },
];

const waterCultural = [
  {
    title: "Backwater Slow Cruise",
    desc: "Kerala houseboats with local chefs and musicians.",
    image: IMG_WATER,
    alt: "Traditional Kerala houseboat gliding through palm-lined backwaters",
  },
  {
    title: "Ghat Heritage Walk",
    desc: "Architecture, music, and food across river cities.",
    image: IMG_GHAT_HERITAGE,
    alt: "Historic ghat architecture along the Ganges riverfront",
  },
  {
    title: "Classical Arts Intensive",
    desc: "Kathak, Carnatic, or crafts with master practitioners.",
    image: IMG_CULTURAL,
    alt: "Classical Indian dance performance in traditional attire",
  },
];

function SectionCard({ title, desc, image, alt }) {
  return (
    <div className="rounded-2xl border border-border-soft bg-white p-6 shadow-sm">
      <div className="relative h-48 overflow-hidden rounded-xl bg-green-deep/15">
        <Image src={image} alt={alt || title} fill className="z-0 object-cover" sizes="(max-width: 768px) 100vw, 33vw" placeholder="blur" blurDataURL={BLUR_PLACEHOLDER} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" aria-hidden />
      </div>
      <h3 className="mt-4 font-serif text-lg font-semibold text-text-main">{title}</h3>
      <p className="mt-2 text-sm text-text-soft">{desc}</p>
    </div>
  );
}

export default function ExperiencesPage() {
  const [active, setActive] = useState("all");

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const show = (key) => active === "all" || active === key;

  return (
    <>
      <section className="relative min-h-[22rem] overflow-hidden bg-gradient-to-b from-cream to-gold-soft/30 pb-8 pt-12 md:pt-16">
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src={EXP_HERO_BG}
            alt="Panoramic view of Indian temple and river landscape"
            fill
            className="z-0 object-cover"
            sizes="100vw"
            priority
            placeholder="blur"
            blurDataURL={BLUR_PLACEHOLDER}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 z-[1] bg-black/30" aria-hidden />
        <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-cream/92 via-cream/78 to-gold-soft/45" aria-hidden />
        <div className="pointer-events-none absolute inset-0 z-[3] bg-green-deep/10" aria-hidden />
        <div className="relative z-[4] mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <RevealSection>
            <h1 className="font-serif text-4xl font-semibold text-green-deep md:text-5xl">Experiences</h1>
            <p className="mt-4 max-w-2xl text-lg text-text-soft">
              Explore our universe of journeys — filter by what moves you, then build your path in the journey
              builder.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => {
                    setActive(f.id);
                    if (f.id === "all") window.scrollTo({ top: 0, behavior: "smooth" });
                    else if (f.id === "cultural") scrollTo("section-water");
                    else scrollTo(`section-${f.id}`);
                  }}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    active === f.id
                      ? "bg-green-deep text-cream"
                      : "border border-border-soft bg-white text-text-main hover:border-green-soft"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      <div className="sticky top-[72px] z-30 border-b border-border-soft bg-cream/95 py-3 backdrop-blur-md md:top-20">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 md:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wide text-text-soft">Jump:</span>
          {filters.slice(1).map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => scrollTo(f.id === "cultural" ? "section-water" : `section-${f.id}`)}
              className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-green-deep shadow-sm ring-1 ring-border-soft hover:bg-green-deep hover:text-cream"
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {show("spiritual") && (
        <section id="section-spiritual" className="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 md:px-6 lg:px-8">
          <RevealSection>
            <h2 className="font-serif text-3xl font-semibold text-green-deep">Spiritual</h2>
            <p className="mt-2 text-text-soft">Pilgrimage, ritual, and inner journeys with respectful pacing.</p>
          </RevealSection>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <RevealSection>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border-soft bg-white shadow-md lg:col-span-1">
                <div className="grid flex-1 md:grid-cols-2">
                  <div className="relative min-h-72 w-full overflow-hidden bg-gradient-to-br from-green-deep to-green-soft md:min-h-[17.5rem]">
                    <Image
                      src={IMG_KASHI}
                      alt="Varanasi Kashi ghats at dawn with pilgrims and boats"
                      fill
                      className="z-0 object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      placeholder="blur"
                      blurDataURL={BLUR_PLACEHOLDER}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-deep/80 to-green-deep/25" aria-hidden />
                  </div>
                  <div className="p-6">
                    <span className="rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold text-green-deep">
                      Featured
                    </span>
                    <h3 className="mt-3 font-serif text-2xl font-semibold">{spiritualFeatured.title}</h3>
                    <p className="mt-3 text-sm text-text-soft">{spiritualFeatured.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {spiritualFeatured.tags.map((t) => (
                        <span key={t} className="rounded-md bg-cream px-2 py-1 text-xs text-text-soft">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </RevealSection>
            <div className="grid gap-6">
              {spiritualSmall.map((c) => (
                <RevealSection key={c.title}>
                  <SectionCard {...c} />
                </RevealSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {show("forest") && (
        <section
          id="section-forest"
          className="border-y border-border-soft bg-gold-soft/20 py-16 scroll-mt-28 md:py-20"
        >
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <RevealSection>
              <h2 className="font-serif text-3xl font-semibold text-green-deep">Forest & Community Living</h2>
              <p className="mt-2 text-text-soft">Our USP — ethical immersion with hosts and landscapes.</p>
            </RevealSection>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <RevealSection>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border-soft bg-white shadow-md">
                  <div className="grid flex-1 md:grid-cols-2">
                    <div className="relative min-h-72 w-full overflow-hidden bg-gradient-to-br from-emerald-900 to-green-deep md:min-h-[17.5rem]">
                      <Image
                        src={IMG_FOREST}
                        alt="Dense forest with sunlight streaming through tall trees"
                        fill
                        className="z-0 object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        placeholder="blur"
                        blurDataURL={BLUR_PLACEHOLDER}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-green-deep/85 to-emerald-900/30" aria-hidden />
                    </div>
                    <div className="p-6">
                      <span className="rounded-full bg-green-deep px-3 py-1 text-xs font-semibold text-cream">
                        Our USP
                      </span>
                      <h3 className="mt-3 font-serif text-2xl font-semibold">{forestFeatured.title}</h3>
                      <p className="mt-3 text-sm text-text-soft">{forestFeatured.desc}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {forestFeatured.tags.map((t) => (
                          <span key={t} className="rounded-md bg-cream px-2 py-1 text-xs text-text-soft">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </RevealSection>
              <div className="grid gap-6">
                {forestSmall.map((c) => (
                  <RevealSection key={c.title}>
                    <SectionCard {...c} />
                  </RevealSection>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="bg-green-deep py-14 text-cream">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <RevealSection>
            <h2 className="text-center font-serif text-2xl font-semibold text-gold-soft md:text-3xl">
              Why Sattva Sanctum is different
            </h2>
          </RevealSection>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Life experience lens",
                desc: "We design for transformation — not volume departures or hidden shopping stops.",
              },
              {
                title: "Transparent bands",
                desc: "Essential, Comfort, Luxury tiers with clear inclusions so you can decide calmly.",
              },
              {
                title: "Human planners",
                desc: "WhatsApp access to real people who've hosted and travelled these routes.",
              },
            ].map((p) => (
              <RevealSection key={p.title}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="font-serif text-xl text-gold-soft">{p.title}</h3>
                  <p className="mt-3 text-sm text-gold-soft/85">{p.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {show("adventure") && (
        <section id="section-adventure" className="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 md:px-6 lg:px-8">
          <RevealSection>
            <h2 className="font-serif text-3xl font-semibold text-green-deep">Trekking & Adventure</h2>
            <p className="mt-2 text-text-soft">Physical challenge with safety, acclimatisation, and soul.</p>
          </RevealSection>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {adventureCards.map((c) => (
              <RevealSection key={c.title}>
                <SectionCard {...c} />
              </RevealSection>
            ))}
          </div>
        </section>
      )}

      {(show("water") || show("cultural")) && (
        <section
          id="section-water"
          className="border-t border-border-soft bg-white py-16 scroll-mt-28 md:py-20"
        >
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <RevealSection>
              <h2 className="font-serif text-3xl font-semibold text-green-deep">Water & Cultural</h2>
              <p className="mt-2 text-text-soft">Rivers, backwaters, arts, and living heritage.</p>
            </RevealSection>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {waterCultural.map((c) => (
                <RevealSection key={c.title}>
                  <SectionCard {...c} />
                </RevealSection>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        <RevealSection>
          <h2 className="text-center font-serif text-3xl font-semibold text-green-deep">Pricing Bands</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-text-soft">
            Per-day guidance — final quotes depend on group size, season, and modules.
          </p>
        </RevealSection>
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse overflow-hidden rounded-2xl border border-border-soft bg-white text-left shadow-sm">
            <thead>
              <tr className="bg-green-deep text-cream">
                <th className="px-6 py-4 font-sans text-sm font-semibold">Tier</th>
                <th className="px-6 py-4 font-sans text-sm font-semibold">From (per day)</th>
                <th className="px-6 py-4 font-sans text-sm font-semibold">Best for</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-border-soft">
                <td className="px-6 py-4 font-semibold text-green-deep">Essential</td>
                <td className="px-6 py-4">₹5,000 / day</td>
                <td className="px-6 py-4 text-sm text-text-soft">Clean stays, shared transport, core experiences</td>
              </tr>
              <tr className="border-t border-border-soft bg-cream/50">
                <td className="px-6 py-4 font-semibold text-green-deep">Comfort</td>
                <td className="px-6 py-4">₹12,000 / day</td>
                <td className="px-6 py-4 text-sm text-text-soft">Private transfers, better rooms, curated meals</td>
              </tr>
              <tr className="border-t border-border-soft">
                <td className="px-6 py-4 font-semibold text-green-deep">Luxury</td>
                <td className="px-6 py-4">₹25,000+ / day</td>
                <td className="px-6 py-4 text-sm text-text-soft">Heritage hotels, private guides, exclusive access</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-green-soft py-16 text-cream">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-8">
          <RevealSection>
            <h2 className="font-serif text-3xl font-semibold">Shape your journey</h2>
            <p className="mx-auto mt-4 max-w-xl text-gold-soft/90">
              Combine categories, pick modules, and get a planner on WhatsApp.
            </p>
            <Link
              href="/journey-builder"
              className="mt-8 inline-flex rounded-full bg-cream px-8 py-3 text-sm font-semibold text-green-deep transition hover:bg-gold-soft"
            >
              Open Journey Builder
            </Link>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
