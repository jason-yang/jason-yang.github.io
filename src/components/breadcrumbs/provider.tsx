"use client";

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";
import HomeIcon from "@heroicons/react/20/solid/HomeIcon";
import { CrumbItem } from "./types";

interface Context {
  items: CrumbItem[];
  setItems: Dispatch<SetStateAction<CrumbItem[]>>;
}

export const BreadcrumbsContext = createContext<Context>({
  items: [],
  setItems: () => {},
});

export default function BreadcrumbsProvider({ children }: PropsWithChildren) {
  const [items, setItems] = useState<CrumbItem[]>([
    {
      label: (
        <div className="flex flex-row items-center gap-1">
          <HomeIcon className="h-4 w-4" />
          Home
        </div>
      ),
      href: "/",
    },
  ]);

  return (
    <BreadcrumbsContext.Provider value={{ items, setItems }}>
      {children}
    </BreadcrumbsContext.Provider>
  );
}
