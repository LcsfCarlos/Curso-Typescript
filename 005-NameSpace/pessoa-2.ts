/* Os names space são uma forma específica do TypeScript para organizar o código.
NameSpaces são simplismente objetos JAVASCRIPT nomeados no namespace globlal.
Isso torna os namespaces uma construção muito simples de usar.
*/

import { Pessoa, Pessoa1 } from "./module";

console.log(Pessoa1.nome);
console.log(Pessoa1.calc());

console.log(Pessoa.Joao.nome);
console.log(Pessoa.Maria.nome);