import NumeroDisplay from "../../components/NumeroDisplay";
import { mega } from "../../functions/mega";
import { useState } from "react";

export default function Megasena() {
  const [numeros, setNumeros] = useState(mega());

  function renderNumeros() {
    return numeros.map((numero) => (
      <NumeroDisplay key={numero} numero={numero} />
    ));
  }

  return (
    <div>
      <h1>Mega Sena</h1>
      <div>{renderNumeros()}</div>
    </div>
  );
}
