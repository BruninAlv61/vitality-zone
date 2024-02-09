const botonAbrir = document.querySelector(".nav__abrir-menu");
const botonCerrar = document.querySelector(".nav__cerrar-menu");
const navContainer = document.querySelector(".nav__container");
const links = document.querySelectorAll(".nav__item");

botonAbrir.addEventListener("click", (event) => {
  event.stopPropagation();
  navContainer.classList.add("nav__visible");
});

botonCerrar.addEventListener("click", () => {
  navContainer.classList.remove("nav__visible");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    if (navContainer.classList.contains("nav__visible")) {
      navContainer.classList.remove("nav__visible");
    }
  });
});

document.addEventListener("click", (event) => {
  const isClickInsideNavContainer = navContainer.contains(event.target);

  if (
    !isClickInsideNavContainer &&
    navContainer.classList.contains("nav__visible")
  ) {
    navContainer.classList.remove("nav__visible");
  }
});
