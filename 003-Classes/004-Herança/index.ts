class Pessoa {
  public nome: string = "";
  public idade: number = 0;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  public comer(comida: string) {
    return `A ${this.nome} comeu ${comida}`;
  }

  public fezAniversario() {
    return `A ${this.nome} fez tantos anos ${this.idade + 1}`;
  }

}

class Rafaela extends Pessoa {
  constructor() {
    super("Rafaela", 31);
  }
  public profissão() {
    return `${this.nome} Trabalha como programador`;
  }
}

const rafaela = new Rafaela();

//class Maria extends Pessoa {
//  constructor() {
//    super("Maria", 45)
//  }
//}

//const maria = new Maria();



console.log(rafaela.nome);
console.log(rafaela.idade);
console.log(rafaela.comer("Jantinha"));
console.log(rafaela.fezAniversario());
console.log(rafaela.profissão());


