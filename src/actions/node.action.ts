import hashTree from '../mock/mock_hash'
import {normalize, applyHash} from "utils/node-helpers";


function getNodes() {

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

function addToRoot(node) {
  return (dispatch, getState) => {
    dispatch({
      type: 'ADD_TO_ROOT',
      payload: normalize([applyHash(node)])
    })
  }
}

function addToChildren() {

}

export {
  getNodes,
  addToRoot
}