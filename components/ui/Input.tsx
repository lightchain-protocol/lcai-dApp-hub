import * as React from "react";
import type { InputHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "block w-full bg-surface-base-light rounded-xl text-content-strong placeholder:text-content-soft px-3.5 py-1.5 border border-border-medium focus:border-border-primary outline-none text-sm md:text-base leading-normal tracking-[-0.16px] disabled:cursor-not-allowed disabled:opacity-50 lcai-transition",
  {
    variants: {
      size: {
        sm: "h-10",
        md: "h-12",
        lg: "h-14",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
  VariantProps<typeof inputVariants> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(inputVariants({ size }), className)}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input, inputVariants };

