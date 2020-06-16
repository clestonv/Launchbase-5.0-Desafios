const programador = {
  nome: 'Vitor',
  idade: 20,
  tecnologias: [
    { nome: 'JavaScript', especialidade: 'Web/Mobile' },
    { nome: 'C', especialidade: 'Desktop' }
  ]
};

console.log(
  `O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`
);