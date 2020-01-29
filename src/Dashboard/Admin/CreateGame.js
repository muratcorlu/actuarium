import React from 'react'
import Button from 'react-bootstrap/Button'

const CreateGame = ({ click }) => (
  <>
    <p>You haven't created a game yet.</p>
    <Button size="lg" onClick={click}>
      Create game
    </Button>
  </>
)

export default CreateGame
