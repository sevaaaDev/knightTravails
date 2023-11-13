export function createBoard(container, moves) {
  container.innerHTML = "";
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
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
