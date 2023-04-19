/*
  public-      Pode ser acessado tanto pela mesma classe,
               classes filhas e outras classes.
  ##########################################################################
  protected-   Pode ser acessado pela mesma classe e classes filhas, 
               Não pode ser acessado por outras classes.
  ##########################################################################
  private -    Pode ser acessada somente pela própria classe. 
  */

class Pessoa {
  private nome: string = "";
  private idade: number = 0;
  private _profissao: string = "Programador"; //O anderline antes significa que é privado.

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  protected comer(comida: string) {
    return `A ${this.nome} comeu ${comida}`;
  }

  public fezAniversario() {
    return `A ${this.nome} fez tantos anos ${this.idade + 1}`;
  }

}

const pessoa = new Pessoa("Alexandre", 29);