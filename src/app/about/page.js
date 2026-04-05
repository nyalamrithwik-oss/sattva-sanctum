import Image from "next/image";
import RevealSection from "@/components/RevealSection";
import { BLUR_PLACEHOLDER } from "@/lib/config";

export const metadata = {
  title: "About Us — Story, Values & Team | Sattva Sanctum",
  description:
    "Learn about Sattva Sanctum — founded by D. Sai Naveen to transform Indian spiritual travel, forest living, and cultural journeys into life-changing experiences.",
  alternates: { canonical: "/about" },
};

const ABOUT_HERO_BG =
  "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80&fit=crop";
const ABOUT_STORY_IMG =
  "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=700&q=80&fit=crop";

const values = [
  {
    title: "Depth Over Tourism",
    desc: "We prioritise meaning, pacing, and integration — not checklist sightseeing.",
  },
  {
    title: "Curated Quality",
    desc: "Every host, homestay, and guide is vetted for ethics, warmth, and expertise.",
  },
  {
    title: "Community First",
    desc: "Local economies and traditions are partners, not backdrops.",
  },
  {
    title: "Sacred Respect",
    desc: "Ritual spaces and custodians are honoured with humility and clear conduct.",
  },
  {
    title: "Built with Technology",
    desc: "Transparent planning, responsive support, and tools that reduce friction for seekers.",
  },
  {
    title: "Think Global Act Local",
    desc: "World-class experience design rooted in Indian ground truth and seasonal wisdom.",
  },
];

const team = [
  {
    name: "D. Sai Naveen",
    role: "Founder & Vision",
    desc: "Architect of Sattva Sanctum's philosophy — bridging pilgrimage, nature, and modern seekers.",
    gradient: "from-green-deep to-green-soft",
  },
  {
    name: "N.Rithwik",
    role: "Technology & Strategy",
    desc: "Builds the digital spine of Sattva — journey builder, operations, and scalable systems.",
    gradient: "from-gold/80 to-green-deep",
  },
  {
    name: "Growth Partner",
    role: "Marketing & Operations",
    desc: "Shapes outreach, partnerships, and on-ground excellence across destinations.",
    gradient: "from-slate-700 to-green-deep",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-green-deep via-green-soft to-green-deep py-24 text-cream md:py-32">
        <div
          className="absolute inset-0 z-0 bg-gradient-to-br from-green-deep via-green-soft to-green-deep"
          aria-hidden
        />
        <div
          className="absolute inset-0 z-[1] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${ABOUT_HERO_BG}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label="Misty forest canopy with sunlight filtering through tall trees"
        />
        <div className="absolute inset-0 z-[2] bg-green-deep/30" aria-hidden />
        <div className="absolute inset-0 z-[3] opacity-10">
          <div className="absolute -right-20 top-10 h-96 w-96 rounded-full bg-gold blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <RevealSection>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-soft">About Sattva Sanctum</p>
            <h1 className="mt-6 max-w-4xl font-serif text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
              We believe travel should change who you are
            </h1>
            <p className="mt-4 font-serif text-3xl font-medium text-gold-soft md:text-4xl">
              <span className="text-cream">SATTVA</span> <span className="text-gold">SANCTUM</span>
            </p>
          </RevealSection>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <RevealSection>
            <h2 className="font-serif text-3xl font-semibold text-green-deep">Our Story</h2>
            <div className="mt-6 space-y-4 text-text-soft">
              <p>
                Sattva Sanctum was founded by <strong className="text-text-main">D. Sai Naveen</strong> with a simple
                conviction: India&apos;s spiritual geography, forests, and cultures deserve a platform that treats them
                as life experiences — not commodities.
              </p>
              <p>
                From the ghats of Kashi to the ridges of Garhwal, we curate journeys that honour pace, community, and
                inner work. Technology and human expertise work together so you can focus on transformation, not
                logistics.
              </p>
              <p>
                Built by <strong className="text-text-main">N.Rithwik</strong>, our systems connect seekers with vetted
                hosts, transparent pricing, and planners who have walked these paths themselves.
              </p>
            </div>
          </RevealSection>
          <RevealSection>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-green-deep via-green-soft to-gold/40 shadow-xl">
              <Image
                src={ABOUT_STORY_IMG}
                alt="Misty forest trail leading toward a distant temple, symbolising the Sattva Sanctum journey"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL={BLUR_PLACEHOLDER}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-green-deep/40 to-transparent" aria-hidden />
            </div>
          </RevealSection>
        </div>
      </section>

      <section className="border-y border-border-soft bg-gold-soft/30 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <RevealSection>
            <h2 className="text-center font-serif text-3xl font-semibold text-green-deep md:text-4xl">Our Values</h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-text-soft">
              The non-negotiables behind every itinerary we touch.
            </p>
          </RevealSection>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <RevealSection key={v.title}>
                <article className="h-full rounded-2xl border border-border-soft bg-white p-6 shadow-sm">
                  <h3 className="font-serif text-xl font-semibold text-green-deep">{v.title}</h3>
                  <p className="mt-3 text-sm text-text-soft">{v.desc}</p>
                </article>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8">
        <RevealSection>
          <h2 className="text-center font-serif text-3xl font-semibold text-green-deep md:text-4xl">Team</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-text-soft">
            A lean core with deep roots in travel, tech, and dharma.
          </p>
        </RevealSection>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {team.map((m) => (
            <RevealSection key={m.name}>
              <article className="overflow-hidden rounded-2xl border border-border-soft bg-white shadow-sm">
                <div
                  className={`flex h-40 items-center justify-center bg-gradient-to-br ${m.gradient} text-cream`}
                >
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/15 font-serif text-3xl font-bold tracking-wide backdrop-blur-sm">
                    {m.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-text-main">{m.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-green-soft">{m.role}</p>
                  <p className="mt-3 text-sm text-text-soft">{m.desc}</p>
                </div>
              </article>
            </RevealSection>
          ))}
        </div>
      </section>

      <section className="bg-green-deep py-16 text-cream">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <RevealSection>
            <h2 className="text-center font-serif text-3xl font-semibold text-gold-soft">By the Numbers</h2>
          </RevealSection>
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { label: "Experiences", value: "500+" },
              { label: "Destinations", value: "12+" },
              { label: "Rating", value: "4.9★" },
              { label: "Vision", value: "₹10 Cr" },
            ].map((s) => (
              <RevealSection key={s.label}>
                <div className="text-center">
                  <p className="font-serif text-4xl font-bold text-gold md:text-5xl">{s.value}</p>
                  <p className="mt-2 text-sm text-gold-soft/80">{s.label}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
