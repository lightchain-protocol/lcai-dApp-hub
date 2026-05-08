import Hero from "@/components/home/Hero";
import ShowingResultSection from "@/components/home/ShowingResultSection";
import TrendingSection from "@/components/home/TrendingSection";
import DottedLineBackground from "@/components/ui/DottedLineBackground";

export default function Home() {
  return (
    <main className="relative w-full">
      <Hero />
      <div className="relative z-1">
        <DottedLineBackground />
        <div className="relative z-10 space-y-12 py-20">
          <TrendingSection />
          <ShowingResultSection />
        </div>
      </div>
    </main>
  );
}
