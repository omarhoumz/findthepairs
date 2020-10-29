import { CARD_STATES } from 'src/component/card/card'
import { DEFAULT_NUM_PAIRS } from 'src/constants'
import generateCards from 'src/core/generate-cards'
import { actionTypes } from './actions'
import { getFlippedCards } from './utils'

const initialState = {
  score: 0,
  tries: 0,
  pairs: 5,
  cards: [],
  locked: false,
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.START_GAME: {
      const pairs = action.payload.pairs ?? state.pairs ?? DEFAULT_NUM_PAIRS

      const generatedCards = generateCards(pairs).map((item) => ({
        ...item,
        state: CARD_STATES.IDLE,
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
      if (!action.payload.cardId || state.locked) return state

      const numberOfFlippedCards = getFlippedCards(state.cards).length

      if (numberOfFlippedCards >= 2) return state

      const newCards = state.cards.map((card) =>
        card.id == action.payload.cardId
          ? { ...card, state: CARD_STATES.FLIPPED }
          : card,
      )

      return { ...state, cards: newCards }
    }

    case actionTypes.UNFLIP_ALL: {
      const newCards = state.cards.map((card) =>
        card.state === CARD_STATES.FLIPPED
          ? { ...card, state: CARD_STATES.IDLE }
          : card,
      )

      return { ...state, cards: newCards }
    }

    case actionTypes.HIDE_CARDS: {
      const newCards = state.cards.map((card) =>
        action.payload.includes(card.pairId)
          ? { ...card, state: CARD_STATES.HIDDEN }
          : card,
      )
      return { ...state, cards: newCards }
    }

    case actionTypes.INCREMENT_TRIES: {
      return { ...state, tries: ++state.tries }
    }

    case actionTypes.INCREMENT_SCORE: {
      return { ...state, score: ++state.score }
    }

    case actionTypes.FLIP_ALL: {
      return {
        ...state,
        cards: state.cards.map((card) => ({
          ...card,
          state: CARD_STATES.FLIPPED,
        })),
      }
    }

    case actionTypes.LOCK: {
      return { ...state, locked: true }
    }

    case actionTypes.UNLOCK: {
      return { ...state, locked: false }
    }

    default:
      return state
  }
}

export default reducer
