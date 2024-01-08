let sign_up_buttons = document.querySelectorAll(".sign_up_btn");
let verification_page = document.querySelector(".verification_page ");
let login_buttons = document.querySelectorAll(".login_btn");

sign_up_buttons.forEach((i) => {
  console.log(i);

  i.onclick = () => {
    verification_page.classList.remove("login");
    verification_page.classList.add("sign_up");
  };
});
login_buttons.forEach((i) => {
  console.log(i);

  i.onclick = () => {
    verification_page.classList.add("login");
    verification_page.classList.remove("sign_up");
  };
});
