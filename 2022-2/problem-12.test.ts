import { calculateTotalScore } from './problem-12';

describe('calculateTotalScore', () => {

  it('should calculate the correct score for the example case', () => {
    const strategyGuide = [
      'A Y', // Opponent Rock, You Paper -> You win (8 points)
      'B X', // Opponent Paper, You Rock -> You lose (1 point)
      'C Z', // Opponent Scissors, You Scissors -> Draw (6 points)
    ];
    const totalScore = calculateTotalScore(strategyGuide);
    expect(totalScore).toBe(15); // Expected score: 8 + 1 + 6 = 15
  });

  it('should calculate the correct score for a win in every round', () => {
    const strategyGuide = [
      'A Y', // You win
      'B Z', // You win
      'C X', // You win
    ];
    const totalScore = calculateTotalScore(strategyGuide);
    const shapeScores = 1  + 2 + 3
    const roundScores = 6 +6 +6
    expect(totalScore).toBe(shapeScores + roundScores);
  });

  it('should calculate the correct score for a loss in every round', () => {
    const strategyGuide = [
      'A Z', // You lose
      'B X', // You lose
      'C Y', // You lose
    ];
    const totalScore = calculateTotalScore(strategyGuide);
    expect(totalScore).toBe(1 + 2 + 3); // Expected score: 1 + 2 + 3 = 3 (shape scores only)
  });

  it('should calculate the correct score for a draw in every round', () => {
    const strategyGuide = [
      'A X', // Draw
      'B Y', // Draw
      'C Z', // Draw
    ];
    const totalScore = calculateTotalScore(strategyGuide);
    const shapeScores = 1  + 2 + 3
    const roundScores = 3 +3 +3
    expect(totalScore).toBe(shapeScores+ roundScores);
  });

  it('should handle an empty strategy guide', () => {
    const strategyGuide: string[] = [];
    const totalScore = calculateTotalScore(strategyGuide);
    expect(totalScore).toBe(0); // No rounds, score should be 0
  });

  it('should calculate the correct score for a single round of a win', () => {
    const strategyGuide = ['A Y']; // You win (Paper vs. Rock)
    const totalScore = calculateTotalScore(strategyGuide);
    expect(totalScore).toBe(8); // Expected score: 8 (2 for Paper + 6 for Win)
  });

  it('should calculate the correct score for a single round of a loss', () => {
    const strategyGuide = ['B X']; // You lose (Rock vs. Paper)
    const totalScore = calculateTotalScore(strategyGuide);
    expect(totalScore).toBe(1); // Expected score: 1 (1 for Rock + 0 for Loss)
  });

  it('should calculate the correct score for a single round of a draw', () => {
    const strategyGuide = ['C Z']; // Draw (Scissors vs. Scissors)
    const totalScore = calculateTotalScore(strategyGuide);
    expect(totalScore).toBe(6); // Expected score: 6 (3 for Scissors + 3 for Draw)
  });

});