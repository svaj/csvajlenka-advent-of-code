import { simulateRope } from './problem-9';

describe('Rope Bridge Simulation', () => {
  test('Tail remains stationary when head moves within adjacent positions', () => {
    const movements = ['R 1', 'U 1', 'L 1', 'D 1'];
    const visitedPositions = simulateRope(movements);
    expect(visitedPositions.size).toBe(1); // Tail doesn't move
  });

  test('Tail follows head when moving two steps in one direction', () => {
    const movements = ['R 2'];
    const visitedPositions = simulateRope(movements);
    expect(visitedPositions.size).toBe(2); // Tail moves once
  });

  test('Tail visits 13 unique positions for the sample input', () => {
    const movements = [
      'R 4',
      'U 4',
      'L 3',
      'D 1',
      'R 4',
      'D 1',
      'L 5',
      'R 2',
    ];
    const visitedPositions = simulateRope(movements);
    expect(visitedPositions.size).toBe(13);
  });
});