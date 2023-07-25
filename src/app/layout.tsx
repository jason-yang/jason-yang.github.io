import "./globals.css";

import { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";

import BreadcrumbsOutput from "@/components/breadcrumbs/output";
import BreadcrumbsProvider from "@/components/breadcrumbs/provider";
import Container from "@/components/container";
import Header from "@/components/header";
import Navigation from "@/components/navigation";
import SpaceBetween from "@/components/space-between";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Jason Yang",
    default: "Home | Jason Yang",
  },
  description: "Personal page for Jason Yang",
  openGraph: {
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <BreadcrumbsProvider>
          <header className="bg-gray-950 py-4 content-end">
            <div className="container mx-auto flex items-end">
              <Header
                variant="h1"
                className="text-white"
                description="Software Engineer"
              >
                Jason Yang
              </Header>
              <Navigation
                className="grow"
                items={[
                  { href: "/", label: "Home", segment: null },
                  { href: "/blog", label: "Blog", segment: "blog" },
                  { href: "/contact", label: "Contact", segment: "contact" },
                ]}
              />
            </div>
          </header>
          <SpaceBetween variant="container" className="grow py-4">
            <Container className="container mx-auto">
              <BreadcrumbsOutput />
            </Container>
            <main className="container mx-auto">{children}</main>
          </SpaceBetween>
          <footer className="bg-white border-t border-gray-200">
            <div className="flex py-4 text-sm content-end container mx-auto items-center">
              <div className="shrink">
                <div>{new Date().getFullYear()} &copy; Jason Yang</div>
                <div className="text-gray-400 text-xs">
                  Last updated: {new Date().toUTCString()}
                </div>
              </div>
              <SpaceBetween
                variant="buttons"
                className="grow place-content-end"
              >
                <a
                  href="https://www.linkedin.com/in/jasonxwyang/"
                  target="_blank"
                >
                  <Image
                    src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"
                    alt="LinkedIn"
                    unoptimized={true}
                    width={111}
                    height={28}
                  />
                </a>
                <a href="https://github.com/jason-yang" target="_blank">
                  <Image
                    src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
                    alt="Github"
                    unoptimized={true}
                    width={95.5}
                    height={28}
                  />
                </a>
              </SpaceBetween>
            </div>
          </footer>
        </BreadcrumbsProvider>
      </body>
    </html>
  );
}
