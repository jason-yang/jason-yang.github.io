"use client";

import { useContext, useLayoutEffect } from "react";

import { BreadcrumbsContext } from "./provider";
import { CrumbItem } from "./types";

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
