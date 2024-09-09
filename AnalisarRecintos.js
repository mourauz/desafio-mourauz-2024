class RecintosZoo {
  analisaRecintos(especie, quantidade) {
    if (!animais[especie]) {
      return { erro: 'Animal inválido' };
    }
    if (quantidade <= 0 || !Number.isInteger(quantidade)) {
      return { erro: 'Quantidade inválida' };
    }

    const animal = animais[especie];
    const resultados = [];

    recintos.forEach(recinto => {
      const biomaAdequado = recinto.bioma.includes(animal.bioma);
      const tamanhoDisponivel = recinto.tamanhoTotal - recinto.animaisExistentes.reduce((total, animalExistente) => {
        return total - (animais[animalExistente.especie].tamanho * animalExistente.quantidade);
      }, 0);

      if (biomaAdequado && tamanhoDisponivel >= (animal.tamanho * quantidade)) {
        let espacoExtra = 0;
        if (recinto.animaisExistentes.length > 0) {
          espacoExtra = 1;
        }
        if (animal.bioma === 'savana ou rio' && !recinto.bioma.includes('savana e rio')) {
          return; // Hipopotamo não pode ser alocado aqui
        }
        if (animal.bioma === 'savana' && especie === 'MACACO' && quantidade > 1) {
          return; // Macacos não podem estar sozinhos
        }

        const espacoLivre = tamanhoDisponivel - (animal.tamanho * quantidade) - espacoExtra;
        resultados.push(`Recinto ${recinto.numero} (espaço livre: ${espacoLivre} total: ${recinto.tamanhoTotal})`);
      }
    });

    if (resultados.length > 0) {
      return { recintosViaveis: resultados.sort() };
    } else {
      return { erro: 'Não há recinto viável' };
    }
  }
}
