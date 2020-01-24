import { createStore } from 'redux'
import rootReducer from './reducer'

const initialState = {}
export const store = createStore(rootReducer, initialState)
