import hashTree from '../mock/mock_hash'
import {normalize, applyHash} from "utils/node-helpers";

type GetNodes = () => void
type AddToRoot = (NNode, number) => void

const getNodes: GetNodes = () => {

  return dispatch => {
    dispatch({
      type: 'API_GET_NODE_HASH_PENDING',
    })

    setTimeout(() => {
      dispatch({
        type: 'API_GET_NODE_HASH_SUCCESS',
        payload: normalize(hashTree)
      })
    })

  }
}

/**
 * @param node {NNode}
 * @param {any} index - index where new node will be inserted.
 * If no index then a new node will be inserted at the end of the rootNodes
 * @returns {void}
 */
const addToRoot: AddToRoot = (node, index = null) => dispatch => {
  dispatch({
    type: 'ADD_TO_ROOT',
    payload: {
      ...normalize([applyHash(node)]),
      index
    }
  })
}

export {
  getNodes,
  addToRoot
}