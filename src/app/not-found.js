import Link from "next/link";

export const metadata = {
  title: "Page Not Found | Sattva Sanctum",
};

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-6xl">🛕</p>
      <h1 className="mt-6 font-serif text-4xl font-semibold text-green-deep md:text-5xl">
        Page not found
      </h1>
      <p className="mx-auto mt-4 max-w-md text-text-soft">
        The path you&apos;re looking for doesn&apos;t exist — perhaps your journey begins elsewhere.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="inline-flex rounded-full bg-green-deep px-8 py-3 text-sm font-semibold text-cream transition hover:bg-green-soft"
        >
          Back to Home
        </Link>
        <Link
          href="/experiences"
          className="inline-flex rounded-full border-2 border-green-deep px-8 py-3 text-sm font-semibold text-green-deep transition hover:bg-green-deep hover:text-cream"
        >
          Explore Experiences
        </Link>
      </div>
    </section>
  );
}
