import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/base-ui/Tabs"

const PreviewScreenshot = () => {
  return (
    <Tabs defaultValue="dapp-screenshot-1" className="w-full">
      {/* Tab Contents */}
      <div>
        <TabsContent value="dapp-screenshot-1">
          <span className="block relative aspect-video rounded-2xl overflow-hidden w-full">
            <Image
              src={"/images/details-content-image/dapp-site-screenshot-1.png"}
              alt="Dapp Screenshot"
              fill
              sizes="(min-width: 1024px) 870px, 100vw"
            />
          </span>
        </TabsContent>
        <TabsContent value="dapp-screenshot-2">
          <span className="block relative aspect-video rounded-2xl overflow-hidden w-full">
            <Image
              src={"/images/details-content-image/dapp-site-screenshot-2.png"}
              alt="Dapp Screenshot"
              fill
              sizes="(min-width: 1024px) 870px, 100vw"
            />
          </span>
        </TabsContent>
        <TabsContent value="dapp-screenshot-3">
          <span className="block relative aspect-video rounded-2xl overflow-hidden w-full">
            <Image
              src={"/images/details-content-image/dapp-site-screenshot-3.png"}
              alt="Dapp Screenshot"
              fill
              sizes="(min-width: 1024px) 870px, 100vw"
            />
          </span>
        </TabsContent>
      </div>

      {/* Tabs */}
      <TabsList className={"mt-3 md:mt-6 gap-2 md:gap-4"}>
        <TabsTrigger
          value="dapp-screenshot-1"
          className={"p-0"}
        >
          <span className="space-y-1 5">
            <span className="block relative aspect-video max-w-32 w-16 md:w-32 rounded overflow-hidden">
              <Image
                src={"/images/details-content-image/dapp-site-screenshot-1.png"}
                alt="Dapp Screenshot"
                fill
                sizes="(min-width: 1024px) 128px, 48vw"
              />
            </span>
            <span className="block text-xs leading-[1.2] tracking-[-0.12px] text-start">Swap</span>
          </span>
        </TabsTrigger>
        <TabsTrigger
          value="dapp-screenshot-2"
          className={"p-0"}
        >
          <span className="space-y-1 5">
            <span className="block relative aspect-video max-w-32 w-16 md:w-32 rounded overflow-hidden">
              <Image
                src={"/images/details-content-image/dapp-site-screenshot-2.png"}
                alt="Dapp Screenshot"
                fill
                sizes="(min-width: 1024px) 128px, 48vw"
              />
            </span>
            <span className="block text-xs leading-[1.2] tracking-[-0.12px] text-start">Limit Order</span>
          </span>
        </TabsTrigger>
        <TabsTrigger
          value="dapp-screenshot-3"
          className={"p-0"}
        >
          <span className="space-y-1 5">
            <span className="block relative aspect-video max-w-32 w-16 md:w-32 rounded overflow-hidden">
              <Image
                src={"/images/details-content-image/dapp-site-screenshot-3.png"}
                alt="Dapp Screenshot"
                fill
                sizes="(min-width: 1024px) 128px, 48vw"
              />
            </span>
            <span className="block text-xs leading-[1.2] tracking-[-0.12px] text-start">Earn</span>
          </span>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

export default PreviewScreenshot