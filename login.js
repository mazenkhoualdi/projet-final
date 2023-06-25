let singupbtn = document.getElementById("sing-up");
let singinbtn = document.getElementById("sing-in");
let mainn = document.getElementById("mn");

singupbtn.addEventListener("click", function () {
  mainn.classList.add("right-panel-active");
});
singinbtn.addEventListener("click", function () {
  mainn.classList.remove("right-panel-active");
});
