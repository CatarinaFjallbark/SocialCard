import cwitter from "../resourses/cwitter.json"

export const REMOVE_REQUESTED = 'REMOVE_REQUESTED'
export const REMOVE = 'REMOVE'
export const ADD_REQUESTED = 'ADD_REQUESTED'
export const ADD = 'ADD'

function creatInitialState() {
    let list_of_cweets_hard = [];
    list_of_cweets_hard = cwitter.list_of_sc;

    return { list_of_cweets_hard };
}

const initialState = creatInitialState();


export default (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_REQUESTED:
            return {
                list_of_cweets: state.list_of_cweets.map(cweet => cweet.id === action.id ? { ...cweet, isIncrementing: true } : cweet)
            }

        case REMOVE:
            return {
                list_of_cweets: state.list_of_cweets.map(cweet => cweet.id === action.id ? { ...cweet, isIncrementing: false, thumb: cweet.thumb + 1 } : cweet)
            }
        case ADD_REQUESTED:
            return {
                list_of_cweets: state.list_of_cweets.map(cweet => cweet.id === action.id ? { ...cweet, isIncrementing: true } : cweet)
            }

        case ADD:
            return {
                list_of_cweets: state.list_of_cweets.map(cweet => cweet.id === action.id ? { ...cweet, isIncrementing: false, thumb: cweet.thumb + 1 } : cweet)
            }
        default:
            return state
    }
}

export const addAC = (id) => {
    return dispatch => {
        dispatch({
            type: ADD_REQUESTED,
            id: id
        })

        dispatch({
            type: ADD,
            id: id
        })
    }
}
export const removeAC = (id) => {
    return dispatch => {
        dispatch({
            type: REMOVE_REQUESTED,
            id: id
        })

        dispatch({
            type: REMOVE,
            id: id
        })
    }
}  