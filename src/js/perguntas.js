const itensPerguntasFrequentes = document.querySelectorAll(".item");

itensPerguntasFrequentes.forEach((item) => {
  item.addEventListener("click", () => {
    const itemAtivoAtual = document.querySelector(".ativo");

    if (itemAtivoAtual) {
      itemAtivoAtual.classList.remove("ativo");
    }

    item.classList.add("ativo");
  });
});
