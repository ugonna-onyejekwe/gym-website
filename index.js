let navigator = document.querySelector(".navigators");
let menu_btn = document.querySelector(".menu_btn");
let overlay = document.querySelector(".overlay");
let anchor = document.querySelectorAll(".links a");

const activate_menu = () => {
  navigator.classList.toggle("active");
  overlay.classList.toggle("active");
  menu_btn.classList.toggle("active");
};

menu_btn.onclick = () => {
  activate_menu();
};

anchor.forEach((i) => {
  i.onclick = () => {
    activate_menu();
  };
});
