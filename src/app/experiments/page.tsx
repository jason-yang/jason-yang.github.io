import { Metadata } from "next";

import Container from "@/components/container";
import Header from "@/components/header";
import Link from "@/components/link";
import SpaceBetween from "@/components/space-between";

import CounterPage, { metadata as CounterMetadata } from "./counter/page";
import Todo, { metadata as TodoMetadata } from "./todo/page";

interface Experiment {
  metadata: Metadata;
  Component: React.ComponentType;
}

const EXPERIMENTS: { [slug: string]: Experiment } = {
  todo: { Component: Todo, metadata: TodoMetadata },
  counter: { Component: CounterPage, metadata: CounterMetadata },
};

export default async function ExperimentsPage() {
  return (
    <Container header={<Header>Experiments</Header>}>
      <SpaceBetween variant="container">
        {Object.entries(EXPERIMENTS).map(
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
