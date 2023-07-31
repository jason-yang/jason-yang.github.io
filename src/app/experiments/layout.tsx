import { Metadata } from "next";
import { PropsWithChildren } from "react";

import Breadcrumb from "@/components/breadcrumbs/breadcrumb";

export const metadata: Metadata = {
  title: {
    template: "%s | Experiments | Jason Yang",
    default: "Experiments",
  },
};

export default function ExperimentsLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Breadcrumb label="Experiments" href="/experiments" />
      {children}
    </>
  );
}
