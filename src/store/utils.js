const { CARD_STATES } = require('src/component/card/card')

export function getFlippedCards(cards) {
  return cards.filter((card) => card.state === CARD_STATES.FLIPPED)
}
