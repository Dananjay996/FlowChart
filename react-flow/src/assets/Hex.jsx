import React from "react";

export default function Hex({ data }) {
  console.log(data.DisplayName);
  function showForm() {
    // Create a form element
    const form = document.createElement("form");

    // Create input field for changing name
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter new name...";
    form.appendChild(input);

    // Create submit button
    const submitBtn = document.createElement("input");
    submitBtn.type = "submit";
    submitBtn.value = "Submit";
    form.appendChild(submitBtn);

    // Add event handler for form submission
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const newName = input.value;
      // Perform action with new name, e.g. update display or send data to server
      console.log(`New name ${data.DisplayName}: ${newName}`);
      // Remove form from DOM
      form.remove();
    });

    // Append form to DOM
    document.body.appendChild(form);
  }

  return (
    <>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="-15px"
        y="-15px"
        viewBox="0 0 125.44 122.88"
        width="29"
        height="29"
      >
        <path d="M55.06,1.07l51.37,29.66v61.43l-53.22,30.73L0,92.15V30.73L53.22,0L55.06,1.07L55.06,1.07z M76.13,21.74L53.22,8.51 L7.39,34.97v52.94l45.83,26.46l45.83-26.46V34.97L76.13,21.74L76.13,21.74z" />
        <g onClick={() => showForm()}>
          <circle
            cx="115"
            cy="60"
            r="10"
            // stroke="black"
            // stroke-width="0.05"
            fill="white"
          />
          <text dx="106" dy="70" fontSize="30">
            +
          </text>
        </g>
      </svg>
    </>
  );
}
