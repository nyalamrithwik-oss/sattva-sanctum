"use client";

import { useState } from "react";
import RevealSection from "@/components/RevealSection";
import { WA_URL, WA_DISPLAY, INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/lib/config";

const experienceTypes = [
  "Spiritual / Pilgrimage",
  "Forest & Community Living",
  "Trekking & Adventure",
  "Water & Boating",
  "Cultural",
  "Char Dham",
  "World Soul Retreat",
  "Not sure — advise me",
];

function buildMessage(fields) {
  const lines = [
    "*Sattva Sanctum — New Enquiry*",
    "",
    `Name: ${fields.name}`,
    `Phone: ${fields.phone}`,
    `Email: ${fields.email || "—"}`,
    `Experience type: ${fields.experienceType}`,
    `Preferred dates: ${fields.dates || "—"}`,
    `Group size: ${fields.groupSize || "—"}`,
    "",
    "Message:",
    fields.message || "—",
  ];
  return encodeURIComponent(lines.join("\n"));
}

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [experienceType, setExperienceType] = useState(experienceTypes[0]);
  const [dates, setDates] = useState("");
  const [groupSize, setGroupSize] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert("Please enter your name and phone number so we can reach you.");
      return;
    }
    setSubmitting(true);
    const url = `${WA_URL}?text=${buildMessage({ name: name.trim(), phone: phone.trim(), email: email.trim(), experienceType, dates: dates.trim(), groupSize: groupSize.trim(), message: message.trim() })}`;
    window.open(url, "_blank", "noopener,noreferrer");
    // Brief delay so user sees the loading state before it resolves
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  }

  return (
    <>
      <section className="bg-gold-soft py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <RevealSection>
            <h1 className="font-serif text-4xl font-semibold text-green-deep md:text-5xl">Let&apos;s plan your transformation</h1>
            <p className="mt-4 max-w-2xl text-lg text-text-soft">
              Share a few details — we&apos;ll open WhatsApp with your message so a Sattva planner can respond personally.
            </p>
          </RevealSection>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <RevealSection>
            {submitted ? (
              <div className="rounded-2xl border border-green-soft/30 bg-white p-8 shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-deep/10 text-3xl">✓</div>
                <h2 className="mt-6 font-serif text-2xl font-semibold text-green-deep">Thank you</h2>
                <p className="mt-3 text-text-soft">
                  WhatsApp should have opened with your enquiry. If it didn&apos;t, tap{" "}
                  <a href={WA_URL} className="font-semibold text-green-soft underline">
                    message us here
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-sm font-semibold text-green-deep underline"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl border border-border-soft bg-white p-6 shadow-sm md:p-8">
                <h2 className="font-serif text-2xl font-semibold text-green-deep">Enquiry form</h2>
                <p className="mt-2 text-sm text-text-soft">Fields marked * are required.</p>
                <div className="mt-8 space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-main">
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-border-soft bg-cream px-4 py-3 text-text-main outline-none ring-green-soft/30 focus:ring-2"
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text-main">
                      Phone (WhatsApp) *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-border-soft bg-cream px-4 py-3 text-text-main outline-none ring-green-soft/30 focus:ring-2"
                      autoComplete="tel"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-main">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-border-soft bg-cream px-4 py-3 text-text-main outline-none ring-green-soft/30 focus:ring-2"
                      autoComplete="email"
                    />
                  </div>
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-text-main">
                      Experience type
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={experienceType}
                      onChange={(e) => setExperienceType(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-border-soft bg-cream px-4 py-3 text-text-main outline-none ring-green-soft/30 focus:ring-2"
                    >
                      {experienceTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="dates" className="block text-sm font-medium text-text-main">
                      Preferred dates
                    </label>
                    <input
                      id="dates"
                      name="dates"
                      value={dates}
                      onChange={(e) => setDates(e.target.value)}
                      placeholder="e.g. October 2026"
                      className="mt-2 w-full rounded-xl border border-border-soft bg-cream px-4 py-3 text-text-main outline-none ring-green-soft/30 focus:ring-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="group" className="block text-sm font-medium text-text-main">
                      Group size
                    </label>
                    <input
                      id="group"
                      name="group"
                      value={groupSize}
                      onChange={(e) => setGroupSize(e.target.value)}
                      placeholder="e.g. 2 adults"
                      className="mt-2 w-full rounded-xl border border-border-soft bg-cream px-4 py-3 text-text-main outline-none ring-green-soft/30 focus:ring-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-main">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-border-soft bg-cream px-4 py-3 text-text-main outline-none ring-green-soft/30 focus:ring-2"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-8 w-full rounded-full bg-green-deep py-4 text-sm font-semibold text-cream transition hover:bg-green-soft disabled:opacity-60 disabled:cursor-not-allowed md:w-auto md:px-10"
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
              </form>
            )}
          </RevealSection>

          <div className="space-y-8">
            <RevealSection>
              <h2 className="font-serif text-2xl font-semibold text-green-deep">Direct contact</h2>
              <div className="mt-6 space-y-4">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-border-soft bg-white p-5 shadow-sm transition hover:border-green-soft"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#25D366]/15 text-2xl">💬</span>
                  <div>
                    <p className="font-semibold text-text-main">WhatsApp</p>
                    <p className="text-sm text-text-soft">{WA_DISPLAY}</p>
                  </div>
                </a>
                <a
                  href="tel:+918897568807"
                  className="flex items-center gap-4 rounded-2xl border border-border-soft bg-white p-5 shadow-sm transition hover:border-green-soft"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/20 text-2xl">📞</span>
                  <div>
                    <p className="font-semibold text-text-main">Phone</p>
                    <p className="text-sm text-text-soft">{WA_DISPLAY}</p>
                  </div>
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-border-soft bg-white p-5 shadow-sm transition hover:border-green-soft"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-2xl text-white">
                    📷
                  </span>
                  <div>
                    <p className="font-semibold text-text-main">Instagram</p>
                    <p className="text-sm text-text-soft">{INSTAGRAM_HANDLE}</p>
                  </div>
                </a>
              </div>
            </RevealSection>

            <RevealSection>
              <div className="overflow-hidden rounded-2xl border border-border-soft bg-green-deep text-cream shadow-sm">
                <div className="border-b border-white/10 px-6 py-4">
                  <h3 className="font-serif text-lg font-semibold text-gold-soft">Typical response times</h3>
                </div>
                <table className="w-full text-left text-sm">
                  <tbody>
                    <tr className="border-b border-white/10">
                      <th className="px-6 py-4 font-medium text-gold-soft/90">WhatsApp</th>
                      <td className="px-6 py-4">Usually within a few hours</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <th className="px-6 py-4 font-medium text-gold-soft/90">Phone</th>
                      <td className="px-6 py-4">10:00 – 19:00 IST</td>
                    </tr>
                    <tr>
                      <th className="px-6 py-4 font-medium text-gold-soft/90">Custom plans</th>
                      <td className="px-6 py-4">24–48 hours for detailed quotes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>
    </>
  );
}
