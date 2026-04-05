import Link from "next/link";
import { SITE_NAME, FOUNDER, BUILDER } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-green-deep text-cream">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-serif text-2xl font-semibold">
              <span className="text-cream">SATTVA</span>{" "}
              <span className="text-gold-soft">SANCTUM</span>
            </p>
            <p className="mt-2 max-w-sm text-sm text-gold-soft/90">
              India&apos;s first life experience platform — spiritual travel, forest living, adventure, and culture.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm">
            <Link href="/about" className="text-gold-soft/90 hover:text-cream">
              About
            </Link>
            <Link href="/experiences" className="text-gold-soft/90 hover:text-cream">
              Experiences
            </Link>
            <Link href="/chardham" className="text-gold-soft/90 hover:text-cream">
              Char Dham
            </Link>
            <Link href="/contact" className="text-gold-soft/90 hover:text-cream">
              Contact
            </Link>
            <Link href="/journey-builder" className="text-gold-soft/90 hover:text-cream">
              Journey Builder
            </Link>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-8 text-center text-sm text-gold-soft/80">
          © {new Date().getFullYear()} {SITE_NAME} · Founded by {FOUNDER} · Built by {BUILDER}
        </div>
      </div>
    </footer>
  );
}
