const usuarios = [
  { nome: 'Vitor', tecnologias: ['HTML', 'CSS', 'JavaScript'] },
  { nome: 'Giacomo', tecnologias: ['C', 'Scala', 'Java'] },
  { nome: 'Mateus', tecnologias: ['Python', 'SQL'] }  
];

for (let usuario of usuarios) {
  console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`);
}