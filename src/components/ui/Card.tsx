import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const cardVariants = cva(
  "rounded-xl border bg-white text-neutral-900 shadow-md transition-shadow",
  {
    variants: {
      variant: {
        default: "border-neutral-200",
        selectable:
          "cursor-pointer hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
      },
      selected: {
        true: "border-primary border-2",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  selected?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, selected, ...props }, ref) => {
    return (
      <div
        className={twMerge(clsx(cardVariants({ variant, selected, className })))}        ref={ref}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export { Card, cardVariants };
