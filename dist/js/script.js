const header1 = document.querySelector(".toggle_menu");
const headerAct = document.querySelector(".header_actions");
header1.addEventListener("click", () => {
  header1.classList.toggle("open");
  headerAct.classList.toggle("open");
});

const links = document.querySelectorAll(".links_column h4");
links.forEach((link) => {
  link.addEventListener("click", () => {
    link.nextElementSibling.classList.toggle("open");
    link.querySelector("i").classList.toggle("open");
  });
});

const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  console.log(window.pageYOffset);
  if (window.pageYOffset >= 100) {
    header.classList.add("blue");
  } else {
    header.classList.remove("blue");
  }
});