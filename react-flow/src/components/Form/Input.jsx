import { ChangeEventHandler } from "react";

function Input({ onChange, placeholder = "Number", value = "" }) {
  return (
    <div>
      <input
        className="shadow appearance-none border rounded h-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="number"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required
      />
    </div>
  );
}

export default Input;
