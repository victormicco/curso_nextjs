import { useState } from "react";
export default function Megasena() {
  const [count, setCount] = useState(0);
  function incArray() {
    if (setCount <= 59) {
      numeros.push(count + 1);
    }
    let numeros = [count];
    console.log(numeros);
  }

  return (
    <div>
      <span>{incArray()}</span>
    </div>
  );
}
