let value = 0;
let x = document.getElementById("display");

let displaySaved = document.getElementById("result");

function change() {
  value = value + 1;
  x.innerText = value;
}

document.getElementById("increment-btn").addEventListener("click", change);

function decrease() {
  value = value - 1;

  if (value <= 1) {
    value = 0;
  }

  x.innerText = value;
}

document.getElementById("decrease-btn").addEventListener("click", decrease);

function save() {
  displaySaved.innerText += " " + value + " - ";
  value = 0;
  x.innerText = value;
}
let y = document.getElementById("save-btn").addEventListener("click", save);
