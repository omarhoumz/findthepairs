export const actionTypes = {
  FLIP_CARD: 'FLIP_CARD',
  RESTART: 'RESTART',
  START_GAME: 'START_GAME',
}

export function flipCard({ cardId }) {
  console.log(cardId)
  return { type: actionTypes.FLIP_CARD, payload: { cardId } }
}

export function startGame({ pairs } = {}) {
  return { type: actionTypes.START_GAME, payload: { pairs } }
}
