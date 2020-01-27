import React from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import CreateGame from './CreateGame'
import GameLobby from './GameLobby'

const Admin = () => {
  const createdBy = useSelector(state => state.firebase.auth.uid)
  const games = useSelector(state => state.firestore.ordered.games || [])
  const currentGame = games[0]

  useFirestoreConnect({ collection: 'games', where: ['createdBy', '==', createdBy] })

  return (
    <Container fluid>
      <Jumbotron className="text-center">
        <h1>Current game</h1>
        {games.length > 0 ? <GameLobby {...currentGame} /> : <CreateGame createdBy={createdBy} />}
      </Jumbotron>
    </Container>
  )
}

export default Admin
