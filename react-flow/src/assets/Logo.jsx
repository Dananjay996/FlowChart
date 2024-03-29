import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function Logo() {
   const svgRef = useRef(null);

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
        width="29"
        height="29"
        x="-15px"
        y="-15px"
        viewBox="0 0 25 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.875 1.756 1.699 7.604l5.766 3.259a6.234 6.234 0 0 1 4.41-2.456V1.756zM1.25 20.876V8.749L6.827 11.9a6.29 6.29 0 0 0-.637 2.768c0 .895.187 1.747.522 2.517L1.25 20.34v.536zm.749.43 9.876 5.677V20.93A6.239 6.239 0 0 1 7.3 18.245l-5.301 3.061zm5.233-6.638c0-.806.181-1.57.505-2.253l4.138 2.338v5.124c-2.61-.284-4.643-2.507-4.643-5.208zm9.272-3.276-4.008 2.314-4.112-2.324a5.187 5.187 0 0 1 8.12.01zm-3.379 15.59 9.876-5.676-5.386-3.11a6.242 6.242 0 0 1-4.49 2.722v6.065zM23.75 8.607v12.27-.536l-5.557-3.209c.32-.756.497-1.588.497-2.463a6.29 6.29 0 0 0-.639-2.772l5.699-3.29zm-.569-1.07-5.764 3.329a6.235 6.235 0 0 0-4.292-2.446V1.756l10.056 5.78zM13.125 14.74v5.121c2.553-.337 4.524-2.534 4.524-5.193 0-.806-.18-1.568-.503-2.25l-4.021 2.322zM12.5 0 25 7.185v14.369l-12.5 7.184L0 21.554V7.184L12.5 0z"
          fill="#B373FF"
        />
      </svg>
    </>
  );
}
