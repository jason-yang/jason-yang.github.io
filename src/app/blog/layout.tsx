import Breadcrumb from "@/components/breadcrumbs/breadcrumb";
import { PropsWithChildren } from "react";

export default function BlogLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Breadcrumb label="Blog" href="/blog" />
      {children}
    </>
  );
}
