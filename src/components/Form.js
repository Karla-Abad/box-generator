import React, { useState } from "react";

const Form = (props) => {
  const { colorAndSizeArray, setColorAndSizeArray } = props;
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setColorAndSizeArray([
      ...colorAndSizeArray,
      {
        color: color,
        size: size + "px",
      },
    ]);
    setColor("");
    setSize("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Color: </label>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <label>Size: </label>
          <input
            type="number"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
          <button>Add</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
