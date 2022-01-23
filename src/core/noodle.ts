export enum PositionState {
  Correct = 0,
  Wrong,
  DifferentPosition,
}

export enum ValueState {
  LessThanResult = 3,
  Equal,
  MoreThanResult,
}

export interface NumberResult {
  state: PositionState | ValueState
  num: string
}

export type Mode = 'Position' | 'Value'

/**
 * Check if user guess matches the solution.
 *
 * @param guess The guess from user
 * @param solution The solution
 * @param mode Mode of the guess
 * @returns Result to map displayed
 */
export function checkSolution(guess: string, solution: string, mode: Mode): NumberResult[] {
  return []
}
