import Link from "next/link";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border border-border-light bg-surface-light text-content-strong font-regular lcai-transition",
  {
    variants: {
      size: {
        sm: "px-2 py-1 text-xs leading-[1.2] tracking-[-0.12px]",
        md: "px-3 py-1 text-xs tracking-[0.08em] uppercase", // initial
        lg: "px-3.5 py-1.5 text-sm tracking-[0.12em] uppercase", // initial
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

type BadgeBaseProps = {
  children: ReactNode;
} & VariantProps<typeof badgeVariants>;

type BadgeSpanProps = BadgeBaseProps &
  Omit<HTMLAttributes<HTMLSpanElement>, "children"> & {
    href?: undefined;
  };

type BadgeLinkProps = BadgeBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> & {
    href: string;
  };

type BadgeProps = BadgeSpanProps | BadgeLinkProps;

function Badge(props: BadgeProps) {
  const { size, className, children, ...rest } = props as BadgeBaseProps & {
    className?: string;
  };

  const classes = cn(badgeVariants({ size, className }));

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props as BadgeLinkProps;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <span className={classes} {...(rest as HTMLAttributes<HTMLSpanElement>)}>
      {children}
    </span>
  );
}

export { Badge, badgeVariants };

