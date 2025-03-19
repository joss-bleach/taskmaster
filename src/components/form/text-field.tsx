"use client";

import { useFieldContext } from "@/hooks/form";
import { Input } from "../ui/input";

export const TextField = ({
  label,
  disabled,
}: {
  label: string;
  disabled?: boolean;
}) => {
  const field = useFieldContext<string>();
  return (
    <label>
      <div className="sr-only">{label}</div>
      <Input
        type="text"
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        disabled={disabled}
      />
    </label>
  );
};
