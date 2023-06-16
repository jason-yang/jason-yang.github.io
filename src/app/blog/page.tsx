import Container from "@/components/container";
import Header from "@/components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jason Yang - Blog",
};

export default function BlogPage() {
  return <Container header={<Header>Blog</Header>}>Coming soon!</Container>;
}
