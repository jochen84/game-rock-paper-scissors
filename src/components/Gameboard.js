import React, { useState, useEffect, useRef } from 'react';
import Player from './Player';
import Computer from './Computer';
import Scoreboard from './Scoreboard';

const Gameboard = ({winner, setWinner, rounds, setRounds, score, setScore, handMove, setHandMove, playerHand, setPlayerHand, computerHand, setComputerHand, rating, setRating}) => {
  //Används för att dölja <element>
  const [hidden, setHidden] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  //Sätter antal rundor man vill spela till numret som finns i texten man klickar
  const setRoundsToPlay = (e) => {
    setRounds({...rounds, totalRounds: e.target.innerText});
  }

  const firstRun = useRef(true);
  useEffect(() => {
    if (firstRun.current) {
      computerAIhand();
      firstRun.current = false;
      return;
    } else {
      computerAIhand();
      winnerMoves();
      whosTheWinner();
    }
  }, [handMove.player, rounds.roundsPlayed]);
  
  useEffect(() => {
    //computerAIhand();
    setIsLoaded(true);
  }, []);
  
  const computerAIhand = () => {
    
    let random = Math.floor(Math.random() * 3);
    //let moves = ['rock', 'paper', 'scissors'];
    console.log("RANDOM NUMBER INSIDE computerAIhand=" +random)
    if(random == 0){
      console.log('Computer ROCK');
      setComputerHand({rock: true, paper: false, scissor: false});
      //setHandMove({...handMove, computer: 'rock'});
    }
    if(random == 1){
      console.log('Computer  PAPER');
      setComputerHand({rock: false, paper: true, scissor: false});
      //setHandMove({...handMove, computer: 'paper'});
    }
    if(random == 2){
      console.log('Computer SCISSOR');
      setComputerHand({rock: false, paper: false, scissor: true});
      //setHandMove({...handMove, computer: 'scissors'});
    }
    //setHandMove({...handMove, computer: moves[random]});

 console.log("DENNA LIGGER INNUTI ***COMPUTERAIHAND()***")
}

  const winnerMoves = () => {
    if(JSON.stringify(playerHand) === JSON.stringify(computerHand)) {
      setScore({...score, tie: score.tie + 1});
      console.log("resultat 1 - fick lika händer");
    }
    else if(playerHand.rock && computerHand.scissor){
      setScore({...score, playerScore: score.playerScore + 1})
      console.log("resultat 2 - pROCK vs cSCISSOR");
    }
    else if(computerHand.rock && playerHand.scissor){
      setScore({...score, computerScore: score.computerScore + 1})
      console.log("resultat 3 - cROCK vs pSCISSOR");
    }
    else if(playerHand.scissor && computerHand.paper){
      setScore({...score, playerScore: score.playerScore + 1})
      console.log("resultat 4 - pSCISSOR vs cPAPER");
    }
    else if(computerHand.scissor && playerHand.paper){
      setScore({...score, computerScore: score.computerScore + 1})
      console.log("resultat 5 - cSCISSOR vs pPAPER");
    }
    else if(playerHand.paper && computerHand.rock){
      setScore({...score, playerScore: score.playerScore + 1})
      console.log("resultat 6 - pPAPER vs cROCK");
    }
    else if(computerHand.paper && playerHand.rock){
      setScore({...score, computerScore: score.computerScore + 1})
      console.log("resultat 7 - cPAPER vs pROCK");
    }
  }

  const whosTheWinner = () => {
    let playerWin = '<-Player WON';
    let computerWin = 'Computer WON->';
    let tie = '<-TIE->';
    console.log("rounds: ", rounds.roundsPlayed, " / ", rounds.totalRounds);
    if(rounds.roundsPlayed == rounds.totalRounds){
      if(score.playerScore > score.computerScore){
        console.log("player win");
        setWinner(playerWin);
      }
      else if(score.computerScore > score.playerScore){
        setWinner(computerWin);
        console.log("computer win")
      }else{
        setWinner(tie);
        console.log("it's a tie");
      }
    }
  }

  console.log("DENNA LIGGER I BOTTEN PÅ ***GAMEBOARD.JS***")

  return(
    <div className="gameboard-header">
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
        <br></br>
        <button onClick={() => setHidden(!hidden)} className="start-game">Choose rounds then START GAME</button>
      </div>
      <hr></hr>
      
      {/*Ta fram DIV när man tryckt på start */}
      <div className={`player-section-header ${hidden ? "" : "hidden"}`}>
        <h1>{winner}</h1>
        <h1>Rounds {rounds.roundsPlayed}/{(rounds.totalRounds == 0 ? '***' : rounds.totalRounds)}</h1>
      </div>
      <div className="players-section">
        <Player hidden={hidden} rounds={rounds} setRounds={setRounds} handMove={handMove} setHandMove={setHandMove} playerHand={playerHand} setPlayerHand={setPlayerHand} rating={rating} setRating={setRating}/>
        <Scoreboard score={score} />
        <Computer handMove={handMove} setHandMove={setHandMove}/>
      </div>
    </div>
  )
}

export default Gameboard;