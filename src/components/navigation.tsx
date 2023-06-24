"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { HTMLAttributes } from "react";

export interface NavItem {
  href: string;
  label: React.ReactNode;
  segment: string | null;
}

export interface NavigationProps {
  items: NavItem[];
}

export default function Navigation({
  items,
  ...props
}: NavigationProps & HTMLAttributes<HTMLDivElement>) {
  const currentSegment = useSelectedLayoutSegment();

  return (
    <nav {...props}>
      <ol className="container mx-auto flex place-content-end gap-3 text-gray-300">
        {items.map(({ href, label, segment }, key) => {
          const active = segment === currentSegment;
          return (
            <li
              key={key}
              className={clsx("px-2", {
                "hover:text-red-400 hover:border-b-2 border-red-400": !active,
                "border-b-2 border-red-500 text-red-500": active,
              })}
            >
              <Link href={href}>{label}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
