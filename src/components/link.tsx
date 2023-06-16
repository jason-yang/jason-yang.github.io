import clsx from "clsx";
import LinkBase from "next/link";
import React from "react";

export default function Link({
  children,
  className,
  ...props
}: React.ComponentProps<typeof LinkBase>) {
  return (
    <LinkBase
      className={clsx(
        "underline",
        "text-blue-500",
        "hover:text-blue-600",
        className
      )}
      {...props}
    >
      {children}
    </LinkBase>
  );
}
