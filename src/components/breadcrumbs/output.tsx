"use client";

import { HTMLAttributes, useContext } from "react";
import { BreadcrumbsContext } from "./provider";
import Link from "../link";
import clsx from "clsx";
import SpaceBetween from "../space-between";

export default function BreadcrumbsOutput(
  props: HTMLAttributes<HTMLDivElement>
) {
  const { items } = useContext(BreadcrumbsContext);

  return (
    <nav {...props}>
      <SpaceBetween variant="buttons" spacing="xs">
        {items.map(({ label, href }, key) => {
          const isLast = key === items.length - 1;

          return (
            <span
              key={key}
              className={clsx("flex flex-row gap-2", {
                "after:content-['>']": !isLast,
              })}
            >
              {isLast ? label : <Link href={href}>{label}</Link>}
            </span>
          );
        })}
      </SpaceBetween>
    </nav>
  );
}
