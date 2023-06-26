import clsx from "clsx";
import React from "react";

const FONT_SIZES: { [key in HeaderVariants]: string } = {
  h1: "text-3xl",
  h2: "text-2xl",
  h3: "text-xl",
  h4: "text-lg",
  h5: "text-base",
  h6: "text-sm",
};

type HeaderVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeaderProps {
  variant?: HeaderVariants;
  description?: React.ReactNode;
  color?: string;
  descriptionColor?: string;
  actions?: React.ReactNode;
}

export default function Header({
  children,
  description,
  variant = "h2",
  className,
  actions,
  ...props
}: React.PropsWithChildren<HeaderProps> &
  React.HTMLAttributes<HTMLHeadingElement>) {
  const Element = variant;

  return (
    <div className={clsx("flex flex-row items-baseline", className)}>
      <div className="grow">
        <Element {...props} className={clsx("font-bold", FONT_SIZES[variant])}>
          {children}
        </Element>
        {description && <div className="text-sm">{description}</div>}
      </div>
      {actions && <div className="shrink">{actions}</div>}
    </div>
  );
}
