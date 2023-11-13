import { createBoard } from "./display";
function clickHandler(e) {
  if (e.target.className.includes("square")) {
    start([e.target.dataset.row, e.target.dataset.col]);
  }
}
const container = document.querySelector(".container");
let from = [0, 0];
container.addEventListener("click", clickHandler);

createBoard(container, from);
