"use client";

import { toast } from "sonner";
import { useCallback } from "react";

type Platform = "twitter" | "facebook" | "linkedin" | "telegram" | "discord" | "native" | "copy";

type ShareOptions = {
  url: string;
  title?: string;
  description?: string;
};

export const useShare = ({
  url,
  title = "Check this out!",
  description = "",
}: ShareOptions) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(
    description ? `${title} - ${description}` : title
  );

  const openWindow = (shareUrl: string) => {
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  const openShare = useCallback(
    async (platform: Platform) => {
      try {
        // Native share (mobile)
        if (platform === "native" && navigator.share) {
          await navigator.share({
            title,
            text: description,
            url,
          });
          return;
        }

        const shareLinks: Record<string, string> = {
          twitter: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
          facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
          linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
          telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
          discord: `https://discord.com/channels/@me`,
        };

        if (platform === "discord") {
          await navigator.clipboard.writeText(url);
          toast.success("Link copied — Paste inside Discord", {
            position: "bottom-right",
            style: {
              backgroundColor: "var(--color-surface-success-subtle)",
              color: "var(--color-content-success-light)",
              borderColor: "var(--color-surface-success-default)"
            }
          });
          openWindow(shareLinks.discord);
          return;
        }

        if (platform in shareLinks) {
          openWindow(shareLinks[platform]);
        } else {
          await navigator.clipboard.writeText(url);
          toast.success("Link copied to clipboard", {
            position: "bottom-right",
            style: {
              backgroundColor: "var(--color-surface-success-subtle)",
              color: "var(--color-content-success-light)",
              borderColor: "var(--color-surface-success-default)"
            }
          });
        }
      } catch {
        await navigator.clipboard.writeText(url);
        toast.success("Link copied to clipboard", {
          position: "bottom-right",
          style: {
            backgroundColor: "var(--color-surface-success-subtle)",
            color: "var(--color-content-success-light)",
            borderColor: "var(--color-surface-success-default)"
          }
        });
      }
    },
    [url, title, description, encodedText, encodedUrl]
  );

  return { openShare };
};