import { firebaseReducer as firebase } from 'react-redux-firebase'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  firebase
})

export default rootReducer
