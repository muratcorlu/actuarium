import firebase from 'firebase/app'
import 'firebase/auth'
import React from 'react'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import './App.css'
import { firebaseConfig, rrfConfig as config } from './config'
import Dashboard from './Dashboard'
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
      <Dashboard />
    </ReactReduxFirebaseProvider>
  </Provider>
)

export default App
