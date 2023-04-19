/* Os names space são uma forma específica do TypeScript para organizar o código.
NameSpaces são simplismente objetos JAVASCRIPT nomeados no namespace globlal.
Isso torna os namespaces uma construção muito simples de usar.
*/

export namespace Pessoa1 {
  const data = 1 + 1;

  export let nome = "Joao";
  export const calc = () => {
    return data;
  };
}