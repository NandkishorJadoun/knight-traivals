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


