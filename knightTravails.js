function knightMoves(from, to) {
  // do stuff
}

function movesGraph() {
  let graph = {};
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      let vertex = returnPossibleMoves(x, y);
      graph[`${x},${y}`] = vertex;
    }
  }
  return graph;
}

function returnPossibleMoves(x, y) {
  let arr = [];
  arr.push(`${x + 2},${y + 1}`);
  arr.push(`${x + 1},${y + 2}`);
  arr.push(`${x + 2},${y - 1}`);
  arr.push(`${x + 1},${y - 2}`);
  arr.push(`${x - 2},${y + 1}`);
  arr.push(`${x - 1},${y + 2}`);
  arr.push(`${x - 2},${y - 1}`);
  arr.push(`${x - 1},${y - 2}`);

  return arr.filter((n) => {
    let coor = n.split(",");
    if (coor[0] < 8 && coor[0] > 0) {
      if (coor[1] < 8 && coor[1] > 0) {
        return true;
      }
    }
  });
}

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

function getShortestPath(path, move) {
  if (!path[move].from[0]) {
    return [move];
  }
  let arr = [];
  for (let i = 0; i < path[move].from.length; i++) {
    let road = getShortestPath(path, path[move].from[i]);
    for (let j = 0; j < road.length; j++) {
      let moves = [];
      arr.push(moves);
    }
  }
  return arr;
}
