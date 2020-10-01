import React from 'react';
import Player from './Player';
import Computer from './Computer';
import Scoreboard from './Scoreboard';

const Gameboard = ({rounds, setRounds, score, handMoves, playerHand, setPlayerHand, setComputerHand}) => {
  
  const setRoundsToPlay = (e) => {
    setRounds({...rounds, totalRounds: e.target.innerText});
  }
  //Dölj spelarens handval under spelaren innan man valt hur många rundor man vill spela!

  return(
    <div className="gameboard-header">
      <h1>Welcome to Rock Scissors Paper</h1>
      {/*Dölj DIV när antal runder valts eller när man tryckt på start */}
      <div>
        <h3>How many rounds would you like to play?</h3>
        <div className="rounds-div">
          <button onClick={setRoundsToPlay}>1</button>
          <button onClick={setRoundsToPlay}>3</button>
          <button onClick={setRoundsToPlay}>5</button>
          <button onClick={setRoundsToPlay}>10</button>
        </div>
      </div>
      <hr></hr>
      <button className="start-game">Start game</button>
      {/*Ta fram DIV när man tryckt på start */}
      <div className="player-section-header">
        <h1> &#129151; Winner &#129150; </h1>
        <h1>Rounds {rounds.roundsPlayed}/{rounds.totalRounds}</h1>
      </div>
      <div className="players-section">
        <Player handMoves={handMoves} playerHand={playerHand} setPlayerHand={setPlayerHand}/>
        <Scoreboard score={score} />
        <Computer handMoves={handMoves} setComputerHand={setComputerHand}/>
      </div>
    </div>
  )
}

export default Gameboard;