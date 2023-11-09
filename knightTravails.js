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
function bfs(graph, start, end) {
  let queue = [];
  queue.push({
    to: start.join(","),
    from: null,
    cost: 0,
  });
  let path = {};
  while (queue.length) {
    if (path[queue[0].to] && queue[0].cost == path[queue[0].to].cost) {
      path[queue[0].to].from.push(queue[0].from);
      queue.shift();
      continue;
    }
    if (path[queue[0].to]) {
      queue.shift();
      continue;
    }
    path[queue[0].to] = {
      from: [queue[0].from],
      cost: queue[0].cost,
    };
    for (let move of graph[queue[0].to]) {
      if (path[move]) {
        continue;
      }
      let obj = {
        to: move,
        from: queue[0].to,
        cost: queue[0].cost + 1,
      };
      queue.push(obj);
    }
    queue.shift();
  }
  return path;
}

