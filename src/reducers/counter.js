export const INCREMENT = 'INCREMENT'
export const INCREMENTSHARES = 'INCREMENTSHARES'
export const INCREMENTCOMMENTS = 'INCREMENTCOMMENTS'
export const OPEN_CLOSE = 'OPEN_CLOSE'
export const REMOVE = 'REMOVE'

function creatInitialState(numberSC) {
  let list_of_cweets = [];
  for (let i = 0; i < numberSC; i++) {
    list_of_cweets.push({
      id: i,
      thumb: 0,
      shares: 0,
      comments: 0,
      open: true,
      removed: false,
    })
  }
  return { list_of_cweets };
}

const initialState = creatInitialState(4);

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        list_of_cweets: state.list_of_cweets.map(cweet => cweet.id === action.id ? { ...cweet, thumb: cweet.thumb + 1 } : { ...cweet })
      }

    case INCREMENTSHARES:
      return {
        list_of_cweets: state.list_of_cweets.map(cweet => cweet.id === action.id ? { ...cweet, shares: cweet.shares + 1 } : { ...cweet })
      }

    case INCREMENTCOMMENTS:
      return {
        list_of_cweets: state.list_of_cweets.map(cweet => cweet.id === action.id ? { ...cweet, comments: cweet.comments + 1 } : { ...cweet })
      }

    case OPEN_CLOSE:
      return {
        list_of_cweets: state.list_of_cweets.map(cweet => cweet.id === action.id ? { ...cweet, open: !cweet.open } : { ...cweet })
      }

    case REMOVE:
      return {
        list_of_cweets: state.list_of_cweets.map(cweet => cweet.id === action.id ? { ...cweet, removed: true} : { ...cweet })
      }

    default:
      return state
  }
}

export const openOrCLOSE = (id) => {
  return dispatch => {
    dispatch({
      type: OPEN_CLOSE,
      id: id
    })
  }
}

export const increment = (id) => {
  return dispatch => {

    dispatch({
      type: INCREMENT,
      id: id
    })
  }
}

export const incrementAsync = (id) => {
  return dispatch => {

    return setTimeout(() => {
      dispatch({
        type: INCREMENT,
        id: id
      })
    }, 500)
  }
}

export const incrementSHARES = (id) => {
  return dispatch => {
    dispatch({
      type: INCREMENTSHARES,
      id: id
    })
  }
}

export const incrementAsyncSHARES = (id) => {
  return dispatch => {

    return setTimeout(() => {
      dispatch({
        type: INCREMENTSHARES,
        id: id
      })
    }, 500)
  }
}

export const incrementCOMMENTS = (id) => {
  return dispatch => {
    dispatch({
      type: INCREMENTCOMMENTS,
      id: id
    })
  }
}

export const incrementAsyncCOMMENTS = (id) => {
  return dispatch => {
    return setTimeout(() => {
      dispatch({
        type: INCREMENTCOMMENTS,
        id: id
      })
    }, 500)
  }
}

export const removeACState = (id) => {
  return dispatch => {
    dispatch({
      type: REMOVE,
      id: id
    })
  }
}  