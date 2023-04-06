import { ChangeEventHandler, FormEventHandler } from "react";
import Dropdown from "./Dropdown";
import Input from "./Input";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoMdAddCircle } from "react-icons/io";

function InputFull({ onClickDelete, onClickAdd, onChange }) {
  return (
    <div>
      <div className="flex items-center justify-center gap-3">
        {/* <Dropdown /> */}
        <Input onChange={onChange} />
        {/* <IoMdAddCircle className=" h-full w-8 hover:fill-red-400" />
        <AiFillCloseCircle className="fill-red-500 h-full w-8 hover:fill-red-400" /> */}

        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className="px-2  text-xs font-medium text-white bg-green-500  border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
            onClick={onClickAdd}
          >
            Add
          </button>

          <button
            type="button"
            className="px-2 py-1 text-xs font-medium text-white bg-red-500  border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
            onClick={onClickDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputFull;
