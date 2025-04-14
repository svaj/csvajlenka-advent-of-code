export function simulateRope(movements: string[]): Set<string> {
  let head = { x: 0, y: 0 };
  let tail = { x: 0, y: 0 };
  const visited = new Set<string>();
  visited.add(`${tail.x},${tail.y}`);

  const directionMap: { [key: string]: [number, number] } = {
    R: [1, 0],
    L: [-1, 0],
    U: [0, 1],
    D: [0, -1],
  };

  for (const move of movements) {
    const [dir, countStr] = move.split(' ');
    const [dx, dy] = directionMap[dir];
    const count = parseInt(countStr, 10);

    for (let i = 0; i < count; i++) {
      head.x += dx;
      head.y += dy;

      const xDiff = head.x - tail.x;
      const yDiff = head.y - tail.y;

      if (Math.abs(xDiff) > 1 || Math.abs(yDiff) > 1) {
        tail.x += Math.sign(xDiff);
        tail.y += Math.sign(yDiff);
        visited.add(`${tail.x},${tail.y}`);
      }
    }
  }

  return visited;
}