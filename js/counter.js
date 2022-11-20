// let contador = document.getElementById("contador");

// const incrementar = () => {
//   contador.innerHTML = parseInt(contador.innerText) + 1;
// }
// const decrementar = () => {
//   contador.innerHTML = parseInt(contador.innerText) - 1;
// }

const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const output = document.querySelector('output');


plusButton.addEventListener('click', () => {
  alteraValor(+1);
});
minusButton.addEventListener('click', () => {
  alteraValor(-1);
});

let contagem = 0;

function alteraValor(dif) {
  contagem = contagem + dif;
  output.innerHTML = contagem;

  if(contagem > 0) {
    output.classList.add('text-success');
  } else if (contagem < 0) {
    output.classList.add('text-danger');
  } else {
    output.classList.remove('text-success');
    output.classList.remove('text-danger');

  }
}


