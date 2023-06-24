import Image from "next/image";
import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "@/components/navigation";
import Header from "@/components/header";
import { Metadata } from "next";

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
                { href: "/", label: "Home" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ]}
            />
          </div>
        </header>
        <main className="grow container mx-auto py-8">{children}</main>
        <footer className="bg-white border-t border-gray-200">
          <div className="flex py-4 text-sm content-end container mx-auto items-center">
            <div className="shrink">
              <div>{new Date().getFullYear()} &copy; Jason Yang</div>
              <div className="text-gray-400 text-xs">
                Last updated: {new Date().toUTCString()}
              </div>
            </div>
            <ul className="flex grow place-content-end gap-1">
              <li>
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
              </li>
              <li>
                <a href="https://github.com/jason-yang" target="_blank">
                  <Image
                    src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
                    alt="Github"
                    unoptimized={true}
                    width={95.5}
                    height={28}
                  />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}
