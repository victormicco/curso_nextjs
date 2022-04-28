import NumeroDisplay from "../../components/NumeroDisplay";
import { Mega } from "../../functions/Mega";
import { useState, useEffect } from "react";

export default function Megasena() {
  const [qtde, setQtde] = useState(6);
  const [numeros, setNumeros] = useState([]);

  useEffect(() => {
    setNumeros(Mega());
  }, []);

  function renderNumeros() {
    return numeros.map((numero) => (
      <NumeroDisplay key={numero} numero={numero} />
    ));
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Mega Sena</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {renderNumeros()}
      </div>
      <div>
        <input
          type="number"
          min={6}
          max={20}
          value={qtde}
          onChange={(ev) => setQtde(+ev.target.value)}
        />
        <button onClick={() => setNumeros(Mega(qtde))}>Gerar Aposta</button>
      </div>
    </div>
  );
}
