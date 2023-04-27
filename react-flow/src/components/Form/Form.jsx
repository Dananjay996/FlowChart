"use client";
import React, { useState } from "react";
import InputFull from "./InputFull";
import Button from "../UI/Button";
import { useSelector, useDispatch } from "react-redux";
import { modifyDisplayName } from "../../slice/jsonSlice";

function Form() {
  const node = useSelector((state) => state.jsonHelper.modifyDisplayName);
  const dispatch = useDispatch();

  const [val, setVal] = useState([[]]);

  const dynamicInputAddHandler = () => {
    const newVal = [...val, []];
    console.log("added");
    setVal(newVal);
  };
  const dynamicInputDeleteHandler = (i) => {
    const newVal = [...val];
    if (val.length > 1) {
      newVal.splice(i, 1);
      console.log("deleted");
      setVal(newVal);
    }
  };

  const inputHandler = (e, i) => {
    const newVal = [...val];
    newVal[i] = e.target.value;
    console.log(val);
    setVal(newVal);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Clicked");
    console.log("val array is: ", val);
    // dispatch(modifyDisplayName(id, val));
  };

  return (
    <div className="w-full max-w-md m-auto">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col gap-4 ">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight pl-2 pb-5 text-center">
          Enter the values
        </h2>
        {val.map((data, i) => {
          console.log(data);
          return (
            <InputFull
              key={i}
              onChange={(e) => inputHandler(e, i)}
              onClickAdd={dynamicInputAddHandler}
              onClickDelete={(e) => dynamicInputDeleteHandler(i)}
            />
          );
        })}
        <div className="flex pl-3  pt-3 justify-end">
          <Button onClick={(e) => submitHandler(e)} />
        </div>
      </form>
    </div>
  );
}

export default Form;
