"use client";

import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";

const FormWithoutReactHookFormAndZod = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2">
      <h1 className="text-3xl mb-8 max-w-xs">
        Form React with React hook form
      </h1>

      <input
        {...register("email", {
          required: "Email is required",
        })}
        type="email"
        placeholder="Email"
        className="px-4 py-2 rounded"
      />

      {errors.email && (
        <p className="text-sm text-red-500">{`${errors.email.message}`}</p>
      )}

      <input
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 5,
            message: "Password must be at least 5 characters",
          },
        })}
        type="password"
        placeholder="Password"
        className="px-4 py-2 rounded"
      />

      {errors.password && (
        <p className="text-sm text-red-500">{`${errors.password.message}`}</p>
      )}

      <input
        {...register("confirmPassword", {
          required: "Confirm Password is required",
          validate: (value) =>
            value === getValues("password") || "Passwords must match!",
        })}
        type="password"
        placeholder="Confirm Password"
        className="px-4 py-2 rounded"
      />

      {errors.confirmPassword && (
        <p className="text-sm text-red-500">{`${errors.confirmPassword.message}`}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-500 disabled:bg-gray-300 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default FormWithoutReactHookFormAndZod;
