import { generateSlugWithId } from "@/lib/utils";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/Badge";

export type DappCardProps = {
  id: string | number;
  name: string;
  description: string;
  tags: string[];
  iconSrc: string;
  imageSrc: string;
};

export function DappCard({
  id,
  name,
  description,
  tags,
  iconSrc,
  imageSrc,
}: DappCardProps) {
  const slug = generateSlugWithId(name, id);

  return (
    <article
      rel="noreferrer"
      className="group block h-full"
    >
      <div
        className={clsx(
          "relative flex h-full flex-col overflow-hidden rounded-2xl",
          "bg-surface-base-extra-light lcai-transition hover:bg-surface-base-light"
        )}
      >
        {/* Top media section */}
        <div className="relative w-full">
          <Link
            href={`/${slug}`}
            className="block relative aspect-video bg-surface-light"
          >
            <Image
              src={imageSrc}
              alt={name}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 380px, 100vw"
              priority={false}
            />
          </Link>

          {/* Logo badge overlapping the image */}
          <Link
            href={`/${slug}`}
            className="absolute -bottom-7 left-4 h-14 md:h-20 w-14 md:w-20 inline-flex items-center justify-center rounded-full bg-surface-base-dark"
          >
            <Image
              src={iconSrc}
              alt={`${name} logo`}
              fill
              sizes="(min-width: 768px) 4rem, 3.5rem"
              className="rounded-full object-cover"
              unoptimized
            />
          </Link>
        </div>

        {/* Content section */}
        <div className="flex flex-1 flex-col gap-5 px-4 md:px-5 pb-4 md:pb-5 pt-12">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold leading-[1.2] tracking-[-0.24px] text-content-strong">
              <Link href={`/${slug}`}>{name}</Link>
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
        </div>
      </div>
    </article>
  );
}

