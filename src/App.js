import Saludar from "./components/Saludar";
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
      <h1>Mi primer componente</h1>
      <Saludar />
      <br />
      <Saludar />
    </div>
  );
}

export default App;
