"use client"

import { useShare } from "@/hooks/useShare";
import Discord from "@/components/icons/Discord";
import Facebook from "@/components/icons/Facebook";
import Linkedin from "@/components/icons/Linkedin";
import Telegram from "@/components/icons/Telegram";
import Twitter from "@/components/icons/Twitter";
import { Button } from "@/components/ui/Button";
import { Copy, Globe } from "lucide-react";
import { Input } from "@/components/ui/Input";
import CopyButton from "@/components/CopyButton";

const ShareButtons = () => {
  const sharableLink = "https://example.com/dapp/";

  const { openShare } = useShare({
    url: sharableLink,
    title: "Awesome Article",
  });

  return (
    <div className="px-6 pt-3 pb-6">
      <div className="space-y-3">
        <span className="block text-base font-medium leading-normal tracking-[-0.16px] text-content-default">
          Share with
        </span>

        {/* Share Buttons */}
        <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(112px,1fr))]">
          <Button
            variant={"ghost"}
            size={"md"}
            onClick={() => openShare("twitter")}
            className={"hover:text-content-brand-light"}
          >
            <Twitter />
          </Button>
          <Button
            variant={"ghost"}
            size={"md"}
            onClick={() => openShare("facebook")}
            className={"hover:text-content-brand-light"}
          >
            <Facebook />
          </Button>
          <Button
            variant={"ghost"}
            size={"md"}
            onClick={() => openShare("linkedin")}
            className={"hover:text-content-brand-light"}
          >
            <Linkedin />
          </Button>
          <Button
            variant={"ghost"}
            size={"md"}
            onClick={() => openShare("telegram")}
            className={"hover:text-content-brand-light"}
          >
            <Telegram />
          </Button>
          <Button
            variant={"ghost"}
            size={"md"}
            onClick={() => openShare("discord")}
            className={"hover:text-content-brand-light"}
          >
            <Discord />
          </Button>
          <Button
            variant={"ghost"}
            size={"md"}
            onClick={() => openShare("native")}
            className={"hover:text-content-brand-light"}
          >
            <Globe />
          </Button>
        </div>

        {/* separator */}
        <div className="flex gap-4 items-center justify-center">
          <div className="h-px grow bg-border-light"></div>
          <span className="text-content-default text-xs leading-[1.2] tracking-[-0.12px]">OR</span>
          <div className="h-px grow bg-border-light"></div>
        </div>

        {/* Copy Field */}
        <div className="flex gap-2 items-center">
          <Input
            readOnly
            value={sharableLink}
            className="h-9 md:h-11"
          />
          <CopyButton
            copyText={sharableLink}
            className="group/button inline-flex shrink-0 cursor-pointer select-none items-center justify-center whitespace-nowrap rounded-[10px] outline-none transition-all disabled:pointer-events-none disabled:opacity-50 bg-linear-to-r from-surface-secondary to-surface-primary text-white hover:from-[#9333ea] hover:to-[#3b82f6] type-body-s h-9 md:h-11 gap-1.5 px-4 md:font-medium"
          >
            <Copy className="size-4" />
            <span className="hidden md:block">COPY LINK</span>
          </CopyButton>
        </div>
      </div>
    </div>
  )
}

export default ShareButtons