import { defineStore } from 'pinia'
import type { Mode, NumberResult } from './noodle'

/**
 * This is store for the main game.
 * I use Pinia because I want to learn about it.
 * mode: Is the mode used for solution generation
 * solution: Is the solution
 * guessed: Array of result
 *
 * The store is not intended to be persistent because Noodle != Wordle.
 * Noodle uses number only so it's easier to guess and the value mode can
 * be even easier with the right algorithm.
 *
 * TODO: Implement functionality
 */
export const useStore = defineStore('main', {
  state: () => {
    return {
      mode: 'Value' as Mode,
      solution: 'TODO',
      guessed: [] as NumberResult[][],
    }
  },
})
