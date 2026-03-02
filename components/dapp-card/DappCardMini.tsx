"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import clsx from "clsx";
import { Badge } from "../ui/Badge";

type DappCardMiniProps = {
  name: string;
  description: string;
  tags: string[]; // e.g. ["TRADING"]
  href: string;
  iconSrc: string; // path to logo
};

export function DappCardMini({
  name,
  description,
  tags,
  href,
  iconSrc,
}: DappCardMiniProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group block h-full"
    >
      <div
        className={clsx(
          "relative flex h-full flex-col justify-between rounded-2xl border border-border-soft",
          "bg-surface-base-extra-light",
          "px-4 md:px-6 py-4 md:py-6 lcai-transition hover:bg-surface-base-light"
        )}
      >
        {/* Top row: icon + title + external link */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 md:gap-6">
            {/* Logo circle */}
            <div className="relative inline-flex h-16 w-16 shrink-0 bg-surface-base-light rounded-full items-center justify-center">
              <Image
                src={iconSrc}
                alt={name}
                fill
                className="rounded-full"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold leading-[1.2] tracking-[-0.18px] text-content-strong">
                {name}
              </h3>
              <p className="mt-2.5 text-sm leading-normal tracking-[-0.14px] text-content-bold line-clamp-3 max-w-xl">
                {description}
              </p>
              {/* Tags */}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {tags.map((tag) => (
                  <Badge key={tag} size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* External link icon */}
          <span className="absolute top-4 right-4 flex items-center justify-center h-6 w-6 text-content-medium lcai-transition group-hover:text-content-brand-strong">
            <ExternalLink size={20} />
          </span>
        </div>
      </div>
    </Link>
  );
}