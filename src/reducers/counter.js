export const INCREMENT_REQUESTED = 'INCREMENT_REQUESTED'
export const INCREMENT = 'INCREMENT'
export const INCREMENT_REQUESTEDSHARES = 'INCREMENT_REQUESTEDSHARES'
export const INCREMENTSHARES = 'INCREMENTSHARES'
export const INCREMENT_REQUESTEDCOMMENTS = 'INCREMENT_REQUESTEDCOMMENTS'
export const INCREMENTCOMMENTS = 'INCREMENTCOMMENTS'

const initialState = {
  count: 0,
  shares: 0,
  comments: 0,
  isIncrementing: false,
  isIncrementingSHARES: false,
  isIncrementingCOMMENTS: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      }

    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      }

    case INCREMENT_REQUESTEDSHARES:
      return {
        ...state,
        isIncrementingSHARES: true
      }

    case INCREMENTSHARES:
      return {
        ...state,
        shares: state.shares + 1,
        isIncrementingSHARES: !state.isIncrementingSHARES
      }
    case INCREMENT_REQUESTEDCOMMENTS:
      return {
        ...state,
        isIncrementingCOMMENTS: true
      }

    case INCREMENTCOMMENTS:
      return {
        ...state,
        comments: state.comments + 1,
        isIncrementingCOMMENTS: !state.isIncrementingCOMMENTS
      }

    default:
      return state
  }
}

export const increment = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    dispatch({
      type: INCREMENT
    })
  }
}

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: INCREMENT
      })
    }, 500)
  }
}

export const incrementSHARES = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTEDSHARES
    })

    dispatch({
      type: INCREMENTSHARES
    })
  }
}

export const incrementAsyncSHARES = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTEDSHARES
    })

    return setTimeout(() => {
      dispatch({
        type: INCREMENTSHARES
      })
    }, 500)
  }
}

export const incrementCOMMENTS = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTEDCOMMENTS
    })

    dispatch({
      type: INCREMENTCOMMENTS
    })
  }
}

export const incrementAsyncCOMMENTS = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTEDCOMMENTS
    })

    return setTimeout(() => {
      dispatch({
        type: INCREMENTCOMMENTS
      })
    }, 500)
  }
}