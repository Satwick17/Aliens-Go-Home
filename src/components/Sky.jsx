import React from "react";
import { skyGroundWidth } from "../utils/constants";

const Sky = () => {
  const skyStyle = {
    fill: "#30abef",
  };
  const gameHeight = 1200;
  return (
    <rect
      style={skyStyle}
      x={skyGroundWidth / -2}
      y={100 - gameHeight}
      width={skyGroundWidth}
      height={gameHeight}
    />
  );
};

export default Sky;
