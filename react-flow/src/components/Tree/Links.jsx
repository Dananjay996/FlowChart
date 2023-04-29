import React from "react";
import { linkVertical } from "d3-shape";

const linkCustom = ({ source, target }, radius) => {
  const breakX = (source.x + target.x) / 2;
  const isClockwise = target.y < source.y;
  return `M${source.x} ${source.y + 15} 
          L${breakX} ${source.y + 15}
          a${radius},${radius} 0 0 ${isClockwise ? 0 : 1} ${
    isClockwise ? radius : -radius
  },${radius}
          L${breakX} ${target.y - 15}
          a${radius},${radius} 0 0 ${isClockwise ? 1 : 0} ${
    isClockwise ? radius : -radius
  },${radius}
          L${target.x} ${target.y - 15}
          M${target.x - 5} ${target.y - 20} 
          L${target.x} ${target.y - 15} 
          L${target.x + 5} ${target.y - 20}`;
};

// rotate tree layout 90 degrees left
const rotateLayout = (node) => {
  return {
    ...node,
    x: node.y,
    y: -node.x,
  };
};

// create a vertical link generator
const linkGenerator = linkVertical()
  .x((node) => node.y)
  .y((node) => node.x);

export default (props) => {
  const { links } = props;
  return (
    <g className="d3-tree-links">
      {links.map((link, i) => (
        <g key={i}>
          <path
            d={linkGenerator({
              source: rotateLayout(link.source),
              target: rotateLayout(link.target),
            })}
          />
        </g>
      ))}
    </g>
  );
};
