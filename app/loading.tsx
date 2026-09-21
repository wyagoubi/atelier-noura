
import LoadingSpinner from "@/components/ui/loading-spinner";

export default function Loading() {
  return (
    <section className="page-container flex min-h-[50vh] items-center justify-center">
      <LoadingSpinner label="لحظات، نحضّر لكِ الصفحة..." />
    </section>
  );
}
