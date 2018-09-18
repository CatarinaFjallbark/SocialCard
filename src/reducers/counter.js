export const INCREMENT = 'INCREMENT';
export const INCREMENTSHARES = 'INCREMENTSHARES';
export const INCREMENTCOMMENTS = 'INCREMENTCOMMENTS';
export const OPEN_CLOSE = 'OPEN_CLOSE';
export const REMOVE = 'REMOVE';
export const ADD = 'ADD';

function creatInitialState(numberSC) {
  const list_of_cweets = [];
  for (let i = 0; i < numberSC; i++) {
    list_of_cweets.push({
      id: i,
      thumb: 0,
      shares: 0,
      comments: 0,
      open: true,
      removed: false,
    });
  }
  return { list_of_cweets };
}

const initialState = creatInitialState(4);

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        list_of_cweets: state.list_of_cweets
          .map(cweet => (cweet.id === action.id
            ? { ...cweet, thumb: cweet.thumb + 1 } : { ...cweet })),
      };

    case INCREMENTSHARES:
      return {
        list_of_cweets: state.list_of_cweets
          .map(cweet => (cweet.id === action.id
            ? { ...cweet, shares: cweet.shares + 1 } : { ...cweet })),
      };

    case INCREMENTCOMMENTS:
      return {
        list_of_cweets: state.list_of_cweets
          .map(cweet => (cweet.id === action.id
            ? { ...cweet, comments: cweet.comments + 1 } : { ...cweet })),
      };

    case OPEN_CLOSE:
      return {
        list_of_cweets: state.list_of_cweets
          .map(cweet => (cweet.id === action.id
            ? { ...cweet, open: !cweet.open } : { ...cweet })),
      };

    case REMOVE:
      return {
        list_of_cweets: state.list_of_cweets
          .map(cweet => (cweet.id === action.id
            ? { ...cweet, removed: true } : { ...cweet })),
      };

    case ADD:
      return {
        list_of_cweets: state.list_of_cweets.concat({
          id: state.list_of_cweets.length,
          thumb: 0,
          shares: 0,
          comments: 0,
          open: true,
          removed: false,
        }),
      };

    default:
      return state;
  }
};

export const openOrCLOSE = id => (dispatch) => {
  dispatch({
    type: OPEN_CLOSE,
    id,
  });
};

export const increment = id => (dispatch) => {
  dispatch({
    type: INCREMENT,
    id,
  });
};

export const incrementAsync = id => dispatch => setTimeout(() => {
  dispatch({
    type: INCREMENT,
    id,
  });
}, 500);

export const incrementSHARES = id => (dispatch) => {
  dispatch({
    type: INCREMENTSHARES,
    id,
  });
};

export const incrementAsyncSHARES = id => dispatch => setTimeout(() => {
  dispatch({
    type: INCREMENTSHARES,
    id,
  });
}, 500);

export const incrementCOMMENTS = id => (dispatch) => {
  dispatch({
    type: INCREMENTCOMMENTS,
    id,
  });
};

export const incrementAsyncCOMMENTS = id => dispatch => setTimeout(() => {
  dispatch({
    type: INCREMENTCOMMENTS,
    id,
  });
}, 500);

export const removeACState = id => (dispatch) => {
  dispatch({
    type: REMOVE,
    id,
  });
};
export const addACState = () => (dispatch) => {
  dispatch({
    type: ADD,
  });
};
