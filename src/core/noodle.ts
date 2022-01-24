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
  if (guess.length !== solution.length)
    throw new Error('Invalid length')

  // TODO: Implement hexadecimal mode
  // Do after decimal mode is complete
  if (!(/^\d+$/.test(guess)))
    throw new Error('Not a number')

  // After this point, the guess is valid.
  // So, we can perform testing now.
  if (mode === 'Value') {
    const guessNumList = guess.split('').map(x => Number.parseInt(x))
    const solutionNumList = solution.split('').map(x => Number.parseInt(x))
    return guessNumList.map((num, index) => {
      let state
      if (num < solutionNumList[index])
        state = ValueState.LessThanResult

      else if (num > solutionNumList[index])
        state = ValueState.MoreThanResult

      else
        state = ValueState.Equal

      return { state, num: num.toString() }
    })
  }

  // TODO: Implement position mode

  return []
}
