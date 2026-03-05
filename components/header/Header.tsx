"use client";

import { RawSocialLink } from "@/lib/footer/types";
import { iconMap } from "@/lib/nav/iconMap";
import { resolveTarget } from "@/lib/nav/resolveTarget";
import type { RawNavConfig } from "@/lib/nav/types";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "../Link";
import Logo from "../Logo";
import { Button } from "../ui/Button";
import ConnectWalletButton from "../ui/ConnectWalletButton";
import UserButton from "../ui/UserButton";
import Navbar from "./NavMenu";
import PopupMobileMenu from "./PopupMobileMenu";
import type { MenuConfig, NavCardItem } from "./types";

function resolveMenus(raw: RawNavConfig[]): MenuConfig[] {
  return raw.map((menu) => ({
    ...menu,
    columns: menu.columns.map((col) => {
      if (col.type === "cards") {
        return {
          ...col,
          items: col.items.map((item) => ({
            ...item,
            href: item.href as NavCardItem["href"],
            icon: iconMap[item.iconKey] ?? iconMap["default"],
            target: resolveTarget(item.href, item.target),
          })),
        };
      }
      return col;
    }),
  }));
}

export default function Header(
  { rawMenus, socials }: { rawMenus: RawNavConfig[], socials: RawSocialLink[] }
) {
  const menus = resolveMenus(rawMenus);
  const [isMenuActive, setIsMenuActive] = useState(false);

  const closeMenu = () => setIsMenuActive(false);
  const toggleMenu = () => setIsMenuActive((v) => !v);

  return (
    <>
      {/* Header Topbar */}
      <div className="py-1.5 md:py-2 bg-[url(/images/bg/topbar-bg.png)] bg-no-repeat bg-cover">
        <div className="px-4">
          <p className="text-center text-[#7376AA] text-xs md:text-sm font-medium leading-none">
            🏟️ BUIDL where legends play. Join our LightchainAI at Parc des Princes, Paris – July 2025 •
            <Link href={"#"} className="bg-[linear-gradient(89deg,#ff12fb_-50%,#e3c1f3_70%,#7064e9_102%)] bg-clip-text text-transparent ml-1">Register Now →</Link>
          </p>
        </div>
      </div>
      <header className="sticky top-0 z-50 w-full bg-black/50 backdrop-blur-md border-b border-border-soft">
        <div className="flex items-center justify-between px-4 h-16 md:h-20 md:px-12.5">
          {/* Left: Logo */}
          <Logo />

          {/* Center: Navigation (Desktop only) */}
          <div className="hidden xl:block">
            <Navbar menus={menus} />
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 xl:gap-4">
            {/* <ThemeToggleButton /> */}
            <UserButton className="hidden md:flex" />
            <ConnectWalletButton className="hidden md:flex" />

            {/* Mobile Menu Toggle */}
            <div className="block xl:hidden">
              <Button
                aria-expanded={isMenuActive}
                aria-haspopup="dialog"
                className="size-10 p-2.5 flex items-center justify-center rounded-full border border-border-medium bg-surface-base-subtle text-content-strong lcai-transition"
                onClick={toggleMenu}
              >
                <Menu size={24} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <PopupMobileMenu
        isActive={isMenuActive}
        menus={menus}
        onClose={closeMenu}
        socials={socials}
      />
    </>
  );
}
