import React from 'react';

const Player = ({handMoves, playerHand, setPlayerHand}) => {

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