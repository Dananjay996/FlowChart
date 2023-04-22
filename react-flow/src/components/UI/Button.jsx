import { MouseEventHandler } from "react";

function Button({ onClick }) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
      onClick={onClick}
    >
      Generate
    </button>
  );
}

export default Button;
