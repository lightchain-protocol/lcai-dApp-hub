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
import ThemeToggleButton from "./DarkSwitcher";
import Navbar from "./NavMenu";
import PopupMobileMenu from "./PopupMobileMenu";
import type { MenuConfig, NavCardItem } from "./types";

function resolveMenus(raw: RawNavConfig[]): MenuConfig[] {
  return raw.map((menu) => ({
    ...menu,
    label: menu.label === "Blockchain" ? "Discover" : menu.label,
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
      <div className="py-1.5 md:py-2 bg-[url(/images/bg/topbar-bg-light.png)] dark:bg-[url(/images/bg/topbar-bg.png)] bg-no-repeat bg-cover hidden md:block">
        <div className="px-4 md:px-12.5 2xl:px-18">
          <p className="text-center dark:text-[#B1B3D0] text-content-soft text-xs md:text-sm font-medium leading-none">
            We&apos;re no longer active on Telegram. Join our official Discord for real-time updates and community chat:
            <Link href={"#"} className="ml-1 text-content-strong underline decoration-border-medium underline-offset-2">discord.gg/lightchain</Link>
          </p>
        </div>
      </div>
      <header className="sticky top-0 z-50 w-full border-b border-border-soft bg-surface-base-dark backdrop-blur-md dark:border-[rgba(204,206,239,0.12)] dark:bg-surface-dark-fixed/80">
        <div className="h-14 px-4 md:h-16 md:px-12.5 2xl:px-18 flex items-center">
          <div className="max-w-[2560px] w-full mx-auto flex items-center justify-between">
            <Logo />

            <div className="hidden xl:block">
              <Navbar menus={menus} />
            </div>

            <div className="flex items-center gap-2 xl:gap-4">
              <ThemeToggleButton />
              <UserButton className="hidden md:flex" />
              <ConnectWalletButton className="hidden md:flex" />

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
