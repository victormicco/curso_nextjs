export function Mega(qtde = 6, numeros = []) {
  if (qtde < 6 && qtde > 60) {
    throw "Quantidade inválida!";
  }
  if (numeros.length === qtde) {
    return numeros.sort((n1, n2) => n1 - n2);
  }

  const numeroAleatorio = parseInt(Math.random() * 60) + 1;
  if (!numeros.includes(numeroAleatorio)) {
    return Mega(qtde, [...numeros, numeroAleatorio]);
  } else {
    return Mega(qtde, numeros);
  }
}
