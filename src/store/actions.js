export const actionTypes = {
  START_GAME: 'START_GAME',
  FLIP_CARD: 'FLIP_CARD',
  FLIP_ALL: 'FLIP_ALL',
  UNFLIP_ALL: 'UNFLIP_ALL',
  HIDE_CARDS: 'HIDE_CARDS',
  INCREMENT_TRIES: 'INCREMENT_TRIES',
  INCREMENT_SCORE: 'INCREMENT_SCORE',
  LOCK: 'LOCK',
  UNLOCK: 'UNLOCK',
}

export function flipCard({ cardId }) {
  return { type: actionTypes.FLIP_CARD, payload: { cardId } }
}

export function startGame({ pairs } = {}) {
  return { type: actionTypes.START_GAME, payload: { pairs } }
}
