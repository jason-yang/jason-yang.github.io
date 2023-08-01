import { Metadata } from "next";

import Container from "@/components/container";
import Header from "@/components/header";
import SpaceBetween from "@/components/space-between";

import CounterWithReducer from "./counter-with-reducer";
import CounterWithState from "./counter-with-state";

export const metadata: Metadata = {
  title: "Counter",
  description: "Classic counter demo",
};

export default function CounterPage() {
  return (
    <Container header={<Header>Counter</Header>}>
      <SpaceBetween variant="container">
        <div>
          <p>With reducer:</p>
          <CounterWithReducer />
        </div>
        <div>
          <p>With state:</p>
          <CounterWithState />
        </div>
      </SpaceBetween>
    </Container>
  );
}
