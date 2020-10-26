export const actionTypes = {
  FLIP_CARD: 'FLIP_CARD',
  RESTART: 'RESTART',
}

export function flipCard() {
  return { type: actionTypes.FLIP_CARD }
}
