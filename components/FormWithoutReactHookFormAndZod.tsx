const FormWithoutReactHookFormAndZod = () => {
  return (
    <form className="flex flex-col gap-y-2">
      <h1 className="text-3xl mb-8">Form React</h1>

      <input type="email" placeholder="Email" className="px-4 py-2 rounded" />

      <input
        type="password"
        placeholder="Password"
        className="px-4 py-2 rounded"
      />

      <input
        type="password"
        placeholder="Confirm Password"
        className="px-4 py-2 rounded"
      />

      <button
        type="submit"
        className="bg-blue-500 disabled:bg-gray-500 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default FormWithoutReactHookFormAndZod;
