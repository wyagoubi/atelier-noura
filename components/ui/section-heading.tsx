
import Link from "next/link";

type SectionHeadingProps = {
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
  centered?: boolean;
};

export default function SectionHeading({
  title,
  description,
  href,
  linkLabel = "عرض الكل",
  centered = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between ${
        centered ? "sm:justify-center sm:text-center" : ""
      }`}
    >
      <div>
        <h2 className="section-heading">{title}</h2>

        {description && (
          <p className="section-description">{description}</p>
        )}
      </div>

      {href && (
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#6b4f3f] transition hover:text-[#c58f91]"
        >
          {linkLabel}
          <span aria-hidden="true">←</span>
        </Link>
      )}
    </div>
  );
}
