import Item from "../../components/Item";
import Lista from "../../components/Lista";

export default function componenteComFilhos() {
  return (
    <div>
      <Lista>
        <Item conteudo="Item #24" />
        <Item conteudo="Item #69" />
        <Item conteudo="Item #22" />
      </Lista>
    </div>
  );
}
