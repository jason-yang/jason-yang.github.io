"use client";

import { useContext, useLayoutEffect } from "react";
import { CrumbItem } from "./types";
import { BreadcrumbsContext } from "./provider";

export default function Breadcrumb(crumbItem: CrumbItem) {
  const { setItems } = useContext(BreadcrumbsContext);

  useLayoutEffect(() => {
    setItems((items) => [...items, crumbItem]);

    return () => {
      setItems((items) => items.slice(0, -1));
    };
  }, [crumbItem, setItems]);

  return <></>;
}
