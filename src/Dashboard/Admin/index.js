import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { useSelector } from 'react-redux'
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase'
import { createRandomCode } from '../../utils'
import Debug from '../../utils/Debug'

const Admin = () => {
  const firestore = useFirestore()
  const createdBy = useSelector(state => state.firebase.auth.uid)
  const games = useSelector(state => state.firestore.ordered.games || [])

  useFirestoreConnect({ collection: 'games', where: ['createdBy', '==', createdBy] })

  const createGame = () => {
    firestore.collection('games').add({
      createdBy,
      createdAt: firestore.FieldValue.serverTimestamp(),
      code: createRandomCode()
    })
  }

  return (
    <Container fluid>
      <h2>Current game</h2>
      {games.length > 0 ? (
        <Debug value={games} />
      ) : (
        <>
          <p>You haven't created a game yet.</p>
          <Button size="sm" onClick={createGame}>
            Create game
          </Button>
        </>
      )}
    </Container>
  )
}

export default Admin
