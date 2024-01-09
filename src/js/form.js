const dadosUsuario = document.querySelectorAll(".dados");
const botaoEnviar = document.getElementById("botao-enviar");
const botaoLimpar = document.getElementById("botao-limpar");

botaoEnviar.addEventListener("click", (event) => {
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

botaoLimpar.addEventListener("click", () => {
  dadosUsuario.forEach((input) => {
    input.classList.contains("aceito") && input.classList.remove("aceito")
    input.classList.contains("recusado") && input.classList.remove("recusado")
    input.nextElementSibling.classList.contains("alertaOff") || input.nextElementSibling.classList.add("alertaOff")
  })
})