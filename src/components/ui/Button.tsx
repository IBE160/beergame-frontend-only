import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-base transition-all duration-150 ease-out",
  {
    variants: {
      variant: {
        primary:
          "bg-accent-primary font-bold text-white hover:bg-accent-secondary active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary disabled:bg-neutral-200 disabled:text-neutral-500",
        secondary:
          "bg-white font-semibold text-neutral-900 border border-neutral-400 hover:bg-neutral-50 active:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary disabled:bg-neutral-100 disabled:text-neutral-500 disabled:border-neutral-200",
      },
      size: {
        default: "h-11 py-3 px-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={clsx(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
