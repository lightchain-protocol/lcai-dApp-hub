"use client";

import { generateSlugWithId } from "@/lib/utils";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useCallback, useMemo, useState } from "react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { BadgeCheck, ExternalLink } from "lucide-react";
import { DappSafetyDialog } from "./DappSafetyDialog";

export type DappCardProps = {
  id: string | number;
  name: string;
  description: string;
  tags: string[];
  iconSrc: string;
  imageSrc: string;
  externalUrl?: string;
  added_by_team?: boolean;
  addedByTeam?: boolean;
  powered_by_lightchain?: boolean;
  poweredByLightchain?: boolean;
};

type CardLinkProps = {
  internalHref: string;
  externalUrl?: string;
  shouldGateExternalUrl?: boolean;
  onOpenSafetyWarning?: () => void;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
};

function CardLink({
  internalHref,
  externalUrl,
  shouldGateExternalUrl = false,
  onOpenSafetyWarning,
  className,
  children,
  ariaLabel,
}: CardLinkProps) {
  if (externalUrl && shouldGateExternalUrl) {
    return (
      <button
        type="button"
        className={clsx(
          "cursor-pointer appearance-none border-0 bg-surface-base-soft dark:bg-surface-base-extra-light p-0 text-left font-[inherit] text-inherit backdrop-blur-[42px]",
          className
        )}
        aria-label={ariaLabel}
        onClick={onOpenSafetyWarning}
      >
        {children}
      </button>
    );
  }

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
  added_by_team,
  addedByTeam,
  powered_by_lightchain,
  poweredByLightchain,
}: DappCardProps) {
  const slug = generateSlugWithId(name, id);
  const internalHref = `/${slug}`;
  const [isSafetyDialogOpen, setIsSafetyDialogOpen] = useState(false);

  const isAddedByTeam = (addedByTeam ?? added_by_team) === true;
  const isPoweredByLightchain =
    (poweredByLightchain ?? powered_by_lightchain) === true;
  const isOfficial = isAddedByTeam || isPoweredByLightchain;
  const shouldShowSafetyWarning = Boolean(externalUrl && !isOfficial);
  const shouldGateExternalUrl = shouldShowSafetyWarning;
  const safetyDismissalKey = useMemo(
    () => (externalUrl ? `lcai:dapp-safety-dismissed:${externalUrl}` : ""),
    [externalUrl]
  );

  const openSafetyWarning = useCallback(() => {
    if (externalUrl && safetyDismissalKey) {
      try {
        if (window.localStorage.getItem(safetyDismissalKey) === "true") {
          const openedWindow = window.open(
            externalUrl,
            "_blank",
            "noopener,noreferrer"
          );

          if (openedWindow) openedWindow.opener = null;
          return;
        }
      } catch {
        // If storage is unavailable, fall back to showing the safety dialog.
      }
    }

    setIsSafetyDialogOpen(true);
  }, [externalUrl, safetyDismissalKey]);

  const dismissSafetyWarningForUrl = useCallback(() => {
    if (!safetyDismissalKey) return;

    try {
      window.localStorage.setItem(safetyDismissalKey, "true");
    } catch {
      // Ignore storage failures; the current navigation should still work.
    }
  }, [safetyDismissalKey]);

  return (
    <article rel="noreferrer" className="group block h-full">
      <div
        className={clsx(
          "relative flex h-full flex-col overflow-hidden",
          "bg-surface-base-extra-light backdrop-blur-sm lcai-transition hover:bg-surface-base-light"
        )}
      >
        {/* Top media section */}
        <div className="relative w-full bg-surface-base-extra-light">
          <CardLink
            internalHref={internalHref}
            externalUrl={externalUrl}
            shouldGateExternalUrl={shouldGateExternalUrl}
            onOpenSafetyWarning={openSafetyWarning}
            className="block relative w-full aspect-video overflow-hidden bg-surface-base-soft dark:bg-surface-base-extra-light backdrop-blur-[42px]"
            ariaLabel={
              shouldGateExternalUrl
                ? `Review safety warning before opening ${name}`
                : externalUrl
                  ? `Open ${name} (external link)`
                  : name
            }
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
            shouldGateExternalUrl={shouldGateExternalUrl}
            onOpenSafetyWarning={openSafetyWarning}
            className="absolute -bottom-7 left-4 h-14 md:h-20 w-14 md:w-20 inline-flex items-center justify-center rounded-full bg-white/80 dark:bg-surface-base-dark"
            ariaLabel={
              shouldGateExternalUrl
                ? `Review safety warning before opening ${name}`
                : externalUrl
                  ? `Open ${name} (external link)`
                  : name
            }
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
              <CardLink
                internalHref={internalHref}
                externalUrl={externalUrl}
                shouldGateExternalUrl={shouldGateExternalUrl}
                onOpenSafetyWarning={openSafetyWarning}
                className="bg-transparent!"
                ariaLabel={
                  shouldGateExternalUrl
                    ? `Review safety warning before opening ${name}`
                    : externalUrl
                      ? `Open ${name} (external link)`
                      : name
                }
              >
                {name}
              </CardLink>
              
              {/* Official badge — shown only for dApps built by the team */}
              {isOfficial && (
                <span
                  aria-label="Official Lightchain dApp"
                  title="Official Lightchain dApp"
                  className="pointer-events-none ml-2.5 inline-flex items-center gap-1 rounded-full dark:bg-[rgba(255,255,255,0.023)] bg-surface-base-dark backdrop-blur-[42px] px-2.5 py-1 text-[11px] font-semibold uppercase leading-none tracking-[0.04em] dark:text-white text-content-strong"
                >
                  <BadgeCheck aria-hidden="true" className="size-4 mb-px" strokeWidth={2.25} />
                  Official
                </span>
              )}
            </h3>
            <p className="text-base leading-normal tracking-[-0.16px] text-content-bold line-clamp-3">
              {description}
            </p>
          </div>
          {/* Tags */}
          {tags.length > 0 && (
            <div className="mt-2 flex flex-wrap items-center gap-2 justify-between">

              {tags.length > 0 && (
                <div className="flex items-center gap-2">
                  {tags.map((tag) => (
                    <Badge key={tag} size="sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
              {externalUrl && (
                <Button
                  href={shouldGateExternalUrl ? undefined : externalUrl}
                  type={shouldGateExternalUrl ? "button" : undefined}
                  variant="outline"
                  size="sm"
                  className="h-8 rounded-[10px] border border-border-weak bg-surface-base-dark px-4 text-sm font-semibold text-content-strong hover:bg-surface-light"
                  onClick={shouldGateExternalUrl ? openSafetyWarning : undefined}
                >
                  Explore
                  <ExternalLink className="size-4" />
                </Button>
              )}
            </div>
          )}

        </div>
      </div>

      {shouldShowSafetyWarning && externalUrl ? (
        <DappSafetyDialog
          appName={name}
          externalUrl={externalUrl}
          open={isSafetyDialogOpen}
          onOpenChange={setIsSafetyDialogOpen}
          onDismissForUrl={dismissSafetyWarningForUrl}
        />
      ) : null}
    </article>
  );
}
