import React from "react";
import "./index.css";
function App() {
  const helloWorld = () => {
    return "Hello World";
  };
  const numero = () => {
    console.log(1);
  };
  return (
    <div className="App">
      <h1>Mi primera App</h1>
      {helloWorld()}
      <button onClick={numero}>CLICK</button>
    </div>
  );
}

export default App;
