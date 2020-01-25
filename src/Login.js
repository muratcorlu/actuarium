import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
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

const Login = () => (
  <div className="login">
    <Form className="mb-5">
      <h1 className="mb-4">Actuarium</h1>
      <p className="text-muted">To join a game, enter your name and a game code.</p>
      <Form.Group controlId="name">
        <Form.Label srOnly>Your name</Form.Label>
        <Form.Control type="text" size="lg" placeholder="Your name" autoFocus />
      </Form.Group>
      <Form.Group controlId="code">
        <Form.Label srOnly>Game code</Form.Label>
        <Form.Control type="text" size="lg" placeholder="Game code" />
      </Form.Group>
      <Button type="submit" variant="primary" block size="lg">
        Start
      </Button>
    </Form>
    <LoginButton />
  </div>
)

export default Login
