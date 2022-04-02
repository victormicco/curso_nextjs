export default function jsx4() {
  const subtitulo = "Estou no JavasScript!";
  const trechoH3 = <h3>{3 * 3}</h3>;
  return (
    <div>
      <h1>Integração JS e JSX</h1>
      <h2>Eu {subtitulo}</h2>
      {trechoH3}
      <h4>{Math.max(87, 18327)}</h4>
      <h5>{entre(1, 10, 9.7)}</h5>
    </div>
  );
}

function entre(min, max, valor) {
  if (valor >= min && valor <= max) {
    return "Sim";
  } else {
    return "nao";
  }
}
