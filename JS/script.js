const body = document.querySelector("body"),
toggle = document.querySelector("#lightmode-toggle");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "light") {
body.classList.add("light");
toggle.classList.add("active");
}

toggle.addEventListener("click", () => toggle.classList.toggle("active"));
toggle.addEventListener("click", () => {
body.classList.toggle("light");
if (!body.classList.contains("light")) {
  return localStorage.setItem("mode", "dark");
}
localStorage.setItem("mode", "light");
});
toggle.addEventListener("click", () => toggle.classList.toggle("active"));

window.addEventListener("scroll", reveal);

function reveal() {
var reveals = document.querySelectorAll(".reveal");

for (var i = 0; i < reveals.length; i++) {
  var windowheight = window.innerHeight;
  var revealtop = reveals[i].getBoundingClientRect().top;
  var revealpoint = 150;

  if (revealtop < windowheight - revealpoint) {
    reveals[i].classList.add("active");
  } else {
    reveals[i].classList.remove("active");
  }
}
}

