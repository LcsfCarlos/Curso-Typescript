const fn = (nome: string, idade?: number) => {
  if (!idade) {
    return `nome: ${nome}, idade: sem valor definido`;
  }

  return `nome: ${nome}, idade: ${idade}`;

};

console.log(fn("Luiz", 29));
console.log(fn("Luiz"));

const pessoa: { nome: string; idade: number } = { nome: "Luiz", idade: 29 };