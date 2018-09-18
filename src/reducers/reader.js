import cwitter from '../resourses/cwitter.json';

export const REMOVE = 'REMOVE';
export const ADD = 'ADD';

function creatInitialState() {
  let list_of_cweets_hard = [];
  list_of_cweets_hard = cwitter.list_of_sc;
  return { list_of_cweets_hard };
}

const initialState = creatInitialState();


export default (state = initialState, action) => {
  switch (action.type) {
    case REMOVE:
      return {
        list_of_cweets_hard: state.list_of_cweets_hard.filter(cweet => cweet.id !== action.id),
      };
    case ADD:
      return {
        list_of_cweets_hard: state.list_of_cweets_hard.concat({
          id: state.list_of_cweets_hard.length,
          account: 'addaccount',
          header: 'ADDAccount ',
          date: 'Sep 12 2018',
          color: '#d83b01',
          postText: "Can't pry yourself away from the tutorials? The cure is to make tiny little experiment apps.",
          headLine: 'Learning React? Start Small.',
        }),
      };
    default:
      return state;
  }
};

export const addAC = () => (dispatch) => {
  dispatch({
    type: ADD,
  });
};

export const removeAC = id => (dispatch) => {
  dispatch({
    type: REMOVE,
    id,
  });
};
