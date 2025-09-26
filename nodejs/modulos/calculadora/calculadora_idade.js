export function calc_idade(nome, anoNasc, anoAtual) {
    const idade = anoAtual - anoNasc;

    return `Olá, ${nome}! Em ${anoAtual} você terá ${idade} anos!`;
}

// Exportando a função para que possa ser usada em outros arquivos