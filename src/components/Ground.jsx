import React from "react";
import { skyGroundWidth } from "../utils/constants";

const Ground = () => {
  const groundStyle = {
    fill: "#59a941",
  };
  const division = {
    stroke: "#458232",
    strokeWidth: "3px",
  };

  return (
    <g id="ground">
      <rect
        id="ground-2"
        data-name="ground"
        style={groundStyle}
        x={skyGroundWidth / -2}
        y={0}
        width={skyGroundWidth}
        height={100}
      />
      <line
        x1={skyGroundWidth / -2}
        y1={0}
        x2={skyGroundWidth / 2}
        y2={0}
        style={division}
      />
    </g>
  );
};

export default Ground;
