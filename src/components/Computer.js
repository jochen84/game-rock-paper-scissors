import React from 'react';

const Computer = ({hands}) => {

  //AI for choosing a random hand
  let random = Math.floor(Math.random() * 3)
  //AI for choosing a random hand

  return(
    <div>
      <div>
        <img src="/media/computer.png" width="110px" alt="comp"></img>
      </div>
      <div className="the-hand">
      <img className="hand-image" src={hands[random]} width="350"></img>
      </div>
    </div>
  )
}

export default Computer;