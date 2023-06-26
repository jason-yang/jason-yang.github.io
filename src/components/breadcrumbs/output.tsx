"use client";

import { HTMLAttributes, useContext } from "react";
import { BreadcrumbsContext } from "./provider";
import Link from "../link";
import clsx from "clsx";

export default function BreadcrumbsOutput(
  props: HTMLAttributes<HTMLDivElement>
) {
  const { items } = useContext(BreadcrumbsContext);

  return (
    <nav {...props}>
      <ol className="flex flex-row gap-2">
        {items.map(({ label, href }, key) => {
          const isLast = key === items.length - 1;

          return (
            <li
              key={key}
              className={clsx("flex flex-row gap-2", {
                "after:content-['>']": !isLast,
              })}
            >
              {isLast ? label : <Link href={href}>{label}</Link>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
