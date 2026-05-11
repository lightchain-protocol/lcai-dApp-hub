"use client";

import {
  CircleCheck,
  ExternalLink,
  Hand,
  MessageCircleOff,
  TriangleAlert,
  WalletMinimal,
  X,
} from "lucide-react";
import { useId, useMemo, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/base-ui/Dialog";
import { Checkbox } from "@/components/ui/base-ui/Checkbox";

type DappSafetyDialogProps = {
  appName: string;
  externalUrl: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onDismissForUrl: () => void;
};

const safetyItems = [
  {
    icon: MessageCircleOff,
    title: "Never share credentials",
    body: "Discord and Telegram logins are never needed to verify you're human.",
  },
  {
    icon: WalletMinimal,
    title: "Don't connect your wallet blindly",
    body: "Only approve transactions from sources you fully trust.",
  },
  {
    icon: Hand,
    title: "When in doubt, stop",
    body: "Something feel off? Reach us on Telegram or Discord before continuing.",
  },
];

function getDisplayHost(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export function DappSafetyDialog({
  appName,
  externalUrl,
  open,
  onOpenChange,
  onDismissForUrl,
}: DappSafetyDialogProps) {
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const descriptionId = useId();
  const displayHost = useMemo(() => getDisplayHost(externalUrl), [externalUrl]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        aria-describedby={descriptionId}
        showCloseButton={false}
        className="w-[min(calc(100vw-32px),383px)] max-w-none gap-0 overflow-hidden rounded-none border border-border-soft dark:border-[rgba(204,206,239,0.4)] bg-surface-base-dark dark:bg-[rgba(204,206,239,0.06)] p-0 text-content-strong dark:text-content-white-fixed shadow-[0_24px_64px_rgba(15,15,20,0.14)] dark:shadow-none backdrop-blur-[34px] sm:max-w-none"
      >
        <DialogHeader className="relative items-center gap-2.5 border-b border-border-soft dark:border-[rgba(204,206,239,0.06)] px-6 py-4 text-center">
          <div className="flex size-16 items-center justify-center rounded-full bg-[rgba(220,104,3,0.15)] text-[#DC6803] dark:text-[#F79009]">
            <TriangleAlert
              aria-hidden="true"
              className="size-8 [&_path:first-child]:fill-current [&_path:first-child]:stroke-current [&_path:not(:first-child)]:stroke-[#2A1000]"
              fill="currentColor"
              strokeWidth={1.75}
            />
          </div>
          <DialogTitle className="w-full text-center text-[30px] font-medium leading-[1.2] tracking-[-0.3px] text-content-strong dark:text-[#F5F6FF]">
            Stay in Control
          </DialogTitle>
          <DialogDescription id={descriptionId} className="sr-only">
            Safety reminder before opening {appName} at {displayHost}.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center gap-4 border-b border-border-soft dark:border-[rgba(204,206,239,0.12)] p-6">
          {safetyItems.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex w-full max-w-[300px] items-start gap-4">
              <Icon
                aria-hidden="true"
                className="size-6 shrink-0 text-content-strong dark:text-[#F5F6FF]"
                strokeWidth={2}
              />
              <div className="min-w-0 flex-1 space-y-1.5">
                <p className="text-base font-medium leading-[1.2] tracking-[-0.096px] text-content-strong dark:text-[#F5F6FF]">
                  {title}
                </p>
                <p className="text-xs font-normal leading-[1.5] tracking-[-0.12px] text-content-medium dark:text-[#B1B3D0]">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-[18px] px-6 pb-6 pt-5">
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={`Continue to ${displayHost}`}
            onClick={() => {
              if (dontShowAgain) onDismissForUrl();
              onOpenChange(false);
            }}
            className="flex w-full items-center justify-between rounded-[10px] bg-[linear-gradient(125.81deg,#5B4BFF_14.14%,#EE11FB_107.68%)] px-[13px] py-2 text-white outline-none transition-opacity hover:opacity-95 focus-visible:ring-3 focus-visible:ring-white/35"
          >
            <CircleCheck aria-hidden="true" className="size-7 shrink-0" strokeWidth={2.25} />
            <span className="min-w-0 flex-1 px-3 text-center">
              <span className="block text-lg font-medium leading-[1.2] tracking-[-0.18px]">
                I Understand
              </span>
              <span className="block truncate text-xs font-normal leading-[1.2] tracking-[-0.12px] text-white/70">
                continue to <span className="text-white">{displayHost}</span>
              </span>
            </span>
            <ExternalLink aria-hidden="true" className="size-6 shrink-0" strokeWidth={2} />
          </a>

          <label className="flex cursor-pointer items-center gap-2 text-base font-medium leading-[1.2] tracking-[-0.096px] text-content-medium dark:text-[#B1B3D0]">
            <Checkbox
              aria-label="Don't show again"
              checked={dontShowAgain}
              onCheckedChange={(checked) => setDontShowAgain(checked === true)}
              className="size-[18px] rounded-[6px] border-[1.636px] border-content-strong/35 bg-transparent text-content-strong data-checked:border-content-strong data-checked:bg-transparent dark:border-white/50 dark:text-white dark:data-checked:border-white/80"
            />
            <span>Don&apos;t show again</span>
          </label>
        </div>

        <DialogClose className="absolute right-[7px] top-[7.5px] flex size-10 items-center justify-center p-2 text-content-medium hover:text-content-strong dark:text-[#B1B3D0] dark:hover:text-white outline-none transition-colors focus-visible:ring-3 focus-visible:ring-content-strong/25 dark:focus-visible:ring-white/30">
          <X aria-hidden="true" className="size-6" strokeWidth={2} />
          <span className="sr-only">Close safety dialog</span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
