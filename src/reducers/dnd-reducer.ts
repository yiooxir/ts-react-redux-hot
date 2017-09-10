import {Reducer} from "redux";
import { actionTypes } from 'actions/dndAction'

interface DNDState {
  drag: boolean
  index: number | null
}

const initialState: DNDState = {
  drag: false,
  index: null
}

const dndReducer: Reducer<DNDState> = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case actionTypes.startDrag:
      return { drag: true, index: null }

    case actionTypes.drop:
      return {drag: false, index: payload}

    default:
      return state
  }
}

export {
  dndReducer,
  DNDState
}
