import { range } from 'src/utils/range'

function generateCards(pairs) {
  return range(pairs * 2, 1)
}

export default generateCards
