import { Metadata } from "next";

import Container from "@/components/container";
import Header from "@/components/header";
import Link from "@/components/link";
import SpaceBetween from "@/components/space-between";

import Todo, { metadata as TodoMetadata } from "./todo/page";

interface Experiment {
  metadata: Metadata;
  Component: React.ComponentType;
}

export const experiments: { [slug: string]: Experiment } = {
  todo: { Component: Todo, metadata: TodoMetadata },
};

export default async function ExperimentsPage() {
  return (
    <Container header={<Header>Experiments</Header>}>
      <SpaceBetween variant="container">
        {Object.entries(experiments).map(
          (
            [
              slug,
              {
                metadata: { title, description },
              },
            ],
            key
          ) => (
            <section key={key}>
              <Link href={`/experiments/${slug}`}>{title?.toString()}</Link>
              <div>{description}</div>
            </section>
          )
        )}
      </SpaceBetween>
    </Container>
  );
}
