const dadosUsuario = document.querySelectorAll(".dados");
const botoesForm = document.querySelector(".botao");
const botaoLimpar = document.querySelector("limpar");

dadosUsuario.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value) {
      input.classList.add("aceito");
      input.classList.remove("recusado");
      input.nextElementSibling.classList.add("alertaOff");
    } else {
      input.classList.remove("aceito");
      input.classList.add("recusado");
      input.nextElementSibling.classList.remove("alertaOff");
    }
  });
});

botoesForm.addEventListener("click", (event) => {
  event.preventDefault();

  dadosUsuario.forEach((input) => {
    if (input.value) {
      input.classList.add("aceito");
      input.classList.remove("recusado");
      input.nextElementSibling.classList.add("alertaOff");
    } else {
      input.classList.remove("aceito");
      input.classList.add("recusado");
      input.nextElementSibling.classList.remove("alertaOff");
    }
  });
});