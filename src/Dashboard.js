import React from 'react'
import { useSelector } from 'react-redux'
import { isEmpty } from 'react-redux-firebase'
import Login from './Login'

const Dashboard = () => {
  const auth = useSelector(state => state.firebase.auth)

  if (isEmpty(auth)) {
    return <Login />
  }

  return <pre>{JSON.stringify(auth, null, 2)}</pre>
}

export default Dashboard
