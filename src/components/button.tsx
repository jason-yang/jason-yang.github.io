import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

export default function Button({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"button">) {
  return (
    <button
      className={clsx(
        className,
        "border-solid border px-3 rounded-sm bg-gray-100",
        "active:bg-gray-300",
        "hover:bg-gray-200 disabled:text-gray-300",
        "disabled:bg-gray-50 disabled:hover:bg-gray-50"
      )}
      {...props}
    >
      {children}
    </button>
  );
}
