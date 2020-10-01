import React from 'react';

const Player = ({handMoves, playerHand, setPlayerHand}) => {

  //Klicka hand sätter "den" till true
  const chooseHand = (e) => {
    if(e.target.getAttribute('alt') === handMoves[0]){
      setPlayerHand({...playerHand, rock: true})
    }
    if(e.target.getAttribute('alt') === handMoves[1]){
      setPlayerHand({...playerHand, paper: true})
    }
    if(e.target.getAttribute('alt') === handMoves[2]){
      setPlayerHand({...playerHand, scissor: true})
    }
  }

  //Klicka hand väljer handen, kör datorns val, jämför och sätter sedan poäng. Kollar även om antal ronder är klart.

  

  return(
    <div>
      <div className="avatar">
        <img src="/media/player.png" width="110px" alt="head"></img>
      </div>
      <div className="choosen-hand-move">
        <img className="hand-image" src={`/media/${handMoves[1]}.png`} width="350"></img>
      </div>
      <div className = "player-choices">
        <div className = "player-choice">
          <img onClick={chooseHand} src="/media/rock.png" alt="rock" width="75" height="75"></img>
        </div>
        <div className = "player-choice">
          <img onClick={chooseHand} src="/media/paper.png" alt="paper" width="75" height="75"></img>
        </div>
        <div className = "player-choice">
          <img onClick={chooseHand} src="/media/scissors.png" alt="scissors" width="75" height="75"></img>
        </div>
      </div>
    </div>
    
  )
}

export default Player;