import { createSelector } from 'reselect'

import { CARD_STATES } from 'src/component/card/card'

const getCards = (state) => state.cards

export const flippedCardsSelector = createSelector(getCards, (cards) =>
  cards.filter((card) => card.state === CARD_STATES.FLIPPED),
)

export const flippedCardsCountSelector = createSelector(
  flippedCardsSelector,
  (cards) => cards.length,
)
