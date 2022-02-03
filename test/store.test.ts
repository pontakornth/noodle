import { createPinia, setActivePinia } from 'pinia'
// import { generateSolution } from '~/core/noodle'
import { useStore } from '~/core/store'

vi.mock('~/core/noodle', () => ({
  generateSolution: vi.fn().mockImplementation(() => '1234'),
  checkSolution: vi.fn().mockImplementation(() => []),
}))

describe('useStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  afterEach(() => {
    vi.resetAllMocks()
  })
  it('set the solution', () => {
    const store = useStore()
    store.generateSolution()
    expect(store.solution).toEqual('1234')
  })
  it('append the guess each attempt', () => {
    const store = useStore()
    store.generateSolution()
    store.attempt('2333')
    expect(store.guessed.length).toEqual(1)
  })
})
