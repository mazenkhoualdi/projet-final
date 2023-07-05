let singupbtn = document.getElementById("sing-up");
let singinbtn = document.getElementById("sing-in");
let mainn = document.getElementById("mn");

singupbtn.addEventListener("click", function () {
  mainn.classList.add("right-panel-active");
});
singinbtn.addEventListener("click", function () {
  mainn.classList.remove("right-panel-active");
});
let nom = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("pass");
nom.addEventListener("keyup", function () {
  var yes = document.querySelector(".u_check ");
  var non = document.querySelector(".u_times");
  if (nom.value.length < 3) {
    nom.style.border = "2px solid red";
    non.style.display = "block";
    yes.style.display = "none";
  } else {
    nom.style.border = "2px solid green";
    non.style.display = "none";
    yes.style.display = "block";
  }
});
email.addEventListener("keyup", function () {
  var yesss = document.querySelector(".e_check ");
  var nonnn = document.querySelector(".e_times");
  var pattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.value.match(pattern)) {
    email.style.border = "2px solid green";
    nonnn.style.display = "none";
    yesss.style.display = "block";
  } else {
    email.style.border = "2px solid red";
    nonnn.style.display = "block";
    yesss.style.display = "none";
  }
});
password.addEventListener("keyup", function () {
  if (password.value.length > 8) {
    password.style.border = "2px solid green";
  } else {
    password.style.border = "2px solid red";
  }
});
let surp = document.getElementById("cong");
let rej = document.getElementById("rej");
function validation() {
  if (
    nom.value.length < 3 ||
    email.value.length < 5 ||
    password.value.length < 8
  ) {
    rej.classList.add("open-reject");
  } else {
    surp.classList.add("open-thnx");
  }
}
function closethnx() {
  surp.classList.remove("open-thnx");
  rej.classList.remove("open-reject");
  wel.classList.remove("open-welcome")
}
sign = document.getElementById("sin");
wel=document.getElementById("wel")
sign.addEventListener("click", function () {
  wel.classList.add("open-welcome")
});
