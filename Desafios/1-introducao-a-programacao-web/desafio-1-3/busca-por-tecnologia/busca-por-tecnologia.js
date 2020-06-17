const usuarios = [
  { nome: 'Vitor', tecnologias: ['HTML', 'CSS', 'JavaScript'] },
  { nome: 'Giacomo', tecnologias: ['C', 'Scala', 'Java'] },
  { nome: 'Mateus', tecnologias: ['Python', 'SQL'] }  
];

function checaSeUsuarioUsaCSS(usuario) {
  let usuarioUsaCSS = false;
  
  for (let tecnologia of usuario.tecnologias) {
    if (tecnologia === 'CSS') {
      usuarioUsaCSS = true;
    }
  }

  return usuarioUsaCSS;
}

for (let usuario of usuarios) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuario);

  if (usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuario.nome} trabalha com CSS`);
  }
}