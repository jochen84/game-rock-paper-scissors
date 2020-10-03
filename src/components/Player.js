import React from 'react';

const Player = ({handMove, setHandMove, playerHand, setPlayerHand}) => {

  //Klicka hand sätter "den" till true
  const chooseRock = (e) => {
      setPlayerHand({...playerHand, rock: true});
      setHandMove({...handMove, player: 'rock'});
  }
  const choosePaper = (e) => {
    setPlayerHand({...playerHand, paper: true});
    setHandMove({...handMove, player: 'paper'});
  }
  const chooseScissor = (e) => {
    setPlayerHand({...playerHand, scissor: true});
    setHandMove({...handMove, player: 'scissors'});
  }

  //Klicka hand väljer handen, kör datorns val, jämför och sätter sedan poäng. Kollar även om antal ronder är klart.

  

  return(
    <div>
      <div className="avatar">
        <img src="/media/player.png" width="110px" alt="head"></img>
      </div>
      <div className="choosen-hand-move">
        <img className="hand-image" src={`/media/${handMove.player}.png`} width="350"></img>
      </div>
      {/*Ta fram DIV när man tryckt på Start*/}
      <div className = "player-choices">
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