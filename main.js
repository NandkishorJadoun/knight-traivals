function move([x, y]) {
  if (x < 0 || x > 7 || y < 0 || y > 7) {
    throw new Error("Invalid position");
  }

  let possibleMoves = [
    [x + 2, y + 1],
    [x + 2, y - 1],
    [x - 2, y + 1],
    [x - 2, y - 1],
    [x + 1, y + 2],
    [x + 1, y - 2],
    [x - 1, y + 2],
    [x - 1, y - 2],
  ];

  return possibleMoves.filter(([x, y]) => {
    return x >= 0 && x <= 7 && y >= 0 && y <= 7;
  });
}

function knightMoves(start, [x, y]) {
  let queue = [];
  queue.push({
    current: start,
    path: [start],
  });

  const visitedSquares = new Set();

  while (queue.length > 0) {
    const currPosition = queue[0].current;
    const currPath = queue[0].path;

    if (currPosition[0] === x && currPosition[1] === y) {
      return currPath;
    }

    let possibleMoves = move(currPosition);

    for (let move of possibleMoves) {

        // check if the square is already exist as visited

      if (!visitedSquares.has(JSON.stringify(move))) {
        queue.push({
          current: move,
          path: currPath.concat([move]),
        });
      }
    }

    // I stringify array since array create reference and always give false if we compare them.

    visitedSquares.add(JSON.stringify(currPosition));
    queue.shift();
  }
}