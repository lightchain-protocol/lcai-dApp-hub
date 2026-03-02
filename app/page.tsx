import ShowingResultSection from "@/components/home/ShowingResultSection";
import TrendingSection from "@/components/home/TrendingSection";

export default function Home() {
  return (
    <main className="space-y-12 pt-10 pb-25">
      <TrendingSection />
      <ShowingResultSection />
    </main>
  );
}
