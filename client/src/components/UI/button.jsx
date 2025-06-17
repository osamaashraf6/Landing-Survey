import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white shadow-xs hover:bg-primary/90 focus-visible:ring-primary",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-white text-primary border border-primary hover:bg-gray-100 focus-visible:ring-primary",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3 rounded-md",
        sm: "h-8 rounded-full gap-1.5 px-3 has-[>svg]:px-2.5 w-1/4",
        md: "h-10 rounded-full px-5 has-[>svg]:px-3.5 text-base w-1/2",
        lg: "h-12 rounded-full px-6 has-[>svg]:px-4 text-base w-full",
        icon: "size-9 rounded-md",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
      width: {
        auto: "",
        full: "w-full",
        "1/4": "w-1/4",
        "1/3": "w-1/3", 
        "1/2": "w-1/2",
        "2/3": "w-2/3",
        "3/4": "w-3/4",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: false,
      width: "auto",
    },
    compoundVariants: [
      {
        fullWidth: true,
        className: "w-full",
      }
    ]
  }
)

function Button({
  className,
  variant,
  size,
  fullWidth,
  width,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, fullWidth, width, className }))}
      {...props} 
    />
  );
}

// Add default props
Button.defaultProps = {
  type: "button"
};

export { Button, buttonVariants }