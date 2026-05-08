"use client";

import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggleButton({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  const classes = cn(
    "group/theme relative inline-flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-[10px] cursor-pointer",
    "border border-border-light bg-[#7183FF] text-content-white-fixed shadow-[inset_0_4px_4px_rgba(255,255,255,0.18),inset_0_-1px_3px_rgba(0,8,65,0.18),0_6px_16px_rgba(0,8,65,0.08)] hover:text-content-white-fixed",
    "dark:border-[rgba(204,206,239,0.08)] dark:bg-surface-dark-fixed dark:text-[#CCCEEF] dark:shadow-[inset_0_4px_4px_rgba(255,255,255,0.03),inset_0_-1px_3px_rgba(204,206,239,0.18),0_6px_16px_rgba(0,0,0,0.18)]",
    "outline-none lcai-transition hover:border-border-medium hover:text-content-white-fixed active:scale-[0.98]",
    "focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:focus-visible:ring-offset-[#020203]",
    className
  );

  if (!mounted) {
    return (
      <button
        aria-hidden="true"
        className={classes}
        disabled
        tabIndex={-1}
        type="button"
      />
    );
  }

  return (
    <button
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      className={classes}
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(91,75,255,0.14),rgba(221,0,172,0.12))] opacity-0 lcai-transition group-hover/theme:opacity-100" />
      {isDark ? (
        <SunIcon aria-hidden="true" className="relative size-[18px]" strokeWidth={2.25} />
      ) : (
        <MoonIcon aria-hidden="true" className="relative size-[18px]" strokeWidth={2.25} />
      )}
    </button>
  );
}
