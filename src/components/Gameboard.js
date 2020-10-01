import React from 'react';
import Player from './Player';
import Computer from './Computer';
import Scoreboard from './Scoreboard';

const Gameboard = ({rounds, score, handMoves}) => {
  return(
    <div className="gameboard-header">
      <h1>Welcome to Rock Scissors Paper</h1>
      <h3>How many rounds would you like to play?</h3>
      <div className="rounds-div">
        {rounds.map((round, index) =>(
          <button key={index}>{round}</button>
        ))}
      </div>
      <hr></hr>
      <div className="player-section-header">
        <h1> &#129151; Winner &#129150; </h1>
        <h1>Rounds x/{rounds[2]}</h1>
      </div>
      <div className="players-section">
        <Player handMoves={handMoves}/>
        <Scoreboard score={score} />
        <Computer handMoves={handMoves}/>
      </div>
    </div>
  )
}

export default Gameboard;