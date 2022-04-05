import Estilo from "../../components/Estilo";

export default function usandoEstilo() {
  return (
    <div>
      <Estilo numero={2} color="#000" />
      <Estilo numero={-12} color="#fff" direita={true} />
    </div>
  );
}
