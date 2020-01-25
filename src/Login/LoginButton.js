import React from 'react'
import Button from 'react-bootstrap/Button'
import { useFirebase } from 'react-redux-firebase'

const LoginButton = () => {
  const firebase = useFirebase()

  const login = () => {
    firebase.login({ provider: 'google', type: 'popup' })
  }

  return (
    <Button onClick={login} variant="link" block>
      I'm a teacher
    </Button>
  )
}

export default LoginButton
