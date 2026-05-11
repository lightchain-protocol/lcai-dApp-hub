import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Antigravity from "../ui/Antigravity";
import { Button } from "../ui/Button";
import HeroFilterArea from "./HeroFilterArea";
import HeroSearchField from "./HeroSearchField";

type HeroProps = {
  showControls?: boolean;
};

const Hero = ({ showControls = true }: HeroProps) => {
  return (
    <section
      className={cn(
        "relative z-1 mb-0 dark:bg-surface-dark-fixed",
        showControls ? "py-10 md:py-12 xl:py-14 2xl:py-20" : "pb-[84px] pt-[108px]"
      )}
    >
      <div className="container mx-auto">
        <div className={showControls ? "space-y-12 2xl:space-y-18" : ""}>
          <div className="space-y-3 md:space-y-5 max-w-[1000px] mx-auto text-center">
            <h1
              className={cn(
                "font-semibold leading-[0.92] tracking-[-0.56px] text-content-strong lg:tracking-[-4px]",
                showControls
                  ? "text-[32px] md:text-4xl lg:text-5xl xl:text-[56px]"
                  : "text-[40px] md:text-[64px] xl:text-[80px]"
              )}
            >
              Explore the dApp Universe
            </h1>
            <p className="text-base lg:text-lg leading-[1.7] tracking-[-0.18px] text-content-bold max-w-[620px] mx-auto">
              Discover decentralized apps built on Lightchain &mdash; from DeFi and NFTs to gaming, developer tools, and AI agents.
            </p>
            {showControls ? (
              <Button
                href="#"
                variant="primary"
                size="md"
                className="mx-auto h-9 rounded-[10px] bg-surface-primary px-4 text-base font-semibold uppercase text-content-white-fixed hover:bg-surface-primary"
              >
                <Plus className="size-4" />
                Submit your app
              </Button>
            ) : null}
          </div>
          {showControls ? (
            <div className="space-y-3 md:space-y-5">
              <HeroSearchField />
              <HeroFilterArea />
            </div>
          ) : null}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[-1]">
        <Antigravity
          count={180}
          magnetRadius={4}
          ringRadius={4}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={2}
          lerpSpeed={0.1}
          color="#6a1dee"
          autoAnimate={false}
          particleVariance={0.5}
          rotationSpeed={0}
          depthFactor={0.2}
          pulseSpeed={2}
          particleShape="capsule"
          fieldStrength={2}
        />
      </div>
    </section>
  );
};

export default Hero;
