import { Metadata } from "next";

const title = "Jason Yang";
const description = "Personal page for Jason Yang";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    title,
    description,
  },
};

export default function Home() {
  return <p>Content</p>;
}
