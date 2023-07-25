import clsx from "clsx";
import React from "react";

export default function OrderedList({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLOListElement>) {
  return (
    <ol className={clsx(className, "m-5 list-decimal list-inside")} {...props}>
      {children}
    </ol>
  );
}
