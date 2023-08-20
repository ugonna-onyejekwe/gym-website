let verification_form = document.querySelector(".verification_form");
let form_btn = document.querySelectorAll(
  ".verification_form .wrapper .form .btn button"
);
let overlay = document.querySelector(".overlay");
let sign_in_btn = document.querySelector(".sign_in_btn");
let menu_btn = document.querySelector(".menu_btn");
let link_con = document.querySelector(".navigators");
let close_btn = document.querySelector(".remove_icon");
let anchors = document.querySelectorAll(".navigators .links a");

//NAVIGATION BTN
menu_btn.onclick = () => {
  link_con.classList.toggle("active");
  overlay.classList.toggle("active");
  menu_btn.classList.toggle("active");
};

form_btn.forEach((i) => {
  i.addEventListener("click", () => {
    if (i.textContent === "login") {
      verification_form.classList.remove("signin");
      verification_form.classList.add("login");
    } else {
      verification_form.classList.add("signin");
      verification_form.classList.remove("login");
    }
  });
});

// SIGNIN FORM BTN
sign_in_btn.onclick = () => {
  verification_form.classList.add("active");
  overlay.classList.add("active");
  link_con.classList.remove("active");
  menu_btn.classList.remove("active");
};

overlay.onclick = () => {
  verification_form.classList.remove("active");
  overlay.classList.remove("active");
  menu_btn.classList.remove("active");
  link_con.classList.remove("active");
};

// CLOSE SIGNIN FORM
close_btn.onclick = () => {
  verification_form.classList.remove("active");
  overlay.classList.remove("active");
};

// REMOVE NAVIGATOR
anchors.forEach((i) => {
  // console.log(i);
  i.onclick = () => {
    menu_btn.classList.remove("active");
    overlay.classList.remove("active");
    link_con.classList.remove("active");
  };
});
