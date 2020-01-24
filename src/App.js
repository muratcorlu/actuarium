import firebase from 'firebase/app'
import React from 'react'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import './App.css'
import { firebaseConfig, rrfConfig as config } from './config'
import Login from './Login'
import { store } from './store'

firebase.initializeApp(firebaseConfig)

const reactReduxFirebaseProps = {
  firebase,
  config,
  dispatch: store.dispatch
}

const App = () => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...reactReduxFirebaseProps}>
      <Login />
    </ReactReduxFirebaseProvider>
  </Provider>
)

export default App
