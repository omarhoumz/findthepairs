import { DEFAULT_NUM_PAIRS } from 'src/constants'
import generateCards from 'src/core/generate-cards'
import { actionTypes } from './actions'

const initialState = {
  score: 0,
  tries: 0,
  pairs: 5,
  cards: [],
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.START_GAME: {
      const pairs = action.payload.pairs ?? state.pairs ?? DEFAULT_NUM_PAIRS

      const generatedCards = generateCards(pairs).map((item) => ({
        ...item,
        flipped: false,
      }))

      return {
        ...state,
        score: 0,
        tries: 0,
        cards: generatedCards,
        pairs,
      }
    }

    case actionTypes.FLIP_CARD: {
      if (!action.payload.cardId) return state

      const numberOfFlippedCards = state.cards.filter((card) => card.flipped)
        .length

      if (numberOfFlippedCards >= 2) return state

      const newCards = state.cards.map((card) =>
        card.id == action.payload.cardId ? { ...card, flipped: true } : card,
      )

      return {
        ...state,
        cards: newCards,
      }
    }

    default:
      return state
  }
}

export default reducer
