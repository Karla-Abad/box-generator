import React, { useState } from "react";

const Display = (props) => {
  const { colorAndSizeArray } = props;
  return (
    <div>
      {colorAndSizeArray.map((colorAndSize, index) => (
        <div
          key={index}
          style={{
            display: "inline-block",
            width: colorAndSize.size,
            height: colorAndSize.size,
            backgroundColor: colorAndSize.color,
          }}
        ></div>
      ))}
    </div>
  );
};
export default Display;
