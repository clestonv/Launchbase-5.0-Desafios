const nome = 'Vitor';
const sexo = 'M';
const idade = 20;
const contribuicao = 1;

const somaContribuicao = idade + contribuicao;

if (sexo === 'M') {
  if (contribuicao >= 35 && somaContribuicao >= 95 ) {
    console.log(`${nome}, você pode se aposentar!`);
  } else {
    console.log(`${nome}, você ainda não pode se aposentar!`);
  }
} else {
  if (contribuicao >= 30 && somaContribuicao >= 85) {
    console.log(`${nome}, você pode se aposentar!`);
  } else {
    console.log(`${nome}, você ainda não pode se aposentar!`);
  }
}