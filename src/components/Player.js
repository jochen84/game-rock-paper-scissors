import React from 'react';

const Player = ({handMoves}) => {

  const chooseHand = (e) => {
    console.log(e.target.getAttribute('src'));
    console.log(e.target)
    console.log(e.target.src)
  }

  return(
    <div>
      <div className="avatar">
        <img src="/media/player.png" width="110px" alt="head"></img>
      </div>
      <div className="choosen-hand-move">
        <img className="hand-image" src={handMoves[1]} width="350"></img>
      </div>
      <div className = "player-choices">
        <div className = "player-choice">
          <img onClick={chooseHand} src = "/media/rock.png" width = "75" height= "75"></img>
        </div>
        <div className = "player-choice">
          <img onClick={chooseHand} src = "/media/paper.png" width = "75" height= "75"></img>
        </div>
        <div className = "player-choice">
          <img onClick={chooseHand} src = "/media/scissors.png" width = "75" height= "75"></img>
        </div>
      </div>
    </div>
    
  )
}

export default Player;