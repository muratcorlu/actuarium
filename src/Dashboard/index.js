import React from 'react'
import { useSelector } from 'react-redux'
import { isEmpty, isLoaded } from 'react-redux-firebase'
import Login from '../Login'
import Admin from './Admin'
import Container from './Container'
import Player from './Player'

const Dashboard = () => {
  const user = useSelector(state => state.firebase.auth)

  if (!isLoaded(user)) {
    // todo: display loading state
    return null
  }

  if (isEmpty(user)) {
    return <Login />
  }

  return <Container>{user.isAnonymous ? <Player user={user} /> : <Admin user={user} />}</Container>
}

export default Dashboard
