"use client";

import { FormEvent, useState } from "react";

const FormWithoutReactHookFormAndZod = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (password !== confirmPassword) {
      setErrors(["Password & Confirm Password must match!"]);
      setIsSubmitting(false);
      return;
    }

    console.log("Form submitted");

    setErrors([]);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-2">
      <h1 className="text-3xl mb-8 max-w-xs">
        Form React without React hook form
      </h1>

      {errors.length > 0 && (
        <ul className="max-w-xs">
          {errors.map((error) => (
            <li
              key={error}
              className="bg-red-100 text-red-500 px-4 py-2 rounded"
            >
              {error}
            </li>
          ))}
        </ul>
      )}

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        className="px-4 py-2 rounded"
      />

      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        className="px-4 py-2 rounded"
      />

      <input
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        type="password"
        placeholder="Confirm Password"
        className="px-4 py-2 rounded"
      />

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
