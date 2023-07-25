import { PropsWithChildren } from "react";

import Breadcrumb from "@/components/breadcrumbs/breadcrumb";

export default function BlogLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Breadcrumb label="Blog" href="/blog" />
      {children}
    </>
  );
}
