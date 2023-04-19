class Pessoa {
  public readonly nome: string = "Luiz Carlos";
}

let pessoa = new Pessoa();

console.log(pessoa.nome);
pessoa.nome = "Mariazinha";
console.log(pessoa.nome);