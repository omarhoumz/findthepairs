import { takeEvery, put, select, all, delay } from 'redux-saga/effects'

import { actionTypes } from './actions'
import { flippedCardsCountSelector, flippedCardsSelector } from './selectors'

const getLock = (state) => state.locked

function* flipCard() {
  const locked = yield select(getLock)
  if (!locked) {
    const flippedCards = yield select(flippedCardsSelector)
    const flippedCardsCount = yield select(flippedCardsCountSelector)

    if (flippedCardsCount >= 2) {
      yield put({ type: actionTypes.LOCK })
      const firstCardId = flippedCards[0].pairId
      const secondCardId = flippedCards[1].pairId

      if (firstCardId === secondCardId) {
        yield delay(500)
        yield all([
          put({
            type: actionTypes.HIDE_CARDS,
            payload: [firstCardId, secondCardId],
          }),
          put({ type: actionTypes.INCREMENT_SCORE }),
        ])
      } else {
        yield delay(1000)
        yield put({ type: actionTypes.UNFLIP_ALL })
      }

      yield all([
        put({ type: actionTypes.INCREMENT_TRIES }),
        put({ type: actionTypes.UNLOCK }),
      ])
    }
  }
}

function* startGame() {
  yield all([
    put({ type: actionTypes.LOCK }),
    put({ type: actionTypes.FLIP_ALL }),
  ])
  yield delay(5000)
  yield all([
    put({ type: actionTypes.UNFLIP_ALL }),
    put({ type: actionTypes.UNLOCK }),
  ])
}

function* rootSaga() {
  yield takeEvery(actionTypes.FLIP_CARD, flipCard)
  yield takeEvery(actionTypes.START_GAME, startGame)
}

export default rootSaga
