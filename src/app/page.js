import Image from "next/image";
import Link from "next/link";
import RevealSection from "@/components/RevealSection";
import { BLUR_PLACEHOLDER } from "@/lib/config";

export const metadata = {
  title: "Sattva Sanctum — Spiritual Travel, Forest Living & Cultural Journeys in India",
  description:
    "Curated life experiences across India — spiritual pilgrimages, forest community living, Himalayan treks, and cultural journeys. Build your transformative journey with Sattva Sanctum.",
  alternates: { canonical: "/" },
};

const HERO_PANEL_IMG =
  "https://images.unsplash.com/photo-1769451690414-6f2c7c587dd7?w=800&q=80&fit=crop";

const marqueeItems = [
  "Varanasi Ghats at Dawn",
  "Char Dham Pilgrimage",
  "Himalayan Transformation",
  "Forest & Community Living",
  "Ganga Aarti Rituals",
  "Sattva Forest Life",
];

const experienceCards = [
  {
    image:
      "https://images.unsplash.com/photo-1726266140487-39c194e3af48?w=600&q=80&fit=crop",
    title: "Spiritual",
    desc: "Pilgrimages, sadhana, temple circuits, and inner journeys along sacred rivers and ancient cities.",
    tags: ["Kashi", "Rishikesh", "Char Dham"],
    alt: "Sacred temple architecture in Varanasi at sunrise",
  },
  {
    image:
      "https://images.unsplash.com/photo-1764428950555-6c958aff2ba1?w=600&q=80&fit=crop",
    title: "Forest & Community Living",
    desc: "Slow living with local communities, organic rhythms, and nature immersion away from city noise.",
    tags: ["USP", "Community", "Wellness"],
    usp: true,
    alt: "Lush green forest canopy with sunlight filtering through trees",
  },
  {
    image:
      "https://images.unsplash.com/photo-1629184950099-3eb7993b5f48?w=600&q=80&fit=crop",
    title: "Trekking & Adventure",
    desc: "High-altitude treks, ridge walks, and transformative physical challenges with expert guides.",
    tags: ["Himalaya", "Trek", "Adventure"],
    alt: "Snow-capped Himalayan mountain peaks against clear sky",
  },
  {
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80&fit=crop",
    title: "Water & Boating",
    desc: "Ganges ghats, backwaters, and reflective journeys on water that calm the mind.",
    tags: ["Ghats", "Backwaters"],
    alt: "Serene river waters reflecting golden light at dawn",
  },
  {
    image:
      "https://images.unsplash.com/photo-1583309219338-a582f1f9ca6b?w=600&q=80&fit=crop",
    title: "Cultural Experiences",
    desc: "Classical arts, crafts, cuisine, and living heritage woven into every itinerary.",
    tags: ["Heritage", "Arts"],
    alt: "Traditional Indian cultural performance with ornate costumes",
  },
  {
    image:
      "https://images.unsplash.com/photo-1735990524274-bc2ce24302fc?w=600&q=80&fit=crop",
    title: "World Soul Retreats",
    desc: "Curated global sanctuaries for seekers who want depth beyond typical tourism.",
    tags: ["Retreats", "Global"],
    alt: "Peaceful retreat setting surrounded by tropical greenery",
  },
];

const signatureJourneys = [
  {
    badge: "Inner Pilgrimage",
    title: "Kashi Inner Journey",
    headerImage:
      "https://images.unsplash.com/photo-1726266140487-39c194e3af48?w=800&q=80&fit=crop",
    gradient: "from-amber-900 via-green-deep to-green-soft",
    desc: "Dawn ghats, evening aarti, narrow lanes of the eternal city, and guided reflection.",
    duration: "5–7 days",
    location: "Varanasi",
    style: "Spiritual depth",
    alt: "Varanasi ghats at dawn with boats on the Ganges river",
  },
  {
    badge: "Our Signature",
    title: "Sattva Forest Life",
    headerImage:
      "https://images.unsplash.com/photo-1764428950555-6c958aff2ba1?w=800&q=80&fit=crop",
    gradient: "from-emerald-900 via-green-deep to-green-soft",
    desc: "Community living, forest trails, farm-to-table meals, and digital detox in nature.",
    duration: "4–10 days",
    location: "Uttarakhand / Kerala",
    style: "Forest USP",
    alt: "Dense forest trail with dappled sunlight and greenery",
  },
  {
    badge: "High Himalaya",
    title: "Himalayan Transformation Trek",
    headerImage:
      "https://images.unsplash.com/photo-1629184950099-3eb7993b5f48?w=800&q=80&fit=crop",
    gradient: "from-slate-800 via-green-deep to-emerald-900",
    desc: "Altitude acclimatisation, sacred peaks, and mindful trekking with local hosts.",
    duration: "7–12 days",
    location: "Uttarakhand",
    style: "Adventure + Spirit",
    alt: "Trekkers ascending a Himalayan mountain ridge at altitude",
  },
  {
    badge: "Sacred Circuit",
    title: "Char Dham Sacred Circuit",
    headerImage:
      "https://images.unsplash.com/photo-1649147313351-c86537fda0eb?w=800&q=80&fit=crop",
    gradient: "from-indigo-950 via-purple-900 to-green-deep",
    desc: "The four abodes — Yamunotri, Gangotri, Kedarnath, Badrinath — with curated logistics.",
    duration: "10–21 days",
    location: "Garhwal Himalaya",
    style: "Pilgrimage",
    alt: "Ancient Hindu temple with pilgrims gathered for darshan",
  },
];

const steps = [
  { n: "1", title: "Choose Category", desc: "Spiritual, forest, adventure, culture — pick what calls you." },
  { n: "2", title: "Build Journey", desc: "Use our journey builder to shape duration, style, and add-ons." },
  { n: "3", title: "Get Plan", desc: "Receive a tailored outline and transparent pricing bands." },
  { n: "4", title: "Book or Talk to Expert", desc: "Confirm on WhatsApp or speak with a Sattva planner." },
];

const destinations = [
  {
    name: "Varanasi",
    gradient: "from-amber-900/80 via-green-deep to-green-soft",
    emoji: "🪔",
    image: "https://images.unsplash.com/photo-1726266140487-39c194e3af48?w=400&q=80&fit=crop",
    alt: "Varanasi evening aarti ceremony on the ghats",
  },
  {
    name: "Uttarakhand",
    gradient: "from-slate-800 via-emerald-900 to-green-deep",
    emoji: "🏔️",
    image: "https://images.unsplash.com/photo-1629184950099-3eb7993b5f48?w=400&q=80&fit=crop",
    alt: "Snow-covered Uttarakhand mountain range panorama",
  },
  {
    name: "Rishikesh",
    gradient: "from-teal-900 to-green-deep",
    emoji: "🧘",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&q=80&fit=crop",
    alt: "Rishikesh riverside yoga and meditation setting",
  },
  {
    name: "Kerala",
    gradient: "from-emerald-800 to-green-soft",
    emoji: "🌴",
    image: "https://images.unsplash.com/photo-1764428950555-6c958aff2ba1?w=400&q=80&fit=crop",
    alt: "Kerala backwaters surrounded by palm trees",
  },
  {
    name: "Bali",
    gradient: "from-indigo-900 via-purple-900 to-green-deep",
    emoji: "🌺",
    image: "https://images.unsplash.com/photo-1735990524274-bc2ce24302fc?w=400&q=80&fit=crop",
    alt: "Bali temple surrounded by tropical gardens",
  },
];

const testimonials = [
  {
    quote: "Not a package tour — a reset. The Kashi journey shifted how I see ritual and stillness.",
    name: "Ananya M.",
    role: "Designer, Bengaluru",
  },
  {
    quote: "Forest living with Sattva felt ethical, warm, and surprisingly luxurious in simplicity.",
    name: "Rahul K.",
    role: "Founder, Hyderabad",
  },
  {
    quote: "Char Dham with their team was organised yet sacred. We felt held at every altitude.",
    name: "Meera & Vikram",
    role: "Couple, Mumbai",
  },
  {
    quote: "The Himalayan trek pushed my limits, but the guides made every step feel purposeful and safe.",
    name: "Siddharth P.",
    role: "Engineer, Pune",
  },
  {
    quote: "Kerala backwaters with Sattva was deeply calming. The food, the silence, the pace — perfection.",
    name: "Nidhi R.",
    role: "Writer, Delhi",
  },
  {
    quote: "My mother did the Rishikesh sadhana week. She came back glowing. Truly transformative.",
    name: "Arjun V.",
    role: "Consultant, Chennai",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24 lg:px-8 lg:py-28">
          <RevealSection>
            <p className="text-sm font-semibold uppercase tracking-widest text-green-soft">Sattva Sanctum</p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-text-main md:text-5xl lg:text-6xl">
              Where Travel Becomes Transformation
            </h1>
            <p className="mt-6 max-w-xl text-lg text-text-soft">
              Curated life experiences across India — spiritual travel, forest living, adventure, and culture. We
              design journeys that change how you breathe, relate, and return home.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/journey-builder"
                className="inline-flex rounded-full bg-green-deep px-6 py-3 text-sm font-semibold text-cream shadow-md transition hover:bg-green-soft"
              >
                Build My Journey
              </Link>
              <Link
                href="/about"
                className="inline-flex rounded-full border-2 border-green-deep px-6 py-3 text-sm font-semibold text-green-deep transition hover:bg-green-deep hover:text-cream"
              >
                Our Story
              </Link>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-border-soft pt-10">
              <div>
                <dt className="text-xs uppercase tracking-wide text-text-soft">Trusted</dt>
                <dd className="mt-1 font-serif text-2xl font-semibold text-green-deep">500+</dd>
                <dd className="text-sm text-text-soft">Experiences</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-text-soft">Rated</dt>
                <dd className="mt-1 font-serif text-2xl font-semibold text-gold">4.9★</dd>
                <dd className="text-sm text-text-soft">Average</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-text-soft">Across</dt>
                <dd className="mt-1 font-serif text-2xl font-semibold text-green-soft">12+</dd>
                <dd className="text-sm text-text-soft">Destinations</dd>
              </div>
            </dl>
          </RevealSection>

          <RevealSection className="relative min-h-[320px] overflow-hidden rounded-3xl bg-green-deep p-8 pb-44 text-cream shadow-xl md:min-h-[420px] md:pb-40">
            <Image
              src={HERO_PANEL_IMG}
              alt="Ancient Indian temple at golden hour with warm light"
              fill
              className="z-0 object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              placeholder="blur"
              blurDataURL={BLUR_PLACEHOLDER}
            />
            <div className="pointer-events-none absolute inset-0 z-[1] bg-black/40" aria-hidden />
            <div className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center opacity-[0.07]">
              <span className="select-none text-center font-serif text-6xl font-bold leading-none text-white">
                Sattva
                <br />
                Sanctum
              </span>
            </div>
            <p className="relative z-10 font-serif text-3xl font-semibold text-gold-soft md:text-4xl drop-shadow-sm">
              Sattva Sanctum
            </p>
            <div className="absolute bottom-8 left-8 z-10 max-w-sm rounded-2xl bg-white p-5 text-green-deep shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-wider text-green-soft">Next Journey</p>
              <p className="mt-2 font-serif text-xl font-semibold text-green-deep">Kashi Inner Journey</p>
              <p className="mt-2 text-sm text-text-soft">5 spots left · Small group · Expert hosts</p>
            </div>
          </RevealSection>
        </div>
      </section>

      <div className="overflow-hidden bg-green-deep py-4 text-cream">
        <div className="marquee-track">
          <div className="flex items-center gap-12 px-6">
            {marqueeItems.map((t) => (
              <span key={t} className="shrink-0 font-serif text-lg italic text-gold-soft md:text-xl">
                {t}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-12 px-6" aria-hidden>
            {marqueeItems.map((t) => (
              <span key={`d-${t}`} className="shrink-0 font-serif text-lg italic text-gold-soft md:text-xl">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8">
        <RevealSection>
          <h2 className="font-serif text-3xl font-semibold text-green-deep md:text-4xl">Experience Universe</h2>
          <p className="mt-3 max-w-2xl text-text-soft">
            Six doorways into transformation — each crafted with local partners and Sattva standards.
          </p>
        </RevealSection>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experienceCards.map((c) => (
            <RevealSection key={c.title}>
              <article className="relative flex h-full flex-col rounded-2xl border border-border-soft bg-white p-6 shadow-sm transition hover:shadow-md">
                {c.usp && (
                  <span className="absolute right-4 top-4 rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-green-deep">
                    Our USP
                  </span>
                )}
                <div className="relative h-48 overflow-hidden rounded-xl bg-green-deep/20">
                  <Image
                    src={c.image}
                    alt={c.alt}
                    fill
                    className="z-0 object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL={BLUR_PLACEHOLDER}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" aria-hidden />
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-text-main">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm text-text-soft">{c.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-green-soft">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </RevealSection>
          ))}
        </div>
      </section>

      <section className="bg-gold-soft/40 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <RevealSection>
            <h2 className="font-serif text-3xl font-semibold text-green-deep md:text-4xl">Signature Journeys</h2>
            <p className="mt-3 max-w-2xl text-text-soft">Hand-picked circuits with soul, safety, and story.</p>
          </RevealSection>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {signatureJourneys.map((j) => (
              <RevealSection key={j.title}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border-soft bg-white shadow-sm">
                  <div
                    className={`relative flex h-64 flex-col items-center justify-center overflow-hidden px-6 py-10 text-center ${j.gradient}`}
                  >
                    <Image
                      src={j.headerImage}
                      alt={j.alt}
                      fill
                      className="z-0 object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      placeholder="blur"
                      blurDataURL={BLUR_PLACEHOLDER}
                    />
                    <div
                      className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/85 via-black/55 to-black/40"
                      aria-hidden
                    />
                    <p className="relative z-[2] max-w-xs font-serif text-lg font-medium italic leading-snug text-white drop-shadow-md md:text-xl">
                      {j.title}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="w-fit rounded-full bg-green-deep px-3 py-1 text-xs font-semibold text-cream">
                      {j.badge}
                    </span>
                    <h3 className="mt-4 font-serif text-2xl font-semibold text-text-main">{j.title}</h3>
                    <p className="mt-3 text-text-soft">{j.desc}</p>
                    <div className="mt-6 flex flex-wrap gap-2 border-t border-border-soft pt-4 text-xs font-medium text-text-soft">
                      <span className="rounded-md bg-cream px-2 py-1">{j.duration}</span>
                      <span className="rounded-md bg-cream px-2 py-1">{j.location}</span>
                      <span className="rounded-md bg-cream px-2 py-1">{j.style}</span>
                    </div>
                  </div>
                </article>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8">
        <RevealSection>
          <h2 className="text-center font-serif text-3xl font-semibold text-green-deep md:text-4xl">How It Works</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-text-soft">
            From first idea to standing on the ghats or trails — a clear path.
          </p>
        </RevealSection>
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <RevealSection key={s.n}>
              <div className="relative rounded-2xl border border-border-soft bg-white p-6 text-center shadow-sm">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#184734] text-lg font-bold text-white font-sans">
                  {idx + 1}
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-text-main">{s.title}</h3>
                <p className="mt-2 text-sm text-text-soft">{s.desc}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      <section className="border-y border-border-soft bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <RevealSection>
            <h2 className="font-serif text-3xl font-semibold text-green-deep md:text-4xl">Destinations</h2>
            <p className="mt-3 text-text-soft">Sacred cities, silent forests, and soulful shores.</p>
          </RevealSection>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {destinations.map((d) => (
              <RevealSection key={d.name}>
                <div
                  className={`relative flex aspect-[4/5] flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${d.gradient} p-6 text-center text-cream shadow-lg`}
                >
                  <Image
                    src={d.image}
                    alt={d.alt}
                    fill
                    className="z-0 object-cover opacity-40"
                    sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 20vw"
                    placeholder="blur"
                    blurDataURL={BLUR_PLACEHOLDER}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/35 to-black/20" aria-hidden />
                  <span className="relative z-[1] text-5xl drop-shadow-md">{d.emoji}</span>
                  <p className="relative z-[1] mt-4 font-serif text-2xl font-semibold">{d.name}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green-deep py-20 text-cream">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <RevealSection>
            <h2 className="font-serif text-3xl font-semibold text-gold-soft md:text-4xl">What Seekers Say</h2>
            <p className="mt-3 text-gold-soft/80">Real voices from the road and the forest.</p>
          </RevealSection>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <RevealSection key={t.name}>
                <blockquote className="relative isolate z-10 h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <p
                    className="relative z-20 font-serif text-lg italic"
                    style={{ color: "rgba(255,255,255,0.85)" }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="relative z-20 mt-6 text-sm">
                    <cite className="not-italic font-semibold text-gold-soft">{t.name}</cite>
                    <p className="text-gold-soft/70">{t.role}</p>
                  </footer>
                </blockquote>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green-soft py-16 text-cream">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-8">
          <RevealSection>
            <h2 className="font-serif text-3xl font-semibold md:text-4xl">Ready to begin your transformation?</h2>
            <p className="mx-auto mt-4 max-w-xl text-gold-soft/90">
              Tell us what moves you — we&apos;ll shape a journey with clarity and care.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/journey-builder"
                className="inline-flex rounded-full bg-cream px-6 py-3 text-sm font-semibold text-green-deep transition hover:bg-gold-soft"
              >
                Build My Journey
              </Link>
              <Link
                href="/contact"
                className="inline-flex rounded-full border-2 border-cream px-6 py-3 text-sm font-semibold text-cream transition hover:bg-cream hover:text-green-deep"
              >
                Talk to Us
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
