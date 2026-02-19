import React from "react";
import { useForm } from "react-hook-form";
import UseControllerHook from "./Usecontrollerhook";

export default function Parent1() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <UseControllerHook name="firstName" control={control} />
      <button type="submit">Submit</button>
    </form>
  );
}