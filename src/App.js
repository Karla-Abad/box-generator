import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import Display from "./components/Display";

function App() {
  const [colorAndSizeArray, setColorAndSizeArray] = useState([]);
  return (
    <div className="App">
      <Form
        colorAndSizeArray={colorAndSizeArray}
        setColorAndSizeArray={setColorAndSizeArray}
      />
      <Display colorAndSizeArray={colorAndSizeArray} />
    </div>
  );
}

export default App;
