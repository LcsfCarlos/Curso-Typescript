/* Resumidamente os módulos em JAVASCRIPT ou TypeScript é uma forma de você
compartilhar informações entre arquivos, dessa forma, todos os arquivos 
que realizarem a importação desse módulo poderão utilizar e usufruir de suas 
funções ou informações que foram expostas.

import = Importa informações de uma Class, nameSpace, const, let, etc.
export = Exporta para outras pessoas consumirem informações
*/

import { Pessoa1 } from "./pessoa-1";
import { Pessoa } from "./namespaces-aninhados";


export { Pessoa, Pessoa1 };