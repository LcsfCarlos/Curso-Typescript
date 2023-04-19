class Pessoa {
  nome: string = "";
  idade: number = 0;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  comer(comida: string) {
    return `A ${this.nome} comeu ${comida}`;
  }

  fezAniversario() {
    return `A ${this.nome} fez tantos anos ${this.idade + 1}`;
  }

}

const pessoa1 = new Pessoa("Raquel Silva", 27);
console.log(pessoa1.comer("Feijoada"));
console.log(pessoa1.fezAniversario());

const pessoa2 = new Pessoa("Fernanda Freitas", 35);
console.log(pessoa2.comer("Sanduiche"));
console.log(pessoa2.fezAniversario());
