/*
As interfaces typscript definem os contratos em seu código.
Eles também fornecem nomes explícitos para verificação de tipo.
*/

interface IPessoa {
  nome: string;
  idade: number;
  readonly cpf: number;
  enabled(): boolean;
}

let pessoa: IPessoa = {
  nome: "Luiz",
  idade: 29,
  cpf: 111111111,
  enabled: () => {
    return true;
  },
};

class Joao implements IPessoa {
  nome: string = "Joao";
  idade: number = 17;

  readonly cpf: number = 22222222;

  enabled(): boolean {
    return true;
  }
}

class Maria implements IPessoa {
  nome: string = "Maria";
  idade: number = 26;

  readonly cpf: number = 33333333;

  enabled(): boolean {
    return true;
  }
}