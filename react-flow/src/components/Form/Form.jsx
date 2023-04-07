"use client";
import React, {useState } from "react";
import {v4 as uuidv4} from 'uuid';
import InputFull from "./InputFull";
import Button from "../UI/Button";

function Form() {
  const [val, setVal] = useState([[]]);
  // const [jsonVal,setJsonVal] = useState([]);

  // const id = useId();
  //   const router = useRouter();

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
    console.log('val array is: ',val);
    const jsonArray = [];
    // let id = 2;
    let xVal = 0, yVal = 100;
    val.forEach((value) => {
      jsonArray.push({id: uuidv4(),position: {x: xVal, y: yVal},data: {label: value}});
      xVal += 10;
      yVal += 50;
    })

    console.log('Json array is: ',jsonArray);
  };

  return (
    <div className="w-full max-w-md ">
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
