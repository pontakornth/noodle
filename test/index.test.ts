// import { mount } from '@vue/test-utils'
import { fireEvent, render, screen } from '@testing-library/vue'
import Index from '../src/pages/index.vue'

describe('index.vue', () => {
  it('should render', () => {
    render(Index)
    // Should have input element
    expect(screen.queryByLabelText('Input your guess here')).toBeDefined()
  })

  it('should render character input', async() => {
    render(Index)
    const guessInput = screen.getByLabelText('Input your guess here')
    // There are four empty box
    expect(screen.queryAllByTestId('box').length).toEqual(4)

    // Detect changes
    await fireEvent.update(guessInput, '1234')
    expect(screen.queryByText('1')).not.toBeNull()
    expect(screen.queryByText('2')).not.toBeNull()
    expect(screen.queryByText('3')).not.toBeNull()
    expect(screen.queryByText('4')).not.toBeNull()

    // Make it longer
    await fireEvent.update(guessInput, '1234567')
    expect(screen.queryByText('5')).toBeNull()
  })
})
