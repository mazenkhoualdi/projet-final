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
function validation() {
  if (nom.value.length < 3) {
    alert("please enter your correct information");
  } else if (email.value.length < 5) {
    alert("please enter your correct information");
  } else if (password.value.length < 8) {
    alert("please enter your correct information");
  } else {
    alert("thank you for your subscription");
  }
}
