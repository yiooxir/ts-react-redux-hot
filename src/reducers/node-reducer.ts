import {Reducer} from "redux";
import {NodeHash} from "interfaces/node.interface";

const initialState: NodeHash = {}

const nodeReducer: Reducer<NodeHash> = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case 'API_GET_NODE_HASH_SUCCESS':
      return payload

    case 'ADD_TO_ROOT':
      return {...state, ...payload}

    default:
    case 'API_GET_NODE_HASH_PENDING':
      return state
  }
}

export {
  nodeReducer
}
