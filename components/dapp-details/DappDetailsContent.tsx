import type { DappCardProps } from "@/components/dapp-card/DappCard";
import { Badge } from "../ui/Badge";
import PreviewScreenshot from "./PreviewScreenshot";

type DappDetailsContentProps = {
  dapp: DappCardProps;
};

const DappDetailsContent = ({ dapp }: DappDetailsContentProps) => {
  const longDescription = dapp.longDescription ?? dapp.description;
  const paragraphs = longDescription
    .split(/\n{2,}/)
    .map((para) => para.trim())
    .filter(Boolean);

  return (
    <div className="grow h-full space-y-8">
      <PreviewScreenshot
        screenshots={dapp.screenshots}
        fallbackAlt={`${dapp.name} screenshot`}
      />

      <article className="prose prose-lg prose-dapp">
        {paragraphs.length > 0
          ? paragraphs.map((para, idx) => <p key={idx}>{para}</p>)
          : null}
      </article>

      {/* Tags */}
      {dapp.tags.length > 0 ? (
        <div className="flex gap-4 items-center flex-wrap">
          <span className="text-content-ultra text-lg font-normal leading-[1.7] tracking-[-0.18px]">
            Tags:
          </span>
          <div className="flex gap-2 flex-wrap items-center">
            {dapp.tags.map((tag) => (
              <Badge key={tag} size="lg">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DappDetailsContent;
