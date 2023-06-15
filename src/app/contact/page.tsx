import Heading from "@/components/heading";
import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      <Heading>Contact details</Heading>
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
    </>
  );
}