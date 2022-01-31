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
  const guessNumList = guess.split('').map(x => Number.parseInt(x))
  const solutionNumList = solution.split('').map(x => Number.parseInt(x))
  if (mode === 'Value') {
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
  else {
    // Since there is no other mode yet, I can use else branch.
    // Code is inspired by https://github.com/yyx990803/vue-wordle/blob/main/src/Game.vue
    const currentRow = guessNumList.map((num) => { return { num, state: PositionState.Wrong } })
    // Mark correct answer

    currentRow.forEach((num, index) => {
      currentRow[index].state = PositionState.Wrong
    })
    solutionNumList.forEach((num, index) => {
      if (num === currentRow[index].num)
        currentRow[index].state = PositionState.Correct
    })

    // Mark present
    currentRow.forEach((result, index) => {
      if ((currentRow[index].state === PositionState.Wrong) && (solutionNumList.includes(result.num))) {
        // The solution contains the number. But it is not sure if there is alraedy a correct answer or not.
        currentRow[index].state = PositionState.DifferentPosition
      }
    })

    return currentRow.map(result => ({ num: result.num.toString(), state: result.state }))
  }
}
