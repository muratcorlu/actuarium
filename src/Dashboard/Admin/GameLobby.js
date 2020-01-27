import React from 'react'
import Badge from 'react-bootstrap/Badge'

const GameLobby = ({ code }) => {
  const codeChars = code
    .toUpperCase()
    .split('')
    .map((char, i) => (
      <Badge key={i} variant="primary" className="mx-1">
        {char}
      </Badge>
    ))

  return (
    <>
      <p>Join this game with code:</p>
      <p className="h1 text-monospace">{codeChars}</p>
    </>
  )
}

export default GameLobby
