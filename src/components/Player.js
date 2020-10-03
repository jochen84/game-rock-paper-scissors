import React, {useState} from 'react';

const Player = ({rounds, setRounds, handMove, setHandMove, playerHand, setPlayerHand}) => {

  const [hidden, setHidden] = useState(false);
  //Klicka hand sätter "den" till true
  const chooseRock = () => {
    hideChoices();
    setRounds({...rounds, roundsPlayed: rounds.roundsPlayed+1})
    setPlayerHand({...playerHand, rock: true});
    setHandMove({...handMove, player: 'rock'});
  }
  const choosePaper = () => {
    hideChoices();
    setRounds({...rounds, roundsPlayed: rounds.roundsPlayed+1})
    setPlayerHand({...playerHand, paper: true});
    setHandMove({...handMove, player: 'paper'});
  }
  const chooseScissor = () => {
    hideChoices();
    setRounds({...rounds, roundsPlayed: rounds.roundsPlayed+1})
    setPlayerHand({...playerHand, scissor: true});
    setHandMove({...handMove, player: 'scissors'});
  }

  //Klicka hand väljer handen, visar datorns val, jämför och sätter sedan poäng. Kollar även om antal ronder är klart.

  const hideChoices = () => {
   if(rounds.roundsPlayed == rounds.totalRounds-1){
      setHidden(true);
    }
  }

  return(
    <div>
      <div className="avatar">
        <img src="/media/player.png" width="110px" alt="head"></img>
      </div>
      <div className="choosen-hand-move">
        <img className="hand-image" src={`/media/${handMove.player}.png`} width="350"></img>
      </div>
      {/*Ta fram DIV när man tryckt på Start*/}
      <div className ={`player-choices ${hidden ? "hidden" : ""}`}>
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