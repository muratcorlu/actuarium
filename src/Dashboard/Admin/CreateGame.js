import React from 'react'
import Button from 'react-bootstrap/Button'
import { useFirestore } from 'react-redux-firebase'
import { createRandomCode } from '../../utils'

const CreateGame = ({ createdBy }) => {
  const firestore = useFirestore()

  const createGame = () => {
    firestore.collection('games').add({
      createdBy,
      createdAt: firestore.FieldValue.serverTimestamp(),
      code: createRandomCode(),
      status: 'created', // created | inProgress | stopped | finished
      round: 1
    })
  }

  return (
    <>
      <p>You haven't created a game yet.</p>
      <Button size="lg" onClick={createGame}>
        Create game
      </Button>
    </>
  )
}

export default CreateGame
