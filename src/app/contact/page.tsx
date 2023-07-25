import { Metadata } from "next";
import Image from "next/image";

import Breadcrumb from "@/components/breadcrumbs/breadcrumb";
import Container from "@/components/container";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Jason Yang",
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumb label="Contact" href="/contact" />
      <Container header={<Header>Contact details</Header>}>
        <p>
          You can contact me via LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/jasonxwyang/" target="_blank">
            <Image
              src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"
              alt="LinkedIn"
              unoptimized={true}
              width={111}
              height={28}
              className="inline-block"
            />
          </a>
        </p>
      </Container>
    </>
  );
}
