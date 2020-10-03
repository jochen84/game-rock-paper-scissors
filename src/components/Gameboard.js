import React, { useState, useEffect } from 'react';
import Player from './Player';
import Computer from './Computer';
import Scoreboard from './Scoreboard';

const Gameboard = ({rounds, setRounds, score, handMove, setHandMove, playerHand, setPlayerHand, setComputerHand}) => {

  const [hidden, setHidden] = useState(false);
  
  const setRoundsToPlay = (e) => {
    setRounds({...rounds, totalRounds: e.target.innerText});
  }
  //Dölj spelarens handval under spelaren innan man valt hur många rundor man vill spela!

  //***Varje gång spelaren väljer hand får datorn en random hand - Thats AI!***
  useEffect(() => {
    computerAIhand();
  }, [handMove.player]);
  
  const computerAIhand = () => {
    let random = Math.floor(Math.random() * 3);
    let moves = ['rock', 'paper', 'scissors'];
    setHandMove({...handMove, computer: moves[random]})
  }
  //***Varje gång spelaren väljer hand får datorn en random hand - Thats AI!***

  return(
    <div className="gameboard-header">
      <button onClick={() => setHidden(!hidden)}>Temporary button - hiding rounds and show winner/rounds</button>
      <h1>Welcome to Rock Scissors Paper</h1>
      {/*Dölj DIV när antal runder valts eller när man tryckt på start */}
      <div className={hidden ? "hidden" : ""}>
        <h3>How many rounds would you like to play?</h3>
        <div className="rounds-amount">
          <button onClick={() => setHidden(!hidden), {setRoundsToPlay}}>1</button>
          <button onClick={setRoundsToPlay}>3</button>
          <button onClick={setRoundsToPlay}>5</button>
          <button onClick={setRoundsToPlay}>10</button>
        </div>
      </div>
      <hr></hr>
      
      {/*Ta fram DIV när man tryckt på start */}
      <div className={`player-section-header ${hidden ? "" : "hidden"}`}>
      <button className="start-game">Start game</button>
        <h1> &#129151; Winner &#129150; </h1>
        <h1>Rounds {rounds.roundsPlayed}/{rounds.totalRounds}</h1>
      </div>
      <div className="players-section">
        <Player handMove={handMove} setHandMove={setHandMove} playerHand={playerHand} setPlayerHand={setPlayerHand}/>
        <Scoreboard score={score} />
        <Computer handMove={handMove} setComputerHand={setComputerHand}/>
      </div>
    </div>
  )
}

export default Gameboard;