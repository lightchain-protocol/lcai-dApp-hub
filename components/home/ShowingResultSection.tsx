import { ArrowDown } from "lucide-react";
import { DappCard, type DappCardProps } from "../dapp-card/DappCard";
import { Button } from "../ui/Button";

type ShowingResultSectionProps = {
  dapps: DappCardProps[];
  totalCount?: number;
};

const ShowingResultSection = ({
  dapps,
  totalCount = dapps.length,
}: ShowingResultSectionProps) => {
  if (dapps.length === 0) return null;

  const remainingCount = Math.max(totalCount - dapps.length, 0);

  return (
    <section>
      <div className="container mx-auto">
        <h2 className="text-lg font-semibold leading-[1.2] tracking-[-0.18px] text-content-strong mb-3 2xl:mb-6">
          Showing {dapps.length} of {totalCount}
        </h2>

        {/* Grid Cards */}
        <div className="grid gap-2.5 md:gap-4 grid-cols-[repeat(auto-fit,minmax(298px,1fr))] xl:grid-cols-[repeat(auto-fit,minmax(380px,1fr))] 2xl:grid-cols-[repeat(auto-fit,minmax(420px,1fr))]">
          {dapps.map((dapp, i) => (
            <DappCard key={i} {...dapp} />
          ))}
        </div>

        {/* More Button */}
        {remainingCount > 0 ? (
          <div className="flex flex-col items-center space-y-2 mt-12">
            <span className="text-xs leading-[1.2] tracking-[-0.12px] text-content-medium">
              ...... {remainingCount} More dApps ......
            </span>
            <Button
              variant={"gradient"}
              size={"md"}
            >
              Load more dApps
              <ArrowDown />
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default ShowingResultSection;
