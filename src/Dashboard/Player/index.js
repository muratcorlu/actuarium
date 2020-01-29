import React from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'

const Player = ({ user: { displayName } }) => {
  return (
    <Container fluid>
      <Jumbotron className="text-center">
        <h1>Hi {displayName}!</h1>
        <p>Wait for the teacher to start the game…</p>
      </Jumbotron>
    </Container>
  )
}

export default Player
