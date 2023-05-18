import React, { useEffect, useRef, useState } from "react";
import Button from "../components/UI/Button";
import Form from "./components/Form";
import Detail from "./components/Detail";
import * as d3 from "d3";


export default function Hex({ data }) {
  const [onShowDetails, setOnShowDetails] = useState(false);
  const [onShowForm, setOnShowForm] = useState(false);
  const [onShowAddForm, setOnShowAddForm] = useState(false);
  const svgRef = useRef()

    useEffect(() => {
    const svgElement = d3.select(svgRef.current);

    const dragHandler = d3.drag().on('drag', (event) => {
      svgElement.attr('x', event.x-5).attr('y', event.y-15);
    });

    svgElement.call(dragHandler);
  }, []);

  return (
    <>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="-15px"
        y="-15px"
        viewBox="0 0 400 500"
        width="120"
        height="120"
        // onMouseLeave={() => setOnShowDetails(false)}
        ref = {svgRef}
      >
        {onShowDetails && (
          <foreignObject
            x="100"
            y="100"
            width="250"
            height="250"
            style={{ transform: "rotate(-90deg)", translate: "0rem 30rem" }}
          >
            <div xmlns="http://www.w3.org/1999/xhtml">
              <Detail
                data={data}
                onClose={() => setOnShowDetails(false)}
                onUpdate={() => setOnShowForm(!onShowForm)}
              />
            </div>
          </foreignObject>
        )}
        {onShowForm && (
          <foreignObject
            x="100"
            y="100"
            width="250"
            height="250"
            // style={{ transform: "rotate(30deg)" }}
          >
            <div xmlns="http://www.w3.org/1999/xhtml">
              <Form
                data={data}
                onClose={() => setOnShowForm(false)}
                type={"update"}
              />
            </div>
          </foreignObject>
        )}
        <path
          style={{ transform: "rotate(30deg)" }}
          d="M55.06,1.07l51.37,29.66v61.43l-53.22,30.73L0,92.15V30.73L53.22,0L55.06,1.07L55.06,1.07z M76.13,21.74L53.22,8.51 L7.39,34.97v52.94l45.83,26.46l45.83-26.46V34.97L76.13,21.74L76.13,21.74z"
        />

        <polygon
          style={{ transform: "rotate(30deg)" }}
          points="55 5,100 30,100 90, 50 120,3 90,5 30"
          fill="red"
          onClick={() => setOnShowDetails(!onShowDetails)}
        />

        <g onClick={() => setOnShowAddForm(!onShowAddForm)}>
          <circle cx="85" cy="77" r="10" fill="white" />
          <text dx="77" dy="87" fontSize="30">
            +
          </text>
        </g>
        {onShowAddForm && (
          <foreignObject x="100" y="100" width="250" height="250">
            <div xmlns="http://www.w3.org/1999/xhtml">
              <Form
                data={{ id: data.id }}
                onClose={() => setOnShowAddForm(false)}
                type="add"
              />
            </div>
          </foreignObject>
        )}
      </svg>
    </>
  );
}
