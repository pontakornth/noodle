import { PositionState, ValueState, checkSolution } from '~/core/noodle'

describe('checkSolution', () => {
  it('throw error if the input and solution has different length', () => {
    expect(() => checkSolution('12', '1234', 'Position')).toThrow()
  })

  it('throw error if the input is not a number', () => {
    expect(() => checkSolution('mybo', '1234', 'Position')).toThrow()
  })

  it('check value mode correctly', () => {
    const allLess = checkSolution('1123', '9999', 'Value')
    const allMore = checkSolution('9999', '1123', 'Value')
    const allCorrect = checkSolution('1234', '1234', 'Value')

    expect(allLess.length).toEqual(4)
    expect(allMore.length).toEqual(4)
    expect(allCorrect.length).toEqual(4)
    allLess.forEach(result => expect(result.state).toEqual(ValueState.LessThanResult))
    allMore.forEach(result => expect(result.state).toEqual(ValueState.MoreThanResult))
    allCorrect.forEach(result => expect(result.state).toEqual(ValueState.Equal))
  })

  it('check position mode correctly', () => {
    const allResult = checkSolution('1234', '9240', 'Position')
    expect(allResult[0].state).toEqual(PositionState.Wrong)
    expect(allResult[1].state).toEqual(PositionState.Correct)
    expect(allResult[3].state).toEqual(PositionState.DifferentPosition)
  })
})
