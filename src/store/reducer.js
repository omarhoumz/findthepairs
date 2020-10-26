import { actionTypes } from './actions'

const initialState = {
  score: 0,
  tries: 0,
  pairs: 5,
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.RESTART:
      return {
        ...state,
        ...{ count: initialState.count },
      }

    default:
      return state
  }
}

export default reducer
