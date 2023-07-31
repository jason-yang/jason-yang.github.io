import { Metadata } from "next";
import { PropsWithChildren } from "react";

import Breadcrumb from "@/components/breadcrumbs/breadcrumb";

export const metadata: Metadata = {
  title: {
    template: "%s | Blog | Jason Yang",
    default: "Blog",
  },
};
export default function BlogLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Breadcrumb label="Blog" href="/blog" />
      {children}
    </>
  );
}
