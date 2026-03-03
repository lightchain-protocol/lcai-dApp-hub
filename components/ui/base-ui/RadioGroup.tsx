"use client"

import { Radio as RadioPrimitive } from "@base-ui/react/radio"
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group"

import { cn } from "@/lib/utils"

function RadioGroup({ className, ...props }: RadioGroupPrimitive.Props) {
  return (
    <RadioGroupPrimitive
      data-slot="radio-group"
      className={cn("grid gap-2 w-full", className)}
      {...props}
    />
  )
}

function RadioGroupItem({ className, ...props }: RadioPrimitive.Root.Props) {
  return (
    <RadioPrimitive.Root
      data-slot="radio-group-item"
      className={cn(
        "border-border-medium dark:bg-transparent data-checked:bg-surface-transparent data-checked:text-content-brand-faint dark:data-checked:bg-surface-transparent data-checked:border-border-primary aria-invalid:aria-checked:border-border-primary aria-invalid:border-border-deep focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 dark:aria-invalid:border-border-deep/50 flex size-5.5 rounded-full focus-visible:ring-3 aria-invalid:ring-3 group/radio-group-item peer relative aspect-square shrink-0 border-2 outline-none after:absolute after:-inset-x-3 after:-inset-y-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="flex size-5.5 items-center justify-center"
      >
        <span className="bg-surface-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded" />
      </RadioPrimitive.Indicator>
    </RadioPrimitive.Root>
  )
}

export { RadioGroup, RadioGroupItem }

