"use client";

import TrashIcon from "@heroicons/react/20/solid/TrashIcon";
import clsx from "clsx";
import { useCallback, useRef, useState } from "react";

import SpaceBetween from "@/components/space-between";

interface Todo {
  value: string;
  done?: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newValue, setNewValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const isValid = newValue.trim() !== "";

  return (
    <SpaceBetween variant="container">
      <ol>
        {todos.length > 0 ? (
          todos.map(({ value, done }, key) => (
            <li key={key} className="group">
              <label>
                <input
                  type="checkbox"
                  checked={done}
                  onChange={(e) =>
                    setTodos((prev) => [
                      ...prev.slice(0, key),
                      { ...todos[key], done: e.target.checked },
                      ...prev.slice(key + 1),
                    ])
                  }
                />{" "}
                <span className={clsx({ "line-through": done })}>{value}</span>
              </label>
              <button
                className="text-red-400 hidden group-hover:inline-block"
                title="Delete item"
                onClick={() => {
                  if (
                    done ||
                    confirm("This task has not been completed yet, delete?")
                  ) {
                    setTodos((prev) => [
                      ...prev.slice(0, key),
                      ...prev.slice(key + 1),
                    ]);
                  }
                }}
              >
                <TrashIcon width={16} height={16} className="inline" />
              </button>
            </li>
          ))
        ) : (
          <>There are no items</>
        )}
      </ol>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (newValue.trim() === "") {
            inputRef.current?.focus();
          } else {
            setTodos((prev) => [...prev, { value: newValue }]);
            setNewValue("");
          }
        }}
      >
        <SpaceBetween variant="buttons">
          <input
            ref={inputRef}
            className="border-solid border-2 border-gray-400 rounded-sm"
            type="text"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            placeholder="Some task"
          />
          <button
            type="submit"
            className="bg-black text-gray-300 hover:text-white px-4 rounded-sm disabled:bg-gray-700 disabled:hover:text-gray-300"
            disabled={!isValid}
          >
            Add
          </button>
        </SpaceBetween>
      </form>
    </SpaceBetween>
  );
}
