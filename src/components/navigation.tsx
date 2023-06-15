"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HTMLAttributes, PropsWithChildren } from "react";

export interface NavItem {
  href: string;
  label: React.ReactNode;
  active?: boolean;
}

export interface NavigationProps {
  items: NavItem[];
}

export default function Navigation({
  items,
  ...props
}: NavigationProps & HTMLAttributes<HTMLDivElement>) {
  const pathname = usePathname();

  return (
    <nav {...props}>
      <ol className="container mx-auto flex place-content-end gap-3 text-gray-300">
        {items.map(({ href, label }, key) => {
          const active = pathname === href;
          return (
            <li
              key={key}
              className={clsx("border-red-300 px-1 hover:border-b", {
                "hover:text-red-300": !active,
                "border-b border-red-500 text-red-500": active,
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
