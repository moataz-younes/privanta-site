import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[#17306C] to-[#63F0DD] text-white shadow-[0_4px_14px_rgba(23,48,108,0.28)] hover:shadow-[0_8px_20px_rgba(23,48,108,0.34)] hover:brightness-[1.03] active:brightness-[0.97]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-[rgba(99,240,221,0.2)] bg-transparent text-[#63F0DD] transition-all hover:border-[#63F0DD] hover:bg-[rgba(99,240,221,0.08)] hover:text-[#63F0DD]",
        secondary: "bg-transparent border border-[rgba(255,255,255,0.08)] text-[#E5E7EB] hover:border-[rgba(99,240,221,0.3)] hover:bg-[rgba(99,240,221,0.04)]",
        ghost: "hover:bg-[rgba(99,240,221,0.05)] hover:text-[#63F0DD]",
        link: "text-[#63F0DD] underline-offset-4 hover:underline hover:brightness-110",
        hero: "relative bg-gradient-to-r from-[#17306C] to-[#63F0DD] text-white font-semibold shadow-[0_4px_14px_rgba(23,48,108,0.28)] hover:shadow-[0_8px_20px_rgba(23,48,108,0.34)] hover:brightness-[1.03] active:brightness-[0.97]",
        ai: "bg-gradient-to-r from-[#7C5CFF] to-[#9B7CFF] text-white shadow-md hover:shadow-lg hover:brightness-[1.04] active:brightness-[0.96] transition-all",
        glass:
          "glass-strong text-foreground transition-all hover:border-[rgba(99,240,221,0.15)] hover:bg-gradient-to-br hover:from-[rgba(99,240,221,0.06)] hover:to-[rgba(23,48,108,0.04)] hover:text-foreground",
      },
      size: {
        default: "h-10 px-4 py-2 text-sm",
        sm: "h-9 px-3 text-xs",
        lg: "h-10 px-5 text-sm",
        xl: "h-11 px-6 text-sm",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
