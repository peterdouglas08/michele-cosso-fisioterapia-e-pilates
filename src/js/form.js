const formulario = document.getElementById("form");
const dadosUsuario = document.querySelectorAll(".dados");
const botaoEnviar = document.querySelector(".enviar");

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

formulario.addEventListener("click", () => {
  if (formulario.value >= input.lenght) {
    input.classList.add("aceito");
    input.classList.remove("recusado");
    input.nextElementSibling.classList.add("alertaOff");
  }
});
