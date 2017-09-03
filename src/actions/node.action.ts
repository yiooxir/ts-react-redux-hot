import hashTree from '../mock/mock_hash'
import {normalize} from "utils/node-helpers";


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

export {
  getNodes
}