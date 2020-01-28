import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useFirebase, useFirestore } from 'react-redux-firebase'
import LoginButton from './LoginButton'

const Login = () => {
  const [validated, setValidated] = useState(false)
  const [name, setName] = useState('')
  const [code, setCode] = useState('')

  const firebase = useFirebase()
  const firestore = useFirestore()

  const register = async event => {
    // todo: disable login button with spinner
    event.preventDefault()
    event.stopPropagation()
    const isValid = event.currentTarget.checkValidity()

    if (!isValid) {
      setValidated(true)
      return
    }

    const result = await firestore.get({
      collection: 'games',
      where: [
        ['status', '==', 'created'],
        ['code', '==', code.toLowerCase()]
      ],
      limit: 1
    })
    if (result.empty) {
      // todo: make code field invalid and show error
      return
    }

    firebase.auth().signInAnonymously()
  }

  return (
    <div className="login">
      <Form noValidate validated={validated} onSubmit={register} className="mb-5">
        <h1 className="mb-4">Actuarium</h1>
        <p className="text-muted">To join a game, enter your name and a game code.</p>
        <Form.Group controlId="name">
          <Form.Label srOnly>Your name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            size="lg"
            placeholder="Your name"
            autoFocus
            required
          />
        </Form.Group>
        <Form.Group controlId="code">
          <Form.Label srOnly>Game code</Form.Label>
          <Form.Control
            type="text"
            value={code}
            onChange={e => setCode(e.target.value)}
            size="lg"
            placeholder="Game code"
            required
            minLength="6"
            maxLength="6"
          />
        </Form.Group>
        <Button type="submit" variant="primary" block size="lg">
          Start
        </Button>
      </Form>
      <LoginButton />
    </div>
  )
}

export default Login
