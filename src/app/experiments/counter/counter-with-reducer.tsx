"use client";

import { useReducer } from "react";

import Button from "@/components/button";
import SpaceBetween from "@/components/space-between";

enum Action {
  Increment = "increment",
  Decrement = "decrement",
  Reset = "reset",
}

interface State {
  counter: number;
}

type Actions =
  | { type: Action.Increment }
  | { type: Action.Decrement }
  | { type: Action.Reset };

function reducer(state: State, action: Actions): State {
  switch (action.type) {
    case Action.Increment:
      return { counter: state.counter + 1 };
    case Action.Decrement:
      return { counter: state.counter - 1 };
    case Action.Reset:
      return { counter: 0 };
  }
}

export default function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  return (
    <SpaceBetween variant="buttons">
      Counter: {state.counter}
      <Button onClick={() => dispatch({ type: Action.Increment })}>+</Button>
      <Button onClick={() => dispatch({ type: Action.Decrement })}>-</Button>
      <Button
        disabled={state.counter === 0}
        onClick={() => dispatch({ type: Action.Reset })}
      >
        reset
      </Button>
    </SpaceBetween>
  );
}
