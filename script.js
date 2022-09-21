/* eslint-disable no-return-assign */
let color = "black";
let click = true;

function colorSquare() {
  if (click) {
    if (color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function createBoard(size) {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
  }
}

createBoard(16);

function changeSize(input) {
  if (input >= 2 && input <= 100) {
    document.querySelector(".error").style.display = "none";
    createBoard(input);
  } else {
    document.querySelector(".error").style.display = "flex";
  }
}

function changeColor(choice) {
  color = choice;
}

function reset() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  // eslint-disable-next-line no-param-reassign
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}

const statusBtn = document.querySelector("#status-btn");

function handleStatusField() {
  if (click) {
    document.querySelector(".mode").textContent = "Pen is enabled";
  } else {
    document.querySelector(".mode").textContent = "Pen is disabled";
  }
}

function handleStatusBtn() {
  click = !click;
  handleStatusField();
  if (click) {
    statusBtn.textContent = "Active Pen";
    statusBtn.style.backgroundColor = "seagreen";
  } else {
    statusBtn.textContent = "Inactive Pen";
    statusBtn.style.backgroundColor = "salmon";
  }
}

document.querySelector(".board").addEventListener("click", () => {
  handleStatusBtn();
});
document.querySelector(".board").addEventListener("click", () => {
  handleStatusField();
});
