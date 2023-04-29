import React, { useState } from "react";
import Button from "../../components/UI/Button";
import { useSelector, useDispatch } from "react-redux";
import { jsonActions } from "../../store/jsonSlice";
import Input from "../../components/Form/Input";

function Form({ data, onClose, type }) {
  const [onInput, setonInput] = useState({
    id: data.id,
    displayName: data.DisplayName || "",
    description: data.description || "",
  });
  const dispatch = useDispatch();

  const onChangeHandler = (e, prop) => {
    if (prop == 1) {
      setonInput({ ...onInput, displayName: e.target.value });
    } else if (prop == 2) {
      setonInput({ ...onInput, description: e.target.value });
    } else {
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitted");
    if (type == "update") {
      dispatch(
        jsonActions.modifyData({
          id: onInput.id,
          DisplayName: onInput.displayName,
          description: onInput.description,
        })
      );
    } else if (type == "add") {
      console.log("onInput", onInput);
      dispatch(
        jsonActions.addData({
          id: onInput.id,
          DisplayName: onInput.displayName,
          description: onInput.description,
        })
      );
    }
    onClose();
  };
  return (
    <div className="w-full max-w-md m-auto">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col gap-4 ">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight pl-2 pb-5 text-center">
          Enter the values
        </h2>
        <Input
          onChange={(e) => onChangeHandler(e, 1)}
          placeholder="Display Name"
          value={onInput.displayName}
        />
        <Input
          onChange={(e) => onChangeHandler(e, 2)}
          placeholder="Description"
          value={onInput.description}
        />
        <div className="flex pl-3  pt-3 justify-end">
          <Button onClick={(e) => submitHandler(e)} />
        </div>
      </form>
    </div>
  );
}

export default Form;
