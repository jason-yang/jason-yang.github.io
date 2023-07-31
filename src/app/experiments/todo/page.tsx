import { Metadata } from "next";

import Breadcrumb from "@/components/breadcrumbs/breadcrumb";
import Container from "@/components/container";
import Header from "@/components/header";

import TodoList from "./todo";

export const metadata: Metadata = {
  title: "Todo",
  description: "The infamous todo experiment",
};

export default function Todo() {
  return (
    <>
      <Breadcrumb href="/experiments/todo" label={metadata.title?.toString()} />
      <Container header={<Header>{metadata.title?.toString()}</Header>}>
        <TodoList />
      </Container>
    </>
  );
}
