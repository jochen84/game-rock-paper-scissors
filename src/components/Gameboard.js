import React from 'react';
import Player from './Player';
import Computer from './Computer';

const Gameboard = ({rounds, setRounds, score, hands}) => {
  return(
    <div>
      <h1>Welcome to Rock Scissors Paper</h1>
      <h3>How many rounds would you like to play?</h3>
      <div className="rounds-div">
        {rounds.map((round, index) =>(
          <button key={index}>{round}</button>
        ))}
      </div>
      <hr></hr>
      <h1> &#129151; Winner &#129150; </h1>
      <div className="players">
        <Player hands={hands}/>
        <div className="points">
          <h1>{score.playerScore}</h1>
          <p>Player</p>
          <h1>{score.tie}</h1>
          <p>Tie</p>
          <h1>{score.computerScore}</h1>
          <p>Computer</p>
        </div>
        <Computer hands={hands}/>
      </div>
    </div>
  )
}

export default Gameboard;