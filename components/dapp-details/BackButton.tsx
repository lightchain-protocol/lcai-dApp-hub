"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { ButtonHTMLAttributes } from "react";

type BackButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  fallbackHref?: string;
  label?: string;
};

export default function BackButton({
  fallbackHref = "/",
  label = "BACK",
  className = "",
  ...props
}: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackHref);
    }
  };

  return (
    <button
      onClick={handleBack}
      className={`p-4 flex gap-3 items-center text-base font-medium leading-none tracking-[-0.4px] text-content-strong cursor-pointer hover:text-content-ultra lcai-transition ${className}`}
      {...props}
    >
      <ArrowLeft className="size-5" />
      {label}
    </button>
  );
}