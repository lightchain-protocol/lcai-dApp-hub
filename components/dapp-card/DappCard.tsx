import { generateSlugWithId } from "@/lib/utils";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { ExternalLink } from "lucide-react";

export type DappCardProps = {
  id: string | number;
  name: string;
  description: string;
  tags: string[];
  iconSrc: string;
  imageSrc: string;
  externalUrl?: string;
};

type CardLinkProps = {
  internalHref: string;
  externalUrl?: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
};

function CardLink({
  internalHref,
  externalUrl,
  className,
  children,
  ariaLabel,
}: CardLinkProps) {
  if (externalUrl) {
    return (
      <a
        href={externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={internalHref} className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}

export function DappCard({
  id,
  name,
  description,
  tags,
  iconSrc,
  imageSrc,
  externalUrl,
}: DappCardProps) {
  const slug = generateSlugWithId(name, id);
  const internalHref = `/${slug}`;

  return (
    <article
      rel="noreferrer"
      className="group block h-full"
    >
      <div
        className={clsx(
          "relative flex h-full flex-col overflow-hidden",
          "bg-surface-base-extra-light backdrop-blur-sm lcai-transition hover:bg-surface-base-light"
        )}
      >
        {/* Top media section */}
        <div className="relative w-full">
          <CardLink
            internalHref={internalHref}
            externalUrl={externalUrl}
            className="block relative aspect-video bg-surface-light"
            ariaLabel={externalUrl ? `Open ${name} (external link)` : name}
          >
            <Image
              src={imageSrc}
              alt={name}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 380px, 100vw"
              priority={false}
            />
          </CardLink>

          {/* Logo badge overlapping the image */}
          <CardLink
            internalHref={internalHref}
            externalUrl={externalUrl}
            className="absolute -bottom-7 left-4 h-14 md:h-20 w-14 md:w-20 inline-flex items-center justify-center rounded-full bg-surface-base-dark"
            ariaLabel={externalUrl ? `Open ${name} (external link)` : name}
          >
            <Image
              src={iconSrc}
              alt={`${name} logo`}
              fill
              sizes="(min-width: 768px) 4rem, 3.5rem"
              className="rounded-full object-cover"
              unoptimized
            />
          </CardLink>
        </div>

        {/* Content section */}
        <div className="flex flex-1 flex-col gap-5 px-4 md:px-5 pb-4 md:pb-5 pt-12">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold leading-[1.2] tracking-[-0.24px] text-content-strong">
              <CardLink internalHref={internalHref} externalUrl={externalUrl}>
                {name}
              </CardLink>
            </h3>
            <p className="text-base leading-normal tracking-[-0.16px] text-content-bold line-clamp-3">
              {description}
            </p>
          </div>
          {/* Tags */}
          {tags.length > 0 && (
            <div className="mt-2 flex flex-wrap items-center gap-2">
              {tags.map((tag) => (
                <Badge key={tag} size="sm">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* External Link Button */}
          {externalUrl && (
            <div className="flex justify-end">

              <Button variant="outline" size="sm" className="h-8 rounded-[10px] border border-border-weak bg-surface-base-dark px-4 text-sm font-semibold text-content-strong hover:bg-surface-light">
                Explore
                <ExternalLink className="size-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

