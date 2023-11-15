export function createBoard(container, moves) {
  container.innerHTML = "";
  for (let y = 7; y > -1; y--) {
    for (let x = 0; x < 8; x++) {
      const square = document.createElement("div");
      square.setAttribute("data-row", x);
      square.setAttribute("data-col", y);
      square.classList.add("square");
      if ((x + 1) % 2 == (y + 1) % 2) {
        square.classList.add("black");
      }
      if (moves[0] === x && moves[1] === y) {
        square.classList.add("knight");
      }
      container.append(square);
    }
  }
}

export function showPath(path) {
  const info = document.querySelector(".info");
  const movesDisplay = document.querySelector(".moves");
  let text = `You made it in ${path.length - 1} moves`;
  if (path.length === 2) {
    text = text.slice(0, text.length - 1);
  }
  info.innerText = text;
  let moves = path.join(" > ");
  movesDisplay.innerText = moves;
}
