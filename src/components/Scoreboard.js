import React from 'react';

const Scoreboard = ({score}) => {

  return(
    <div className="scoreboard">
      <h1>{score.playerScore}</h1>
      <p>Player</p>
      <h1>{score.tie}</h1>
      <p>Tie</p>
      <h1>{score.computerScore}</h1>
      <p>Computer</p>
    </div>
  )
}

export default Scoreboard;