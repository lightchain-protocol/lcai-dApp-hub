"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggleButton({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!mounted) return <button className="rounded-lg h-[34px] w-[34px] bg-surface-white border border-border-light shadow-[inset_0_4px_4px_rgba(0,0,0,0.01),inset_0_-1px_3px_rgba(0,0,0,0.16)] flex items-center justify-center text-l14-semibold text-content-dark-medium hover:text-primary lcai-transition"></button>;

  const isDark = resolvedTheme === "dark";

  return (
    <>
      <Button
        className={cn('size-10 p-2.5 rounded-full', className)}
        type="button"
        onClick={() => setTheme(isDark ? "light" : "dark")}
      >
        {isDark ? (
          <SunIcon />
        ) : (
          <MoonIcon />
        )}
      </Button>
    </>
  );
}
