import {Reducer} from "redux";
import {NodeHash} from "interfaces/node.interface";
import { take, takeRight, concat } from 'lodash'

interface NodeState {
  nodes: NodeHash
  rootNodes: Array<string>
}

const initialState: NodeState = {
  nodes: {},
  rootNodes: []
}

const nodeReducer: Reducer<NodeState> = (state = initialState, action) => {
  const { type, payload } = action
  const { rootNodes } = state

  switch (type) {
    case 'API_GET_NODE_HASH_SUCCESS':
      return payload

    case 'ADD_TO_ROOT':
      const takeLength = payload.index === null ? state.rootNodes.length : payload.index + 1

      return {
        nodes: {...state.nodes, ...payload.nodes},
        rootNodes: concat(
          take(rootNodes, takeLength),
          payload.rootNodes,
          takeRight(rootNodes, rootNodes.length - takeLength)
        )
      }

    default:
    case 'API_GET_NODE_HASH_PENDING':
      return state
  }
}

export {
  nodeReducer,
  NodeState
}
