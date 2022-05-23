var login1 = document.getElementById("login");
var definition = document.getElementById("definition");

function login() {
  login1.innerText = "logout";
}

function define() {
  definition.classList.add("hidden");
}

function like() {
  alert("Ninja was liked");
}
