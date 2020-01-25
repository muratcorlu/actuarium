import React from 'react'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import { useSelector } from 'react-redux'
import { isEmpty, isLoaded, useFirebase } from 'react-redux-firebase'
import Login from '../Login'

const Dashboard = () => {
  const auth = useSelector(state => state.firebase.auth)
  const firebase = useFirebase()

  if (!isLoaded(auth)) {
    // todo: display loading state
    return null
  }

  if (isEmpty(auth)) {
    return <Login />
  }

  return (
    <Navbar variant="dark" bg="dark">
      <Navbar.Brand>Actuarium</Navbar.Brand>
      <Navbar.Text className="ml-auto mr-2">{auth.displayName}</Navbar.Text>
      <Button size="sm" variant="outline-secondary" onClick={firebase.logout}>
        Logout
      </Button>
    </Navbar>
  )
}

export default Dashboard
