"use client";

import clsx from "clsx";
import { ReactNode, useState } from "react";
import SpaceBetween from "./space-between";

interface Option {
  id: string;
  label: ReactNode;
  disabled?: boolean;
}

interface OnChangeDetail {
  selectedOption: Option;
}

interface SegmentedControlProps {
  options: Option[];
  selectedId?: string;
  onChange?: (e: CustomEvent<OnChangeDetail>) => void;
}

export default function SegmentedControl({
  options,
  selectedId,
  onChange,
}: SegmentedControlProps) {
  const [currentSelectedId, setCurrentSelectedId] = useState(
    selectedId || options[0]?.id
  );

  return (
    <SpaceBetween
      variant="buttons"
      direction="horizontal"
      spacing="none"
      className="border rounded-md [&>*:not(:last-child)]:border-r"
    >
      {options.map((option, key) => (
        <button
          key={key}
          disabled={option.disabled}
          className={clsx("p-2", {
            "bg-gray-200": currentSelectedId === option.id,
          })}
          onClick={(e) => {
            setCurrentSelectedId(option.id);
            new CustomEvent("change", {
              detail: {
                selectedOption: { ...option },
              },
            });
          }}
        >
          {option.label}
        </button>
      ))}
    </SpaceBetween>
  );
}
