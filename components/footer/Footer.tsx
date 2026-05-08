import { socialIconImageMap } from "@/lib/footer/socialIconImageMap";
import type { RawFooterColumn, RawSocialLink } from "@/lib/footer/types";
import Image from "next/image";
import { Link } from "../Link";
import TextPressure from "../ui/TextPressure";
import PixelBlast from "../ui/PixelBlast";

type FooterProps = {
  socials: RawSocialLink[];
  footerColumns: RawFooterColumn[];
};

export default async function Footer({ socials, footerColumns }: FooterProps) {

  return (
    <footer className="relative border-border-soft border-t bg-background px-6 pt-20 md:px-14">
      <div className="container mx-auto z-1 relative">
        <div className="grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pb-12">
          {footerColumns.map((col) => (
            <div className="flex flex-col gap-4" key={col.title}>
              <h4 className="mb-2 font-semibold text-base text-content-strong leading-normal md:mb-4">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="lcai-link-hover text-[#9F9FA9] text-sm transition-colors hover:text-content-strong/80"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col gap-4">
            <h4 className="mb-2 font-semibold text-base text-content-strong leading-normal md:mb-4">
              Socials
            </h4>
            <ul className="flex flex-col gap-2.5">
              {socials.map((link, idx) => {
                const iconPath = socialIconImageMap[link?.iconKey ?? ''];
                return (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="relative h-7.5 w-7.5 before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-1/2 before:w-full before:h-full border border-border-soft hover:bg-[linear-gradient(#5b4bff,#27273733)] rounded-lg overflow-hidden after:content-[''] after:absolute after:inset-px after:bg-[#0f1021] after:rounded-[4px]">
                      <div className="flex items-center justify-center h-full relative before:content-[''] before:w-3.5 before:h-3.5 before:rounded-3xl before:bg-[linear-gradient(#5b4bff_0%,#fff_100%)] before:absolute before:left-1/2 before:-bottom-1/2 before:-translate-1/2 before:blur-[5px] before:z-1">
                        {iconPath ? (
                          <Image className="relative z-1" src={iconPath} alt={link.text} height={16} width={16} />
                        ) : null}
                      </div>
                    </div>
                    <a
                      href={link.href}
                      className="lcai-link-hover text-content-default text-sm transition-colors hover:text-content-strong/80"
                    >
                      {link.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-6 border-border-soft border-t py-8 text-center">
          <div className="flex items-center gap-5 text-content-bold">
            <p>Copyright &copy; 2026 <Link href="/" className="text-content-strong lcai-link-hover">Lightchain Protocol</Link></p>
          </div>
        </div>
      </div>

      <div className="relative footer-bottom isolate">
        <div className="relative z-10 h-[300px] text-pressure-container">
          <TextPressure
            text="Lightchain"
            flex={false}
            alpha={false}
            stroke={false}
            width
            weight={false}
            italic={false}
            textColor="transparent"
            strokeColor="#f5f3ff"
            minFontSize={36}
            maxFontSize={300}
            letterSpacing={20}
            classNameTextPressure="flex justify-center items-center footer-gradient-text"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 z-0">
          <PixelBlast
            variant="square"
            pixelSize={2}
            color="#7d52f4"
            patternScale={3.5}
            patternDensity={0.2}
            enableRipples={false}
            rippleSpeed={0.3}
            rippleThickness={0.1}
            rippleIntensityScale={0.7}
            speed={0.35}
            transparent
            edgeFade={0.12}
          />
        </div>
      </div>
    </footer >
  );
}
