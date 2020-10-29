import { takeEvery, put, select } from 'redux-saga/effects'
import { actionTypes } from './actions'
import { getFlippedCards } from './utils'

const delay = (ms) => new Promise((res) => setTimeout(res, ms))

const getCards = (state) => state.cards
const getLock = (state) => state.locked

function* flipCard() {
  const locked = yield select(getLock)
  if (!locked) {
    const cards = yield select(getCards)
    const flippedCards = getFlippedCards(cards)
    const flippedCardsCount = flippedCards.length

    if (flippedCardsCount >= 2) {
      yield put({ type: actionTypes.LOCK })
      yield delay(1000)
      const firstCardId = flippedCards[0].pairId
      const secondCardId = flippedCards[1].pairId

      if (firstCardId === secondCardId) {
        yield put({
          type: actionTypes.HIDE_CARDS,
          payload: [firstCardId, secondCardId],
        })
        yield put({ type: actionTypes.INCREMENT_SCORE })
      } else {
        yield put({ type: actionTypes.UNFLIP_ALL })
      }

      yield put({ type: actionTypes.INCREMENT_TRIES })
      yield put({ type: actionTypes.UNLOCK })
    }
  }
}

function* startGame() {
  yield put({ type: actionTypes.LOCK })
  yield put({ type: actionTypes.FLIP_ALL })
  yield delay(5000)
  yield put({ type: actionTypes.UNFLIP_ALL })
  yield put({ type: actionTypes.UNLOCK })
}

function* rootSaga() {
  yield takeEvery(actionTypes.FLIP_CARD, flipCard)
  yield takeEvery(actionTypes.START_GAME, startGame)
}

export default rootSaga
