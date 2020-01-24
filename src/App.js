import Saludar from "./components/Saludar";
import React from "react";
import "./index.css";
function App() {
  const enviarSaludo = nombre => {
    console.log(`Hello ${nombre}`);
  };
  return (
    <div className="App">
      <h1>Mi primer componente</h1>
      <Saludar nombre="Ana" apellido="Montenegro" enviarSaludo={enviarSaludo} />
      <Saludar
        nombre="Richard"
        apellido="Gutierrez"
        enviarSaludo={enviarSaludo}
      />
    </div>
  );
}

export default App;
