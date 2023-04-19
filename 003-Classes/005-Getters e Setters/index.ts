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
  private _profissao: string = "Programador";

  constructor() {
    super("Rafaela", 31);
  }

  get profissao() {
    if (this._profissao === "Piloto de Drone") {
      return `Ele não é mais um programador mudou para ${this._profissao}`;
    }
    return this._profissao;
  }

  set profissao(valor: string) {
    this._profissao = valor;
  }
}

const rafaela = new Rafaela();


console.log(rafaela.profissao);
rafaela.profissao = "Piloto de Drone";
console.log(rafaela.profissao);
