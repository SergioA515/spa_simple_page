// configuación de eventos del navbar
console.log('holi si cargue');
document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("#pullDownButton");
  const menu = document.querySelector("#mobile-menu");

  button.addEventListener("click", () => {
    console.log("click del boton");
    menu.classList.toggle("hidden");
    console.log("click");
  });
});