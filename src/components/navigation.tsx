"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { HTMLAttributes } from "react";

import SpaceBetween from "./space-between";

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
      <SpaceBetween
        variant="buttons"
        spacing="m"
        className="place-content-end text-gray-300"
      >
        {items.map(({ href, label, segment }, key) => {
          const active = segment === currentSegment;
          return (
            <Link
              key={key}
              href={href}
              className={clsx("px-2 border-b-2 ", {
                "hover:text-red-400 hover:border-red-400 border-transparent":
                  !active,
                "border-red-500 text-red-500": active,
              })}
            >
              {label}
            </Link>
          );
        })}
      </SpaceBetween>
    </nav>
  );
}
