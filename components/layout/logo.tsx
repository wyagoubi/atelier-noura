
import Link from "next/link";

type LogoProps = {
  href?: string;
  light?: boolean;
  compact?: boolean;
  className?: string;
};

export default function Logo({
  href = "/",
  light = false,
  compact = false,
  className = "",
}: LogoProps) {
  return (
    <Link
      href={href}
      aria-label="Atelier Noura — الصفحة الرئيسية"
      className={`inline-flex items-center gap-3 ${className}`}
    >
      <span
        aria-hidden="true"
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${
          light
            ? "border-white/40 text-white"
            : "border-[#cdb9a5] text-[#6b4f3f]"
        }`}
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          className="h-6 w-6"
        >
          <path
            d="M20 5 15 18l5 17 5-17L20 5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M15 18c-5 1-8 5-8 10 5 0 9-3 10-8M25 18c5 1 8 5 8 10-5 0-9-3-10-8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="20" cy="20" r="2" fill="currentColor" />
        </svg>
      </span>

      {!compact && (
        <span className="flex flex-col leading-tight">
          <span
            className={`font-serif text-xl font-semibold tracking-wide ${
              light ? "text-white" : "text-[#3f2d24]"
            }`}
          >
            Atelier Noura
          </span>
          <span
            className={`mt-1 text-[10px] tracking-[0.22em] ${
              light ? "text-white/70" : "text-[#81736a]"
            }`}
          >
            HANDMADE WITH LOVE
          </span>
        </span>
      )}
    </Link>
  );
}
