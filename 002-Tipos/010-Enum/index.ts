enum EMes {
  JAN = "janeiro",
  FEV = "fevereiro",
  Mar = "Março",
}

const pessoa: { nome: string, mesAniversario: string } = {
  nome: "Luiz",
  mesAniversario: EMes.FEV,
};

if (pessoa.mesAniversario === EMes.FEV) {
  console.log(pessoa);
}