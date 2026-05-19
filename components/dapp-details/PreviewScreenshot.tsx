import Image from "next/image";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../ui/base-ui/Tabs";

type Screenshot = {
  src: string;
  alt: string;
  label?: string;
};

type PreviewScreenshotProps = {
  screenshots?: Screenshot[];
  fallbackAlt?: string;
};

const DEFAULT_SCREENSHOTS: Screenshot[] = [
  {
    src: "/images/details-content-image/dapp-site-screenshot-1.png",
    alt: "Dapp screenshot",
    label: "Overview",
  },
  {
    src: "/images/details-content-image/dapp-site-screenshot-2.png",
    alt: "Dapp screenshot",
    label: "Details",
  },
  {
    src: "/images/details-content-image/dapp-site-screenshot-3.png",
    alt: "Dapp screenshot",
    label: "More",
  },
];

const PreviewScreenshot = ({
  screenshots,
  fallbackAlt,
}: PreviewScreenshotProps) => {
  const items: Screenshot[] = (
    screenshots && screenshots.length > 0 ? screenshots : DEFAULT_SCREENSHOTS
  ).map((shot, idx) => ({
    src: shot.src,
    alt: shot.alt || fallbackAlt || `Screenshot ${idx + 1}`,
    label: shot.label,
  }));

  const defaultValue = `dapp-screenshot-0`;

  return (
    <Tabs defaultValue={defaultValue} className="w-full">
      {/* Tab Contents */}
      <div>
        {items.map((shot, idx) => (
          <TabsContent
            key={`content-${idx}`}
            value={`dapp-screenshot-${idx}`}
          >
            <span className="block relative aspect-video rounded-2xl overflow-hidden w-full">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(min-width: 1024px) 870px, 100vw"
              />
            </span>
          </TabsContent>
        ))}
      </div>

      {/* Tabs */}
      {items.length > 1 ? (
        <TabsList className="mt-3 md:mt-6 gap-2 md:gap-4">
          {items.map((shot, idx) => (
            <TabsTrigger
              key={`trigger-${idx}`}
              value={`dapp-screenshot-${idx}`}
              className="p-0"
            >
              <span className="space-y-1.5">
                <span className="block relative aspect-video max-w-32 w-16 md:w-32 rounded overflow-hidden">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(min-width: 1024px) 128px, 48vw"
                  />
                </span>
                {shot.label ? (
                  <span className="block text-xs leading-[1.2] tracking-[-0.12px] text-start">
                    {shot.label}
                  </span>
                ) : null}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>
      ) : null}
    </Tabs>
  );
};

export default PreviewScreenshot;
