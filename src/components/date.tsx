"use client";

import { formatISO9075 } from "date-fns";

interface DateProps {
  date: Date;
}

export default function Date({ date }: DateProps) {
  return <>{formatISO9075(date)}</>;
}
