"use client";

import { useState } from "react";

import Button from "@/components/button";
import SpaceBetween from "@/components/space-between";

export default function CounterWithState() {
  const [counter, setCounter] = useState(0);
  return (
    <SpaceBetween variant="buttons">
      Counter: {counter}
      <Button onClick={() => setCounter((prev) => prev + 1)}>+</Button>
      <Button onClick={() => setCounter((prev) => prev - 1)}>-</Button>
      <Button disabled={counter === 0} onClick={() => setCounter(0)}>
        reset
      </Button>
    </SpaceBetween>
  );
}
