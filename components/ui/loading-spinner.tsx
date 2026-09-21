
import { LoaderCircle } from "lucide-react";

type LoadingSpinnerProps = {
  label?: string;
  fullPage?: boolean;
};

export default function LoadingSpinner({
  label = "جارٍ التحميل...",
  fullPage = false,
}: LoadingSpinnerProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`flex items-center justify-center gap-3 text-[#6b4f3f] ${
        fullPage ? "min-h-[50vh]" : "py-8"
      }`}
    >
      <LoaderCircle
        size={22}
        aria-hidden="true"
        className="animate-spin"
      />
      <span className="text-sm">{label}</span>
    </div>
  );
}
