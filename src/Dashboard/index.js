import React from 'react'
import { useSelector } from 'react-redux'
import { isEmpty, isLoaded } from 'react-redux-firebase'
import Login from '../Login'
import Container from './Container'

const Dashboard = () => {
  const auth = useSelector(state => state.firebase.auth)

  if (!isLoaded(auth)) {
    // todo: display loading state
    return null
  }

  if (isEmpty(auth)) {
    return <Login />
  }

  return <Container></Container>
}

export default Dashboard
