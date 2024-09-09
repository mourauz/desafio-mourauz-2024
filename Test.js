import { RecintosZoo } from './recintos-zoo';

test('Adicionar macacos', () => {
  const zoo = new RecintosZoo();
  expect(zoo.analisaRecintos('MACACO', 2)).toEqual({
    recintosViaveis: [
      "Recinto 1 (espaço livre: 5 total: 10)",
      "Recinto 2 (espaço livre: 3 total: 5)",
      "Recinto 3 (espaço livre: 2 total: 7)"
    ]
  });
});

test('Adicionar unicórnios', () => {
  const zoo = new RecintosZoo();
  expect(zoo.analisaRecintos('UNICORNIO', 1)).toEqual({
    erro: 'Animal inválido'
  });
});
