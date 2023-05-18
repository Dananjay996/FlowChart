import { interpolate } from "d3-interpolate";
import React, { useState, useEffect } from "react";

export default (props) => {
  const [color, setColor] = useState({});
  const { nodes, nodeRender } = props;
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

  return (
    <g className="d3-tree-nodes">
      {nodes.map((node, i) => {
        const ancestorName = node.parent
          ? node
              .ancestors()
              .filter((ancestor) => ancestor.ancestors().length === 2)[0].data
              .DisplayName
          : "";
         return (
          <g
            key={i}
            transform={`translate(${node.y},${node.x})`}
            style={{ fill: color[ancestorName] }}
          >
            <g transform={`scale(${interpolated(node.depth * 0.1)})`}>
              {nodeRender(node, i)}
            </g>

            <g transform="rotate(-90)">
              <text
                className="text-call-name"
                dy="20"
                dx={-node.data.DisplayName.length * 2 - 13}
              >
                {node.data.DisplayName}
              </text>
            </g>
          </g>
        );
      })}
    </g>
  );
};
