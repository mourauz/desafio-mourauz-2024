# Desafio de Recintos de Zoológico

Este repositório contém a solução para o desafio de organização de recintos em um zoológico. O objetivo é implementar a lógica para alocar novos animais em recintos disponíveis, garantindo que os animais se sintam confortáveis e que as regras de alocação sejam seguidas.

## Estrutura do Projeto

- `src/recintos-zoo.js`: Contém a classe `RecintosZoo` e o método `analisaRecintos` que é responsável por analisar os recintos e determinar quais são viáveis para o novo animal.
- `recintos-zoo.test.js`: Arquivo de testes que valida a funcionalidade da classe `RecintosZoo`.

## Requisitos

Antes de começar, você precisa ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/mourauz/desafio-mourauz-2024.git


Navegue até o diretório do projeto:

cd desafio-mourauz-2024


Instale as dependências:

npm install

Uso
Para usar a solução, você pode instanciar a classe RecintosZoo e chamar o método analisaRecintos. Veja o exemplo abaixo:

import { RecintosZoo } from './src/recintos-zoo';

const zoo = new RecintosZoo();
const resultado = zoo.analisaRecintos('MACACO', 2);
console.log(resultado);

Parâmetros
especie (string): O tipo de animal que você deseja alocar.
quantidade (número): A quantidade de animais a serem alocados.
Saídas
O método analisaRecintos retorna um objeto com uma das seguintes propriedades:

recintosViaveis: Uma lista de recintos viáveis para o novo animal.
erro: Uma mensagem de erro se o animal ou quantidade forem inválidos ou se não houver recinto viável.


Testes
Para rodar os testes e validar a solução, use o seguinte comando:

npm test

Contribuição
Se você deseja contribuir com melhorias ou correções, sinta-se à vontade para abrir uma issue ou um pull request.

Licença
Este projeto está licenciado sob a MIT License.

Você pode ajustar o conteúdo conforme necessário, especialmente se houver informações adicionais ou ajustes específicos que você deseja incluir. Se precisar de mais alguma coisa, é só me avisar!


