import { useState } from "react";

export default function Mouse() {
  const arrayX = useState(0);
  let x = arrayX[0];
  const alterarX = arrayX[1];

  const arrayY = useState(0);
  let y = arrayY[0];
  const alterarY = arrayY[1];

  const estilo = {
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
    color: "#fff",
    height: "100vh",
    fontSize: "60px",
  };

  function quandoMover(ev) {
    alterarX(ev.pageX);
    alterarY(ev.pageY);
    console.log(alterarX, alterarY);
  }
  return (
    <div style={estilo} onMouseMove={quandoMover}>
      <h1>Exactly point of ur mouse</h1>
      <span>Eixo X: {x} </span>
      <span>Eixo y: {y} </span>
    </div>
  );
}
