import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren } from "react";

type Variant = "container" | "buttons";
type Direction = "horizontal" | "vertical";
type Spacing = "xxxs" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl";
type AlignItems = "start" | "center" | "end" | "baseline" | "stretch";

interface VariantDefaults {
  direction: Direction;
  spacing: Spacing;
}

const VARIANT_DEFAULTS: { [key in Variant]: VariantDefaults } = {
  container: {
    direction: "vertical",
    spacing: "l",
  },
  buttons: {
    direction: "horizontal",
    spacing: "xs",
  },
};

const spacingMap: { [key in Spacing]: string } = {
  xxxs: "gap-0.5",
  xxs: "gap-1",
  xs: "gap-2",
  s: "gap-3",
  m: "gap-4",
  l: "gap-5",
  xl: "gap-6",
  xxl: "gap-8",
};

interface SpaceBetweenProps {
  /**
   * Use predefined sane defaults
   */
  variant: Variant;
  /**
   * Customize direction
   */
  direction?: Direction;
  /**
   * Customize spacing
   */
  spacing?: Spacing;
  /**
   * Align items (flex)
   */
  alignItems?: AlignItems;
}

export default function SpaceBetween({
  variant,
  direction = VARIANT_DEFAULTS[variant].direction,
  spacing = VARIANT_DEFAULTS[variant].spacing,
  alignItems,
  children,
  className,
  ...props
}: PropsWithChildren<SpaceBetweenProps> & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        "flex",
        spacingMap[spacing],
        {
          // Direction
          "flex-row": direction === "horizontal",
          "flex-col": direction === "vertical",
          // Align items
          "items-start": alignItems === "start",
          "items-center": alignItems === "center",
          "items-end": alignItems === "end",
          "items-baseline": alignItems === "baseline",
          "items-stretch": alignItems === "stretch",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
