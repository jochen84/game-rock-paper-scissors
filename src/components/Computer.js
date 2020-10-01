import React from 'react';

const Computer = ({handMoves}) => {

  //AI for choosing a random hand
  let random = Math.floor(Math.random() * 3)
  //AI for choosing a random hand

  return(
    <div>
      <div className="avatar">
        <img src="/media/computer.png" width="110px" alt="comp"></img>
      </div>
      <div className="choosen-hand-move">
        <img className="hand-image" src={`/media/${handMoves[random]}.png`} width="350"></img>
      </div>
      <div className = "computer-taunt">
        <h1>Good luck</h1>
      </div>
    </div>
  )
}

export default Computer;