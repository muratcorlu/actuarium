import React from 'react'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import { useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'

const Container = ({ children }) => {
  const firebase = useFirebase()
  const auth = useSelector(state => state.firebase.auth)

  return (
    <>
      <Navbar variant="dark" bg="dark" className="mb-4">
        <Navbar.Brand>Actuarium</Navbar.Brand>
        <Navbar.Text className="ml-auto mr-2">{auth.displayName}</Navbar.Text>
        <Button size="sm" variant="outline-secondary" onClick={firebase.logout}>
          Logout
        </Button>
      </Navbar>
      {children}
    </>
  )
}

export default Container
