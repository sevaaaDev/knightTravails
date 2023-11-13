import { createBoard, showPath } from "./display";
import { knightMoves } from "./knightTravails";

function clickHandler(e) {
  if (e.target.className.includes("square")) {
    start([e.target.dataset.row, e.target.dataset.col]);
  }
}
function start(target) {
  container.removeEventListener("click", clickHandler);
  let moves = knightMoves(from, target);
  let delay = 0;
  showPath(moves[0]);
  for (let i = 0; i < moves[0].length; i++) {
    from = moves[0][i];
    if (i === moves[0].length - 1) {
      setTimeout(() => {
        createBoard(container, moves[0][i]);
        container.addEventListener("click", clickHandler);
      }, delay);
      continue;
    }
    setTimeout(() => {
      createBoard(container, moves[0][i]);
    }, delay);
    delay = delay + 500;
  }
}
const container = document.querySelector(".container");
let from = [0, 0];
container.addEventListener("click", clickHandler);

createBoard(container, from);
