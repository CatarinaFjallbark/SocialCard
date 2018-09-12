import { combineReducers } from 'redux'
import counter from './counter'
import reader from './reader'


export default combineReducers({
    counter,
    reader
})
