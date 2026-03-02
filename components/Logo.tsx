import Image from "next/image";
import { cn } from "@/lib/utils";
import { Link } from "./Link";

export default function Logo(
  { className, onClick }: { className?: string; onClick?: () => void },
) {
  return (
    <Link
      className={cn("group flex items-center gap-2", className)}
      href="/"
      onClick={onClick}
    >
      <Image
        className="hidden dark:block"
        src="/images/logo/logo.svg"
        height={39}
        width={176}
        alt="LightchainAI Logo"
        priority
      />
      <Image
        className="dark:hidden"
        src="/images/logo/logo-dark.svg"
        height={39}
        width={176}
        alt="LightchainAI Logo"
        priority
      />
    </Link>
  );
}
