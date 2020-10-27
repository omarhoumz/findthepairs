import { MAX_NUM_PAIRS } from 'src/constants'
import randomArray from 'src/utils/random-array'
import range from 'src/utils/range'
import shuffle from 'src/utils/shuffle'

/**
 * @param {number} pairs - number of cards' pairs
 */
function generateCards(pairs) {
  const arr = randomArray(pairs, MAX_NUM_PAIRS)
  const shuffled = shuffle([...arr, ...arr])

  let cards = range(pairs * 2, 1)
  cards = cards.map((id) => ({ id, pairId: shuffled[id - 1] }))

  return cards
}

export default generateCards
