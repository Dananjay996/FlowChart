import { ChangeEventHandler } from "react";

function Input({ onChange }) {
  return (
    <div>
      <input
        className="shadow appearance-none border rounded h-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="number"
        type="text"
        placeholder="Number"
        onChange={onChange}
        required
      />
    </div>
  );
}

export default Input;
