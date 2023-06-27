var namee = document.getElementById("first-name");
namee.addEventListener("keyup", function () {
  var yes = document.querySelector(".u_check ");
  var non = document.querySelector(".u_times");
  if (namee.value.length < 3) {
    namee.style.border = "2px solid red";
    non.style.display = "block";
    yes.style.display = "none";
  } else {
    namee.style.border = "2px solid green";
    non.style.display = "none";
    yes.style.display = "block";
  }
});
var last = document.getElementById("last-name");
last.addEventListener("keyup", function () {
  var yess = document.querySelector(".p_check ");
  var nonn = document.querySelector(".p_times");
  if (last.value.length < 4) {
    last.style.border = "2px solid red";
    nonn.style.display = "block";
    yess.style.display = "none";
  } else {
    last.style.border = "2px solid green";
    nonn.style.display = "none";
    yess.style.display = "block";
  }
});
var email = document.getElementById("email");
email.addEventListener("keyup", function () {
  var yesss = document.querySelector(".m_check ");
  var nonnn = document.querySelector(".m_times");
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
var phone = document.getElementById("phone");
phone.addEventListener("keyup", function () {
  var yessss = document.querySelector(".a_check ");
  var nonnnn = document.querySelector(".a_times");
  if (phone.value.length == 8) {
    phone.style.border = "2px solid green";
    yessss.style.display = "block";
    nonnnn.style.display = "none";
  } else {
    phone.style.border = "2px solid red";
    nonnnn.style.display = "block";
    yessss.style.display = "none";
  }
});
function validation() {
  if (namee.value.length < 3) {
    alert("please enter your correct information");
  } else if (last.value.length < 4) {
    alert("please enter your correct information");
  } else if (email.value.length < 5) {
    alert("please enter your correct information");
  } else if (phone.value.length != 8) {
    alert("please enter your correct information");
  } else {
    alert("your request has been sended succesfully");
  }
}
