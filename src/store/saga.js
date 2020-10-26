import { takeEvery, put } from 'redux-saga/effects'

const delay = (ms) => new Promise((res) => setTimeout(res, ms))

function* flipCard() {
  yield delay(1000)
  yield put({ type: 'CARD_FLIPPED' })
}

function* rootSaga() {
  yield takeEvery('FLIP_CARD', flipCard)
}

export default rootSaga
