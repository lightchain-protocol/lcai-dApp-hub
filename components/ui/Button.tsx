import { Button as ButtonPrimitive } from "@base-ui/react/button";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 cursor-pointer select-none items-center justify-center whitespace-nowrap rounded-[10px] outline-none transition-all focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-surface-brand-default text-content-ultra hover:opacity-90",
        primary: "bg-surface-brand-default text-content-ultra hover:opacity-90",
        outline: "bg-surface-base-strong text-content-strong border-2 border-border-soft hover:opacity-90",
        gradient:
          "bg-linear-to-r from-surface-secondary to-surface-brand-default text-white hover:from-[#9333ea] hover:to-[#3b82f6]",
        secondary: "bg-surface-secondary text-white hover:opacity-90",
      },
      size: {
        default: "type-body-m h-10 gap-2 px-4 font-medium",
        xs: "type-body-s h-8 gap-1 px-3 font-medium",
        sm: "type-body-s h-9 gap-1.5 px-4 font-medium",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      className={cn(buttonVariants({ variant, size, className }))}
      data-slot="button"
      {...props}
    />
  );
}

export { Button, buttonVariants };
