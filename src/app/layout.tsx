import Image from "next/image";
import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "@/components/navigation";
import Heading from "@/components/heading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
          <div className="container mx-auto flex items-center">
            <Heading variant="h1" className="text-white" disableMargins>
              Jason Yang
            </Heading>
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
        <main className="grow container mx-auto py-5">{children}</main>
        <footer className="flex py-4 text-sm content-end container mx-auto">
          <div className="shrink">
            {new Date().getFullYear()} &copy; Jason Yang
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
        </footer>
      </body>
    </html>
  );
}
