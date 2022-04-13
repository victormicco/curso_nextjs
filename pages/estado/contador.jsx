import { useState } from "react";
export default function Contador() {
  const estiloGeral = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
    backgroundColor: "#222",
    color: "#fff",
    fontSize: "40px",
    width: "100%",
  };

  const estiloBotao = {
    backgroundColor: "#23998e",
    borderRadius: "5px",
    color: "#fff",
    height: "50px",
    width: "150px",
    fontSize: "19px",
    margin: "20px",
    alignItems: "center",
  };

  const [count, setCount] = useState(0);

  return (
    <div style={estiloGeral}>
      <h1>Contador</h1>
      <span>{count}</span>
      <div style={{ margin: "50px" }}>
        <button onClick={() => setCount(++count)} style={estiloBotao}>
          Incrementar
        </button>
        <button onClick={() => setCount(--count)} style={estiloBotao}>
          Decrementar
        </button>
      </div>
    </div>
  );
}
