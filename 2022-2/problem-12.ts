type Move = 'A' | 'B' | 'C';
type YourMove = 'X' | 'Y' | 'Z';

const shapeScores: Record<YourMove, number> = {
  X: 1, // Rock
  Y: 2, // Paper
  Z: 3, // Scissors
};

const outcomeScores: Record<Move, Record<YourMove, number>> = {
  A: { X: 3, Y: 6, Z: 0 }, // Opponent chooses Rock
  B: { X: 0, Y: 3, Z: 6 }, // Opponent chooses Paper
  C: { X: 6, Y: 0, Z: 3 }, // Opponent chooses Scissors
};

export function calculateTotalScore(strategyGuide: string[]): number {
  return strategyGuide.reduce((totalScore, round) => {
    const [opponentMove, yourMove] = round.split(' ') as [Move, YourMove];
    const shapeScore = shapeScores[yourMove];
    const outcomeScore = outcomeScores[opponentMove][yourMove];
    console.info(`${totalScore} + ${shapeScore} + ${outcomeScore} = ${totalScore+shapeScore+outcomeScore}`)
    return totalScore + shapeScore + outcomeScore;
  }, 0);
}