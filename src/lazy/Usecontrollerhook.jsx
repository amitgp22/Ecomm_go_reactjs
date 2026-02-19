import React from "react";
import { useController } from "react-hook-form";

export default function UseControllerHook({ name, control }) {
  const {
    field,       // contains value, onChange, onBlur, ref
    fieldState   // contains error
  } = useController({
    name,
    control,
    rules: { required: "This field is required" }
  });

  return (
    <div>
      <input {...field} placeholder="Enter name" />
      {fieldState.error && (
        <p style={{ color: "red" }}>
          {fieldState.error.message}
        </p>
      )}
    </div>
  );
}