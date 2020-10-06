import React, { useState, useEffect } from 'react';
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

  //***Varje gång spelaren väljer hand får datorn en random hand - Thats AI!***
  useEffect(() => {
    //Ge datorn ett "drag"
    computerAIhand();
    //Kör igång en if-sats för att kolla dragen
    winnerMoves();
    //Sätter vinnar namnet i <h1>-taggen - Får det inte till att funka
    whosTheWinner();
  }, [handMove.player, rounds.roundsPlayed]);
  
  useEffect(() => {

    //computerAIhand();
    setIsLoaded(true);
  }, []);




  const computerAIhand = () => {
    /*
    let random = Math.floor(Math.random() * 3);
    let moves = ['rock', 'paper', 'scissors'];
    if(random == 0){setComputerHand({rock: true, paper: false, scissor: false});}
    if(random == 1){setComputerHand({rock: false, paper: true, scissor: false});}
    if(random == 2){setComputerHand({rock: false, paper: false, scissor: true});}
    setHandMove({...handMove, computer: moves[random]});
    */
   //let moves = ['rock', 'paper', 'scissors'];
   if (isLoaded) {

    //rockRating *= 0.95;
    setRating({...rating,
      rockRating: rating.rockRating * 0.95,
      paperRating: rating.paperRating * 0.95,
      scissorsRating: rating.scissorsRating * 0.95
    });
    //console.log("Ratings: ", rockRating + ", ", paperRating + ", ", scissorsRating);

    let randomNumber = Math.random() * (Math.exp(rating.rockRating) + 
    Math.exp(rating.scissorsRating) + Math.exp(rating.paperRating));


    if (randomNumber < Math.exp(rating.rockRating)) {
      setComputerHand({rock: true, paper: false, scissor: false});
      //computerHand = "R";
      console.log("math.exp(rock): ", Math.exp(rating.rockRating));
      console.log("com: R");
      setHandMove({...handMove, computer: 'rock'});
      return;
  }
  else if (randomNumber < Math.exp(rating.rockRating) + Math.exp(rating.paperRating)) {
      //setComputerMove("P");
      //computerHand = "P";
      setComputerHand({rock: false, paper: true, scissor: false});
      console.log("paper thing: ", Math.exp(rating.rockRating) + Math.exp(rating.paperRating));
      console.log("com: P");
      setHandMove({...handMove, computer: 'paper'});
      return;
  } 
  else if (!(randomNumber < Math.exp(rating.rockRating)) &&
          !(randomNumber < Math.exp(rating.rockRating) + Math.exp(rating.paperRating))){
      //setComputerMove("S"); 
      //computerHand = "S";
      setComputerHand({rock: false, paper: false, scissor: true});
      setHandMove({...handMove, computer: 'scissors'});
      console.log("com: S");
  } 
  } 
}

  //***Varje gång spelaren väljer hand får datorn en random hand - Thats AI!***

  //Jämför händerna, måste ändras för att få in poängsättning i samma...(Tie funkar men inte de andra)
  const winnerMoves = () => {
    if(JSON.stringify(playerHand) === JSON.stringify(computerHand)) {
      setScore({...score, tie: score.tie + 1})
      //alert('Hello, we are the same! No one won');
    }
    else if(playerHand.rock && computerHand.scissor){
      setScore({...score, playerScore: score.playerScore + 1})
      //alert('Player - Rock beats scissor')
    }
    else if(computerHand.rock && playerHand.scissor){
      setScore({...score, computerScore: score.computerScore + 1})
      //alert('Computer - Rock beats scissor')
    }
    else if(playerHand.scissor && computerHand.paper){
      setScore({...score, playerScore: score.playerScore + 1})
      //alert('Player - Scissor beats paper')
    }
    else if(computerHand.scissor && playerHand.paper){
      setScore({...score, computerScore: score.computerScore + 1})
      //alert('Computer - Scissor beats paper')
    }
    else if(playerHand.paper && computerHand.rock){
      setScore({...score, playerScore: score.playerScore + 1})
      //alert('Player - Paper beats rock')
    }
    else if(computerHand.paper && playerHand.rock){
      setScore({...score, computerScore: score.computerScore + 1})
      //alert('Computer - Paper beats rock')
    }
    //Tömmer spelarhanden för en ny omgång!
    //setPlayerHand({rock: false, paper: false, scissor: false});
  }
  
  //Fungerar inte, den ändrar inte STATE, sätter bara 1 gång vid uppstart, körs i useEffect[handmove.player]
  const whosTheWinner = () => {
    let playerWin = 'Player WON';
    let computerWin = 'Computer WON';
    let tie = 'TIE';
    if(rounds.roundsPlayed === rounds.totalRounds){
      if(score.playerScore > score.computerScore){
        setWinner(playerWin);
      }
      else if(score.computerScore > score.playerScore){
        setWinner(computerWin);
      }else{
        setWinner(tie);
      }
    }
  }

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
        <h1>Rounds {rounds.roundsPlayed}/{rounds.totalRounds}</h1>
      </div>
      <div className="players-section">
        <Player hidden={hidden} rounds={rounds} setRounds={setRounds} handMove={handMove} setHandMove={setHandMove} playerHand={playerHand} setPlayerHand={setPlayerHand}/>
        <Scoreboard score={score} />
        <Computer handMove={handMove}/>
      </div>
    </div>
  )
}

export default Gameboard;