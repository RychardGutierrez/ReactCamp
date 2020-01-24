import React from "react";

function Saludar(props) {
  const { nombre, enviarSaludo } = props; //esto es renderizar para poder utilizar un componente
  //   const { apellido } = props;
  return (
    <div>
      <p>Hola {nombre}</p>
      <button onClick={()=>enviarSaludo(nombre)}> Enviar Saludo</button>
    </div>
  );
}

export default Saludar;
