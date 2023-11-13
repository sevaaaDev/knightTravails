export function createBoard(container, moves) {
  container.innerHTML = "";
  for (let y = 7; y > -1; y--) {
    for (let x = 0; x < 8; x++) {
      const square = document.createElement("div");
      square.setAttribute("data-row", x);
      square.setAttribute("data-col", y);
      square.classList.add("square");
      if (moves[0] === x && moves[1] === y) {
        square.classList.add("knight");
      }
      container.append(square);
    }
  }
}
