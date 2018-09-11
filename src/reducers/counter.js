export const INCREMENT_REQUESTED = 'INCREMENT_REQUESTED'
export const INCREMENT = 'INCREMENT'
export const INCREMENT_REQUESTEDSHARES = 'INCREMENT_REQUESTEDSHARES'
export const INCREMENTSHARES = 'INCREMENTSHARES'
export const INCREMENT_REQUESTEDCOMMENTS = 'INCREMENT_REQUESTEDCOMMENTS'
export const INCREMENTCOMMENTS = 'INCREMENTCOMMENTS'

let cwitter = {
  list_of_cweets: [{
    id: 0,
    count: 0,
    shares: 0,
    comments: 0,
    isIncrementing: false,
    isIncrementingSHARES: false,
    isIncrementingCOMMENTS: false,
  }, {
    id: 1,
    count: 0,
    shares: 0,
    comments: 0,
    isIncrementing: false,
    isIncrementingSHARES: false,
    isIncrementingCOMMENTS: false,
  }]
};

const initialState = cwitter;

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_REQUESTED:
      return {
        list_of_cweets: state.list_of_cweets.map(cweet => cweet.id == action.id ? { ...cweet, isIncrementing: true } : { ...cweet })
      }

    case INCREMENT:
      return {
        list_of_cweets: state.list_of_cweets.map(cweet => cweet.id == action.id ? { ...cweet, isIncrementing: false, count: cweet.count + 1 } : { ...cweet })
      }

    case INCREMENT_REQUESTEDSHARES:
      return {
        list_of_cweets: state.list_of_cweets.map(cweet => cweet.id == action.id ? { ...cweet, isIncrementingSHARES: true } : { ...cweet })
      }

    case INCREMENTSHARES:
    return {
      list_of_cweets: state.list_of_cweets.map(cweet => cweet.id == action.id ? { ...cweet, isIncrementingSHARES: false, shares: cweet.shares + 1 } : { ...cweet })
    }

    case INCREMENT_REQUESTEDCOMMENTS:
    return {
      list_of_cweets: state.list_of_cweets.map(cweet => cweet.id == action.id ? { ...cweet, isIncrementingCOMMENTS: true } : { ...cweet })
    }

    case INCREMENTCOMMENTS:
    return {
      list_of_cweets: state.list_of_cweets.map(cweet => cweet.id == action.id ? { ...cweet, isIncrementingCOMMENTS: false, comments: cweet.comments + 1 } : { ...cweet })
     }

    default:
      return state
  }
}

export const increment = (id) => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED,
      id: id
    })

    dispatch({
      type: INCREMENT,
      id: id
    })
  }
}

export const incrementAsync = (id) => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED,
      id: id
    })

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
      type: INCREMENT_REQUESTEDSHARES,
      id: id
    })

    dispatch({
      type: INCREMENTSHARES,
      id: id
    })
  }
}

export const incrementAsyncSHARES = (id) => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTEDSHARES,
      id: id
    })

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
      type: INCREMENT_REQUESTEDCOMMENTS,
      id: id
    })

    dispatch({
      type: INCREMENTCOMMENTS,
      id: id
    })
  }
}

export const incrementAsyncCOMMENTS = (id) => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTEDCOMMENTS,
      id: id
    })

    return setTimeout(() => {
      dispatch({
        type: INCREMENTCOMMENTS,
        id: id
      })
    }, 500)
  }
}