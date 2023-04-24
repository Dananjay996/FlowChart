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

            <g>
              <text
                className="text-call-name"
                dy="20"
                dx={-node.data.DisplayName.length * 2 - 13}
              >
                {node.data.DisplayName}
              </text>

              {/* <rect
                className="plus-icon"
                dy="20" // Adjust x and y coordinates to position the icon
                dx={-node.data.DisplayName.length * 2 - 13}
                width="20"
                height="20"
                onClick={() => handlePlusIconClick(node)} // Add onClick event handler to handle click event
              /> */}
            </g>

            {node.children ? (
              <g>
                <rect
                  style={{
                    fill: "#202525",
                    strokeWidth: node.children?.length,
                  }}
                  className="rect-test"
                  width="35"
                  height="20"
                  rx="5"
                  x="50"
                  y="-10"
                />
                <line
                  x1="15"
                  y1="0"
                  x2="50"
                  y2="0"
                  style={{
                    fill: "#89a19d",
                    strokeWidth: node.children?.length,
                    stroke: "#89a19d",
                    strokeOpacity: 1,
                  }}
                />
                <text className="rect-text" dx="55" dy="3">
                  {node.children?.length >= 2
                    ? `${node.children.length} calls`
                    : `1 call`}
                </text>
              </g>
            ) : (
              ""
            )}
          </g>
        );
      })}
    </g>
  );
};
