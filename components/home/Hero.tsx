import HeroFilterArea from "./HeroFilterArea"
import HeroSearchField from "./HeroSearchField"

const Hero = () => {
  return (
    <section className="px-4">
      <div className="container mx-auto">
        <div className="space-y-12">
          <div className="space-y-3 md:space-y-5 max-w-[800px] mx-auto text-center">
            <h1 className="text-[32px] md:text-4xl lg:text-5xl xl:text-[56px] font-semibold leading-[0.92] tracking-[-0.56px] text-content-strong">
              Explore the dApp Universe
            </h1>
            <p className="text-base lg:text-lg leading-[1.7] tracking-[-0.18px] text-content-bold max-w-[587px] mx-auto">
              Discover decentralized apps built on Lightchain — from DeFi and NFTs to gaming, developer tools, and AI agents.
            </p>
          </div>
          <div className="space-y-3 md:space-y-5">
            <HeroSearchField />
            <HeroFilterArea />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero