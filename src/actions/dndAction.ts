const actionTypes = {
  startDrag: 'START_DRAG',
  drop: 'DROP'
}

const startDrag = () => dispatch => {
  dispatch({
    type: actionTypes.startDrag
  })
}

const drop = (index) => dispatch => {
  dispatch({
    type: actionTypes.drop,
    payload: index || null
  })
}

export {
  actionTypes,
  startDrag,
  drop
}
