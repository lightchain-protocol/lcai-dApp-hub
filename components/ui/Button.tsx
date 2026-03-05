import { Button as ButtonPrimitive } from "@base-ui/react/button";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Link } from "@/components/Link";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 cursor-pointer select-none items-center justify-center whitespace-nowrap rounded-[10px] outline-none transition-all disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-surface-primary text-content-ultra hover:bg-surface-brand-default hover:text-content-white-fixed",
        primary:
          "bg-surface-primary text-content-ultra hover:bg-surface-brand-default hover:text-content-white-fixed",
        outline:
          "bg-surface-base-strong text-content-strong border-2 border-border-soft hover:opacity-90",
        gradient:
          "bg-linear-to-r from-surface-secondary to-surface-primary text-white hover:from-[#9333ea] hover:to-[#3b82f6]",
        secondary: "bg-surface-secondary text-white hover:opacity-90",
        ghost:
          "bg-surface-base-light hover:bg-surface-base-soft border-2 border-border-light text-content-soft hover:opacity-90 hover:text-content-bold active:text-white lcai-transition",
      },
      size: {
        default: "type-body-m h-9 md:h-10 gap-2 px-4 font-medium",
        sm: "type-body-s h-8 gap-1 px-3 font-medium",
        md: "type-body-s h-9 md:h-11 gap-1.5 px-4 md:font-medium",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = ButtonPrimitive.Props &
  VariantProps<typeof buttonVariants> & {
    href?: string;
  };

function Button({
  className,
  variant = "default",
  size = "default",
  href,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size, className }));

  if (href) {
    return (
      <Link href={href} className={classes} data-slot="button">
        {props.children}
      </Link>
    );
  }

  return (
    <ButtonPrimitive
      className={classes}
      data-slot="button"
      {...props}
    />
  );
}

export { Button, buttonVariants };