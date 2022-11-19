const botao = document.querySelector("#visualize");
const body = document.querySelector('body');

botao.addEventListener('click', function() {
  const box = document.getElementById("color");
  const selectedColor = box.value;

  body.style.backgroundColor = selectedColor;

  if(body.style.backgroundColor !== selectedColor) {
    alert("Please, use the CSS colors!");
  }
});
