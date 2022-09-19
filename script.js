/* eslint-disable no-return-assign */
let color = "black";

function colorSquare() {
  if (color === "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = color;
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
    createBoard(input);
  } else {
    console.log("Incorrect amount of squares");
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
