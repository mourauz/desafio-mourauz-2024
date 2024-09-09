const recintos = [
  { numero: 1, bioma: 'savana', tamanhoTotal: 10, animaisExistentes: [{ especie: 'macaco', quantidade: 3 }] },
  { numero: 2, bioma: 'floresta', tamanhoTotal: 5, animaisExistentes: [] },
  { numero: 3, bioma: 'savana e rio', tamanhoTotal: 7, animaisExistentes: [{ especie: 'gazela', quantidade: 1 }] },
  { numero: 4, bioma: 'rio', tamanhoTotal: 8, animaisExistentes: [] },
  { numero: 5, bioma: 'savana', tamanhoTotal: 9, animaisExistentes: [{ especie: 'leão', quantidade: 1 }] },
];

const animais = {
  'LEAO': { tamanho: 3, bioma: 'savana' },
  'LEOPARDO': { tamanho: 2, bioma: 'savana' },
  'CROCODILO': { tamanho: 3, bioma: 'rio' },
  'MACACO': { tamanho: 1, bioma: 'savana ou floresta' },
  'GAZELA': { tamanho: 2, bioma: 'savana' },
  'HIPOPOTAMO': { tamanho: 4, bioma: 'savana ou rio' },
};
