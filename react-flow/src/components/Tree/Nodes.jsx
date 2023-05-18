import { interpolate } from "d3-interpolate";
import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";


export default (props) => {
  const [color, setColor] = useState({});
  const { nodes, nodeRender } = props;
  const svgRef = useRef()

  const interpolated = interpolate(1, 0.3);

  useEffect(() => {
    nodes
      .filter((node) => node.ancestors().length === 2)
      .forEach((node) => {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        setColor((prevState) => ({
          ...prevState,
          [node.data.DisplayName]: `rgb(${r}, ${g}, ${b})`,
        }));
      });
  }, [nodes]);

 const gRef = useRef(null);

  useEffect(() => {
    const gElement = d3.select(gRef.current);

    const dragHandler = d3.drag().on('drag', (event) => {
      const { x, y } = event;
      gElement.attr('transform', `translate(${x},${y})`);
    });

    gElement.call(dragHandler);
  }, []);

  return (
    <g className="d3-tree-nodes" >
      {nodes.map((node, i) => {
        const ancestorName = node.parent
          ? node
              .ancestors()
              .filter((ancestor) => ancestor.ancestors().length === 2)[0].data
              .DisplayName
          : "";
         return (
           <g
            ref={ gRef} 
            key={i}
            transform={`translate(${node.y},${node.x})`}
            style={{ fill: color[ancestorName] }}
          >
             <g transform={`scale(${interpolated(node.depth * 0.1)})`} >
              {nodeRender(node, i)}
            </g>

            
          </g>
        );
      })}
    </g>
  );
};
