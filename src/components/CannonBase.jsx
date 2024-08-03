import React from "react";
import { pathFromBezierCurve } from "../utils/formulas";

const CannonBase = () => {
  const cannonBaseStyle = {
    fill: "#260c01",
    stroke: "#75450e",
    strokeWidth: "2px",
  };

  const baseWidth = 80;
  const halfBase = 40;
  const height = 60;
  const negativeHieght = height * -1;

  const cubicBezierCurve = {
    initialAxis: {
      x: -halfBase,
      y: height,
    },
    initialControlPoint: {
      x: 20,
      y: negativeHieght,
    },
    endingControlPoint: {
      x: 20,
      y: negativeHieght,
    },
    endingAxis: {
      x: baseWidth,
      y: 0,
    },
  };

  return (
    <g>
      <path style={cannonBaseStyle} d={pathFromBezierCurve(cubicBezierCurve)} />
      <line
        x1={-halfBase}
        y1={height}
        x2={halfBase}
        y2={height}
        style={cannonBaseStyle}
      />
    </g>
  );
};

export default CannonBase;
