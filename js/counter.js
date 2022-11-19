let contador = document.getElementById("contador");
const incrementar = () => {
  contador.innerHTML = parseInt(contador.innerText) + 1;
}
const decrementar = () => {
  contador.innerHTML = parseInt(contador.innerText) - 1;
}
