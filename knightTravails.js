function knightMoves(from, to) {
  // do stuff
}

function movesGraph() {
  let obj = {};
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      obj[`${x}, ${y}`] = returnPossibleMoves(x, y);
    }
  }
  return obj;
}

function returnPossibleMoves(x, y) {
  let arr = [];
  arr.push([x + 2, y + 1]);
  arr.push([x + 1, y + 2]);
  arr.push([x + 2, y - 1]);
  arr.push([x + 1, y - 2]);
  arr.push([x - 2, y + 1]);
  arr.push([x - 1, y + 2]);
  arr.push([x - 2, y - 1]);
  arr.push([x - 1, y - 2]);
  return arr.filter((n) => {
    if (n[0] >= 0 && n[1] >= 0) {
      if (n[0] < 8 && n[1] < 8) {
        return true;
      }
    }
  });
}

console.log(movesGraph());
