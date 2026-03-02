import Hero from "@/components/home/Hero";
import ShowingResultSection from "@/components/home/ShowingResultSection";
import TrendingSection from "@/components/home/TrendingSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="space-y-12 pt-10 pb-25">
      <Hero />
      {/* separator */}
      <div>
        <Image
          src={"/images/bg/section-separator.png"}
          width={1920}
          height={97}
          alt="Separator Image"
        />
      </div>
      <TrendingSection />
      <ShowingResultSection />
    </main>
  );
}
