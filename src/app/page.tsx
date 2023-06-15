import Heading from "@/components/heading";
import { Metadata } from "next";

const title = "Jason Yang - Home";
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

export default function HomePage() {
  return (
    <>
      <Heading>Introduction</Heading>
      <p>
        Jason Yang is a Software Engineer with 18 years of Full Stack experience
        specializing in Frontend Engineering focused on giving end users the
        best User Experience. Jason has also accumulated vast knowledge and
        experience in Backend Engineering, Web-based API Development in
        particular, as well as infrastructure required to Host, Test, Serve, and
        Run Frontend User Interfaces; the broad range of knowledge and
        experience gives Jason insight on how to Optimize interaction starting
        from User Interfaces all the way to Data Sources. Jason is relentless in
        Incrementally seeking optimal solutions for any problem, and enjoys
        Mentoring less experienced colleagues. In his free time, Jason likes to
        spend time with his family of four, online gaming sessions with his
        friends, and keeping himself up to date with relevant new technology.
      </p>
    </>
  );
}
