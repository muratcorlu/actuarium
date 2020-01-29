import React from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { useSelector } from 'react-redux'
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase'
import { createRandomCode } from '../../utils'
import CreateGame from './CreateGame'
import GameLobby from './GameLobby'

const Admin = ({ user: { uid } }) => {
  const firestore = useFirestore()
  const games = useSelector(state => state.firestore.ordered.games || [])
  const currentGame = games[0]

  useFirestoreConnect({ collection: 'games', where: ['createdBy', '==', uid] })

  const createGame = () => {
    firestore.collection('games').add({
      createdBy: uid,
      createdAt: firestore.FieldValue.serverTimestamp(),
      code: createRandomCode(),
      status: 'created', // created | inProgress | stopped | finished
      round: 1
    })
  }

  return (
    <Container fluid>
      <Jumbotron className="text-center">
        <h1>Current game</h1>
        {games.length > 0 ? <GameLobby {...currentGame} /> : <CreateGame click={createGame} />}
      </Jumbotron>
    </Container>
  )
}

export default Admin
