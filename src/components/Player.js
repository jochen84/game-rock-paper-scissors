import React, {useState} from 'react';

const Player = ({hidden, rounds, setRounds, handMove, setHandMove, playerHand, setPlayerHand, rating, setRating}) => {


  //const [hidden, setHidden] = useState(false);
  //Klicka hand sätter "den" till true
  const chooseRock = () => {
    //hideChoices();
    setRounds({...rounds, roundsPlayed: rounds.roundsPlayed+1})
    setPlayerHand({rock: true, paper: false, scissor: false});
    setHandMove({...handMove, player: 'rock'});
    setRating({...rating,
      paperRating: rating.paperRating + 0.1,
      scissorsRating: rating.scissorsRating - 0.1
    });
    console.log("Player ROCK");
  }
  const choosePaper = () => {
    //hideChoices();
    setRounds({...rounds, roundsPlayed: rounds.roundsPlayed+1})
    setPlayerHand({rock: false, paper: true, scissor: false});
    setHandMove({...handMove, player: 'paper'});
    setRating({...rating,
      rockRating: rating.rockRating - 0.1,
      scissorsRating: rating.scissorsRating + 0.1
    });
    console.log("Player PAPER");
  }
  const chooseScissor = () => {
    //hideChoices();
    setRounds({...rounds, roundsPlayed: rounds.roundsPlayed+1})
    setPlayerHand({rock: false, paper: false, scissor: true});
    setHandMove({...handMove, player: 'scissors'});
    setRating({...rating,
      paperRating: rating.paperRating - 0.1,
      rockRating: rating.rockRating + 0.1
    });
    console.log("Player SCISSORS");
  }

  //Klicka hand väljer handen, visar datorns val, jämför och sätter sedan poäng. Kollar även om antal ronder är klart.

  /* //Denna fungerade här men får den inte till att funka i Gameboard.js istället....
  const hideChoices = () => {
   if(rounds.roundsPlayed == rounds.totalRounds-1){
      setHidden(true);
    }
  }
  */

 console.log("DENNA LIGGER I BOTTEN PÅ ***PLAYER.JS***")
  return(
    <div>
      <div className="avatar">
        <img src="/media/player.png" width="110px" alt="head"></img>
      </div>
      <div className="choosen-hand-move">
        <img className="hand-image" alt="" src={`/media/${handMove.player}.png`} width="350"></img>
      </div>
      {/*Ta fram DIV när man tryckt på Start*/}
      <div className ={`player-choices ${hidden ? "" : "hidden"}`}>
        <div className = "player-choice">
          <img onClick={chooseRock} src="/media/rock.png" alt="rock" width="75" height="75"></img>
        </div>
        <div className = "player-choice">
          <img onClick={choosePaper} src="/media/paper.png" alt="paper" width="75" height="75"></img>
        </div>
        <div className = "player-choice">
          <img onClick={chooseScissor} src="/media/scissors.png" alt="scissors" width="75" height="75"></img>
        </div>
      </div>
    </div>
    
  )
}

export default Player;