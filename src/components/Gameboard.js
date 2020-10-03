import React, { useState, useEffect } from 'react';
import Player from './Player';
import Computer from './Computer';
import Scoreboard from './Scoreboard';

const Gameboard = ({rounds, setRounds, score, handMove, setHandMove, playerHand, setPlayerHand, computerHand, setComputerHand}) => {

  const [hidden, setHidden] = useState(false);
  
  const setRoundsToPlay = (e) => {
    setRounds({...rounds, totalRounds: e.target.innerText});
  }
  //Dölj spelarens handval under spelaren innan man valt hur många rundor man vill spela!

  //***Varje gång spelaren väljer hand får datorn en random hand - Thats AI!***
  useEffect(() => {
    computerAIhand();
    winnerMoves();
  }, [handMove.player]);
  
  const computerAIhand = () => {
    let random = Math.floor(Math.random() * 3);
    let moves = ['rock', 'paper', 'scissors'];
    /*
    if(random == 0){
      setComputerHand({rock: true, paper: false, scissor: false});
    }
    if(random == 1){
      setComputerHand({rock: false, paper: true, scissor: false});
    }
    if(random == 2){
      setComputerHand({rock: false, paper: false, scissor: true});
    }
    */
    setComputerHand({rock: false, paper: false, scissor: true});
    setHandMove({...handMove, computer: moves[random]});
  }
  //***Varje gång spelaren väljer hand får datorn en random hand - Thats AI!***

  useEffect(() => {
    
  });
  const winnerMoves = () => {
    if(JSON.stringify(playerHand) === JSON.stringify(computerHand)) {
      alert('Hello, we are the same! No one won');
    }
    else if((playerHand.rock && computerHand.scissor) || (computerHand.rock && playerHand.scissor)){
      alert('Rock beats scissor')
    }
    else if((playerHand.scissor && computerHand.paper) || (computerHand.scissor && playerHand.paper)){
      alert('Scissor beats paper')
    }
    else if((playerHand.paper && computerHand.rock) || (computerHand.paper && playerHand.rock)){
      alert('Paper beats rock')
    }
  }


  return(
    <div className="gameboard-header">
      <button onClick={() => setHidden(!hidden)}>Temporary button - hiding rounds and show winner/rounds</button>
      <h1>Welcome to Rock Scissors Paper</h1>
      {/*Dölj DIV när antal runder valts eller när man tryckt på start */}
      <div className={hidden ? "hidden" : ""}>
        <h3>How many rounds would you like to play?</h3>
        <div className="rounds-amount">
          <button onClick={setRoundsToPlay}>1</button>
          <button onClick={setRoundsToPlay}>3</button>
          <button onClick={setRoundsToPlay}>5</button>
          <button onClick={setRoundsToPlay}>10</button>
        </div>
      </div>
      <hr></hr>
      
      {/*Ta fram DIV när man tryckt på start */}
      <div className={`player-section-header ${hidden ? "" : "hidden"}`}>
      <button onClick={winnerMoves} className="start-game">Start game</button>
        <h1> &#129151; Winner &#129150; </h1>
        <h1>Rounds {rounds.roundsPlayed}/{rounds.totalRounds}</h1>
      </div>
      <div className="players-section">
        <Player rounds={rounds} setRounds={setRounds} handMove={handMove} setHandMove={setHandMove} playerHand={playerHand} setPlayerHand={setPlayerHand}/>
        <Scoreboard score={score} />
        <Computer handMove={handMove}/>
      </div>
    </div>
  )
}

export default Gameboard;