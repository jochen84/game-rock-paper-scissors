import React from 'react';

const Player = ({hands}) => {

  const chooseHand = (e) => {
    console.log(e.target.getAttribute('src'));
    console.log(e.target)
    console.log(e.target.src)
  }

  return(
    <div>
      <div>
        <img src="/media/player.png" width="110px" alt="head"></img>
      </div>
      <div className="the-hand">
        <img className="hand-image" src={hands[1]} width="350"></img>
      </div>
      <div className = "choices">
        <div className = "choice" id= "r">
          <img onClick={chooseHand} src = "/media/rock.png" width = "75" height= "75"></img>
        </div>
        <div className = "choice" id= "p">
          <img onClick={chooseHand} src = "/media/paper.png" width = "75" height= "75"></img>
        </div>
        <div className = "choice" id= "s">
          <img onClick={chooseHand} src = "/media/scissors.png" width = "75" height= "75"></img>
        </div>
      </div>
    </div>
    
  )
}

export default Player;