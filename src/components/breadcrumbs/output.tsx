"use client";

import { useContext } from "react";
import { BreadcrumbsContext } from "./provider";
import Link from "../link";
import clsx from "clsx";

export default function BreadcrumbsOutput() {
  const { items } = useContext(BreadcrumbsContext);

  return (
    <nav className="backdrop-blur-sm py-2">
      <ol className="container mx-auto flex flex-row gap-2">
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
