"use client";

export default function GlobalError({ error, reset }) {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-6xl">⚠️</p>
      <h1 className="mt-6 font-serif text-4xl font-semibold text-green-deep md:text-5xl">
        Something went wrong
      </h1>
      <p className="mx-auto mt-4 max-w-md text-text-soft">
        We hit an unexpected issue. Please try again — if it persists, reach out to us on WhatsApp.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-10 inline-flex rounded-full bg-green-deep px-8 py-3 text-sm font-semibold text-cream transition hover:bg-green-soft"
      >
        Try again
      </button>
    </section>
  );
}
