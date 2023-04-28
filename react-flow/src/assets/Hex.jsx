import React, { useState } from "react";
import Button from "../components/UI/Button";
import Form from "./Form";
import Detail from "./Detail";

export default function Hex({ data }) {
  const [onShowDetails, setOnShowDetails] = useState(false);
  const [onShowForm, setOnShowForm] = useState(false);
  // console.log(data);
  function showForm() {
    setOnShowForm(!onShowForm);
    // // Create a form element
    // const form = document.createElement("form");
    // form.className = "form-box";

    // // Create input field for changing name
    // const input = document.createElement("input");
    // input.type = "text";
    // input.placeholder = "Enter new name...";
    // input.value = data.DisplayName;
    // input.className = "form-input"; // Add class to input element
    // form.appendChild(input);

    // // Create submit button
    // const submitBtn = document.createElement("input");
    // submitBtn.type = "submit";
    // submitBtn.value = "Submit";
    // submitBtn.className = "form-submit-btn"; // Add class to submit button element
    // form.appendChild(submitBtn);

    // // Add event handler for form submission
    // form.addEventListener("submit", (e) => {
    //   e.preventDefault();
    //   const newName = input.value;
    //   // Perform action with new name, e.g. update display or send data to server
    //   console.log(`New name ${data.DisplayName}: ${newName}`);
    //   // Remove form from DOM
    //   form.remove();
    // });

    // // Append form to DOM
    // document.body.appendChild(form);
  }

  const onCloseHandler = () => {
    setOnShowDetails(false);
  };
  const onEditHandler = () => {
    setOnShowForm(false);
  };

  return (
    <>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="-15px"
        y="-15px"
        viewBox="0 0 500 500"
        width="120"
        height="120"
        // onMouseLeave={() => setOnShowDetails(false)}
      >
        {onShowDetails && (
          <foreignObject x="100" y="100" width="250" height="250">
            <div xmlns="http://www.w3.org/1999/xhtml">
              <Detail data={data} onClose={onCloseHandler} />
            </div>
          </foreignObject>
        )}
        {onShowForm && (
          <foreignObject x="100" y="100" width="250" height="250">
            <div xmlns="http://www.w3.org/1999/xhtml">
              <Form data={data} onEdit={onEditHandler} />
            </div>
          </foreignObject>
        )}
        <path d="M55.06,1.07l51.37,29.66v61.43l-53.22,30.73L0,92.15V30.73L53.22,0L55.06,1.07L55.06,1.07z M76.13,21.74L53.22,8.51 L7.39,34.97v52.94l45.83,26.46l45.83-26.46V34.97L76.13,21.74L76.13,21.74z" />

        <polygon
          points="55 5,100 30,100 90, 50 120,3 90,5 30"
          fill="transparent"
          onClick={() => setOnShowDetails(!onShowDetails)}
        />

        <g onClick={() => showForm()}>
          <circle cx="115" cy="60" r="10" fill="white" />
          <text dx="106" dy="70" fontSize="30">
            +
          </text>
        </g>
      </svg>
    </>
  );
}
