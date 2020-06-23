const nav = document.querySelector(".navigation__items");
const menu = document.querySelector(".navigation__menu");
const links = nav.querySelectorAll("a");

const navigationOpen = () => {
  nav.classList.toggle("navigation__menu--open");
  menu.classList.toggle("toggle");
};

const openPage = () => {
  nav.classList.toggle("navigation__menu--open");
  menu.classList.toggle("toggle");
};

menu.addEventListener("click", navigationOpen);

links.forEach((link) => {
  link.addEventListener("click", openPage);
});
