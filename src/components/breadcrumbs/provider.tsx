"use client";

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";
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
    { label: "Home", href: "/" },
  ]);

  return (
    <BreadcrumbsContext.Provider value={{ items, setItems }}>
      {children}
    </BreadcrumbsContext.Provider>
  );
}
