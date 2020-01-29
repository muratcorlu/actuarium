import React from 'react'
import Badge from 'react-bootstrap/Badge'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'

const GameLobby = ({ code, playerIds = [] }) => {
  const codeChars = code
    .toUpperCase()
    .split('')
    .map((char, i) => (
      <Badge key={i} variant="primary" className="mx-1">
        {char}
      </Badge>
    ))

  return (
    <Row>
      <Col sm>
        <h4>Code</h4>
        <p>Join this game with code:</p>
        <p className="h1 text-monospace">{codeChars}</p>
      </Col>
      <Col sm>
        <h4>Players</h4>
        {playerIds.length > 0 ? (
          // fixme: list players instead of player ids
          <>
            <p>These players are waiting for the game to start:</p>
            <ListGroup horizontal="sm">
              {playerIds.map((id, i) => (
                <ListGroup.Item key={i} variant="info">
                  {id}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </>
        ) : (
          <p>Waiting for players to join…</p>
        )}
      </Col>
    </Row>
  )
}

export default GameLobby
