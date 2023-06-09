import Container from "@/components/container";
import Header from "@/components/header";
import Link from "@/components/link";

export default function HomePage() {
  return (
    <Container header={<Header>Introduction</Header>}>
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
      <p>
        For more details please check out my{" "}
        <Link href="https://www.linkedin.com/in/jasonxwyang/">
          LinkedIn profile
        </Link>
        .
      </p>
    </Container>
  );
}
