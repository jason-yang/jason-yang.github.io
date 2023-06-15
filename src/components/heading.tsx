import clsx from "clsx";
import React from "react";

const FONT_SIZES: { [key in HeadingVariants]: string } = {
  h1: "text-3xl",
  h2: "text-2xl",
  h3: "text-xl",
  h4: "text-lg",
  h5: "text-base",
  h6: "text-sm",
};

const MARGINS: { [key in HeadingVariants]: string } = {
  h1: "mb-7",
  h2: "mb-5",
  h3: "mb-3",
  h4: "mb-2",
  h5: "mb-1",
  h6: "mb-5",
};

type HeadingVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps {
  variant?: HeadingVariants;
  disableMargins?: boolean;
}

export default function Heading({
  children,
  variant = "h2",
  disableMargins,
  className,
  ...props
}: React.PropsWithChildren<HeadingProps> &
  React.HTMLAttributes<HTMLHeadingElement>) {
  const Element = variant;

  return (
    <Element
      {...props}
      className={clsx(
        "font-bold",
        FONT_SIZES[variant],
        !disableMargins && MARGINS[variant],
        className
      )}
    >
      {children}
    </Element>
  );
}
