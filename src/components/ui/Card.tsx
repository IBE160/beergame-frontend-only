import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

const cardVariants = cva(
  "rounded-xl border bg-white shadow-md transition-all duration-150 ease-out",
  {
    variants: {
      variant: {
        default: "border-neutral-200",
        selectable:
          "border-neutral-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary",
      },
      padding: {
        default: "p-4",
        large: "p-6",
      },
      selected: {
        true: "border-2 border-primary",
        false: "",
      }
    },
    defaultVariants: {
      variant: "default",
      padding: "default",
      selected: false,
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, selected, ...props }, ref) => {
    return (
      <div
        className={clsx(cardVariants({ variant, padding, selected, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export { Card, cardVariants };
